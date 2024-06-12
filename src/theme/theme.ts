import { pink } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';



const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: [
      "vazirmatn",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: '#fff',
      dark:'#EFEFEF85'
    },
    secondary: pink,
    
  },
});

export default theme;