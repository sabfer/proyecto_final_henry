const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const UserSchema = new Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: false },
  isAdmin: { type: Boolean, required: false },
  puesto: {
    type: String,
    enum: ["Mozo", "Cajero", "Cocinero"],
    required: false,
  },
});

UserSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(saltRounds, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

module.exports = mongoose.model("User", UserSchema);
