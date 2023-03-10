import { useEffect, useState } from 'react';

export default function Filtering() {
  const data = [
    {
      klub: 'Chelsea',
      negara: 'Inggris',
    },
    {
      klub: 'Barcelona',
      negara: 'Spanyol',
    },
    {
      klub: 'Real madrid',
      negara: 'Spanyol',
    },
    {
      klub: 'Liverpool',
      negara: 'Inggris',
    },
    {
      klub: 'AC milan',
      negara: 'Italia',
    },
    {
      klub: 'Manchaster United',
      negara: 'Inggris',
    },
    {
      klub: 'Inter milan',
      negara: 'Italia',
    },
    {
      klub: 'Villareal',
      negara: 'Spanyol',
    },
    {
      klub: 'Juventus',
      negara: 'Italia',
    },
    {
      klub: 'Manchaster City',
      negara: 'Inggris',
    },
  ];
  const [filteringResult, setFilteringResult] = useState(data);
  const [nilai, setNilai] = useState('');
  useEffect(() => {
    if (nilai === '') {
      setFilteringResult(data);
    } else {
      setFilteringResult(data.filter((name) => name.negara === nilai));
    }
    // console.log(nilai);
  }, [nilai]);

  const handleChange = (e) => {
    setNilai(e.target.value);
  };

  return (
    <>
      <div>
        Select :
        <select onChange={handleChange} defaultValue={nilai} name="negara" id="negara">
          <option value=""></option>
          <option value="Inggris">Inggris</option>
          <option value="Spanyol">Spanyol</option>
          <option value="Italia">Italia</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', flexDirection: 'row' }}>
        {filteringResult.map((data, index) => (
          <div key={index} style={{ border: '1px solid black', flexBasis: '300px', margin: '10px', padding: '30px 50px', textAlign: 'center', fontWeight: 'bold' }}>
            {data.klub}
          </div>
        ))}
      </div>
    </>
  );
}
