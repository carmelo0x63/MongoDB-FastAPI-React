// Create user
dbAdmin = db.getSiblingDB("admin");

dbAdmin.createUser({
  user: "dbuser",
  pwd: "pass123",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" },
          { role: "readWrite", db: "myVault" } ],
  mechanisms: ["SCRAM-SHA-1"],
});

// Authenticate user
dbAdmin.auth({
  user: "dbuser",
  pwd: "pass123",
  mechanisms: ["SCRAM-SHA-1"]
});

// Create DB and collection
db = new Mongo().getDB("Movies");
db.createCollection("moviesList", { capped: false });

