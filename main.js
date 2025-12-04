import express, { urlencoded } from "express";
import movieRoutes from "./routes/movies.routes.js";
import connectDB from "./lip/db.js";

const app = express()
const POST  = 6969;

// Data understanding middleare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

//Connect DB
connectDB();

// CRUD functionality of movies
// CLIENT -> MIDDLEWARE -> SERVER

app.use('/movies', movieRoutes);

// sample api simple formate
// app.get('/', (req,res) => {
//     res.json({msg: "Hello students"})
// })

app.listen(6969, () => {
    console.log(`the server is running at http://localhost:${6969}`);
});

// DRY Principle
// KISS Principle