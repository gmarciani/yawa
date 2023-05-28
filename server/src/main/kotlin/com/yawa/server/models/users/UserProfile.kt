package com.yawa.server.models.users

import com.fasterxml.jackson.annotation.JsonBackReference
import com.yawa.server.validators.RegularString
import jakarta.persistence.CascadeType
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.FetchType
import jakarta.persistence.GeneratedValue
import jakarta.persistence.Id
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import org.hibernate.annotations.UuidGenerator
import java.time.Instant
import java.util.*

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
    var gender: Gender? = null,

    @Column(name = "date_of_birth")
    var dateOfBirth: Instant? = null,

    @Column(name = "picture")
    var picture: String? = null,

    @OneToOne(mappedBy = "profile", cascade = [CascadeType.ALL], fetch = FetchType.EAGER)
    @JsonBackReference
    var user: User? = null,

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false)
    val id: UUID? = null
)
