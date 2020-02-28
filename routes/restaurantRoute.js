const express = require('express');
const router = express.Router();
const restaurantModel = require('../models/restaurantModel');


router.get('/:id?', async (req, res) => {
    const restaurantData = await restaurantModel.getRestaurants();
    const { id } = req.params;
    let reviewData = [];

    if(!!id){
        reviewData = await restaurantModel.getReviewsById(id);
    }

    res.render('template', {
        locals: {
            title: 'Reviews by Restaurant',
            arrayOfRest: restaurantData,
            arrayOfReview: reviewData
        },
        partials:{
            partial: 'partial-restaurant'
        }
    })
})

module.exports = router;
