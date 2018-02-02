#!/bin/sh

version=$1
if [ "$version" = "" ]; then
  version="latest"
fi

# Pull new image
docker pull lucj/sophia.events:$version

# TODO
# Replace the following with a service update
# docker service update www --image=lucj/sophia.events

# Stop previous container
docker stop events
docker rm events

# Run new one
docker run -p 80:80 --name events -d lucj/sophia.events:$version
