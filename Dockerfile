# Step 1: Specify the base image to use
FROM node:20.18-alpine
# Update base OS packages to include security fixes for the image
RUN apk update && apk upgrade --no-cache

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD [ "node", "app.js" ]