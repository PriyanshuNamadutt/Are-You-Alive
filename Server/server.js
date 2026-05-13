const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config();
app.use(cors({
  origin: "https://are-you-alive-1bl4.vercel.app"
}));
app.use(express.json());

mongoose.connect(process.env.Mongo_URI)  
    .then(() => console.log('✅  MongoDB connected'))
    .catch(err => { console.error('❌  MongoDB error:', err.message); process.exit(1); });

app.use("/api", require("./routes/auth") );

require("./cron/crons");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
