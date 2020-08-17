import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { useSpring, animated } from 'react-spring'
/* import { Spring } from 'react-spring/renderprops' */
/* import anime2 from 'react-spring/renderprops/animated' */

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '40vh',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const widthSize = window.innerWidth / 2
const heightSize = window.innerHeight / 2

const calc = (x, y) => [x - widthSize, y - heightSize]
/* const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)` */
const trans2 = (x, y) => `translate3d(${x / 8 + (widthSize / 3)}px,${y / 8 - (heightSize / 7)}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - (widthSize / 5)}px,${y / 6 - (heightSize / 7)}px,0)`
const trans4 = (x, y) => `translate3d(${x / 7 + (widthSize / 3.3)}px,${y / 7 + (heightSize / 1.7)}px,0)`
const trans5 = (x, y) => `translate3d(${x / 5 - (widthSize / 12)}px,${y / 5 + (heightSize / 2.5)}px,0)`
const trans6 = (x, y) => `translate3d(${x / 7 + 20}px,${y / 7 + (heightSize / 1.3)}px,0)`
const trans7 = (x, y) => `translate3d(${x / 7 + (widthSize / 16)}px,${y / 7 - (heightSize / 6)}px,0)`
const trans8 = (x, y) => `translate3d(${x / 8}px,${y / 8 + 30}px,0)`
const trans9 = (x, y) => `translate3d(${x / 7 - (widthSize / 7)}px,${y / 7 + (heightSize / 6)}px,0)`
const trans10 = (x, y) => `translate3d(${x / 7 + (widthSize / 3.8)}px,${y / 7 + (heightSize / 4)}px,0)`
const trans11 = (x, y) => `translate3d(${x / 7 - (widthSize / 2.5)}px,${y / 7 - (heightSize / 6)}px,0)`
const trans12 = (x, y) => `translate3d(${x / 7 - (widthSize / 3)}px,${y / 7 + (heightSize / 6)}px,0)`
const trans13 = (x, y) => `translate3d(${x / 7 - (widthSize / 4)}px,${y / 7 + (heightSize / 1.6)}px,0)`
const trans14 = (x, y) => `translate3d(${x / 7 + (widthSize / 4.5)}px,${y / 7 + (heightSize / 1.2)}px,0)`
const trans15 = (x, y) => `translate3d(${x / 7 - (widthSize / 3)}px,${y / 7 + (heightSize / 2.7)}px,0)`
const trans16 = (x, y) => `translate3d(${x / 7 + (widthSize / 16)}px,${y / 7 + (heightSize / 1.8)}px,0)`
const trans17 = (x, y) => `translate3d(${x / 7 - (widthSize / 7)}px,${y / 7 + (heightSize / 1.3)}px,0)`
const trans18 = (x, y) => `translate3d(${x / 7 + (widthSize / 2.7)}px,${y / 7 + (heightSize / 1.1)}px,0)`

const Top = () => {

    const classes = useStyles();

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    console.log(props.xy)
    return (
        <Grid container justify="center" alignItems="center" className={classes.root} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={4}>
                <h1>ajfoaoiajf</h1>
                <h2>gouijagaigaagoagaoao</h2>
                <p>gouijagaigaagoagaoao</p>
                <p>gouijagaigaagoagaoao</p>
                <br />
                <Button color="primary">aagaigiagi</Button>
            </Grid>


            <Grid item xs={6} /* class="container" */>
                <Grid container justify="center" alignItems="center">
                    {/* <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} /> */}
                    <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                    <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                    <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
                    <animated.div class="card5" style={{ transform: props.xy.interpolate(trans5) }} />
                    <animated.div class="card6" style={{ transform: props.xy.interpolate(trans6) }} />
                    <animated.div class="card7" style={{ transform: props.xy.interpolate(trans7) }} />
                    <animated.div class="card8" style={{ transform: props.xy.interpolate(trans8) }} />
                    <animated.div class="card9" style={{ transform: props.xy.interpolate(trans9) }} />

                    <animated.div class="card10" style={{ transform: props.xy.interpolate(trans10) }} />
                    <animated.div class="card11" style={{ transform: props.xy.interpolate(trans11) }} />
                    <animated.div class="card12" style={{ transform: props.xy.interpolate(trans12) }} />
                    <animated.div class="card13" style={{ transform: props.xy.interpolate(trans13) }} />
                    <animated.div class="card14" style={{ transform: props.xy.interpolate(trans14) }} />
                    <animated.div class="card15" style={{ transform: props.xy.interpolate(trans15) }} />
                    <animated.div class="card16" style={{ transform: props.xy.interpolate(trans16) }} />
                    <animated.div class="card17" style={{ transform: props.xy.interpolate(trans17) }} />
                    <animated.div class="card18" style={{ transform: props.xy.interpolate(trans18) }} />

                </Grid>
            </Grid >

        </Grid>
    )
}

export default Top
