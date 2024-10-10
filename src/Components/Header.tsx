import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import {IntegrationInstructionsOutlined} from "@mui/icons-material";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {Link} from "@mui/material";

const settings = ["PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder"];

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const downloadResume = (event: React.MouseEvent<HTMLElement>) => {
    console.log("resume button clicked");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IntegrationInstructionsOutlined
            sx={{display: {md: "flex"}, mr: 1}}
          />
          <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <IntegrationInstructionsOutlined />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: {xs: "block", md: "none"}}}
            ></Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="google.com"
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
          <IntegrationInstructionsOutlined
            sx={{display: {xs: "flex", md: "none"}, mr: 1}}
          />
          <Box
            sx={{
              typography: "body1",
              "& > :not(style) ~ :not(style)": {
                ml: 3,
              },
            }}
          >
            <Link
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
              href="Bohdan Mykytey - Resume.pdf"
              download="Bohdan Mykytey Resume"
              color="inherit"
              underline="hover"
              fontSize="1.5rem"
            >
              Download Resume
            </Link>

            <Link href={`mailto:bohdan.mykytey@gmail.com`} color="inherit" underline="hover" fontSize="1.5rem">
              Contact Me
            </Link>
          </Box>
          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 2}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{textAlign: "center"}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
