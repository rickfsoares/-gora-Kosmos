FROM node:20.10.0-bullseye
WORKDIR /app

COPY . .

RUN npm install -g @angular/cli@17

RUN npm install
RUN npm install axios --save
RUN npm install @types/axios
RUN chown -R node:node /app


CMD ng serve --host 0.0.0.0 --disable-host-check
