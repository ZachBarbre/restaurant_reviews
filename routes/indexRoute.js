const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Resturant Reviews'
        },
        partials:{
            partial: 'partial-index'
        }
    })
})

module.exports = router;
