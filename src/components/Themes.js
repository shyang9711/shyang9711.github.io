import { createTheme } from '@mui/material/styles';
export const themes = [
    {
      name: 'Light',
      theme: createTheme({
        palette: {
          mode: 'light',
          buttonBackground: 'transparent',
          buttonText: '#42a5f5',
          descriptionText: '#000000'
        },
        typography: {
          fontFamily: 'Arial, sans-serif',
        },
      }),
      styles: {
        pageStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        toolStyle: {
          fontFamily: 'Arial, sans-serif',
          color: '#ffffff', // Black color for light theme
          textDecoration: 'none',
          width: '100px',
          alignItems: 'center'
        },
        themesBox: {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'fixed',
          margin: '0 auto',
          bottom: 0,
          width: '100%', // Ensures the box takes the full width of the page
        },
        linksBox: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexDirection: 'row',
          marginLeft: 0,
          marginTop: 10,
        },
        linkStyle: {
          fontFamily: 'Arial, sans-serif',
          color: '#000000',
          textDecoration: 'none',
          textAlign: 'center',
          fontSize: '20px',
        },
        accordionStyle: {
            marginLeft: 2,
        }
      },
    },
    {
      name: 'Dark',
      theme: createTheme({
        palette: {
          mode: 'dark',
          buttonBackground: 'transparent',
          buttonText: '#ffffff',
          descriptionText: '#ffffff',
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
      }),
      styles: {
        pageStyle: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        toolStyle: {
          fontFamily: 'Roboto, sans-serif',
          color: '#ffffff', // White color for dark theme
          textDecoration: 'none',
          width: '100px',
          alignItems: 'center'
        },
        linksBox: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexDirection: 'row',
          marginLeft: 0,
          marginTop: 10,
        },
        linkStyle: {
          fontFamily: 'Roboto, sans-serif',
          color: '#ffffff',
          textDecoration: 'none',
          textAlign: 'center',
          fontSize: '20px',
        },
        accordionStyle: {
            marginLeft: 2,
        }
      },
    },
    {
      name: 'Hi-Tel',
      pageDirection: 'row',
      theme: createTheme({
        palette: {
          primary: {
            main: '#05057a',
          },
          background: {
            default: '#05057a',
            paper: '#05057a',
          },
          text: {
            primary: '#ffffff',
          },
          buttonBackground: 'transparent',
          buttonText: '#ffffff',
          descriptionText: '#ffffff'
        },
        typography: {
          fontFamily: "'DungGeunMo', monospace",
        },
      }),
      styles: {
        pageStyle: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        toolStyle: {
            fontFamily: "'DungGeunMo', monospace",
            color: '#ffffff', // White color for Hi-Tel theme
            fontSize: '20px',
            textAlign: 'left',
            width: '130px',
            textDecoration: 'none',
            alignItems: 'center'
        },
        themesBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
        },
        linksBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: 0,
            marginRight: '200px',
            padding: '10px'
        },
        linkStyle: {
            fontFamily: "'DungGeunMo', monospace",
            color: '#ffffff', // White color for Hi-Tel theme
            textAlign: 'left',
            width: '100%', // Ensure full width for left alignment
            textDecoration: 'none',
            fontSize: '20px',
        },
        accordionStyle: {
            marginLeft: 2,
        }
      },
    },
  ];
  