//Use DB
db = db.getSiblingDB("user_management");
db.createCollection("users");

db.users.insertMany([
  { name: "Eren", email: "ErenJaeger@freedom.com", role: "Admin" },
  { name: "Mikasa", email: "Mikasa@freedom.com", role: "User" },
]);

print("Database initialized with 2 Demo Data!");
