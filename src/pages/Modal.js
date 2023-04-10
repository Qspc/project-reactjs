import { useState } from 'react';
import Modal from '@mui/material/Modal';

export default function ModalFunc() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const answer = [
    {
      id: 1,
      option: 'A',
      text: 'Cairo',
    },
    {
      id: 2,
      option: 'B',
      text: 'Nairobi',
    },
    {
      id: 3,
      option: 'C',
      text: 'Rabat',
    },
    {
      id: 4,
      option: 'D',
      text: 'Mogadishu',
    },
  ];

  return (
    <>
      <div className="grid">
        <div style={{ gridColumnStart: '1', gridColumnEnd: '5', textAlign: 'center', padding: '1rem 5rem', border: '1px solid black', borderRadius: '1rem', fontWeight: 'bold' }}>Apa Ibukota dari negara Kenya?</div>
        {answer.map((data, index) => (
          <>
            {data.id % 2 === 0 ? (
              <div className="grid-element" key={data.id} style={{ gridColumnStart: '3', gridColumnEnd: '5', textAlign: 'center' }} onClick={handleOpen}>
                {data.option}. {data.text}
              </div>
            ) : (
              <div className="grid-element" key={data.id} style={{ gridColumnStart: '1', gridColumnEnd: '3', textAlign: 'center' }} onClick={handleOpen}>
                {data.option}. {data.text}
              </div>
            )}
          </>
        ))}
      </div>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="modal">
          <div style={{ padding: '1rem 3rem' }}>
            <h2 style={{ paddingBottom: '1rem' }}>Anda yakin dengan jawabannya?</h2>
            <button className="button" style={{ marginRight: '2rem' }}>
              Tidak
            </button>
            <button className="button" style={{ marginLeft: '2rem' }}>
              Yakin
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
