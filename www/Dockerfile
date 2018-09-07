FROM mhart/alpine-node:8.9.4 as build
COPY . /build
WORKDIR /build
RUN npm i -g mustache && npm i
RUN node clean_events.js
RUN mustache events.json index.mustache > index.html

FROM nginx:1.12.2
COPY --from=build /build/*.html /usr/share/nginx/html/
COPY events.json /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img
