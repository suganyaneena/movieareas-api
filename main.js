import express from "express";
import movieRoutes from "./routes/movies.routes.js";

const app = express()
const POST  = 6969;


app.get('/', (req,res) => {
    res.json({msg: "Hello students"})
})

// CRUD functionality of movies
// CLIENT -> MIDDLEWARE -> SERVER

app.use('/movies', movieRoutes);


app.listen(6969, () => {
    console.log(`the server is running at http://localhost:${6969}`);
});

// DRY Principle
// KISS Principle