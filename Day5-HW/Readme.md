
# Random Jokes and Images API

This project demonstrates a simple Node.js API built with the Express framework that fetches random images from Unsplash. The API provides an endpoint to retrieve a random image using Unsplash's random image API.

## Overview

This Node.js application provides an API to fetch random dad jokes and images using the Express.js framework. The API has three main endpoints that allow users to retrieve jokes, images, or both combined.

## features

- Express Framework: Uses Express.js to create a simple and efficient server.
- Random Jokes: Fetches random dad jokes from an external API.
- Random Images: Fetches random images from Unsplash.
- Combined Endpoint: Provides both a random joke and a random image in a single response.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- An API key from API Ninjas for dad jokes
- An Access Key from Unsplash for random images

## API Endpoints

### Get a Random Dad Joke

- Endpoint: /api/joke/random
- Method GET
- Description: Retrieves a random dad joke from the API Ninjas Dad Jokes API.

## Server Configuration

The server listens on port 8000 (app.listen(8000, ...)) for incoming requests. When the server starts, it logs a message indicating that it’s running.

