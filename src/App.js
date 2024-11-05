import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Switch, CssBaseline, Container, Box, Grid, Typography, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useSpring, animated } from '@react-spring/web';
import Home from './components/Home';
import Academics from './components/Academics';
import Projects from './components/Projects';
import Resume from './components/Resume';
import ThemeCard from './components/ThemeCard';
import { themes } from './components/Themes'; // Import themes
import FilmStocks from './components/Film Stocks';

const App = () => {
  const [theme, setTheme] = useState(themes[0].theme);
  const [previousTheme, setPreviousTheme] = useState(themes[0].theme); // Store the previous theme
  const [themeIndex, setThemeIndex] = useState(0); // State to handle the current index of theme sets
  const location = useLocation();
  const themeSize = 5; // Number of themes to show at a time
  const bio = `Hello! I'm a San Francisco-based software developer with a dual background in Computer Science and Film Studies from UC Berkeley, class of 2024. I thrive on creative ideas and tackling new challenges in the tech world. With a strong skill set in film production, I'm also passionate about learning and driven by the process of creating videos.`;

  const handleThemeChange = (newTheme) => {
    setPreviousTheme(theme);
    setTheme(newTheme.theme);
  };

  const handleSwitchChange = () => {
    if (theme.palette.mode === 'dark') {
      previousTheme === 'dark'? setTheme('light') : setTheme(previousTheme);
    } else {
      setPreviousTheme(theme);
      setTheme(themes[1].theme); // Set to dark theme
    }
  };

  const handleShowNextTheme = () => {
    setThemeIndex((prevIndex) => Math.min(prevIndex + themeSize, themes.length - themeSize));
  };

  const handleShowPreviousTheme = () => {
    setThemeIndex((prevIndex) => Math.max(prevIndex - themeSize, 0));
  };

  const sunStyle = useSpring({
    opacity: theme.palette.mode === 'dark' ? 0.5 : 1,
  });

  const moonStyle = useSpring({
    opacity: theme.palette.mode === 'dark' ? 1 : 0.5,
  });

  const isHomePage = location.pathname === '/';

  const currentTheme = themes.find((t) => t.theme === theme) || themes[0];

  const links = [
    { path: '/resume', label: 'Resume' },
    { path: '/academics', label: 'Academics' },
    { path: '/projects', label: 'Projects' },
    { path: '/film stocks', label: 'Film Stocks' },
  ];

  const displayedTheme = themes.slice(themeIndex, themeIndex + themeSize);
  const hasNextTheme = themeIndex + themeSize < themes.length;
  const hasPreviousTheme = themeIndex > 0;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <h3>{isHomePage ? 'Seung Hyun Yang' : 'Main'}</h3>
            </Link>
          </Box>
          {!isHomePage && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'normal' }}>
              <Box sx={{ display: 'flex', gap: 5 }}>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    style={{
                      ...currentTheme.styles.toolStyle,
                    }}
                  >
                    {currentTheme.name === 'Hi-Tel' ? `${index + 1}. ${link.label}` : link.label}
                  </Link>
                ))}
              </Box>
            </Box>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <animated.div style={sunStyle}>
              <Brightness7Icon />
            </animated.div>
            <Switch checked={theme.palette.mode === 'dark'} onChange={handleSwitchChange} />
            <animated.div style={moonStyle}>
              <Brightness4Icon />
            </animated.div>
          </Box>
        </Toolbar>
      </AppBar>
      <Container>
        {isHomePage && (
          <Box>
            <Box style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '750px',
              margin: '0 auto',
              marginTop: 100
            }}>
              <h3>{bio}</h3>
            </Box>

            <Box sx={{ ...currentTheme.styles.pageStyle }}>
              <Box
                sx={{
                  ...currentTheme.styles.linksBox,
                }}
              >
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    style={{
                      ...currentTheme.styles.linkStyle,
                    }}
                  >
                    {currentTheme.name === 'Hi-Tel' ? `${index + 1}. ${link.label}` : link.label}
                  </Link>
                ))}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {currentTheme.pageDirection === 'row' ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                    {displayedTheme.map((t, index) => (
                      <Box
                        key={index}
                        onClick={() => handleThemeChange(t)}
                        sx={{
                          cursor: 'pointer',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'white',
                            fontFamily: "'DungGeunMo', monospace",
                            fontSize: '20px',
                            textAlign: 'left', // Align text to left
                            margin: 0, // Remove margin
                          }}
                        >
                          {`${index + links.length + 1}. ${t.name}`}
                        </Typography>
                      </Box>
                    ))}
                    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '110px', textAlign: 'left', margin: 0 }}>
                      {hasPreviousTheme && (
                        <Button onClick={handleShowPreviousTheme} sx={{ color: 'white', padding: 0 }}>
                          <Typography
                            sx={{
                              color: 'white',
                              fontFamily: "'DungGeunMo', monospace",
                              fontSize: '20px',
                              textAlign: 'left', // Align text to left
                              margin: 0, // Remove margin
                            }}
                          >
                            {`${themeSize + links.length + 1}. Previous`}
                          </Typography>
                        </Button>
                      )}
                      {hasNextTheme && (
                        <Button onClick={handleShowNextTheme} sx={{ color: 'white', padding: 0, width: '70px' }}>
                          <Typography
                            sx={{
                              color: 'white',
                              fontFamily: "'DungGeunMo', monospace",
                              fontSize: '20px',
                              textAlign: 'left', // Align text to left
                              margin: 0, // Remove margin
                            }}
                          >
                            {`${themeSize + links.length + 2}. Next`}
                          </Typography>
                        </Button>
                      )}
                    </Box>
                  </Box>
                ) : (
                  <Grid container spacing={2} justifyContent="center" marginTop={4}>
                    {displayedTheme.map((t, index) => (
                      <Grid item key={index}>
                        <ThemeCard
                          theme={t.theme}
                          name={t.name}
                          isSelected={theme === t.theme}
                          onSelect={() => handleThemeChange(t)}
                        />
                      </Grid>
                    ))}
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                      {hasPreviousTheme && (
                        <Button onClick={handleShowPreviousTheme} sx={{ marginRight: 2 }}>
                          Previous
                        </Button>
                      )}
                      {hasNextTheme && (
                        <Button onClick={handleShowNextTheme}>
                          Next
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                )}
              </Box>
            </Box>
          </Box>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/film stocks" element={<FilmStocks />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
