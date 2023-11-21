USE dbyawa;

CREATE TABLE IF NOT EXISTS user_profiles
(
    id            binary(16)                             not null primary key DEFAULT (UUID_TO_BIN(UUID())),
    first_name    varchar(255)                           null,
    last_name     varchar(255)                           null,
    gender        enum ('FEMALE', 'MALE', 'UNSPECIFIED') null DEFAULT('UNSPECIFIED'),
    date_of_birth datetime(6)                            null,
    role          varchar(255)                           null,
    picture       varchar(255)                           null
);
