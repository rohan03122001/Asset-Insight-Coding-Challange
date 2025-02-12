# Asset Insight Coding Challenge 

- frontend link https://user-management-frontend-kappa.vercel.app/
- frontend github https://github.com/rohan03122001/user-management-frontend

### Running on Local

1. clone and cd into the directory
2. npm install
3. docker compose up -d
4. node index
5. test manually with thunderclient, postman or curl (optional)
6. cd into frontend
7. npm install & npm run dev

server runs at 5000 and next app at 3000 by default

## The Challenge

Build a user management system that can:

- Show users in a list/table
- Create new users
- Update existing users
- Delete users

I decided to structure the app using different layers

```
routes → controllers → services → repositories → models
```

Each layer has one job:

- Routes handle the endpoints
- Controllers manage HTTP stuff
- Services do the business logic
- Repositories deal with the database
- Models define what our data looks like

### Tasks at hands

1. Database Setup

   - Used Docker for MongoDB to keep things simple
   - Made user model with name, email, and role
   - use Docker fo easy spin ups

2. Building CRUD Operations

   - GET: Added Pagination
   - CREATE: Made sure to validate everything
   - UPDATE: Same validations as create
   - DELETE: delete

3. Extra
   - Proper validation middleware
   - Basic logging with Morgan
   - Clean error handling

## How It Works

Here's what the API can do (tested and working):

### GET /users

```json
{
  "data": [
    {
      "_id": "67ab607fa4a4d62c8f24af0a",
      "name": "Eren",
      "email": "erenjaeger@freedom.com",
      "role": "Admin"
    }
  ],
  "meta": {
    "totalUsers": 9,
    "currentPage": 1,
    "totalPages": 1,
    "limit": 10
  }
}
```

### POST /users

```json
{
  "name": "Aladin",
  "email": "aladin@mon.com",
  "role": "Admin",
  "_id": "67abc0206542c5dc61aba15e"
}
```

### PUT /users/:id

```json
{
  "name": "Jasmin",
  "email": "jasmin@mon.com",
  "role": "Admin"
}
```

### DELETE /users/:id

```json
{
  "message": "User deleted"
}
```

## Validation Details

Made sure users can't break things:

- Name: Must be 2-50 chars
- Email: Has to be valid format
- Role: Only "Admin", "User", or "Editor"

## Deployment
- Backend deployed on DigitalOcean with SSL encryption (HTTPS)
- Frontend hosted on Vercel
- Containerized database for consistent environments
