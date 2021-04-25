const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		username: String,
		password: String,
		avatar: String,
	},
	{ timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
