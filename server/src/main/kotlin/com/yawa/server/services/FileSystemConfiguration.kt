package com.yawa.server.services

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class FileSystemConfiguration(
    @Value("\${yawa.filesystem.rootDir}") final val rootDir: String = "/var/yawa"
) {
    val publicDir = "$rootDir/public"
}
