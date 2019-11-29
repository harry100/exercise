import React from 'react'
import PropTypes from 'prop-types';

const Pagination = ({ itemsPerPage, totalItems, paginate, activePage }) => {
    const pageNumbers = [];

    //Calculate pages and store in a list
    for(let i=1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav className="navigation">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" >
                        <a onClick={() => paginate(number)} href="!#" className={(activePage===number? ('active-page'): ('')) + (" page-link") }>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired,
    activePage: PropTypes.number.isRequired
}

export default Pagination;