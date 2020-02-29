const mongoose = require("mongoose");

// global.promise is the es6 implimentaiton of promise inside Node.JS
mongoose.Promise = global.Promise;

/**
 * @method connect
 * @param {string} url
 * @param {object} options Options passed take precedence over
 * options included in connection strings.
 * @description Opens the default mongoose connection.
 * @summary Connect to MongoDB Locally to users_test database
 * @returns pseudo-promise wrapper around this
 */
mongoose.connect("mongodb://localhost/users_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/**
 * @method once {@link https://stackoverflow.com/questions/49607841/mongoose-connectiononce-what-does-it-mean}
 * @method on {@link https://mongoosejs.com/docs/connections.html#error-handling}
 * @event open {@link https://mongoosejs.com/docs/connections.html#connection-events}
 * @event error {@link https://mongoosejs.com/docs/connections.html#connection-events}
 */
before(done => {
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", error => {
      console.warn("Warning", error);
    });
});

/**
 * @function beforeEach
 * @param done pauses execution until the process is done
 * @returns {void}
 */
beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done();
  });
});
