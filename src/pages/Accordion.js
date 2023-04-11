import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionFunc() {
  return (
    <>
      <h1>FAQ: Puasa</h1>
      <div style={{ marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto', width: '70%' }}>
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Kapan kita niat puasa?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Di waktu malam dari mulai selepas Isya sampai sebelum adzan shubuh</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography>Apakah makan setelah imsak boleh?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Boleh, karena puasa dimulai dari dikumandangkannya adzan shubuh, namun sebaiknya jika telah imsak mulai berhenti makan minum </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel3a-header">
              <Typography>Korek kuping pas puasa batal gak?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Batal jika korek kuping kanan tembus sampai kuping kiri </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel4a-header">
              <Typography>kalo lupa makan pas puasa, terus pas udah inget minum dulu biar gak keselek. itu boleh gak?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Boleh, tapi minum ludah sendiri </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
