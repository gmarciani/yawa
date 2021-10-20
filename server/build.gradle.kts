import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("java")
	id("org.springframework.boot") version "2.5.5"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	id("org.jetbrains.kotlin.plugin.allopen") version "1.5.31"
	kotlin("jvm") version "1.5.31"
	kotlin("plugin.spring") version "1.5.31"
	kotlin("plugin.jpa") version "1.5.31"
}

ext {
	set("debugEnabled", project.properties.getOrDefault("debugEnabled", false))
	set("debugPort", project.properties.getOrDefault("debugPort", 8001))
	set("profile", project.properties["profile"])
	set("stack", project.properties["stack"])
	set("region", project.properties["region"])
}

group = "com.yawa.server"
version = "1.0.0"
java.sourceCompatibility = JavaVersion.VERSION_11
java.targetCompatibility = JavaVersion.VERSION_11

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-actuator")
	implementation("org.springframework.boot:spring-boot-starter-security")
	implementation("org.springframework.boot:spring-boot-starter-validation")
	implementation("org.springframework.boot:spring-boot-starter-mustache")
	implementation("com.auth0:java-jwt:3.18.1")
	implementation("io.micrometer:micrometer-registry-prometheus:1.7.2")
	implementation("org.apache.commons:commons-lang3:3.12.0")
	implementation("net.logstash.logback:logstash-logback-encoder:6.6")
	implementation("io.github.microutils:kotlin-logging:1.12.5")
	implementation("io.github.microutils:kotlin-logging-jvm:2.0.10")


	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core")

	//annotationProcessor("org.projectlombok:lombok:1.18.20")
	//compileOnly("org.projectlombok:lombok:1.18.20")

	developmentOnly("org.springframework.boot:spring-boot-devtools")

	runtimeOnly("com.h2database:h2")
	runtimeOnly("mysql:mysql-connector-java:8.0.26")

	testImplementation("io.kotest:kotest-framework-api-jvm:4.6.0")
	testImplementation("io.kotest:kotest-runner-junit5-jvm:4.6.0")
	testImplementation("io.mockk:mockk:1.11.0")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
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
	mainClassName = "com.yawa.server.Application"
}

tasks.bootRun {
	if (ext.get("profile") != null) { systemProperty("spring.profiles.active", ext.get("profile")!!) }
	if (ext.get("stack") != null) { systemProperty("yawa.stack", ext.get("stack")!!) }
	if (ext.get("region") != null) { systemProperty("yawa.region", ext.get("region")!!) }
	if (ext.get("debugEnabled") != null) { jvmArgs("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:${ext.get("debugPort")}") }
}
/*
tasks.springBoot {
	buildInfo()
}
*/
