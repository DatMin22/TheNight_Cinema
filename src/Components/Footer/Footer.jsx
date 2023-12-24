import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1F2937',
        marginTop:'4rem'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Về chúng tôi
            </Typography>
            <Typography variant="body2" color="white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quos.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Liên hệ
            </Typography>
            <Typography variant="body2" color="white">
              Quang Đạt
            </Typography>
            <Typography variant="body2" color="white">
              Email: Quangdat2219@gmail.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +84 359 891 505
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Theo dõi
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit" >
              <Facebook color='primary' />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram color='warning' />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter color='info' />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer