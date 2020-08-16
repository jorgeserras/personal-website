import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

import { makeStyles } from '@material-ui/core/styles'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import PlaceIcon from '@material-ui/icons/Place'
import EmailIcon from '@material-ui/icons/Email'

import image from '../styles/icons/shopify.svg'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: '#fff',
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: '40%',
    left: '16px',
    height: 'inherit',
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: "6px"
  },
  avatar: {
    margin: '0 auto',
    height: '64px',
    width: '64px'
  },
  drawerContainer: {
    overflow: 'auto',
    padding: '16px',
    textAlign: 'center'
  },
  content: {
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  social: {
    "& div": {
      margin: '0 4px'
    }
  }
}));

const FloatCard = ({ title }) => {

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >

      {/* <Toolbar /> */}
      <div className={classes.drawerContainer}>
        {/* <Grid container justify="center"> */}
        <Avatar alt="Jorge Serras" src={image} className={classes.avatar}>
          {" "}
        </Avatar>
        <h1>Jorge Serras</h1>
        <h3>Electrical Engineer</h3>
        <h3>FullStack Developer</h3>
        <h3>FreeLancer</h3>
        <Grid container justify="center" className={classes.social}>
          <Avatar alt="LinkedIn" >
            <LinkedInIcon />
          </Avatar>
          <Avatar alt="GitHub" >
            <GitHubIcon />
          </Avatar>
          <Avatar alt="WhatsApp" >
            <WhatsAppIcon />
          </Avatar>
          <Avatar alt="Email" >
            <EmailIcon />
          </Avatar>
        </Grid>
        <p>jaiofoi aoifioas aiok asoif afjois a0 0iasjajf a</p>
        <Chip
          icon={<PlaceIcon />}
          label="Lisbon, Portugal"
          variant="outlined"
        />

        <Button variant="contained" color="secondary">Download CV</Button>
        {/*             <Chip
                            avatar={<Avatar alt="Natacha" src={icon} />}
                            label="Production"
                            variant="outlined"
                        /> */}

        {/* </Grid> */}

      </div>
    </Drawer>
  )
}

export default FloatCard