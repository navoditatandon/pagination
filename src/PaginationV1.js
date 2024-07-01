import React, {useState} from 'react';
import "./PaginationV1.css";

const PaginationV1 = ({currentPage, totalPages, handlePageClick}) => {
    return (
        <div>
            <button onClick = {() => handlePageClick(currentPage - 1)}  disabled = {currentPage === 1}>Previous</button>
            {
                totalPages.map((page, index) => (
                    <button
                    key = {index} 
                    onClick = {() => handlePageClick(index + 1)} 
                    disabled = {index+1 === currentPage}
                    className= { index+1 === currentPage ? `active-btn` : ``}>
                        {index+1}
                    </button>
                ))
            }
            <button onClick = {() => handlePageClick(currentPage + 1)}  disabled = {currentPage === 10}>Next</button>
        </div>
    )
}

export default PaginationV1;