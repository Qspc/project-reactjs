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
      <h1>FAQ: about me</h1>
      <div style={{ marginTop: '3rem', marginLeft: 'auto', marginRight: 'auto', width: '70%' }}>
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography sx={{ fontWeight: 'bold' }}>Movies rate 10/10</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>3 Idiot, The Shawshank Redemption, A Separation, The Prestige, Gone Girl, Who Am I, Big Hero 6</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography sx={{ fontWeight: 'bold' }}>Your weird hobbies</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>remind all countries in the world</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel3a-header">
              <Typography sx={{ fontWeight: 'bold' }}>dream country that you want visit</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>All Skandinavian Country</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel4a-header">
              <Typography sx={{ fontWeight: 'bold' }}>Do you like playing game?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>No, but i like watching game </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel4a-header">
              <Typography sx={{ fontWeight: 'bold' }}>What you hate?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lightning, air fan, shopping</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
