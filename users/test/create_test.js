const assert = require("assert");
const User = require("../src/user");

describe("Creating new user record", () => {
  it("saves a user", done => {
    const amen = new User({ name: "Amen" });

    amen.save().then(() => {
      // Has joe been saved successfully?
      assert(!amen.isNew);
      done();
    });
  });
});
