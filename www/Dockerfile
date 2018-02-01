FROM mhart/alpine-node:8.9.4 as build
RUN npm install -g mustache
COPY . /build
WORKDIR /build
RUN node clean_events.js
RUN mustache upcoming_events.json index.mustache > index.html
RUN mustache past_events.json index.mustache > past.html

FROM nginx:1.12.2
COPY --from=build /build/*.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY images /usr/share/nginx/html/images
