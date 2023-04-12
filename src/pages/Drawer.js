import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function DrawerFunc() {
  const direction = ['atas', 'kanan', 'bawah', 'kiri'];
  const dir = ['top', ' left', 'bottom', 'right'];

  const [state, setState] = React.useState({
    atas: false,
    kanan: false,
    bawah: false,
    kiri: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'atas' || anchor === 'bawah' ? 'auto' : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="flex" style={{ alignItems: 'stretch', alignContent: 'center', gap: '20px', height: '100vh' }}>
        {dir.map((data) => (
          <>
            <div style={{ padding: '0.75rem 4rem', border: '1px solid black', borderRadius: '10px', backgroundColor: '#F6F7C1' }} onClick={toggleDrawer(data, true)}>
              {data}
            </div>
            <Drawer anchor={data} open={state[data]} onClose={toggleDrawer(data, false)}>
              {list(data)}
            </Drawer>
          </>
        ))}
      </div>
    </>
  );
}
