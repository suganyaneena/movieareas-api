import Movie from "../model/movie.model.js";

export const MovieIndex =  async(req, res) => 
{
    try {
            const movies = await Movie.find();
            res.json(movies);

    } catch (error) {
            res.status(500).json({ message : error.message });
    }
    res.send("Get all movies lists")
}

export const MovieDetail =  async(req, res) => 
{
    try {
        const movie = await Movie.findById(req.params.id);

        if(movie == null)
        {
            return res.status(404).json({ message: "Cannot find movies "})
        }
        else{
            res.json(movie);
        }
    } 
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
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

export const MovieUpdate = async(req, res) => 
{   
    //Validate the user input
    try {
        const updateMovie = await Movie.findOneAndUpdate(
            {_id: req.params.id },
            { 
                title: req.body.title,
                desv: req.body.desc,
            },
            {
                new: true,
            }
        );
        res.status(200).json(updateMovie)
    
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
        //  if (req.body.title != null) {
    //     res.movie.title = req.body.title;
    // }

    // if(req.body.desc != null)
    // {
    //     res.movie.desc = req.body.desc;
    // }
    // try {
    //     const updateMovies = await res.movie.save();
    //     return res.json(updateMovies);
    // } catch (error) {
    //     return res.status(400).json({ message: error.message });
    // }
    //res.send("update the movies")
}

export const MovieDelete = (req, res) => {
    res.send("delete the movies")
}