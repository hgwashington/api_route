createdb note_app
psql -f schema.sql note_app
psql -f seed.sql note_app