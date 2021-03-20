import React from "react"
import { Helmet } from 'react-helmet'
/* import { Link, graphql, useStaticQuery } from "gatsby" */
import { makeStyles } from '@material-ui/core/styles'
/* import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button' */

/* import headerStyles from "./header.module.scss" */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {

const classes = useStyles()

/*   const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
      <Helmet
        title="Jorge Serras | Let me introduce myself"
        link={[
          {"rel": "icon", 
           "type": "image/png", 
           "href": "favicon.ico"
          }
         ]}
        meta={[
          {
            name: 'description',
            content: "I'm Jorge Serras, an Electrical and Computers engineer from Portugal. Feel free to explore and experience some of my personal projects and do not hesitate to contact me!",
          },
          {
            name: 'keywords',
            content: "jorgeserras, jorge, serras, engineer, outlier, detection, master, science, research, portuguese, IST, programmer, data science, machine learning, electrical, portugal, meteor",
          },
          {
            name: 'og:title',
            content: "Jorge Serras | Let me introduce myself",
          },
          {
            name: 'og:description',
            content: "I'm Jorge Serras, an Electrical and Computers engineer from Portugal. Feel free to explore and experience some of my personal projects and do not hesitate to contact me!",
          },
          {
            name: 'og:type',
            content: 'website',
          },
          {
            name: 'og:image',
            content: '/apple-icon.png',
          },
          {
            name: 'og:url',
            content: 'https://jorgeserras.com',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:description',
            content: "I'm Jorge Serras, an Electrical and Computers engineer from Portugal. Feel free to explore and experience some of my personal projects and do not hesitate to contact me!",
          },
          {
            name: 'twitter:creator',
            content: 'Jorge Serras',
          },
          {
            name: 'twitter:image',
            content: '/apple-icon.png',
          },
        ]}
      />
    /* <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header> */
  )
}

export default Header
