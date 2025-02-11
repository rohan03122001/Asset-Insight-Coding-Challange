//Use DB
db = db.getSiblingDB("user_management");
db.createCollection("users");

// Insert Demo Data
db.users.insertMany([
  { name: "Eren", email: "ErenJaeger@freedom.com", role: "Admin" },
  { name: "Mikasa", email: "Mikasa@freedom.com", role: "User" },
  { name: "Armin", email: "ArminArlert@strategist.com", role: "Editor" },
  { name: "Levi", email: "LeviAckerman@cleanfreak.com", role: "Admin" },
  { name: "Erwin", email: "ErwinSmith@commander.com", role: "Admin" },
  { name: "Hange", email: "HangeZoe@titanlover.com", role: "Editor" },
  { name: "Jean", email: "JeanKirstein@horseface.com", role: "User" },
  { name: "Connie", email: "ConnieSpringer@bald.com", role: "User" },
  { name: "Sasha", email: "SashaBraus@potatogirl.com", role: "User" },
  { name: "Reiner", email: "ReinerBraun@armored.com", role: "User" },
  { name: "Annie", email: "AnnieLeonhart@female.com", role: "User" },
]);

print("Database initialized with 2 Demo Data!");
