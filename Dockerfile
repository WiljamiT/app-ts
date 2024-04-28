# Use the official lightweight Node.js 14 image
FROM node:14-alpine

# Set working directory
WORKDIR /app-react

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Add app files
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
