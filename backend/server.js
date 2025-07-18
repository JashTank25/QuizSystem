
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/user.router.js');

dotenv.config({path:'./backend/.env'});
const app = express();

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
