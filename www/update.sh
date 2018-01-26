#!/bin/sh

version=$1
if [ "$version" = "" ]; then
  version="latest"
fi

# Pull new image
docker pull lucj/www.sophia.events:$version

# Stop previous container
docker stop events
docker rm events

# Run new one
docker run -p 80:80 --name events -d lucj/www.sophia.events:$version
