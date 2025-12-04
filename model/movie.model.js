import { Schema, model } from "mongoose";

// Write the schema
const MovieSchema = new Schema({
    title: String,
    desc: String
})

// Create your model
const Movie = model("Movie", MovieSchema);

export default Movie;

