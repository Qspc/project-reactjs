import { useState } from 'react';

export default function UpdateSorting() {
  const [ranking, setRanking] = useState([
    {
      film: '3 idiot',
    },
    {
      film: 'dangal',
    },
    {
      film: 'pk',
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
    <div className="flex" style={{ marginTop: '5rem' }}>
      <div style={{ width: '500px', height: '500px', border: '1px solid black', backgroundColor: 'rgb(115, 205, 255)' }}>
        <div style={{ padding: '6rem 4rem' }}>
          <div style={{ marginTop: '2rem' }}>
            <span>Movies Name</span> <br />
            <input style={{ padding: '0.2em 0.5em', font: 'inherit' }} onChange={handleChangeFilm} type="text" />
          </div>
          <div style={{ marginTop: '2rem' }}>
            <span>Ranking</span> <br />
            <input style={{ padding: '0.2em 0.5em', font: 'inherit' }} onChange={handleChangeUrut} type="text" />
          </div>
          <button className="button" style={{ marginTop: '2rem' }} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      <div style={{ width: '500px', height: '500px', border: '1px solid black', backgroundColor: 'rgb(115, 205, 255)' }}>
        <h1>Movie Ranking</h1>
        {ranking.map((data, index) => (
          <div style={{ marginLeft: '2rem', fontSize: '20px', textTransform: 'capitalize' }} key={data.id}>
            {index + 1}. {data.film}
          </div>
        ))}
      </div>
    </div>
  );
}
