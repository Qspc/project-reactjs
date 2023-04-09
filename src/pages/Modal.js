import { useState } from 'react';

export default function Modal() {
  const data = [1, 2, 3, 4];
  return (
    <>
      <div className="grid">
        <div style={{ gridColumnStart: '1', gridColumnEnd: '5', textAlign: 'center' }}>Apa Ibukota dari negara Kenya?</div>
        {data.map((data, index) => (
          <>
            {data % 2 === 0 ? (
              <div key={index} style={{ gridColumnStart: '3', gridColumnEnd: '5', textAlign: 'center' }}>
                {data} hai
              </div>
            ) : (
              <div key={index} style={{ gridColumnStart: '1', gridColumnEnd: '3', textAlign: 'center' }}>
                {data} halo
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}
