import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate, activePage }) => {
    const pageNumbers = [];
    console.log(activePage)
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

export default Pagination;