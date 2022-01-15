import { ReactChild, useState, useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
  Computer,
  Person,
  HomeRepairService,
  Feed,
  Drafts,
  LinkedIn,
  GitHub,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { capitalize } from 'lodash';

// @Context
import { ThemeContext } from '@context/index';

const WIDTH = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const StyledStack = styled(Stack)(() => ({
  paddingTop: '1.2rem',
  paddingBottom: '1.2rem',
}));

interface Props {
  children: ReactChild | ReactChild[];
}

export default function DrawerComponent({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const matches = useMediaQuery('(min-width:1024px)');
  const {
    palette: { mode },
  } = useTheme();
  const { toggleThemeMode } = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <StyledStack alignItems="center" spacing={2}>
        <Typography variant="h5">Indie-Code</Typography>
        <Avatar sx={{ width: 160, height: 160 }}>I-C</Avatar>
        <Typography textAlign="center">
          Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal
          website!
        </Typography>
        <Stack direction="row" spacing={1}>
          <Avatar>
            <LinkedIn />
          </Avatar>
          <Avatar>
            <GitHub />
          </Avatar>
        </Stack>
      </StyledStack>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Computer />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeRepairService />
          </ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Feed />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
      <StyledStack alignItems="center" spacing={1}>
        <Stack direction="row" spacing={1}>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          <Typography>{`${capitalize(mode)} Mode`}</Typography>
        </Stack>
        <Switch onClick={toggleThemeMode} checked={mode === 'dark'} />
      </StyledStack>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="temporary"
        open={mobileOpen && !matches}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: WIDTH, paddingX: '1rem' },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        sx={{
          width: WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: WIDTH,
            boxSizing: 'border-box',
            paddingX: '1rem',
          },
        }}
        variant="persistent"
        anchor="left"
        open={matches}
      >
        {drawer}
      </Drawer>
      <Main open={matches}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mr: 2, ...((mobileOpen || matches) && { display: 'none' }) }}
          style={{ position: 'absolute' }}
        >
          <MenuIcon style={{ width: 40, height: 50 }} />
        </IconButton>
        {children}
      </Main>
    </Box>
  );
}
