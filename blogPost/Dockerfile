# Use Node.js LTS version as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /blogPost


# Copy package.json and package-lock.json (if available)
COPY package*.json ./
COPY . .
# Install dependencies
RUN npm install 
RUN npm run build 

# Copy the rest of the application files

RUN npm install -g http-server
# Build the NestJS application
# RUN npm run dev

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the application
CMD ["http-server", "build", "-p", "8080", "--host", "0.0.0.0"]