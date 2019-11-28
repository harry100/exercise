import React, { useEffect } from 'react';
import axios from 'axios';

//constants
import constants from '../utils/constants';

//includes
import FoodCard from './includes/FoodCard';

function FoodItem (){
    useEffect(() => {
        axios.get(constants.getAllFoodItems)
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
    }, [])
    return(
        <div className="container">
            <h1 className="food-item-heading"> Checkout today's awesome items </h1>
            <div className="row">
                <FoodCard />
            </div>
        </div>
    )
}

export default FoodItem;
