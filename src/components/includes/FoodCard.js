import React from 'react';
import PropTypes from 'prop-types';

const FoodCard = (props) => {
    return(
        <div className="col-sm-12 col-md-6 food-card-wrapper">
            {props.item.id? (
                <div className="food-card-cont">
                    <div className="col-sm-12 col-md-4 food-card-image-wrapper">
                        <div className="food-item-card">
                            <div className="food-item-image">
                                <img src={props.item.image} alt={props.item.name} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="food-item-desc">
                            <h3> {props.item.name} </h3>
                            <p> Price: Nrs. <strong>{props.item.price}</strong> </p>
                        </div>
                    </div>
                </div>
            ): (
                <div className="food-card-cont skeleton">
                <div className="col-sm-12 col-md-4 food-card-image-wrapper">
                    <div className="food-item-card">
                        <div className="food-item-image">
                            <img src={props.item.image} alt={props.item.name} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="food-item-desc">
                        <p />
                        <p />
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

FoodCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default FoodCard;