import Movie from "../model/movie.model.js";

export const MovieIndex =  (req, res) => {
    res.send("Get all movies lists")
}

export const MovieCreate =  async(req, res) => 
{
    console.log(req.body);
    // Validate your data
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc,
    })

    try 
    {
        const movies = await newMovie.save();
        return res.status(201).json(movies);
    } 
    catch (error) 
    {
        return res.status(400).json({ message: error.message });
    }
   
    // return res.json(req.body);
    // create the movie info
    // res.send("create movie")
}

export const MovieUpdate = (req, res) => {
     res.send("update the movies")
}

export const MovieDelete = (req, res) => {
    res.send("delete the movies")
}