const express = require("express");
const path = require("path");

const apiRoutes = require("./routes/api-routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
