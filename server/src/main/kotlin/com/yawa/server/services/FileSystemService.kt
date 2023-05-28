package com.yawa.server.services

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.StandardOpenOption

@Service
class FileSystemService(
    @Autowired var fileSystemConfiguration: FileSystemConfiguration
) {

    fun savePublicFile(path: String, content: ByteArray): Path {
        return this.saveFile(
            path = Path.of(fileSystemConfiguration.publicDir, path),
            content = content)
    }

    private fun saveFile(path: Path, content: ByteArray): Path {
        Files.createDirectories(path.parent)
        return Files.write(path, content, StandardOpenOption.CREATE)
    }

    fun deletePublicFile(path: String) {
        Files.delete(Path.of(fileSystemConfiguration.publicDir, path))
    }

    fun createServiceDirectories() {
        Files.createDirectories(Path.of(fileSystemConfiguration.rootDir))
        Files.createDirectories(Path.of(fileSystemConfiguration.publicDir))
    }
}
