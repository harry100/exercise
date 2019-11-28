import React from 'react'

function FoodCard(){

    return(
        <div className="col-sm-12 col-md-4 food-card-wrapper">
            <div className="row">
                <div className="col-sm-12 col-md-4 food-card-image-wrapper">
                    <div className="food-item-card">
                        <div className="food-item-image">
                            <img src="/images/giphy.gif" alt="food"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="food-item-desc">
                        <h3> Chicken Shawarma </h3>
                        <p> Price: Rs. 190 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;