import express from "express";

const router = express.Router();

// import moviesRoutes from "./routes/movies_routes.js";
// old methods
// const express = require("express"); 
// const router = express.Router();

// R - For Reading
router.get('/', (req, res) => {
    res.send("Get all movies lists")
})

// C - For Creating movies
router.get('/', (req, res) => {
    res.send("create movie")
})

// U - For Updating movies
router.get('/:id', (req, res) => {
     res.send("update the movie")
})

// D - For Deleting movies
router.get('/:id', (req, res) => {
    res.send("delete the movies")
})

// module.exports = router; // old methods
export default router;