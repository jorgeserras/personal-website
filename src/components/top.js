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

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
/* const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)` */
const trans2 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 8 - 60}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 60}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5 + 250}px,${y / 3.5 + 150}px,0)`
const trans5 = (x, y) => `translate3d(${x / 5 - 100}px,${y / 5 + 200}px,0)`
const trans6 = (x, y) => `translate3d(${x / 3 + 80}px,${y / 3 + 200}px,0)`
const trans7 = (x, y) => `translate3d(${x / 3}px,${y / 3 - 80}px,0)`
const trans8 = (x, y) => `translate3d(${x / 8}px,${y / 8 + 30}px,0)`
const trans9 = (x, y) => `translate3d(${x / 3 - 200}px,${y / 3 + 80}px,0)`
const trans10 = (x, y) => `translate3d(${x / 3 - 500}px,${y / 3 + 200}px,0)`
const trans11 = (x, y) => `translate3d(${x / 3 - 800}px,${y / 3 - 80}px,0)`
const trans12 = (x, y) => `translate3d(${x / 3 - 500}px,${y / 3 + 0}px,0)`
const trans13 = (x, y) => `translate3d(${x / 3 - 200}px,${y / 3 + 350}px,0)`
const trans14 = (x, y) => `translate3d(${x / 3 + 200}px,${y / 3 + 400}px,0)`
const trans15 = (x, y) => `translate3d(${x / 3 - 800}px,${y / 3 + 100}px,0)`


const Top = () => {

    const classes = useStyles();

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))


    return (
        <Grid container justify="center" alignItems="center" className={classes.root} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>

            <Grid item xs={6}>
                <h1>ajfoaoiajf</h1>
                <h2>gouijagaigaagoagaoao</h2>
                <p>gouijagaigaagoagaoao</p>


               {/*  <Spring
                    native
                    reset
                    delay={1000}
                    from={{ x: 100, opacity: 0 }}
                    to={{ x: 0, opacity: 1 }}
                    config={{ mass: 1, tension: 280, friction: 120 }}
                >
                    {({ x, opacity }) => (
                        <anime2.svg
                            className={"icon"}
                            style={{ opacity }}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={100}
                            strokeDashoffset={x}
                        >
                            <title>task-checklist-check</title>
                            <path
                                pathLength="100"
                                className="a"
                                d="M10,23.5H1.5a1,1,0,0,1-1-1V3.5a1,1,0,0,1,1-1h2"
                            />
                            <path
                                pathLength="100"
                                className="a"
                                d="M15.5,2.5h2a1,1,0,0,1,1,1v6"
                            />
                            <path
                                pathLength="100"
                                className="a"
                                d="M11.5,2.5a2,2,0,0,0-4,0h-2v3h8v-3Z"
                            />
                            <path
                                pathLength="100"
                                className="a"
                                d="M16.5,9.5V5a.5.5,0,0,0-.5-.5H13.5"
                            />
                            <path
                                pathLength="100"
                                className="a"
                                d="M5.5,4.5H3a.5.5,0,0,0-.5.5V21a.5.5,0,0,0,.5.5h7"
                            />
                            <line
                                pathLength="100"
                                className="a"
                                x1="5.5"
                                y1="8.499"
                                x2="13.5"
                                y2="8.499"
                            />
                            <line
                                pathLength="100"
                                className="a"
                                x1="5.5"
                                y1="11.499"
                                x2="11.5"
                                y2="11.499"
                            />
                            <line
                                pathLength="100"
                                className="a"
                                x1="5.5"
                                y1="14.499"
                                x2="9.5"
                                y2="14.499"
                            />
                            <circle pathLength="100" className="a" cx="17.5" cy="17.499" r="6" />
                            <path
                                pathLength="100"
                                className="a"
                                d="M20.174,15.755l-2.905,3.874a.75.75,0,0,1-1.13.08l-1.5-1.5"
                            />
                        </anime2.svg>
                    )}
                </Spring> */}


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

                </Grid>
            </Grid >

        </Grid>
    )
}

export default Top
