const express = require("express");
const morgan = require("morgan");

const app = express();

require("./configs/DB");

app.use(morgan("combined"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
