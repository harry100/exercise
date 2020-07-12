import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Confetti from 'react-confetti';


//constants
import constants from '../utils/constants';

//includes
import FoodCard from './includes/FoodCard';
import Pagination from './includes/Pagination';
import TodoComponent from './ToDoComponent';

const items = [
    {
        image: '/images/giphy.gif',
        price: '',
        name: '',
    },
    {
        image: '/images/giphy.gif',
        price: '',
        name: ''
    }
]

const FoodItem = () => {
    const [data, setData] = useState({ hits: [] });
    const [foodItems, setFoodItems] = useState(items);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(2);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        axios.get(constants.getAllFoodItems)
            .then(result => {
                setFoodItems(result.data)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        setLoader(true)
        axios(
          'https://hn.algolia.com/api/v1/search?query=reduxdfgsdfg',
        )
            .then(result => {
                setLoader(false)
                setData(result.data);
            })
            .catch(err => {
                setLoader(false)
                setData(null)
            })
     
      }, []);

    //Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexofFirseItem = indexOfLastItem - itemsPerPage;
    const currentItems = foodItems.slice(indexofFirseItem, indexOfLastItem);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log(data.hits)

    return(
        <div className="container">
            {/*<Confetti className="confetti"/>*/}
            <h1 className="food-item-heading"> Checkout today's awesome items </h1>

            <section>
                <div className="row">
                    {
                        currentItems.map((item, i) => {
                            return <FoodCard key={i} item={item} />
                        })
                    }
                </div>
            </section>

            <section>
                {foodItems[0].id? (
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={foodItems.length}
                        paginate={paginate}
                        activePage={currentPage}
                    />
                ): ('Data blocked Need to create a backend api')}
            </section>

            <TodoComponent todos={data.hits} isLoadingTodos={loader} />

        </div>
    )
}

export default FoodItem;
