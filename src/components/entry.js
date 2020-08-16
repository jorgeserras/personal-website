import React from 'react'
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import icon from '../styles/icons/gatsby.svg'
import icon2 from '../styles/icons/figma-1.svg'
import icon3 from '../styles/icons/shopify.svg'

import entryStyles from './entry.module.scss'

const Entry = (props) => {

    const { image, alt } = props

    return (
        <Grid container justify="center" className={entryStyles.container}>
            <Grid item xs={1} /* sm={1} */>
                <Grid container className={entryStyles.avatarContainer} >
                    <Avatar alt={alt} src={image} className={entryStyles.avatar}>
                        {" "}
                    </Avatar>
                </Grid>
            </Grid>
            <Grid item xs={11} /* sm={8} */>
                <Grid container alignItems="center">
                    <Grid item xs={8}>
                        <h2 className={entryStyles.title}>Forall Phones | Front End Developer</h2>
                    </Grid>
                    <Grid item xs={4} >
                        <h3 className={entryStyles.time}>April 2019 - April 2020</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8} >
                        <p className={entryStyles.description}>fsdfdsf  sdfdsf sdsd sdf sd sdf dsf sddssdf </p>
                    </Grid>
                    <Grid item xs={4} >
                        <Chip
                            /* avatar={<Avatar alt="Natacha" src={icon} />} */
                            label="Production"
                            variant="outlined"
                        />
                        <Chip
                            /* avatar={<Avatar alt="Natacha" src={icon} />} */
                            label="Refurbished"
                            variant="outlined"
                        />
                        <Chip
                            /* avatar={<Avatar alt="Natacha" src={icon} />} */
                            label="Phones"
                            variant="outlined"
                        />
                        <Chip
                            /* avatar={<Avatar alt="Natacha" src={icon} />} */
                            label="Assembly Line"
                            variant="outlined"
                        />
                        <Chip
                            /* avatar={<Avatar alt="Natacha" src={icon} />} */
                            label="Industry"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                <Grid item xs={8} container>
                    <Avatar variant="square" alt="alt asfasf" src={icon} className={entryStyles.stack} />
                    <Avatar variant="square" alt="alt asfasf" src={icon2} className={entryStyles.stack} />
                    <Avatar variant="square" alt="alt asfasf" src={icon3} className={entryStyles.stack} />
                </Grid>
                <Grid item xs={4} >
                    <Button /* className={classes.confirmButton} */ variant="contained" color="secondary" /* onClick={() => onClick(data)} */ >
                        Check my work!
                    </Button>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Entry