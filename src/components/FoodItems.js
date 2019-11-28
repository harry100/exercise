import React, { useEffect, useState } from 'react';
import axios from 'axios';

//constants
import constants from '../utils/constants';

//includes
import FoodCard from './includes/FoodCard';

const items = [
    {
        image: '/images/giphy.gif',
        price: '',
        name: ''
    },
    {
        image: '/images/giphy.gif',
        price: '',
        name: ''
    }
]

const FoodItem = () => {
    const [foodItems, setFoodItems] = useState(items);

    useEffect(() => {
        axios.get(constants.getAllFoodItems)
            .then(result => {
                setFoodItems(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div className="container">
            <h1 className="food-item-heading"> Checkout today's awesome items </h1>

            <section>
                <div className="row">
                    {
                        foodItems.map((item, i) => {
                            return <FoodCard key={i} item={item} />
                        })
                    }
                </div>
            </section>

            <section>
                {foodItems.length>2? (
                    <div className="navigation">
                        <nav aria-label="Page navigation example" className="pagination-nav">
                            <ul className="pagination">
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                ): ('')}
            </section>

        </div>
    )
}

export default FoodItem;
