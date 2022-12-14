import { Pagination } from '@mui/material'
import React from 'react';
import "./CustomPagination.css";



const CustomPagiantion = ({ setPage, numOfPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={
                {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 10,
                }
            }
        >
            <Pagination count={numOfPages} onChange={(e) => handlePageChange(e.target.textContent)} />

        </div>
    )
}

export default CustomPagiantion 