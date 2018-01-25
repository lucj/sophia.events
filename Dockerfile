FROM mhart/alpine-node:8.9.4 as build
RUN npm install -g mustache
COPY . /build
WORKDIR /build
RUN mustache events.json index.mustache > index.html

FROM nginx:1.12.2
COPY . /usr/share/nginx/html
COPY --from=build /build/index.html /usr/share/nginx/html/index.html
