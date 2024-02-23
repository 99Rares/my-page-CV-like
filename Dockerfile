# Use an existing node alpine image as a base image.
FROM node:18-alpine

# Set the working directory.
WORKDIR /app

# Copy the package.json file.
COPY package.json .

# Copy the rest of the application files.
COPY . .

# Install application dependencies.
RUN apk add --no-cache npm && \
    npm install --production

# Expose the port.
EXPOSE 3000

# Run the application.
CMD ["/usr/local/bin/npm", "start"]
