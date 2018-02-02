# Copy resources needed in the image build phase
cp ../template/index.mustache ../data/*.* ../www/

# Build image
cd ../www
docker image build -t lucj/sophia.events .

# Run website
ID=$(docker run -d -p 80 lucj/sophia.events)

# Copy generated index.html and past.html locally
docker cp $ID:/usr/share/nginx/html/index.html .
docker cp $ID:/usr/share/nginx/html/past.html .

# Remove files used for image build
rm index.mustache events.json clean_events.js package.json

# Get port
PORT=$(docker inspect --format '{{ (index (index .NetworkSettings.Ports "80/tcp") 0).HostPort }}' $ID)
echo "=> web site available on http://localhost:$PORT"
