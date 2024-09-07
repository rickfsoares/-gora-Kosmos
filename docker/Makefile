target := agora_kosmos
ra := run --no-deps --rm $(target)
dc := docker compose
run := $(dc) $(ra)
exec := $(dc) exec $(target)

up:
	$(dc) up

up-build:
	$(dc) up --build

build:
	$(dc) build --no-cache

upd:
	$(dc) up --build -d

down:
	$(dc) down

app-build:
	$(dc) build $(target)

app-bundle-install: upd
	${exec} bundle install

app-bash: upd
	${dc} exec ${target} /bin/bash

app-migrate: upd
	${dc} exec ${target} rails db:migrate

app-seed: upd
	${dc} exec ${target} rails db:seed

app-create-db: upd, 
	${dc} exec ${target} rails db:create

