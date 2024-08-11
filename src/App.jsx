import React, { useState } from 'react'
import Dummy_Data from "./Dummy_Data.json"
import ReactPaginate from 'react-paginate';

const App = () => {
  const [users, setUsers] = useState(Dummy_Data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const PageVisited = pageNumber * usersPerPage;

  const displayUsers = users.slice(PageVisited, PageVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="bg-slate-600 text-white p-6 rounded-lg text-center shadow-lg hover:scale-105 transition-transform" key={user.id}>
          <h3 className="text-lg font-semibold">{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className='flex flex-col items-center bg-red-200 min-h-screen py-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-yellow-100 rounded-lg'>
        {displayUsers}
      </div>
      
      <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"flex justify-center mt-8 space-x-4"}
  pageClassName={"border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100"}
  previousClassName={"border border-gray-300 rounded-md px-3 py-1"}
  nextClassName={"border border-gray-300 rounded-md px-3 py-1"}
  activeClassName={"bg-black text-white rounded-md px-3 py-1 !important"}  // Adding !important
/>

    </div>
  )
}

export default App;
