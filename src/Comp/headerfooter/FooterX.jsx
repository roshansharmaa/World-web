import React from 'react';
import { Box, Container, Grid, Typography, Link, colors } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function FooterX() {
  return (
    <Box
      sx={{
        // position:'sta',
        bottom:'0',
        width:'100%',
      bgcolor:'#cf8a00'
        
      }}
    >
    <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
          <Typography variant="body2" align="center" sx={{color:'black', fontWeight:'600'}}>
            © {new Date().getFullYear()} Your Company. All rights reserved.
            
          </Typography>
        </Box>
    </Box>
  );
}

export default FooterX;