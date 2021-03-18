import React, { useCallback, useEffect, useState, useRef } from "react"
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { useSpring, useTransition, animated } from 'react-spring'
/* import { Spring } from 'react-spring/renderprops' */
/* import anime2 from 'react-spring/renderprops/animated' */

function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
      keys.reduce((output, key) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null) || 'xs'
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '40vh',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color: '#fff',
        "& h1": {
            margin: theme.spacing(2,0)
        }
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

    const width = useWidth()

    const ref = useRef([])
    const classes = useStyles()
    const [item, setItem] = useState('Developer')
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    const transitions = useTransition(item, null, {
        from: { opacity: 0, height: 0/* , innerHeight: 0 */, /* transform: 'perspective(600px)', */ color: '#08fdd8' }, /* rotateX(0deg) */
        enter: [
            { opacity: 1, height: 30/* , innerHeight: 30 */ },
            { /* transform: 'perspective(600px)', */ color: '#f0db4f' }, /* rotateX(180deg) */
            { /* transform: 'perspective(600px)' */ }, /*  rotateX(0deg) */
        ],
        leave: [{ color: '#fff' }, { /* innerHeight: 0 */ }, { opacity: 0, height: 0 }],
        update: { color: '#08fdd8' },
    })

    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        setItem('Developer')
        ref.current.push(setTimeout(() => setItem('Engineer'), 2000))
        ref.current.push(setTimeout(() => setItem('FreeLancer'), 5000))
        ref.current.push(setTimeout(() => setItem('Entrepeneur'), 8000))
        ref.current.push(setTimeout(() => setItem('Full Stack'), 12000))
        ref.current.push(setTimeout(() => setItem('Tech Lead'), 15000))
        /* ref.current.push(setTimeout(() => reset(), 15000)) */
    }, [])

    useEffect(() => void reset(), [])

    /* console.log(props.xy) */
    return (
        <Grid container justify="center" alignItems="center" className={classes.root} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <Grid item md={2}>

            </Grid>
            <Grid item xs={10} md={4} className={classes.title}>
                <h1>Hi, I'm {item[0] === 'E' ? 'an' : 'a'}</h1>
                {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                        <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                        </animated.div>
                ))}
                <p>Front End / Back End / Machine Learning / Data Science / Electronics</p>
                <br />
                <Button variant="contained" target="_blank" href="https://www.linkedin.com/in/jorgeserras/" color="secondary" /* maxWidth="360px" */>Contact me</Button>
            </Grid>

            {width === 'xs' || width === 'sm' ? 
                null
             :
                <Grid item xs={6} /* className="container" */>
                    <Grid container justify="center" alignItems="center">
                        {/* <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} /> */}
                        <div className="card2" style={{ transform: trans2(0,0) }} />
                        <div className="card3" style={{ transform: trans3(0,0) }} /> 
                        <div className="card4" style={{ transform: trans4(0,0) }} />
                        <animated.div className="card5" style={{ transform: props.xy.interpolate(trans5) }} />
                        <div className="card6" style={{ transform: trans6(0,0) }} />
                        <div className="card7" style={{ transform: trans7(0,0) }} />
                        <div className="card8" style={{ transform: trans8(0,0) }} />
                        <div className="card9" style={{ transform: trans9(0,0) }} />

                        <div className="card10" style={{ transform: trans10(0,0) }} />
                        <div className="card11" style={{ transform: trans11(0,0) }} />
                        <div className="card12" style={{ transform: trans12(0,0) }} />
                        <div className="card13" style={{ transform: trans13(0,0) }} />
                        <div className="card14" style={{ transform: trans14(0,0) }} />
                        <div className="card15" style={{ transform: trans15(0,0) }} />
                        <div className="card16" style={{ transform: trans16(0,0) }} />
                        <div className="card17" style={{ transform: trans17(0,0) }} />
                        <div className="card18" style={{ transform: trans18(0,0) }} />

                    </Grid>
                </Grid >
            }

        </Grid>
    )
}

export default Top
