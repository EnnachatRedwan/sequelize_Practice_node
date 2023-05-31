const express = require("express");
const sequelize = require("./utils/database");
const clientRoutes = require("./routes/client_router");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/client", clientRoutes);

const PORT = process.env.prot | 3000;

sequelize
  .sync()
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
