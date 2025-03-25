import { useState } from "react";

type PaginationProps = {
  totalCount: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ totalCount, itemsPerPage, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <span className="inline-flex items-center gap-2">
      <span><b>{totalCount}</b> item(s)</span>
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </span>
  );
};

export default Pagination;