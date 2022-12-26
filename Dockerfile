FROM nginx:alpine
ARG DIR
COPY $DIR /usr/share/nginx/html
EXPOSE 80