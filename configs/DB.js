const mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose
	.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log(`Db Connected`))
	.catch((err) => console.log(`Error while connecting DB : ${err}`));
