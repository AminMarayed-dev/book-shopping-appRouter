"use client";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';


const firstList = [
  { icon: <LocationOnIcon />, text: "Inbox" },
  { icon: <EmailIcon />, text: "Sent Mail" },
  { icon: <PhoneEnabledIcon />, text: "Sent Mail" },
  { icon: <PhoneIphoneIcon />, text: "Sent Mail" },
  { icon: <AccessTimeIcon />, text: "Sent Mail" },
];

const secondList = [
  { icon: <TelegramIcon />, text: "Drafts" },
  { icon: <InstagramIcon />, text: "All Mail" },
  { icon: <EmailIcon />, text: "All Mail" },
];

function Footer() {

  return (
    <Box sx={{ width: '100%', bgcolor: 'primary.dark', mx: 'auto', mt: 4, p:1 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2, ml:2 }}>
          Category 1
        </Typography>
        <List>
          {firstList.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2, ml:2  }}>
          Category 2
        </Typography>
        <List>
          {secondList.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Footer;
