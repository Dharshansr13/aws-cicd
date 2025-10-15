# Base image
FROM node:20

# Working directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 8080

# Run app
CMD ["npm", "start"]
