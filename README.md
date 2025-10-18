Here is a complete README.md file for your project. You can copy and paste this directly into a `README.md` file in your project's root directory.

-----

# Stage 0 Task: Dynamic Profile Endpoint

This is a simple Node.js and Express server built for the Backend Wizards Stage 0 task. It exposes a single endpoint, `/me`, which returns a static user profile, the current UTC time, and a random cat fact fetched from an external API.

## Features ✨

  * Exposes a single `GET` endpoint: `/me`
  * Returns a JSON response with static user data (name, email, stack).
  * Dynamically fetches a random cat fact from the [Cat Facts API](https://catfact.ninja/fact) on every request.
  * Includes the current UTC timestamp in ISO 8601 format, updated on every request.
  * Handles errors gracefully if the external API call fails.

## Technology Stack 🛠️

  * **Node.js** - Runtime environment
  * **Express** - Web server framework
  * **axios** - For making HTTP requests to the external API
  * **cors** - For enabling Cross-Origin Resource Sharing
  * **nodemon** - For automatic server restarts during development

## Setup and Installation

Follow these steps to get the project running on your local machine.

### 1\. Clone the Repository

```bash
git clone https://github.com/your-username/profile-gen.git
cd profile-gen
```

### 2\. Install Dependencies

Install all the required packages listed in `package.json`.

```bash
npm install
```


```ini
# .env file

# Server port
PORT=3000

# Your profile information
MY_NAME="Your Full Name"
MY_EMAIL="your.email@example.com"
MY_STACK="Node.js/Express | Postgres"
```

## Running the Application 🚀

You can run the server in two modes:

### Development Mode

This uses `nodemon` to automatically restart the server whenever you make changes to the code.

```bash
npm run dev
```

### Production Mode

This runs the server using standard `node`.

```bash
npm start
```

The server will be running on `http://localhost:3000` (or the port you specified in your `.env` file).

## API Endpoint

### `GET /me`

Retrieves the user's profile information along with a dynamic cat fact and timestamp.

**Example Success Response (200 OK):**

```json
{
  "status": "success",
  "user": {
    "email": "olaoluwadaniel99@gmail.com",
    "name": "Olaoluwa Daniel Odewale",
    "stack": "Node.js/Express | Postgres"
  },
  "timestamp": "2025-10-18T08:30:15.123Z",
  "fact": "A cat's brain is biologically more similar to a human brain than it is to a dog's."
}
```

**Example Response (if Cat Facts API fails):**

```json
{
  "status": "success",
  "user": {
    "email": "olaoluwadaniel99@gmail.com",
    "name": "Olaoluwa Daniel Odewale",
    "stack": "Node.js/Express | Postgres"
  },
  "timestamp": "2025-10-18T08:31:05.456Z",
  "fact": "Could not retrieve a cat fact at this time."
}
```
