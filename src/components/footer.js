import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Grid } from '@material-ui/core'
/* import { graphql, useStaticQuery } from 'gatsby' */

import footerStyles from './footer.module.scss'

const Footer = () => {
    /* const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `) */

    return (
        <footer className={footerStyles.footer}>
            <Grid container justify="center" alignItems="center"> With <FavoriteIcon className={footerStyles.icon} color="secondary" /> by Jorge Serras © 2021</Grid>
        </footer>
    )
}

export default Footer