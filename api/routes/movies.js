const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');

// CREATE
router.post("/", verify,  async (req, res) => {
    if(req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try{
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You aren't authorised to add a movie!");
    }
});

// UPDATE
router.put("/:id", verify,  async (req, res) => {
    if(req.user.isAdmin) {
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body,}, {new: true,});
            res.status(200).json(updatedMovie);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You aren't authorised to make updates to this movie!");
    }
});

// DELETE
router.delete("/:id", verify,  async (req, res) => {
    if(req.user.isAdmin) {
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("The Movie has succesfully been deleted!");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You aren't authorised to delete this movie!");
    }
});

// GET
router.get("/find/:id", verify,  async (req, res) => {
        try{
            const foundMovie = await Movie.findById(req.params.id);
            res.status(200).json(foundMovie);
        }catch(err){
            res.status(500).json(err);
        }
});

// GET RANDOM
router.get("/random", verify,  async (req, res) => {
    const type = req.query.type;
    let randomMovie;

    try{
        if(type === "series"){
            randomMovie = await Movie.aggregate([
                {$match: {isSeries: true}},
                {$sample: {size: 1}},
            ]);
        }else{
            randomMovie = await Movie.aggregate([
                {$match: {isSeries: false}},
                {$sample: {size: 1}},
            ]);
        }
        res.status(200).json(randomMovie);
    }catch(err){
        res.status(500).json(err);
    }
});

// GET ALL
router.get("/", verify,  async (req, res) => {
    if(req.user.isAdmin) {
        try{
            const allMovies = await Movie.find();
            res.status(200).json(allMovies.reverse());
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You aren't authorised to delete this movie!");
    }
});

module.exports = router;