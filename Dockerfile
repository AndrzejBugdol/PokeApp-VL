# syntax=docker/dockerfile:1
FROM node:16-alpine as build
COPY . /ui-build
WORKDIR /ui-build
RUN npm install && npm run build
