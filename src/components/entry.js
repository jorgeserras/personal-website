import React from 'react'
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import entryStyles from './entry.module.scss'

const Entry = (props) => {

    const { image, icons = [], alt, title, desc = [], date, secondBtn } = props

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
                        <h2 className={entryStyles.title}>{title}</h2>
                    </Grid>
                    <Grid item xs={4} >
                        <h3 className={entryStyles.time}>{date}</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8} >
                        {desc.map((d, i) =>
                            <p key={i} className={entryStyles.description}>{d}</p>
                        )}
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
                        {secondBtn &&
                            <Grid container style={{ paddingBottom: '16px' }}>
                                <Button /* className={classes.confirmButton} */ variant="contained" color="primary" /* onClick={() => onClick(data)} */ >
                                    Academic Merit
                                </Button>
                                <Button /* className={classes.confirmButton} */ variant="contained" color="secondary" /* onClick={() => onClick(data)} */ >
                                    Msc Dissertation
                                </Button>
                            </Grid>
                        }
                        {icons.map((icon, i) => <Avatar variant="square" key={i} alt={`${alt} icon ${i}`} src={icon} className={entryStyles.stack} />)}


                    </Grid>
                    <Grid item xs={4} >
                        <Button /* className={classes.confirmButton} */ variant="contained" color="secondary" /* onClick={() => onClick(data)} */ >
                            Instituto Superior Técnico
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Entry