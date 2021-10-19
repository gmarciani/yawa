package com.yawa.server.controllers

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.TestPropertySource

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(locations = arrayOf("classpath:application.test.yaml"))
class HelloControllerTest
