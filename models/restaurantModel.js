const db = require('./conn');

class RestaurantList {
    constructor(name, address, category){
        this.name = name;
        this.address = address;
        this.category = category;
    }

    static async getRestaurants(){
        try {
            const response = await db.any(`SELECT * FROM restaurant;`);
            return response;
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    static async getReviews(){
        try {
            const response = await db.any(`SELECT * FROM review INNER JOIN reviewer ON review.reviewer_id = reviewer.id;`);
            return response;
        } catch (err) {
            console.error(err);
            return err;
        }
    }
    static async getReviewsById(id){
        try {
            const response = await db.any(`SELECT * FROM review INNER JOIN reviewer ON review.reviewer_id = reviewer.id WHERE restaurant_id = ${id};`);
            return response;
        } catch (err) {
            console.error(err);
            return err;
        }
    }
}

module.exports = RestaurantList;