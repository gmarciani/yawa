package com.yawa.server

import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.ApplicationPidFileWriter
import org.springframework.boot.runApplication
import org.springframework.context.ApplicationContext
import org.springframework.context.annotation.Bean

@SpringBootApplication
class Application

fun main(args: Array<String>) {
    runApplication<Application>(*args) {
        addListeners(ApplicationPidFileWriter())
    }
}

@Bean
fun commandLineRunner(ctx: ApplicationContext) : CommandLineRunner {
    return CommandLineRunner {
        println("Beans:")
        ctx.beanDefinitionNames.sorted().forEach { println(it) }
    }
}
