import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

export default function SearchInput() {
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const filtered = useMemo(() => {
    if (searchResult) {
      return data.filter((item) => Object.values(item.name.common).join('').toLowerCase().includes(searchResult.toLowerCase()));
    }
    return data;
  }, [searchResult, data]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  //   const [data, setData] = useState([]);
  //   const [searchResult, setSearchResult] = useState('');
  //   const [filtered, setFiltered] = useState(data);
  //   useEffect(() => {
  //     axios
  //       .get('https://restcountries.com/v3.1/all/?fields=name')
  //       .then((res) => {
  //         setData(res.data);
  //         console.log(searchResult);
  //         if (searchResult !== '') {
  //           const filteredData = data.filter((item) => {
  //             return Object.values(item.name.common).join('').toLowerCase().includes(searchResult.toLowerCase());
  //           });
  //           setFiltered(filteredData);
  //         } else {
  //           setFiltered(data);
  //         }
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, [searchResult, setSearchResult]);

  return (
    <>
      <input onChange={(e) => setSearchResult(e.target.value)} type="text" placeholder="Search Countries..." />
      <div>
        <h1>List of animal:</h1>
        <ul>
          {filtered.map((data, index) => (
            <li key={index}> {data.name.common} </li>
          ))}
        </ul>
      </div>
    </>
  );
}
