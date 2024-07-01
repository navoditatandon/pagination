
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 5; // Number of items per page
  const totalItems = 30; // Total number of items (example)

  useEffect(() => {
    // Simulating data fetching from an API based on currentPage
    const fetchData = async () => {
      // Example API call simulation (replace with actual API call logic)
      const startIndex = (currentPage - 1) * itemsPerPage;
      const newData = Array.from({ length: itemsPerPage }, (_, index) => ({
        id: startIndex + index + 1,
        name: `Item ${startIndex + index + 1}`
      }));
      setData(newData);
    };

    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    // Handle logic to fetch data for the new page
    setCurrentPage(pageNumber);
    // Example: fetch data from API based on pageNumber
  };

  return (
    <div>
      <h1>Paginated Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
