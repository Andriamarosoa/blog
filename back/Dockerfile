# Use Node.js LTS version as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install 
RUN npm install react-scripts

# Copy the rest of the application files
COPY . .

# Build the NestJS application
# RUN npm run dev

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the application
CMD ["npm","run", "dev"]