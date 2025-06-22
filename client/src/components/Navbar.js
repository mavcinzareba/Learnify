import React from 'react';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  useScrollTrigger,
  Slide
} from '@mui/material';
import { 
  Menu as MenuIcon,
  AccountCircle,
  Brightness4,
  Brightness7,
  Language 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({ darkMode, toggleDarkMode }) {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [langAnchorEl, setLangAnchorEl] = React.useState(null);
  
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLangMenu = (event) => setLangAnchorEl(event.currentTarget);
  const handleLangClose = () => setLangAnchorEl(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleLangClose();
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky" sx={{ 
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)' 
          : 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 50%, #7986cb 100%)',
        boxShadow: 'none',
        backdropFilter: 'blur(10px)'
      }}>
        <Toolbar>
          {/* Logo i nazwa */}
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', mr: 2 }}>
            <Avatar 
              src={darkMode ? "/assets/logo-dark.png" : "/assets/logo-light.png"} 
              alt="Learnify Logo"
              sx={{ width: 40, height: 40, mr: 1, bgcolor: 'transparent' }}
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: 700, display: { xs: 'none', sm: 'block' } }}>
              {t('appName')}
            </Typography>
          </Box>

          {/* Przyciski nawigacji */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} to="/" color="inherit" sx={{ mx: 1, textTransform: 'capitalize' }}>
              {t('courses')}
            </Button>
            <Button component={Link} to="/dashboard" color="inherit" sx={{ mx: 1, textTransform: 'capitalize' }}>
              {t('dashboard')}
            </Button>
          </Box>

          {/* Przyciski po prawej stronie */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Przycisk zmiany języka */}
            <IconButton onClick={handleLangMenu} color="inherit">
              <Language />
            </IconButton>
            <Menu
              anchorEl={langAnchorEl}
              open={Boolean(langAnchorEl)}
              onClose={handleLangClose}
            >
              <MenuItem onClick={() => changeLanguage('pl')}>Polski</MenuItem>
              <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
            </Menu>

            {/* Przycisk trybu nocnego */}
            <IconButton onClick={toggleDarkMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* Przyciski logowania */}
            <Button component={Link} to="/login" color="inherit" sx={{ textTransform: 'capitalize' }}>
              {t('login')}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}