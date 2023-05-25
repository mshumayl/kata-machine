# Base image with Node.js
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the project files to the working directory
COPY . .

# Build the project
RUN yarn generate

# Specify the default command to enter the container's shell
CMD ["/bin/bash"]
