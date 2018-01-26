FROM mhart/alpine-node:6.9.4

# Copy dependency file
COPY package.json /app/package.json

# Install dependencies
RUN cd /app && npm install

# Copy src files
COPY . /app/

# Use /app working directory
WORKDIR /app

# Expose http port
EXPOSE 3000

# Run application
CMD ["npm", "start"]
