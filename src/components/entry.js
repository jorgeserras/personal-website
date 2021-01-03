import React from 'react'
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import entryStyles from './entry.module.scss'

const Entry = (props) => {

    const { image, icons = [], alt, title, desc = [], date,
        secondBtn,
        secBtnTxt1 = "",
        secBtnTxt2 = "",
        secBtnLnk1 = "",
        secBtnLnk2 = "", textBtn = "", linkBtn = '#' } = props

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
                            <Grid container spacing={1} style={{ paddingBottom: '16px' }}>
                                <Grid item xs={5}>
                                    <Button href={secBtnLnk1} target="_blank" variant="contained" color="primary">
                                        {secBtnTxt1}
                                    </Button>
                                </Grid>
                                <Grid item xs={5}>
                                    <Button href={secBtnLnk2} target="_blank" variant="contained" color="secondary">
                                        {secBtnTxt2}
                                    </Button>
                                </Grid>
                            </Grid>
                        }
                        {icons.map((icon, i) => <Avatar variant="square" key={i} alt={`${alt} icon ${i}`} src={icon} className={entryStyles.stack} />)}


                    </Grid>
                    <Grid item xs={4}>
                        <Button href={linkBtn} target="_blank" variant="contained" color="primary">
                            {textBtn}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Entry