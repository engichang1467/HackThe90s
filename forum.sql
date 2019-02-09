CREATE TABLE users (
user_id     INT(8) NOT NULL AUTO_INCREMENT,
user_name   VARCHAR(30) NOT NULL,
user_pass   VARCHAR(255) NOT NULL,
user_date   DATETIME NOT NULL,
user_level  INT(8) NOT NULL,
UNIQUE INDEX user_name_unique (user_name),
PRIMARY KEY (user_id)
) TYPE=INNODB;

CREATE TABLE posts (
post_id         INT(8) NOT NULL AUTO_INCREMENT,
post_content    TEXT NOT NULL,
post_date       DATETIME NOT NULL,
post_by         INT(8) NOT NULL,
PRIMARY KEY (post_id)
) TYPE=INNODB;