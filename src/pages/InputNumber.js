import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SearchInput() {
  const [data, setData] = useState([]); //inisiasi pertama
  const [searchResult, setSearchResult] = useState(''); //input yang dicari
  const [result, setResult] = useState([]); //yg dipakai dalam looping

  useEffect(() => {
    if (searchResult) {
      setResult(data.slice(0, searchResult));
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
        <div style={{ margin: '20px 40px 40px 40px' }}>
          <input style={{ padding: '0.2em 0.5em', font: 'inherit' }} onChange={(e) => setSearchResult(e.target.value)} type="number" placeholder="Input Number. . ." />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginLeft: '40px' }}>
          {result.map((data, index) => (
            <div key={index} style={{ width: '250px', height: '3rem', marginLeft: '5px' }}>
              {data.name.common}
            </div>
          ))}
        </div>
        <ul></ul>
      </div>
    </>
  );
}
