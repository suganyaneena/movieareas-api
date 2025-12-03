
export const MovieIndex =  (req, res) => {
    res.send("Get all movies lists")
}

export const MovieCreate =  (req, res) => {
    // id, title, desc
    console.log(req.body);

    return res.json(req.body);

    // create the movie info
    // res.send("create movie")
}

export const MovieUpdate = (req, res) => {
     res.send("update the movies")
}

export const MovieDelete = (req, res) => {
    res.send("delete the movies")
}