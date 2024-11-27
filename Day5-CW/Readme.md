
# Random Images API

This project demonstrates a simple Node.js API built with the Express framework that fetches random images from Unsplash. The API provides an endpoint to retrieve a random image using Unsplash's random image API.

## Features

- Uses **Express.js** for handling HTTP requests and building the server.
- Provides an endpoint to fetch random images.
- Fetches data from Unsplash's API.

## API Endpoints
- Endpoint: /api/image/random
- Method: GET

The endpoint fetches a random image from Unsplash. The response includes the image ID, URL, and a description if available. If the request fails, an error message is returned.

## fetching Data

The getRandomImage() function fetches a random image from Unsplash using the specified API endpoint.

## Server Configuration

The server listens on port 8000 (app.listen(8000, ...)) for incoming requests. When the server starts, it logs a message indicating that it’s running.

