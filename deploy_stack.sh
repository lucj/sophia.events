#!/bin/sh

version=$1
if [ "$version" = "" ]; then
  version="latest"
fi

# Pull new image
docker pull lucj/sophia.events:$version

# Stop previous container
docker stop events
docker rm events

# Run Docker stack
docker stack deploy -c docker-stack.yml sophia
