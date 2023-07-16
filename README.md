
# Basic Express.js Server

This repository contains a basic Node.js server using the Express.js framework. It sets up a simple HTTP server that listens on a specified port and responds to incoming requests with a JSON object containing a welcome message.

Prerequisites

## Table of Contents

 - [Prerequisites](#)
 - [Installation](#)
 - [Usage](#)
 - [Routes](#)
 - [Contributing](#)
 - [License](#)


## Prerequisites

Before running this server, ensure you have the following installed on your system:

Node.js (v14 or higher)
npm (Node.js package manager)


## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/kahnu044/simple-express-node-server
cd simple-express-node-server
```

Install the required dependencies using npm:

```bash
npm install
```

## Usage

To start the server, use the following command:

```bash
npm start
```

The server will start listening on the specified port, and you should see a message in the console indicating that the Node.js server has started.


## Routes

The server currently has one route defined:

## Root URL ('/')

This route responds to incoming GET requests with a JSON object containing a welcome message. It can be accessed by making a GET request to the root URL of the server.

Example:

```bash
curl http://localhost:3001/
```

Example:

```bash
{
   "status": true,
   "message": "Welcome To Node Server"
}
```

You can modify and expand the routes by adding more handlers using the Express.js app.get(), app.post(), app.use(), etc., methods. Refer to the Express.js documentation for more information on handling routes and middleware.