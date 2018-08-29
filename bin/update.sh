# Build new image
./1-build.sh

# Make sure to log with the user "lucj"
docker login -u lucj

# Push image to registry (needs to be logged as "lucj")
./2-push.sh

# Deploy new image on server (sophia.events Docker machine)
docker-machine ssh labs 'sudo docker service update sophia_www --image=lucj/sophia.events'
