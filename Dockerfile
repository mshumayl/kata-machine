# Base image with Node.js
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Create a new user
RUN useradd -ms /bin/bash sumel

# Set the ownership of the project files to the new user
RUN chown -R sumel:sumel /app

# Switch to the new user
USER sumel

# Copy the project files to the working directory
COPY . .

# Specify the default command to enter the container's shell
CMD ["/bin/bash"]
