import { useState } from 'react';

export default function UpdateSorting() {
  const [ranking, setRanking] = useState([
    {
      film: 'dangal',
    },
  ]);
  const [film, setFilm] = useState('');
  const [urut, setUrut] = useState(0);

  const handleChangeFilm = (e) => {
    setFilm(e.target.value);
  };
  const handleChangeUrut = (e) => {
    setUrut(e.target.value);
  };
  const handleSubmit = () => {
    if (film === '' || urut === '') return;
    else {
      const newData = [...ranking];
      newData.splice(urut - 1, 0, { film: film });
      setRanking(newData);
    }
  };
  return (
    <>
      <div>
        <div>
          <label>Nama Film</label>
          <input onChange={handleChangeFilm} type="text" />
        </div>
        <div>
          <label>Ranking</label>
          <input onChange={handleChangeUrut} type="text" />
        </div>
        <button onClick={handleSubmit}>submit</button>
      </div>

      <div>
        List ranking film:
        {ranking.map((data, index) => (
          <div key={data.id}>
            {index + 1}. {data.film}
          </div>
        ))}
      </div>
    </>
  );
}
