import { useEffect, useState } from 'react';

export default function Filtering() {
  const data = [
    {
      klub: 'Chelsea',
      negara: 'England',
    },
    {
      klub: 'Barcelona',
      negara: 'Spain',
    },
    {
      klub: 'Real madrid',
      negara: 'Spain',
    },
    {
      klub: 'Liverpool',
      negara: 'England',
    },
    {
      klub: 'AC milan',
      negara: 'Italy',
    },
    {
      klub: 'Manchester United',
      negara: 'England',
    },
    {
      klub: 'Inter milan',
      negara: 'Italy',
    },
    {
      klub: 'Villareal',
      negara: 'Spain',
    },
    {
      klub: 'Juventus',
      negara: 'Italy',
    },
    {
      klub: 'Manchester City',
      negara: 'England',
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
      <div style={{ textAlign: 'center' }}>
        <select
          style={{ display: 'inline-block', width: '160px', height: '34px', lineHeight: '30px', position: 'relative', margin: '15px 0px', border: '0.1px solid white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.07)' }}
          onChange={handleChange}
          defaultValue={nilai}
          name="negara"
          id="negara"
        >
          <option value="">Select Country:</option>
          <option value="England">England</option>
          <option value="Spain">Spain</option>
          <option value="Italy">Italy</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', flexDirection: 'row' }}>
        {filteringResult.map((data, index) => (
          <div
            key={index}
            style={{
              borderRadius: '8px',
              flexBasis: '300px',
              margin: '10px',
              padding: '30px 50px',
              textAlign: 'center',
              fontWeight: 'bold',
              backgroundColor: '#F6F7C1',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.07)',
            }}
          >
            {data.klub}
          </div>
        ))}
      </div>
    </>
  );
}
