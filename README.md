# Twitch Clone

A full-stack application inspired by [Twitch.tv](https://www.twitch.tv/), where users can stream live video content, interact with viewers, and explore live streams from other users.

## Table of Contents

- [Twitch Clone](#twitch-clone)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
    - [Explanation:](#explanation)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
    - [Frontend:](#frontend)
    - [Backend:](#backend)
    - [RTMP Server:](#rtmp-server)
  - [Installation](#installation)
    - [Prerequisites:](#prerequisites)
    - [Steps:](#steps)
  - [Usage](#usage)
  - [RTMP Server Setup](#rtmp-server-setup)
  - [Environment Variables Configuration (.env)](#environment-variables-configuration-env)
    - [Variables:](#variables)
    - [Important Notes:](#important-notes)
  - [Contributing](#contributing)

---

## Project Structure

```plaintext
.
├── client/              # Frontend (React or another framework)
├── rtmp-server/         # RTMP server for live streaming (likely using NGINX)
├── server/              # Backend server (Node.js, Express, or other)
└── README.md            # Project documentation
```

### Explanation:
- **client/**: The frontend for users to browse and watch streams, likely built with React, handling UI and stream interaction.
- **rtmp-server/**: The Real-Time Messaging Protocol (RTMP) server, used for streaming live video, typically using NGINX with an RTMP module.
- **server/**: The backend responsible for user authentication, stream management, and other backend logic.

---

## Features

- **User Authentication**: Login and sign-up for users.
- **Live Streaming**: Users can stream live video content.
- **View Streams**: Browse and watch live streams from other users.
- **Real-Time Chat**: Integrated live chat for each stream.
- **Stream Management**: Start, stop, and manage live streams.
- **Profile Management**: User profiles to showcase streams and preferences.

---

## Tech Stack

### Frontend:
- React (or other framework)
- Redux (for state management, if applicable)
- WebSockets (for real-time chat)

### Backend:
- Node.js (or other backend runtime)
- Express (or other framework)
- MongoDB / PostgreSQL (or other database)

### RTMP Server:
- NGINX with RTMP Module (for live streaming)
- FFmpeg (for handling video encoding)

---

## Installation

### Prerequisites:
- **Node.js** (for the server and frontend)
- **NPM** (or Yarn for dependency management)
- **MongoDB/PostgreSQL** (for database)
- **NGINX with RTMP Module** (for live streaming)

### Steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/twitch-clone.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables in both `client` and `server` directories. For example:

   ```plaintext
   # In server/.env
   DATABASE_URL=mongodb://localhost:27017/twitch_clone
   JWT_SECRET=your-secret-key
   ```

4. Start the frontend and backend:

   ```bash
   cd client && npm start
   cd ../server && npm run dev
   ```

---

## Usage

Once the project is set up:

1. **Frontend**: Navigate to `http://localhost:3000` to view the Twitch clone frontend.
2. **Backend**: The server runs on `http://localhost:5000` to handle API requests and manage streams.
3. **RTMP**: Streams can be started using OBS Studio or another streaming software and broadcasting to the RTMP server URL.

---

## RTMP Server Setup

1. Install NGINX with the RTMP module.
2. Configure the RTMP module in your `nginx.conf` file to allow live streaming. Example configuration:

   ```plaintext
   rtmp {
       server {
           listen 1935;
           chunk_size 4096;

           application live {
               live on;
               record off;
           }
       }
   }
   ```

3. Start the RTMP server:

   ```bash
   nginx -c /path/to/nginx.conf
   ```

4. Use a tool like OBS Studio to stream to `rtmp://localhost:1935/live`.


---

1. **Broadcast Settings**  
When you are ready to broadcast on the platform, you need to select the broadcast type from the Broadcast tab. If you want to make a custom broadcast, select the "Custom" option. At this stage, use "rtmp://localhost/live" as the Server Address. Additionally, a stream key is required to start your broadcast. Enter the stream key according to the code you have created or the custom broadcast you have set up. This way, you can start and present your coded or specially prepared broadcast to viewers.



## Environment Variables Configuration (.env)

The application requires an `.env` file to manage sensitive information such as API ports, database connection URIs, and authentication keys. Below is an explanation of the variables used in this file:

### Variables:

1. **API_PORT**  
   - **Description**: The port on which the API server will run.
   - **Default Value**: `5001`
   - **Usage**: This port will be used by the backend service to listen for incoming requests.
   
   Example:
   ```bash
   API_PORT=5001
   ```

2. **MONGO_URI**  
   - **Description**: The connection string used to connect to a MongoDB database.
   - **Usage**: This URI includes the username, password, and the address of the MongoDB instance, allowing the application to connect to the database for storage and retrieval of data.
   
   Example:
   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority&appName=<appname>
   ```
   Replace `<username>`, `<password>`, `<cluster-url>`, and `<dbname>` with your actual MongoDB credentials and database information.

3. **TOKEN_KEY**  
   - **Description**: A secret key used for signing and verifying JSON Web Tokens (JWT) for authentication and authorization purposes.
   - **Usage**: This key ensures the integrity and security of the tokens issued by the server.
   
   Example:
   ```bash
   TOKEN_KEY=<your-secret-key>
   ```
   Ensure that this key remains secure and never share it publicly.

---

### Important Notes:

- **Security**: Never expose your `.env` file publicly or commit it to version control. This file contains sensitive information such as database credentials and secret keys.
- **Customization**: You should replace the default values in the `.env` file with your own configurations for your local or production environment.

To use this file in your Node.js application, install the `dotenv` package:

```bash
npm install dotenv
```

Then, add the following to your application entry point (e.g., `app.js` or `server.js`):

```javascript
require('dotenv').config();
```

This ensures that the environment variables from your `.env` file are loaded and accessible in your application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

---

