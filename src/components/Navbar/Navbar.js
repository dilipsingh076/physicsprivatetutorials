"use client"; 
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import SignIn from '@/pages/api/auth/signin';
import Image from 'next/image';
import Nav from './Nav';
import styles from '@/app/ui/styles/navbar.module.css'
import Box from '../atoms/box';
const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div>
      {/* <AppBar > */}
      <Box  position="static"  className={styles.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Brand Logo */}
            <Link href={"/"} > 
                <Image src="/logo-01.png" alt="Brand Logo" width={180} height={60} />
            </Link>
          </Typography>
          <div className={styles.navBarDesktop}>
            <Nav />
          </div>
        </Toolbar>
      {/* </AppBar> */}
      </Box>

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.path} passHref>
              <ListItem button component="a" onClick={handleDrawerClose}>
                <ListItemText primary={link.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
