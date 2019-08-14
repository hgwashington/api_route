create table notes(
    id serial primary key,
    priority integer not null,
    notes varchar(50) not null,
    done boolean default false
);