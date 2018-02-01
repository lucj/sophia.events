docker image build -t test.sophia.events .
ID=$(docker run -d -p 80 test.sophia.events)
PORT=$(docker inspect --format '{{ (index (index .NetworkSettings.Ports "80/tcp") 0).HostPort }}' $ID)
echo "=> web site available on http://localhost:$PORT"
