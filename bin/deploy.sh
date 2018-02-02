#!/bin/sh

version=$1
if [ "$version" = "" ]; then
  version="latest"
fi

# Pull new image
docker pull lucj/sophia.events:$version

# Update www service with the newly retrieved image
docker service update www --image=lucj/sophia.events:$version
