FROM mhart/alpine-node:8.9.4 as build
COPY . /build
WORKDIR /build
RUN npm i -g mustache && npm i
RUN node clean_events.js
RUN mustache upcoming_events.json index.mustache > index.html
RUN mustache past_events.json index.mustache > past.html

FROM nginx:1.12.2
COPY --from=build /build/*.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY images /usr/share/nginx/html/images
