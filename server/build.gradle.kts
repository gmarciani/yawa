import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("java")
	id("org.springframework.boot") version "2.7.5"
	id("org.jetbrains.kotlin.plugin.allopen") version "1.8.0"
	id("org.openapi.generator") version "6.2.1"
	id("com.github.ben-manes.versions") version "0.44.0"
	kotlin("jvm") version "1.8.0"
	kotlin("plugin.spring") version "1.8.0"
	kotlin("plugin.jpa") version "1.8.0"
}

ext {
	set("debugEnabled", project.properties.getOrDefault("debugEnabled", false))
	set("debugPort", project.properties.getOrDefault("debugPort", 8001))
	set("profile", project.properties["profile"])
	set("stack", project.properties["stack"])
	set("region", project.properties["region"])
}

val mainResourcesDir = "$rootDir/src/main/resources"

group = "com.yawa.server"
version = "1.0.0"
java.sourceCompatibility = JavaVersion.VERSION_11
java.targetCompatibility = JavaVersion.VERSION_11

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-actuator:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-security:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-validation:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-mustache:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-mail:2.7.5")
	implementation("org.springdoc:springdoc-openapi-ui:1.6.14")
	implementation("com.auth0:java-jwt:4.2.1")
	implementation("io.micrometer:micrometer-registry-prometheus:1.10.2")
	implementation("org.apache.commons:commons-lang3:3.12.0")
	implementation("net.logstash.logback:logstash-logback-encoder:7.2")
	implementation("io.github.microutils:kotlin-logging:3.0.4")
	implementation("io.github.microutils:kotlin-logging-jvm:3.0.4")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.14.1")
	implementation("org.jetbrains.kotlin:kotlin-reflect:1.8.0")
	implementation("org.jetbrains.kotlin:kotlin-stdlib:1.8.0")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.8.0")
	implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")

	developmentOnly("org.springframework.boot:spring-boot-devtools:2.7.5")

	runtimeOnly("com.h2database:h2:2.1.214")
	runtimeOnly("mysql:mysql-connector-java:8.0.31")

	testImplementation("io.kotest:kotest-framework-api-jvm:4.6.0")
	testImplementation("io.kotest:kotest-runner-junit5-jvm:4.6.0")
	testImplementation("io.mockk:mockk:1.13.3")
	testImplementation("org.springframework.boot:spring-boot-starter-test:2.7.5")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "11"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

tasks.withType<Jar> {
	enabled = true
}

tasks.bootJar {
	this.mainClass.set("com.yawa.server.Application")
}

tasks.bootRun {
	if (ext.get("profile") != null) { systemProperty("spring.profiles.active", ext.get("profile")!!) }
	if (ext.get("stack") != null) { systemProperty("yawa.stack", ext.get("stack")!!) }
	if (ext.get("region") != null) { systemProperty("yawa.region", ext.get("region")!!) }
	if (ext.get("debugEnabled") != null) { jvmArgs("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:${ext.get("debugPort")}") }
}

task("buildClients") {
	this.dependsOn("buildBashClient", "buildPythonClient", "buildJavaClient", "buildKotlinClient")
}

val openapiDefinition = "$mainResourcesDir/openapi/definition.yaml"
val generateClientsDir = "$buildDir/generated/clients"

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildBashClient") {
	this.generatorName.set("bash")
	this.inputSpec.set(openapiDefinition)
	this.outputDir.set("$generateClientsDir/bash")
	this.configOptions.set(mapOf(
		"apiKeyAuthEnvironmentVariable" to "YAWA_API_KEY",
		"curlOptions" to "--insecure",
		"generateBashCompletion" to "true",
		"generateZshCompletion" to "true",
		"hostEnvironmentVariable" to "YAWA_ENDPOINT",
		"scriptName" to "yawac"
	))
	this.generateApiDocumentation.set(true)
	this.validateSpec.set(true)
}

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildPythonClient") {
	this.generatorName.set("python")
	this.inputSpec.set(openapiDefinition)
	this.outputDir.set("$generateClientsDir/python")
	this.configOptions.set(mapOf(
		"library" to "urllib3",
		"packageName" to "yawac",
		"packageUrl" to "https://github.com/gmarciani/yawa",
		"packageVersion" to "1.0.0",
		"projectName" to "yawac",
		"scriptName" to "yawac"
	))
	this.generateApiDocumentation.set(true)
	this.validateSpec.set(true)
}

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildJavaClient") {
	this.generatorName.set("java")
	this.inputSpec.set(openapiDefinition)
	this.outputDir.set("$generateClientsDir/java")
	this.apiPackage.set("com.yawa.client.api")
	this.invokerPackage.set("com.yawa.client.invoker")
	this.modelPackage.set("com.yawa.client.model")
	this.packageName.set("yawac")
	this.configOptions.set(mapOf(
		"apiKeyAuthEnvironmentVariable" to "YAWA_API_KEY",
		"curlOptions" to "--insecure",
		"generateBashCompletion" to "true",
		"generateZshCompletion" to "true",
		"hostEnvironmentVariable" to "YAWA_ENDPOINT",
		"scriptName" to "yawac"
	))
	this.generateApiDocumentation.set(true)
	this.validateSpec.set(true)
}

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildKotlinClient") {
	this.generatorName.set("kotlin")
	this.inputSpec.set(openapiDefinition)
	this.outputDir.set("$generateClientsDir/kotlin")
	this.apiPackage.set("yawac.api")
	this.invokerPackage.set("yawac.invoker")
	this.modelPackage.set("yawac.model")
	this.packageName.set("yawac")
	this.configOptions.set(mapOf(
		"apiKeyAuthEnvironmentVariable" to "YAWA_API_KEY",
		"curlOptions" to "--insecure",
		"generateBashCompletion" to "true",
		"generateZshCompletion" to "true",
		"hostEnvironmentVariable" to "YAWA_ENDPOINT",
		"scriptName" to "yawac"
	))
	this.generateApiDocumentation.set(true)
	this.validateSpec.set(true)
}

configure<org.springframework.boot.gradle.dsl.SpringBootExtension> {
	buildInfo()
}
