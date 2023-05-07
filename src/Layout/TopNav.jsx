import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Badge, Collapse, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import './header.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import data from "./header.json"
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Logout, Notifications, OpenInNewOutlined, PersonAdd, Settings } from '@mui/icons-material';
import { LocalStorage, RemoveLocalStorage } from '../Hooks/useLocalStorage';




const drawerWidth = 300;
const navItems = ['Home', 'About', 'Contact'];

function TopNav(props) {
  const { window } = props;
  const user = LocalStorage("user")
  const navigate=useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    RemoveLocalStorage("token")
    navigate("/")
  }
  const getFirstLetter = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase();
  }



  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    handleToggleMobile()

  };

  const location = useLocation();
  const [nlOpen1, setnlOpen1] = React.useState(false);
  const [nlOpen2, setnlOpen2] = React.useState(false);

  const toggleNestedList1 = () => {
    setnlOpen1(true);
    setOpen(!open)
  };
  const toggleNestedListMobile = () => {
    setnlOpen2(true);
    setOpenMobile(!openMobile)
  };
  const [open, setOpen] = React.useState(false);
  const [openMobile, setOpenMobile] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRefMobile = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
    toggleNestedList1();
  };

  const handleToggleMobile = () => {
    setOpenMobile((prevOpenMobile) => !prevOpenMobile);
    toggleNestedListMobile();
  };



  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      setOpen(false);
      setnlOpen1(false);
      return;
    }
    setOpen(false);
    setnlOpen1(false);
  };
  const handleCloseMobile = (event) => {
    if (anchorRefMobile.current && anchorRefMobile.current.contains(event.target)) {
      setOpenMobile(false);
      return;
    }
    setOpenMobile(false);
  };

  const [isActive1, setIsActive1] = useState(false);
  const activateBtn1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  }

  const [isActive2, setIsActive2] = useState(false);
  const activateBtn2 = () => {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  }

  const [isActive3, setIsActive3] = useState(false);
  const activateBtn3 = () => {
    setIsActive3(true);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsActive6(false);
  }

  const [isActive4, setIsActive4] = useState(false);
  const activateBtn4 = () => {
    setIsActive4(true);
    setIsActive3(false);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive5(false);
    setIsActive6(false);
  }

  const [isActive5, setIsActive5] = useState(false);
  const activateBtn5 = () => {
    setIsActive5(true);
    setIsActive4(false);
    setIsActive3(false);
    setIsActive2(false);
    setIsActive1(false);
    setIsActive6(false);
  }

  const [isActive6, setIsActive6] = useState(false);
  const activateBtn6 = () => {
    setIsActive6(true);
    setIsActive5(false);
    setIsActive4(false);
    setIsActive3(false);
    setIsActive2(false);
    setIsActive1(false);
  }

  const buttonColor1 = isActive1 ? '#b69438' : 'inherit';
  const color1 = isActive1 ? '#fff' : '#0F3661';
  const buttonColor2 = isActive2 ? '#b69438' : 'inherit';
  const color2 = isActive2 ? '#fff' : '#0F3661';
  const buttonColor3 = isActive3 ? '#b69438' : 'inherit';
  const color3 = isActive3 ? '#fff' : '#0F3661';
  const buttonColor4 = isActive4 ? '#b69438' : 'inherit';
  const color4 = isActive4 ? '#fff' : '#0F3661';
  const buttonColor5 = isActive5 ? '#b69438' : 'inherit';
  const color5 = isActive5 ? '#fff' : '#0F3661';
  const buttonColor6 = isActive6 ? '#b69438' : 'inherit';
  const color6 = isActive6 ? '#fff' : '#0F3661';



  const isActive1Urls = ['/']

  // if (nlOpen1Urls.includes(window.location.pathname)) {




  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/images/logo5.png" alt="image" className='h-18 w-64 mx-2'
          style={{ objectFit: 'contain', marginTop: '0px', }} />
      </Box>
      <Divider />
      <Stack style={{ fontWeight: '600', color: '#17224d', ml: '2' }}
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}>


        {user.role==2 && <Link to="/users">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', }}>
              <ListItemText primary="Users" className='md:text-sm' />
            </ListItemButton>
          </ListItem>
        </Link>}

        <Link to="/projects">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', }}>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
        </Link>

      </Stack>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  useEffect(() => {
    if (isActive1Urls.includes(location.pathname)) {
      setIsActive1(true);
      setIsActive2(false);
      setIsActive3(false);
      setIsActive4(false);
      setIsActive5(false);
      setIsActive6(false);
    }
  }, [location.pathname])


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="static"
        sx={{ backgroundColor: 'transparent', boxShadow: '0px 10px 27px 0px rgb(0 0 0 / 15%)' }}>
        <Toolbar>
          <IconButton
            color="#000000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

            <img src="/images/logo5.png" alt="image" className='h-[90px] w-[170px]'
              style={{ objectFit: 'contain', marginTop: '0px' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Link to={user.role==1?"/welcome":"/welcome-admin"}>
              <Button
                className='btn-nav'
                style={{ fontWeight: '600', color: color1, mr: 2, backgroundColor: buttonColor1 }}
                onClick={activateBtn1}
                onMouseEnter={handleClose}
              >
                Home
              </Button>
            </Link>
           { user.role==2 &&(<Link to="/users">
              <Button
                className='btn-nav'
                sx={{ fontWeight: '600', color: color2, mr: 2, backgroundColor: buttonColor2 }}
                onClick={activateBtn2}
                onMouseEnter={handleClose}
              >
               Users
              </Button>
            </Link>)}



            <Link to="/projects">
              <Button
                className='btn-nav'
                sx={{ fontWeight: '600', color: color4, mr: 2, backgroundColor: buttonColor4 }}
                onClick={activateBtn4}
                onMouseEnter={handleClose}
              >
               projects
              </Button>
            </Link>

            <Link to="/notification"><IconButton sx={{ color: '#484848' }}>
              <Badge badgeContent={4} color="error">
                <Notifications  />
              </Badge>
            </IconButton></Link>

            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 30, height: 30, bgcolor: '#00BABA' }}>
                {getFirstLetter(user.name)}
                </Avatar>
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openMenu}
              onClose={handleCloseMenu}
              onClick={handleCloseMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 30,
                    height: 30,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

              <Typography
                sx={{ color: '#5E6C84', fontSize: '10px', fontWeight: '700', my: 1, mx: 2 }}
              >
                ACCOUNT
              </Typography>

              <MenuItem>

                <Box sx={{ mb: 1, display: "flex", justifyContent: 'centre', alignItems: 'center' }}>
                  <Stack direction="row" spacing={0}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#00BABA', mt: .5 }}>
                    {getFirstLetter(user.name)}
                    </Avatar>

                    <Stack spacing={0}>
                      <Typography
                        sx={{ fontSize: '13px', fontWeight: 'bold' }}
                      >
                        {user.name}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "11px" }}
                      >
                       {user.email}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </MenuItem>
              <MenuItem>
                <Link to="/profile"> <Stack
                  direction={{ sm: 'row' }}
                  spacing={{ xs: 5, sm: 6, md: 7 }}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                 
                  <Typography
                    fontSize="inherit"
                  >
                    Profile
                  </Typography>
                  
                  <OpenInNewOutlined sx={{ fontSize: "medium", justifyContent: 'end' }} />
                </Stack></Link>
              </MenuItem>
              <Divider />
              
              <Divider />
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <Logout sx={{ fontSize: '1.125rem' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>



          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{}}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default TopNav;