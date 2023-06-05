import { useState } from 'react';

export default function Suit() {
  function getRandomValue() {
    var randomValue = Math.random();
    if (randomValue < 0.33) {
      return 'batu';
    } else if (randomValue < 0.66) {
      return 'kertas';
    } else {
      return 'gunting';
    }
  }

  const [nilai, setNilai] = useState(getRandomValue());
  const [value, setValue] = useState('');
  const [hasil, setHasil] = useState('');
  const [show, setShow] = useState(false);

  const handleBattle = () => {
    setShow(!show);
    if (value === nilai) {
      setHasil('Imbang!!!');
    } else if ((value === 'gunting' && nilai === 'kertas') || (value === 'kertas' && nilai === 'batu') || (value === 'batu' && nilai === 'gunting')) {
      setHasil('Anda menang!!!');
    } else {
      setHasil('Anda kalah!!!');
    }
  };

  const handleReset = () => {
    setShow(false);
    setNilai(getRandomValue());
    setValue('');
    setHasil('');
  };

  return (
    <>
      <div style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid black' }}>
        <h1>BATU KERTAS GUNTING</h1>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{hasil}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 55, alignItems: 'center', margin: '25px 0 45px 0' }}>
          <div style={{ border: '1px solid black', fontWeight: 'bold', textTransform: 'capitalize', backgroundColor: 'red', width: 100, height: 100, borderRadius: 5 }}>
            <div style={{ display: show ? 'block' : 'none', textAlign: 'center', position: 'relative', top: '40%' }}> {value}</div>
          </div>
          <h1>vs</h1>
          <div style={{ border: '1px solid black', fontWeight: 'bold', textTransform: 'capitalize', backgroundColor: 'yellow', width: 100, height: 100, borderRadius: 5 }}>
            <div style={{ display: show ? 'block' : 'none', textAlign: 'center', position: 'relative', top: '40%' }}> {nilai}</div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 25, marginBottom: 10, marginTop: 10 }}>
          <button className="button" onClick={(e) => setValue(e.target.value)} value="batu">
            Batu
          </button>
          <button className="button" onClick={(e) => setValue(e.target.value)} value="kertas">
            Kertas
          </button>
          <button className="button" onClick={(e) => setValue(e.target.value)} value="gunting">
            Gunting
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
          <button className="button" style={{}} onClick={handleBattle}>
            Battle
          </button>
          <button className="button" style={{}} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
