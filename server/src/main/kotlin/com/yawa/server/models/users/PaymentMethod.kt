package com.yawa.server.models.users

import com.fasterxml.jackson.annotation.JsonBackReference
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.MapsId
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import java.time.LocalDate
import java.util.UUID

@Entity
@Table(name = "payment_methods")
class PaymentMethod(
    @Column(name = "card_holder")
    var cardHolder: String,

    @Column(name = "card_number")
    var cardNumber: Int,

    @Column(name = "card_expiration")
    var cardExpiration: LocalDate,

    @Column(name = "card_cvv")
    var cardCVV: Int,

    @Id
    @Column(name = "user_id", updatable = false)
    val userId: UUID? = null,

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    @JsonBackReference
    val user: User,
)
