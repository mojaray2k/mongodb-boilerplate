const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of the database", () => {
  let amen;
  beforeEach(done => {
    amen = new User({ name: "Amen" });
    amen.save().then(() => done());
  });

  it("finds all users with a name of amen", done => {
    // find all the uses that match the given criteria. Returns an array
    User.find({ name: "Amen" }).then(users => {
      assert(users[0]._id.toString() === amen._id.toString());
      done();
    });
  });
});
