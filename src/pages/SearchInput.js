import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

export default function SearchInput() {
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const [result, setResult] = useState([]);
  let filtered = useMemo(() => {
    if (searchResult) {
      const newData = data.filter((item) => Object.values(item.name.common).join('').toLowerCase().includes(searchResult.toLowerCase()));
      return newData.length;
    }
    return data.length;
  }, [searchResult, data]);
  useEffect(() => {
    if (searchResult) {
      const newData = data.filter((item) => Object.values(item.name.common).join('').toLowerCase().includes(searchResult.toLowerCase()));
      // setCountry(newData);
      setResult(newData);
    } else {
      // console.log(data);
      setResult(data);
    }
  }, [searchResult, data]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <input onChange={(e) => setSearchResult(e.target.value)} type="text" placeholder="Search Countries..." />
      <div>
        <h1>List of animal:</h1>
        <h4> {filtered} result </h4>
        <ul>
          {result.map((data, index) => (
            <li key={index}> {data.name.common} </li>
          ))}
        </ul>
      </div>
    </>
  );
}
