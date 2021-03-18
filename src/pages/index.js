import React, { lazy, Suspense } from 'react'
/* import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'; */
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider } from "@material-ui/core/styles"
import Layout from "../components/layout"
import Head from "../components/head"
import FloatCard from "../components/drawer"
import '../styles/index.scss'
/* import Top from "../components/top" */

import Entry from "../components/entry"
/* import Card from "../components/card" */
import theme from "../components/theme"

import react from '../styles/icons/react.svg'
import redux from '../styles/icons/redux.svg'
import javascript from '../styles/icons/javascript.svg'
import shopify from '../styles/icons/shopify.svg'

import wordpress from '../styles/icons/wordpress.svg'
/* import sass from '../styles/icons/sass.svg' */
import rLang from '../styles/icons/r-lang.svg'
/* import raspberryPi from '../styles/icons/raspberry-pi.svg' */
import python from '../styles/icons/python.svg'
import pwa from '../styles/icons/pwa-logo.svg'
import php from '../styles/icons/php.svg'
import nodejs from '../styles/icons/nodejs.svg'
/* import matlab from '../styles/icons/matlab.svg' */
import materialUi from '../styles/icons/material-ui.svg'
/* import graphql from '../styles/icons/graphql.svg' */
import cloudflare from '../styles/icons/cloudflare.svg'
import aws from '../styles/icons/aws.svg'

import stripe from '../styles/icons/stripe.svg'
import mongodb from '../styles/icons/mongodb.svg'
import analytics from '../styles/icons/google-analytics.svg'
import rails from '../styles/icons/rails.svg'
import ruby from '../styles/icons/ruby.svg'
import heroku from '../styles/icons/heroku.svg'
import drive from '../styles/icons/google-drive.svg'
import postgresql from '../styles/icons/postgresql.svg'
import slack from '../styles/icons/slack.svg'
import mapbox from '../styles/icons/mapbox.svg'
import antd from '../styles/icons/antd.svg'
import java from '../styles/icons/java.svg'

/* import gatsby from '../styles/icons/gatsby.svg' */
import figma from '../styles/icons/figma.svg'

import forall from '../styles/imgs/small_f.jpg'
import ist from '../styles/imgs/ist_small.jpg'
// import inesc from '../styles/imgs/INESC-ID.png'
import mdpi from '../styles/imgs/mdpi.png'
import it from '../styles/imgs/it.jpg'
import nomad from '../styles/imgs/nomad.png'
import tribrs from '../styles/imgs/tribrs.jpg'
import muvsy from '../styles/imgs/muvsy.png'
import relive from '../styles/imgs/relive.jpg'
import machineLearning from '../styles/imgs/machineLearning.png'
import managment from '../styles/imgs/managment.jpg'

const Top = lazy(() => import('../components/top'))

export default function Home() {

  return <MuiThemeProvider theme={theme}>
    <Layout>
      <Head title="Blog" />

      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            Clipped drawer
        </Toolbar>
      </AppBar> */}


      {/* <Card className={classes.root}>
      <CardContent>
        
          Word of the Day
        
          adjective
        
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        
      </CardContent>
      <CardActions>
      </CardActions>
    </Card> */}

        <Suspense fallback={<></>}>
          <Top />
        </Suspense>

      <div className="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', verticalAlign: 'middle' }}>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <div className="main-container">

        <FloatCard />

        <main className="content" /* style={{ height: '50vh' }} */>

          <Grid container justify="center" className="container-entries">
            <Grid item xs={10}>
              <h1>About me</h1>
            </Grid>
            <Grid item container xs={10} justify="space-between">
              <Grid item xs={12} sm={12}>
                <Entry
                  title="Introduction"
                  desc={["I finished my Master's Degree in Electrical and Computers Engineering on Control and Decision systems. My dissertation falls in Machine Learning, more specifically in the development of a complete system for Anomaly detection in multivariate time series. The latter is known as METEOR and can be accessed freely. I always have active personal projects and hobbies to improve other skills outside work's scope.",
                   "Love building new things from scratch, from working with arduinos and electronic components to programming web apps. I like everything associated to Engineering and I'm passionate for History and Geography. I consider myself a fast learner, learning by doing and researching about the subject independently."]}
                  date=""
                  altV
                  /* image={react} */
                />
                {/* <Card
                  title="About me"
                  desc="I finished my Master's Degree in Electrical and Computers Engineering on Control and Decision systems. My dissertation falls in Machine Learning, more specifically in the development of a complete system for Anomaly detection in multivariate time series. The latter is known as METEOR and can be accessed freely.
                  I always have active personal projects and hobbies to improve other skills outside work's scope."
                  text="Love building new things from scratch, from working with arduinos and electronic components to programming web apps.
                  I like everything associated to Engineering and I'm passionate for History and Geography.
                  I consider myself a fast learner, learning by doing and researching about the subject independently. "
                /> */}
                {/* 
                
                - Portuguese
                - English
                - Spanish

                */}
              </Grid>
              <Grid item xs={12} sm={12}>
                <Entry
                  title="Interests"
                  desc={["I'm always interested in finding better ways of doing not only my work but anything else around me, most of the times by automating processes. Sometimes the secret is on improving existing features than introducing new ones. When handling any problem, I always try to find every solution possible and its outcomes. I've always had a passion for philosophy and culture, finding myself many times reading and learning about history and foreign tales. In my opinion, the best way to express ourselves is through music, which became a part of my life since little.",
                   "Most of my free time I spent programming my own projects and ideas as well as studying novelty subjects, keeping up to date with the ever changing world. Since little that I love gaming and music, which are the main ways I recharge my energy."]}
                  date=""
                  altV
                  /* image={react} */
                />
                {/* <Card
                  title="Interests"
                  desc="I'm always interested in finding better ways of doing not only my work but anything else around me, most of the times by automating processes.
                  Sometimes the secret is on improving existing features than introducing new ones.
                  When handling any problem, I always try to find every solution possible and its outcomes.
                  I've always had a passion for philosophy and culture, finding myself many times reading and learning about history and foreign tales.
                  In my opinion, the best way to express ourselves is through music, which became a part of my life since little."
                  text="Most of my free time I spent programming my own projects and ideas as well as studying novelty subjects, keeping up to date with the ever changing world.
                  Since little that I love gaming and music, which are the main ways I recharge my energy.
                  "
                /> */}
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <h1>Education</h1>
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              {/* Simbolo do Ist e link para site do IST */}
              <Entry
                title="IST | Master's Degree in Electrical and Computers Engineering"
                desc={["Major in Systems, Decision and Control & Minor in Computers", "Second Cycle's Average: 17", "MSc Dissertation mark: 19"]}
                date="2013 - 2018"
                secBtnTxt1 = "Academic Merit"
                secBtnTxt2 = "Msc Dissertation"
                secBtnLnk1 = "https://bit.ly/academic_merit"
                secBtnLnk2 = "https://bit.ly/jorgeserras_dissertation"
                secondBtn
                image={ist}
              />
            </Grid>
            {/* Academic Merit/Excellence: bit.ly/academic_merit */}
              {/* Master Dissertation: bit.ly/jorgeserras_dissertation */}


{/* De alguma maneira meter
 Wide set of completed online courses from frameworks to novelty technologies", 
 "Always find time to enhance your skills through self learning"
  */}

            <Grid item xs={10}>
              <h1>Main Skills</h1>
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Web Development"
                desc={["Major in Systems, Decision and Control & Minor in Computers", "Second Cycle's Average: 17"]}
                date=""
                image={react}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Machine Learning | Data Science"
                desc={["Major in Systems, Decision and Control & Minor in Computers", "Second Cycle's Average: 17"]}
                date=""
                image={machineLearning}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Team & Project Management"
                desc={["Major in Systems, Decision and Control & Minor in Computers", "Second Cycle's Average: 17"]}
                date=""
                image={managment}
              />
            </Grid>
            {/* 
            C Python Java MatLab Simulink LaTEX Arduino LabVIEW JS R
React Redux Computer Vision Linux Machine Learning PHP MySQL 

And much more

*/}


            <Grid item xs={10}>
              <h1>Main Experience</h1>
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Telecomunications Institute | Research Grant"
                desc={["Associated to the research/development of an outlier detection system from patients with cancer, integrated in project PERSEIDS. Supported by the Portuguese Foundation for Science and Technology, INESC-ID and projects PREDICT and MATISSE with funding from the European Union’s Horizon 2020."]}
                date="Oct. 2018 - Feb. 2019"
                secondBtn
                secBtnTxt1 = "Project code"
                secBtnTxt2 = "METEOR app"
                secBtnLnk1 = "https://bit.ly/DBNMeteor"
                secBtnLnk2 = "https://meteor.jorgeserras.com/"
                alt="Research Grant"
                icons={[rLang, python, java, javascript]}
                textBtn="OLISSIPO Project"
                linkBtn="https://cordis.europa.eu/project/id/951970"
                image={it}
              />
               {/* Funded by: Portuguese Foundation for Science and Technology (FCT) */}
               {/* bit.ly/jorgeserras_DBNOD */}
               {/* bit.ly/DBNMeteor */}

               {/* Maybe more things like those on old site */}

            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Machine Learning | Research Article"
                desc={["Article published at MDPI on the Research/Development of an outlier detection for multivariate time series using Dynamic Bayesian Networks based on the above research grant."]}
                date="Feb. 2019 - Feb. 2021"
                alt="Research Article"
                icons={[rLang, python, java, javascript, heroku]}
                secondBtn
                secBtnTxt1 = "ORCID"
                secBtnLnk1 = "https://orcid.org/0000-0002-9049-829X"
                textBtn="Research Article"
                linkBtn="https://doi.org/10.3390/app11041955"
                image={mdpi}
              />
               {/* Funded by: Portuguese Foundation for Science and Technology (FCT) */}
               {/* bit.ly/jorgeserras_DBNOD */}
               {/* bit.ly/DBNMeteor */}

               {/* Maybe more things like those on old site */}

            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Forall Phones | Front End Developer"
                desc={["Participated in building everything Front-End associated including an internal stock controller app (Opsify), Shopify Design and internal management apps using websockets for real time sales tracking and analytics. Constant improvement and support to increase Production efficiency by optimizing UX and minimizing time consumption."]}
                date="April 2019 - April 2020"
                alt="Forall"
                tags={[
                  {label: "Refurbished"}, {label: "Phones"}, {label: "Assembly Line"}, {label: "Industry"}, {label: "Production"}
                ]}
                icons={[react, redux, antd, javascript, heroku, shopify]}
                textBtn="Forall Website"
                linkBtn="https://forallphones.com"
                image={forall}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Nomad Card City | Full Stack Developer"
                desc={["Foreign startup with two products aiming at providing cashback rewards for customers through gamification. Nomad Card is a PWA webapp for local businesses (uses GeoLocation and QR scanning) while Tribrs is a Shopify app for online stores. All the Front-End and part ofBack-End was developed by myself being still an active project."]}
                date="Sep. 2019 - Present"
                alt="Nomad"
                icons={[react, materialUi, stripe, pwa, aws, nodejs, mongodb, mapbox, figma]}
                textBtn="Nomad app"
                linkBtn="https://app.nomadcard.city"
                image={nomad}
              /> 
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Tribrs | Front End Developer"
                desc={["Foreign startup with two products aiming at providing cashback rewards for customers through gamification. Nomad Card is a PWA webapp for local businesses (uses GeoLocation and QR scanning) while Tribrs is a Shopify app for online stores. All the Front-End and part ofBack-End was developed by myself being still an active project."]}
                date="Mar. 2020 - Present"
                alt="Tribrs"
                icons={[react, materialUi, stripe, javascript, aws, nodejs, mongodb, shopify, figma]}
                textBtn="Tribrs app"
                linkBtn="https://app.tribrs.com"
                image={tribrs}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Relive | Tech Lead"
                desc={["Leading the Tech Department of a Proptech startup aiming to provide a one-stop-shop real state experience. Our main platform is currently in WordPress while having several internal developed apps mainly for CRM and integrations with other agencies (Idealista, Imovirtual...)"]}
                date="May 2020 - Present"
                alt="Relive"
                icons={[wordpress, php, react, materialUi, heroku, postgresql, drive, nodejs, mongodb, javascript, cloudflare, analytics, slack, ruby, rails]}
                textBtn="Relive website"
                linkBtn="https://relive.pt"
                image={relive}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={10}>
              <Entry
                title="Muvsy | Founder & Tech Lead"
                desc={["Company started with the aim of revolutionizing the moving sector by providing an intuitive and simple experience to customers. Built all the Front-End while participating in the product definition. Project currently on standby due to COVID-19."]}
                date="Mar. 2020 - Aug. 2020"
                alt="Muvsy"
                icons={[react, materialUi, heroku, cloudflare, analytics, figma]}
                textBtn="Muvsy Dev website"
                linkBtn="https://dev-telog.muvsy.com"
                image={muvsy}
              />
            </Grid>
          </Grid>

        </main>

      </div>

      {/* Waves SVG */}
      <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#FFF">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Layout>
  </MuiThemeProvider>
}
