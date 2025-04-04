package com.yawa.server.models.users

import com.yawa.server.validators.RegularString
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.FetchType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.MapsId
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.time.Instant
import java.util.UUID

@Entity
@Table(name = "user_profiles")
class UserProfile(
    @RegularString
    @Column(name = "first_name")
    var firstname: String? = null,

    @RegularString
    @Column(name = "last_name")
    var lastname: String? = null,

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    var gender: Gender? = Gender.UNSPECIFIED,

    @Column(name = "date_of_birth")
    var dateOfBirth: Instant? = null,

    @Column(name = "picture")
    var picture: String? = null,

    @Column(name = "role")
    var role: String? = null,

    @Id
    @Column(name = "user_id")
    val userId: UUID? = null,

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    val user: User,
)
