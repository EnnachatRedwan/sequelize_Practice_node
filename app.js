const express = require("express");
const sequelize = require("./utils/database");
const clientRoutes = require("./routes/client_router");
const carRoutes = require("./routes/car_routes");
const colorRoutes = require("./routes/color_router");
const brandRoutes = require("./routes/brand_routes");
const typeRoutes = require("./routes/type_routes");
const rentRoutes = require("./routes/rent_router");
const cors = require("cors");

// const Rent = require("./models/rent");
// const Color = require("./models/color");
// const CarType = require("./models/car_type");
// const Car = require("./models/car");
// const CarBrand = require("./models/car_brand");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/client", clientRoutes);
app.use("/car", carRoutes);
app.use("/color", colorRoutes);
app.use("/brand", brandRoutes);
app.use("/type", typeRoutes);
app.use("/rent", rentRoutes);

const PORT = process.env.prot | 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
