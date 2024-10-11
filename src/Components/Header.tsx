import React, {useEffect, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "@mui/material";
import "../../src/styles.css";

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="app-bar-header"
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: {xs: "flex", md: "left"},
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Bohdan Mykytey
          </Typography>
          <Box
            sx={{
              typography: "body1",
              "& > :not(style) ~ :not(style)": {
                ml: 5,
              },
            }}
          >
            <Link
              className="linkedin"
              color="inherit"
              target="_blank"
              rel="LinkedIn"
              href="https://www.linkedin.com/in/bohdanmykytey/"
              underline="hover"
              fontSize="1.5rem"
            >
              LinkedIn
            </Link>

            <Link
              className="download-resume"
              href="Bohdan Mykytey - Resume.pdf"
              download="Bohdan Mykytey Resume"
              color="inherit"
              underline="hover"
              fontSize="1.5rem"
            >
              Download Resume
            </Link>

            <Link
              className="contact-me"
              href={`mailto:bohdan.mykytey@gmail.com`}
              color="inherit"
              underline="hover"
              fontSize="1.5rem"
            >
              Contact Me
            </Link>
          </Box>
          <Box>
            {windowWidth > 950 ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 3}}>
                  <Avatar
                    className="profile-avatar"
                    alt="B"
                    src="profile_pic.jpg"
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 4}}>
                  <MenuIcon className="hamburger-menu"/>
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{mt: "45px"}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Link
                  target="_blank"
                  rel="LinkedIn"
                  href="https://www.linkedin.com/in/bohdanmykytey/"
                >
                  <Typography>LinkedIn</Typography>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  href="Bohdan Mykytey - Resume.pdf"
                  download="Bohdan Mykytey Resume"
                >
                  <Typography>Download Resume</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href={`mailto:bohdan.mykytey@gmail.com`}>
                  <Typography>Contact Me</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
