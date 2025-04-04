USE dbyawa;

CREATE TABLE IF NOT EXISTS user_settings
(
    user_id        binary(16) not null primary key,
    is_mfa_enabled bit        null DEFAULT (FALSE),

    constraint foreign_key_user_id
        foreign key (user_id) references users (id)
        on delete cascade
);
