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
      setResult(newData);
    } else {
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
      <h1>List of animal:</h1>

      <div>
        <div style={{ margin: '40px 60px' }}>
          <input style={{ padding: '0.2em 0.5em', font: 'inherit' }} onChange={(e) => setSearchResult(e.target.value)} type="text" placeholder="Search Countries..." />
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}> {filtered} result </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {result.map((data, index) => (
            <div key={index} style={{ width: '200px', height: '3rem', marginLeft: '5px' }}>
              {data.name.common}
            </div>
          ))}
        </div>
        <ul></ul>
      </div>
    </>
  );
}
