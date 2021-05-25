CREATE TABLE "artists" (
    "id" SERIAL PRIMARY KEY,
    "artist_name" varchar(80) not null,
    "year_born" date
);


CREATE TABLE artist (
id SERIAL,
name varchar(80),
birthdate date
);

CREATE TABLE song (
id SERIAL,
title varchar(255),
length varchar(10),
released date
);

INSERT INTO "artist"("id", "name", "birthdate") VALUES(1, 'Ella Fitzgerald', '04-25-1917');

INSERT INTO "artist"("id", "name", "birthdate") VALUES(2, 'Dave Brubeck', '12-06-1920');

INSERT INTO "artist"("id", "name", "birthdate") VALUES(3, 'Miles Davis', '05-26-1926');

INSERT INTO "artist"("id", "name", "birthdate") VALUES(4, 'Esperanza Spaulding', '10-18-1984');

SELECT * FROM "artist";

INSERT INTO "song"("id", "title", "length", "released") VALUES(1, 'Take Five', '5:24', '1959-09-29');

INSERT INTO "song"("id", "title", "length", "released") VALUES(2, 'So What', '9:22', '1959-08-17');

INSERT INTO "song"("id", "title", "length", "released") VALUES(3, 'Black Gold', '5:17', '2012-02-01');

SELECT * FROM "song";