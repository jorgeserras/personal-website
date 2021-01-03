import React from 'react'
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import entryStyles from './entry.module.scss'

const Entry = (props) => {

    const {
        image,
        icons = [],
        alt,
        title,
        desc = [],
        date,
        tags = [],
        secondBtn,
        secBtnTxt1 = "",
        secBtnTxt2 = "",
        secBtnLnk1 = "",
        secBtnLnk2 = "",
        textBtn = "",
        linkBtn = '#'
    } = props

    return (
        <Grid container justify="center" className={entryStyles.container}>
            <Grid item xs={1} /* sm={1} */>
                <Grid container className={entryStyles.avatarContainer} >
                    <Avatar variant="rounded" alt={alt || title} src={image} className={entryStyles.avatar}>
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
                        {tags.map(t => <Chip
                            key={title + " " + t.label}
                            /* avatar={<Avatar alt="Natacha" src={icon} />} */
                            label={t.label}
                            variant="outlined"
                        />)}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8} container>
                        {secondBtn &&
                            <Grid container spacing={1} style={{ paddingBottom: '16px' }}>
                                <Grid item xs={5}>
                                    <Button href={secBtnLnk1} target="_blank" fullWidth variant="contained" color="primary">
                                        {secBtnTxt1}
                                    </Button>
                                </Grid>
                                <Grid item xs={5}>
                                    <Button href={secBtnLnk2} target="_blank" fullWidth variant="contained" color="secondary">
                                        {secBtnTxt2}
                                    </Button>
                                </Grid>
                            </Grid>
                        }
                        {icons.map((icon, i) => <Avatar variant="square" key={i} alt={`${alt} icon ${i}`} src={icon} className={entryStyles.stack} />)}
                    </Grid>
                    {textBtn &&
                        <Grid item xs={4}>
                            <Button href={linkBtn} target="_blank" fullWidth variant="contained" color="primary">
                                {textBtn}
                            </Button>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Entry