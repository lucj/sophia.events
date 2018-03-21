#!/bin/sh

echo_exit() {
  echo "$*"
  exit 1
}

# a sepcific version can be passed as parameter
version="$1"
if [ "$version" = "" ]; then
  version="latest"
fi

# Pull new image
docker pull lucj/sophia.events:"$version" || echo_exit "Could not pull lucj/sophia.events:$version"

# Update www service with the newly retrieved image
docker service update sophia_www --image=lucj/sophia.events:"$version"
