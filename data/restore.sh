db=$(docker ps -q --filter label=com.docker.compose.service=db)
docker cp db-dump.json $db:/tmp/db-dump.json
docker exec $db mongoimport -c events -d sophia --mode upsert --file /tmp/db-dump.json
