import React from 'react'
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'

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
                    <Grid item xs={6}>
                        <h2 className={entryStyles.title}>Forall Phones | Front End Developer</h2>
                    </Grid>
                    <Grid item xs={6} >
                        <h3 className={entryStyles.time}>April 2019 - April 2020</h3>
                    </Grid>
                </Grid>
                <p className={entryStyles.description}>fsdfdsf  sdfdsf sdsd sdf sd sdf dsf sddssdf </p>
                <Grid container>
                <Grid item xs={6} container>
                    <Avatar variant="square" className={entryStyles.stack}>
                        <img alt="alt asfasf" src={icon} />
                    </Avatar>
                    <Avatar variant="square" className={entryStyles.stack}>
                        <img alt="alt asfasf" src={icon2} />
                    </Avatar>
                    <Avatar variant="square" className={entryStyles.stack}>
                        <img alt="alt asfasf" src={icon3} />
                    </Avatar>
                </Grid>
                <Grid item xs={6} >
                    <Button /* className={classes.confirmButton} */ variant="contained" color="secondary" /* onClick={() => onClick(data)} */ >
                                Check my work!
                    </Button>
                </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={12} sm={3}>
                <Grid container>
                    <Grid item xs={6} sm={12}>
                        <h3>978 €</h3>
                        <h4>96 €/hora extra</h4>
                    </Grid>
                    <Grid item xs={6} sm={12}>
                        <Button variant="contained" color="secondary" >
                            Confirmar Disponibilidade
                        </Button>
                    </Grid>
                </Grid>
            </Grid> */}
        </Grid>
    )
}

export default Entry