FROM node:8.15.0-alpine
MAINTAINER Mischa Steiner <mischa@200ok.ch>

RUN mkdir /app
WORKDIR /app
ADD . ./

ENTRYPOINT ["node", "/app/ldj-cleaner.js"]
