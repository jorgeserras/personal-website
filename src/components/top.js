import React, { useCallback, useEffect, useState, useRef } from "react"

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { useSpring, useTransition, animated } from 'react-spring'
/* import { Spring } from 'react-spring/renderprops' */
/* import anime2 from 'react-spring/renderprops/animated' */

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '40vh',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color: '#fff'
    }
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
    const ref = useRef([])
    const classes = useStyles();
    const [item, setItem] = useState('Developer')
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    const transitions = useTransition(item, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, /* transform: 'perspective(600px)', */ color: '#08fdd8' }, /* rotateX(0deg) */
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { /* transform: 'perspective(600px)', */ color: '#f0db4f' }, /* rotateX(180deg) */
            { /* transform: 'perspective(600px)' */ }, /*  rotateX(0deg) */
        ],
        leave: [{ color: '#fff' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#08fdd8' },
    })

    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        setItem('Developer')
        ref.current.push(setTimeout(() => setItem('Engineer'), 2000))
        ref.current.push(setTimeout(() => setItem('FreeLancer'), 5000))
        ref.current.push(setTimeout(() => setItem('Entrepeneur'), 8000))
        /* ref.current.push(setTimeout(() => reset(), 15000)) */
    }, [])

    useEffect(() => void reset(), [])

    /* console.log(props.xy) */
    return (
        <Grid container justify="center" alignItems="center" className={classes.root} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={4} className={classes.title}>
                <h1>Hi, I'm a </h1>
                {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                    <animated.div class="transitions-item" key={key} style={rest} onClick={reset}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
                <p>Front End / Back End / WordPress / Machine Learning</p>
                <br />
                <Button variant="contained" color="secondary">Contact me</Button>
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
