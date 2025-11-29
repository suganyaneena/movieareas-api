import express from "express";
const app = express()
const POST  = 6969;


app.get('/', (req,res) => {
    res.json({msg: "Hello students"})
})

// CRUD functionality of movies

// R - For Reading
app.get('/movies', () => {

})

// C - For Creating movies
app.get('/movies', () => {

})

// U - For Updating movies
app.get('/movies/:id', () => {

})

// D - For Deleting movies
app.get('/movies/:id', () => {

})


app.listen(6969, () => {
    console.log(`the server is running at http://localhost:${6969}`);
});

// DRY Principle
// KISS Principle