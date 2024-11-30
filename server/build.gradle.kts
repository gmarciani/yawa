import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.node.ObjectNode
import com.github.benmanes.gradle.versions.updates.DependencyUpdatesTask
import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.dsl.jvm.JvmTargetValidationMode
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import java.io.ByteArrayOutputStream
import java.util.Locale

plugins {
    id("java")
    id("org.springframework.boot") version "3.1.5" // 3.3.5
    id("io.spring.dependency-management") version "1.1.6"
    id("org.openapi.generator") version "6.6.0"
    id("com.github.ben-manes.versions") version "0.51.0"
    id("org.jetbrains.kotlin.plugin.allopen") version "2.0.21"
    id("com.gorylenko.gradle-git-properties") version "2.4.2"
    id("org.springdoc.openapi-gradle-plugin") version "1.9.0"
    id("org.jlleitschuh.gradle.ktlint") version "12.1.1"
    kotlin("jvm") version "2.0.21"
    kotlin("plugin.spring") version "2.0.21"
    kotlin("plugin.jpa") version "2.0.21"
}

apply(plugin = "io.spring.dependency-management")
apply(plugin = "org.jlleitschuh.gradle.ktlint")

ext {
    set("debugEnabled", project.properties.getOrDefault("debugEnabled", false))
    set("debugPort", project.properties.getOrDefault("debugPort", 8001))
    set("profile", project.properties.getOrDefault("profile", "local"))
    set("stack", project.properties.getOrDefault("stack", "localStack"))
    set("region", project.properties.getOrDefault("region", "localRegion"))
}

val mainResourcesDir = "$rootDir/src/main/resources"

group = "com.yawa.server"
version = "1.0.0"
java.sourceCompatibility = JavaVersion.VERSION_17
java.targetCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    implementation("org.springframework.boot:spring-boot-starter-security")
//    implementation("org.springframework.boot:spring-boot-starter-oauth2-resource-server")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-mustache")
    implementation("org.springframework.boot:spring-boot-starter-mail")
    implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.6.0")
    implementation("org.springdoc:springdoc-openapi-kotlin:1.8.0") {
        /* org.springdoc:springdoc-openapi-common must be excluded because it conflicts with
         * org.springdoc:springdoc-openapi-starter-common:2.6.0
         * carried by org.springdoc:springdoc-openapi-starter-webmvc-ui:2.6.0
         */
        exclude(group = "org.springdoc", module = "springdoc-openapi-common")
    }
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("com.auth0:java-jwt:4.4.0")
    implementation("io.micrometer:micrometer-registry-prometheus:1.10.2") // 1.13.6
    implementation("org.apache.commons:commons-lang3:3.17.0")
    implementation("net.logstash.logback:logstash-logback-encoder:8.0")
    implementation("io.github.microutils:kotlin-logging:3.0.5")
    implementation("io.github.microutils:kotlin-logging-jvm:3.0.5")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.18.1")
    implementation("org.jetbrains.kotlin:kotlin-reflect:2.0.21")
    implementation("org.jetbrains.kotlin:kotlin-stdlib:2.0.21")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:2.0.21")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:2.0.21")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.9.0")
    implementation("com.bucket4j:bucket4j-core:8.10.1") //8.10.1
    implementation("com.bucket4j:bucket4j-redis:8.10.1") //8.10.1
    implementation("io.lettuce:lettuce-core:6.2.4.RELEASE")
    implementation("org.thymeleaf:thymeleaf:3.1.2.RELEASE")

    developmentOnly("org.springframework.boot:spring-boot-devtools")

//    runtimeOnly("com.h2database:h2:2.1.214")
    runtimeOnly("mysql:mysql-connector-java:8.0.33")

    testImplementation("io.kotest:kotest-framework-api-jvm:5.9.1")
    testImplementation("io.kotest:kotest-runner-junit5-jvm:5.9.1")
    testImplementation("io.mockk:mockk:1.13.13")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

// BUILD

tasks.withType<KotlinCompile> {
    compilerOptions {
        apiVersion.set(org.jetbrains.kotlin.gradle.dsl.KotlinVersion.KOTLIN_2_0)
        jvmTarget.set(JvmTarget.JVM_17)
        jvmTargetValidationMode.set(JvmTargetValidationMode.ERROR)
        freeCompilerArgs.set(listOf("-Xjsr305=strict"))
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

tasks.build {
    this.dependsOn("buildClients")
}

// SPRING - BOOT

tasks.bootRun {
    if (ext.get("profile") != null) {
        systemProperty("spring.profiles.active", ext.get("profile")!!)
    }
    if (ext.get("stack") != null) {
        systemProperty("yawa.stack", ext.get("stack")!!)
    }
    if (ext.get("region") != null) {
        systemProperty("yawa.region", ext.get("region")!!)
    }
    if (ext.get("debugEnabled") !=
        null
    ) {
        jvmArgs("-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:${ext.get("debugPort")}")
    }
}

// SPRING - BUILD INFO

configure<org.springframework.boot.gradle.dsl.SpringBootExtension> {
    buildInfo()
}

// TODO We must ignore the failures because the Git folder is not copied into the container.
configure<com.gorylenko.GitPropertiesPluginExtension> {
    this.failOnNoGitDirectory = false
}

// OPENAPI

task("getOpenApiDefinition") {
    this.description = "Get OpenAPI documentation."
    this.group = "OpenAPI"

    doLast {
        val definitionFile = File("$mainResourcesDir/openapi/definition.json")

        val stdout = ByteArrayOutputStream()
        exec {
            commandLine = listOf("curl", "-k", "https://localhost:8002/docs/openapi")
            standardOutput = stdout
        }

        val mapper = ObjectMapper()
        val definition = mapper.readTree(stdout.toString()) as ObjectNode

        mapper.writerWithDefaultPrettyPrinter().writeValue(definitionFile, definition)
    }
}

fun ObjectNode.deepMerge(source: JsonNode) {
    val fields = source.fields()
    while (fields.hasNext()) {
        val (key, sourceValue) = fields.next()
        val targetValue = this.get(key)

        if (targetValue != null && targetValue.isObject && sourceValue.isObject) {
            // Recursively merge nested objects
            (targetValue as ObjectNode).deepMerge(sourceValue)
        } else {
            // Overwrite target value with source value or add new field
            this.set<JsonNode>(key, sourceValue)
        }
    }
}

// CLIENTS

task("buildClients") {
    this.description = "Build all clients."
    this.group = "Clients"
    this.dependsOn(
        "buildBashClient", "buildPythonClient", "buildJavaClient", "buildKotlinClient", "buildTypeScriptClient",
    )
}

val openapiDefinition = "$mainResourcesDir/openapi/definition.json"
val generateClientsDir = "${layout.buildDirectory.get()}/generated/clients"

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildBashClient") {
    this.description = "Build BASH client."
    this.group = "Clients"
    this.generatorName.set("bash")
    this.inputSpec.set(openapiDefinition)
    this.outputDir.set("$generateClientsDir/bash")
    this.configOptions.set(
        mapOf(
            "apiKeyAuthEnvironmentVariable" to "YAWA_API_KEY",
            "curlOptions" to "--insecure",
            "generateBashCompletion" to "true",
            "generateZshCompletion" to "true",
            "hostEnvironmentVariable" to "YAWA_ENDPOINT",
            "scriptName" to "yawac",
        ),
    )
    this.generateApiDocumentation.set(true)
    this.validateSpec.set(true)
}

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildPythonClient") {
    this.description = "Build Python client"
    this.group = "Clients"
    this.generatorName.set("python")
    this.inputSpec.set(openapiDefinition)
    this.outputDir.set("$generateClientsDir/python")
    this.configOptions.set(
        mapOf(
            "library" to "urllib3",
            "packageName" to "yawac",
            "packageUrl" to "https://github.com/gmarciani/yawa",
            "packageVersion" to "1.0.0",
            "projectName" to "yawac",
            "scriptName" to "yawac",
        ),
    )
    this.generateApiDocumentation.set(true)
    this.validateSpec.set(true)
}

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildJavaClient") {
    this.description = "Build Java client."
    this.group = "Clients"
    this.generatorName.set("java")
    this.inputSpec.set(openapiDefinition)
    this.outputDir.set("$generateClientsDir/java")
    this.apiPackage.set("com.yawa.client.api")
    this.invokerPackage.set("com.yawa.client.invoker")
    this.modelPackage.set("com.yawa.client.model")
    this.packageName.set("yawac")
    this.configOptions.set(
        mapOf(
            "apiKeyAuthEnvironmentVariable" to "YAWA_API_KEY",
            "curlOptions" to "--insecure",
            "generateBashCompletion" to "true",
            "generateZshCompletion" to "true",
            "hostEnvironmentVariable" to "YAWA_ENDPOINT",
            "scriptName" to "yawac",
        ),
    )
    this.generateApiDocumentation.set(true)
    this.validateSpec.set(true)
}

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildKotlinClient") {
    this.description = "Build Kotlin client"
    this.group = "Clients"
    this.generatorName.set("kotlin")
    this.inputSpec.set(openapiDefinition)
    this.outputDir.set("$generateClientsDir/kotlin")
    this.apiPackage.set("yawac.api")
    this.invokerPackage.set("yawac.invoker")
    this.modelPackage.set("yawac.model")
    this.packageName.set("yawac")
    this.configOptions.set(
        mapOf(
            "apiKeyAuthEnvironmentVariable" to "YAWA_API_KEY",
            "curlOptions" to "--insecure",
            "generateBashCompletion" to "true",
            "generateZshCompletion" to "true",
            "hostEnvironmentVariable" to "YAWA_ENDPOINT",
            "scriptName" to "yawac",
        ),
    )
    this.generateApiDocumentation.set(true)
    this.validateSpec.set(true)
}

task<org.openapitools.generator.gradle.plugin.tasks.GenerateTask>("buildTypeScriptClient") {
    this.description = "Build TypeScript client."
    this.group = "Clients"
    this.generatorName.set("typescript-axios")
    this.inputSpec.set(openapiDefinition)
    this.outputDir.set("$generateClientsDir/typescript")
    this.apiPackage.set("yawac.api")
    this.invokerPackage.set("yawac.invoker")
    this.modelPackage.set("yawac.model")
    this.packageName.set("yawac")
    this.configOptions.set(
        mapOf(
            "apiKeyAuthEnvironmentVariable" to "YAWA_API_KEY",
            "curlOptions" to "--insecure",
            "generateBashCompletion" to "true",
            "generateZshCompletion" to "true",
            "hostEnvironmentVariable" to "YAWA_ENDPOINT",
            "scriptName" to "yawac",
        ),
    )
    this.generateApiDocumentation.set(true)
    this.validateSpec.set(true)
}

val frontendProjectDir = "$rootDir/../frontend"
val frontendClientDir = "$frontendProjectDir/src/app/modules/clients/yawa"

tasks.register<Sync>("copyClientToFrontend") {
    this.description = "Copy TypeScript client to the frontend project."
    this.group = "Clients"
    this.dependsOn.add("buildTypeScriptClient")
    from("$generateClientsDir/typescript")
    into(frontendClientDir)
}

// DEPENDENCY MANAGEMENT

tasks.named<DependencyUpdatesTask>("dependencyUpdates").configure {
    gradleReleaseChannel = "current"
    checkConstraints = true
    checkBuildEnvironmentConstraints = true
    checkForGradleUpdate = true
    outputFormatter = "html"
    outputDir = "${layout.buildDirectory.get()}/dependencyManagement"
    reportfileName = "dependencyUpdatesReport"
    rejectVersionIf {
        isNonStable(this.candidate.version) && !isNonStable(this.currentVersion)
    }
}

fun isNonStable(version: String): Boolean {
    val stableKeyword = listOf("RELEASE", "FINAL", "GA").any { version.uppercase(Locale.getDefault()).contains(it) }
    val regex = "^[0-9,.v-]+(-r)?$".toRegex()
    val isStable = stableKeyword || regex.matches(version)
    return isStable.not()
}

// Linters
ktlint {
    version.set("1.3.1")
    debug.set(false)
    verbose.set(true)
    enableExperimentalRules.set(false)
    ignoreFailures.set(true)
}
