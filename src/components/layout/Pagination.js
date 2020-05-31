import React from 'react';

const Pagination = ({ itemsPerPage, totalParks, handleChange }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalParks / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
