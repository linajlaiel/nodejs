const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const VehiculeRouter = require("./routes/vehicule");
const OwnerRouter = require("./routes/owner");
const ConcessionaireRouter = require("./routes/concessionaire");

app.use(bodyparser.json());

app.use(VehiculeRouter);
app.use(OwnerRouter);
app.use(ConcessionaireRouter);

app.listen(3000);
