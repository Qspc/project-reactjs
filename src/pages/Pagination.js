// import { Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Container } from '@mui/system';
import { useState } from 'react';

export default function PaginationFunc() {
  const page = ['File 1', 'File 2', 'File 3', 'File 4', 'File 5', 'File 6', 'File 7', 'File 8', 'File 9', 'File 10'];
  const PER_PAGE = 1;
  const [halaman, setHalaman] = useState(1);
  const lengthPage = Math.ceil(page.length);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(page.length);
  const handleChangePage = (e, p) => {
    setHalaman(p);
    jump(p);
  };
  const _DATA = UsePagination(page, PER_PAGE);
  function UsePagination(data, itemsPerPage) {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }
  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  return (
    <div>
      {_DATA.map((data, index) => (
        <div
          key={index}
          style={{
            width: '80%',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.07)',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            marginTop: '5rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '150px 0px 150px 0px',
            background: 'white',
            opacity: '90%',
            backgroundColor: 'rgb(115, 205, 255)',
          }}
        >
          <Container maxWidth="sm">
            <h1>{data}</h1>
          </Container>
        </div>
      ))}
      <div style={{ marginLeft: '500px', padding: '15px 0px 15px 0px' }}>
        <Pagination style={{}} alignItems="center" justifyContent="center" onChange={handleChangePage} page={halaman} count={lengthPage} color="primary" />
      </div>
    </div>
  );
}
