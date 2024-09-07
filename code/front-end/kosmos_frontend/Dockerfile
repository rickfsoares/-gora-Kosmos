FROM node:20.10.0-bullseye
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install -g @angular/cli@17

RUN npm install
CMD ng serve --host 0.0.0.0 --disable-host-check
