import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Link } from '@mui/material';

const Resume = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/Resume_Revised.pdf`; // Path to your PDF file in the public directory
  const linkedInUrl = 'https://www.linkedin.com/in/seung-hyun-yang-474a77183'; // Your LinkedIn profile URL
  const githubUrl = 'https://github.com/shyang9711'; // Your GitHub profile URL
  const mailToUrl = 'mailto:shayng9711@berkeley.edu'; // Your email address

  return (
    <div>
      <h2>Resume</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe 
          src={pdfUrl} 
          width="100%" 
          height="800px" 
          style={{ border: 'none' }} 
          title="Resume"
        />
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href={linkedInUrl} target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <LinkedInIcon sx={{ fontSize: 40, marginRight: 1 }} />
          </Link>
          <Link href={githubUrl} target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <GitHubIcon sx={{ fontSize: 40, marginRight: 1 }} />
          </Link>
          <Link href={mailToUrl} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <EmailIcon sx={{ fontSize: 40, marginRight: 1 }} />
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Resume;
