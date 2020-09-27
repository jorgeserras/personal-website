import React from 'react'
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

/* import icon from '../styles/icons/gatsby.svg'
import icon2 from '../styles/icons/figma-1.svg'
import icon3 from '../styles/icons/shopify.svg' */

import entryStyles from './card.module.scss'

const Card = (props) => {

    const { image, alt, title, desc, text } = props

    return (
        <Grid container justify="center" className={entryStyles.container}>
            <Grid item xs={12} align="center">
                <h2 className={entryStyles.title}>{title}</h2>
            </Grid>
            <Grid item xs={12} align="center">
                <h3 className={entryStyles.time}>{desc}</h3>
            </Grid>
            <Grid item xs={12}>
                <p className={entryStyles.time}>{text}</p>
            </Grid>
            {/* <Grid item xs={1} >
                <Grid container className={entryStyles.avatarContainer} >
                    <Avatar alt={alt} src={image} className={entryStyles.avatar}>
                        {" "}
                    </Avatar>
                </Grid>
            </Grid> */}
            <Grid item xs={12}>
                {/* <Grid container alignItems="center">
                    <Grid item xs={8}>
                        <h2 className={entryStyles.title}>{title}</h2>
                    </Grid>
                    <Grid item xs={4} >
                        <h3 className={entryStyles.time}>{date}</h3>
                    </Grid>
                </Grid> */}
                {/* <Grid container>
                    <Grid item xs={8} >
                        <p className={entryStyles.description}>{desc}</p>
                    </Grid>
                    <Grid item xs={4} >
                        <Chip
                            label="Production"
                            variant="outlined"
                        />
                        <Chip
                            label="Refurbished"
                            variant="outlined"
                        />
                        <Chip
                            label="Phones"
                            variant="outlined"
                        />
                        <Chip
                            label="Assembly Line"
                            variant="outlined"
                        />
                        <Chip
                            label="Industry"
                            variant="outlined"
                        />
                    </Grid>
                </Grid> */}
                {/*  <Grid container>
                    <Grid item xs={8} container>
                        <Avatar variant="square" alt="alt asfasf" src={icon} className={entryStyles.stack} />
                        <Avatar variant="square" alt="alt asfasf" src={icon2} className={entryStyles.stack} />
                        <Avatar variant="square" alt="alt asfasf" src={icon3} className={entryStyles.stack} />
                    </Grid>
                    <Grid item xs={4} >
                        <Button variant="contained" color="secondary" >
                            Check my work!
                    </Button>
                    </Grid>
                </Grid> */}
            </Grid>
        </Grid>
    )
}

export default Card