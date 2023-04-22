FROM node:18.12.1 as build-stage
WORKDIR /app
COPY ./ .
RUN yarn
RUN yarn build

FROM nginx:alpine as production-stage
ENV TZ="Europe/Prague"
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY docker/nginx.conf /etc/nginx/nginx.conf