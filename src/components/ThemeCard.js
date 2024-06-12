import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ primaryColor }) => ({
  width: 50,
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: '2px solid',
  borderColor: primaryColor,
  backgroundColor: primaryColor,
}));

const ThemeCard = ({ theme, name, isSelected, onSelect }) => {
  const label = name === 'Light' ? 'Li' :
                name === 'Dark' ? 'Dk' :
                name === 'Custom' ? 'Ct' : 'Ht';

  const primaryColor = name === 'Light' ? '#1976d2' :  // Blue for light
                       name === 'Dark' ? '#333333' :   // Black for dark
                       name === 'Custom' ? '#ff5722' : // Orange for custom
                       '#05057a';                       // Blue for Hi-Tel

  const textColor = '#ffffff'; // White text for all

  return (
    <StyledCard onClick={onSelect} primaryColor={primaryColor}>
      <CardContent>
        <Box>
          <Typography variant="h6" sx={{ color: textColor, fontFamily: 'sans-serif' }}>
            {label}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ThemeCard;
