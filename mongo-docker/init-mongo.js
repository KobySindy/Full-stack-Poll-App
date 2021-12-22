db.createUser({
  user: "pollAppUser",
  pwd: "QWEqwe123",
  roles: [
    {
      role: "readWrite",
      db: "pollAppDB",
    },
  ],
});

// db.createCollection("polls");
