import React, {useState, useEffect} from 'react';
import PaginationV1 from './PaginationV1';

const App = () => {

  const [page, setPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  }

  return (
    <div>
      {page}
       <PaginationV1 currentPage = {page} totalPages = {[1,2,3,4,5,6,7,8,9,10]} handlePageClick = {handlePageClick}/>
    </div>
  )
}

export default App;