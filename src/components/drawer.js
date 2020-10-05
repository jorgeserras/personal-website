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

import image from '../styles/imgs/serras_small.jpg'

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: '#fff',
    flexShrink: 0,
  },
  desc: {
    margin: theme.spacing(1, 0),
    fontSize: '0.9em',
    textAlign: 'left'
  },
  chip: {
    margin: theme.spacing(1, 0)
  },
  btn: {
    marginTop: theme.spacing(1)
  },
  drawerPaper: {
    boxShadow: '0 14px 26px -12px #4AD295, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 10px 12px -7px rgba(54, 244, 191, 0.3)',
    width: drawerWidth,
    top: '35%',
    left: '24px',
    height: 'inherit',
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: "6px"
  },
  avatar: {
    margin: '0 auto',
    height: '64px',
    width: '64px'
  },
  icon: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    }
  },
  drawerContainer: {
    overflow: 'auto',
    padding: '24px',
    textAlign: 'center',
    "& h4": {
      margin: theme.spacing(1, 0)
    }
  },
  content: {
    backgroundColor: '#fff',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  social: {
    "& div": {
      margin: '4px'
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
        <h2>Jorge Serras</h2>
        <h4>Electrical Engineer</h4>
        <h4>FullStack Developer</h4>
        <h4>FreeLancer</h4>
        <Grid container justify="center" className={classes.social}>
          <a alt="Linkedin" rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/jorgeserras/">
            <Avatar alt="LinkedIn" className={classes.icon}>
              <LinkedInIcon />
            </Avatar>
          </a>
          <a alt="GitHub" rel="noreferrer noopener" target="_blank" href="https://github.com/jorgeserras">
            <Avatar alt="GitHub" className={classes.icon}>
              <GitHubIcon />
            </Avatar>
          </a>
          <a alt="WhatsApp" rel="noreferrer noopener" target="_blank" href="https://wa.me/351969900074?text=Hi%20Jorge!%20I%20saw%20your%20website%20and%20wanted%20to%20chat">
            <Avatar alt="WhatsApp" className={classes.icon}>
              <WhatsAppIcon />
            </Avatar>
          </a>
          <a alt="Email" href="mailto:jorgefuzetaserras@gmail.com">
            <Avatar alt="Email" className={classes.icon}>
              <EmailIcon />
            </Avatar>
          </a>
        </Grid>
        <p className={classes.desc}>I'm constantly engaging in new projects and ideas to enhance myself and others around me. Interested in remodeling a business or create something unique?</p>
        <Chip
          className={classes.chip}
          color="primary"
          icon={<PlaceIcon />}
          label="Lisbon, Portugal"
          variant="outlined"
        />

        <Button className={classes.btn} variant="contained" color="primary">Download CV</Button>
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