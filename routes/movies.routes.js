import express from "express";
import { MovieIndex, MovieCreate, MovieUpdate, MovieDelete} from "../controllers/movies.controller.js";

const router = express.Router();

// import moviesRoutes from "./routes/movies_routes.js";
// old methods
// const express = require("express"); 
// const router = express.Router();

// R - For Reading
router.get('/', MovieIndex)

// C - For Creating movies
router.get('/', MovieCreate)

// U - For Updating movies
router.get('/:id', MovieUpdate)

// D - For Deleting movies
router.get('/:id', MovieDelete)

// module.exports = router; // old methods
export default router;