import React from "react"
import { Link } from 'gatsby'
/* import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'; */
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider } from "@material-ui/core/styles"
import Layout from "../components/layout"
import Head from "../components/head"
import FloatCard from "../components/drawer"

import '../styles/index.scss'
import Top from "../components/top"
import Entry from "../components/entry"
import Card from "../components/card"
import theme from "../components/theme"


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

      <Top />

      <div class="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', verticalAlign: 'middle' }}>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <div style={{ display: 'flex' }}>


        <FloatCard />


        <main className="content" /* style={{ height: '50vh' }} */>

          <Grid container justify="center" className="container-entries">
            <Grid item xs={8}>
              <h1>Profile</h1>
            </Grid>
            <Grid item container xs={8}>
              <Grid item xs={4}>
                <Card
                  title="About me"
                  desc="DIY Enthusiast | Entrepeneur"
                  text="I finished my Master's Degree in Electrical and Computers Engineering at IST with focus on Control and Decision systems. My dissertation was associated to Machine Learning, more specifically in the development of a complete system for Anomaly detection in multivariate time series. The latter is known as METEOR and can be accessed freely through my personal website.
                  I always have active personal projects and hobbies to improve other skills outside the course's scope. Love building and inventing new things, like working with arduinos and electronic components aswell as programming Back-end and Front-end applications.
                  I basically like everything associated to Engineering and I'm also passionate for History and Geography.
                  I consider myself a fast learner, learning by doing and researching about the subject independently. "
                />
                {/* 
                
                - Portuguese
                - English
                - Spanish

                */}
              </Grid>
              <Grid item xs={4}>
                <Card
                  title="Interests"
                  desc="Tech | Music | Culture"
                  text="I finished my Master's Degree in Electrical and Computers Engineering at IST with focus on Control and Decision systems. My dissertation was associated to Machine Learning, more specifically in the development of a complete system for Anomaly detection in multivariate time series. The latter is known as METEOR and can be accessed freely through my personal website.
                  I always have active personal projects and hobbies to improve other skills outside the course's scope. Love building and inventing new things, like working with arduinos and electronic components aswell as programming Back-end and Front-end applications.
                  I basically like everything associated to Engineering and I'm also passionate for History and Geography.
                  I consider myself a fast learner, learning by doing and researching about the subject independently. "
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  title="Hobbies"
                  desc="Music | Programming | Gaming"
                  text="I finished my Master's Degree in Electrical and Computers Engineering at IST with focus on Control and Decision systems. My dissertation was associated to Machine Learning, more specifically in the development of a complete system for Anomaly detection in multivariate time series. The latter is known as METEOR and can be accessed freely through my personal website.
                  I always have active personal projects and hobbies to improve other skills outside the course's scope. Love building and inventing new things, like working with arduinos and electronic components aswell as programming Back-end and Front-end applications.
                  I basically like everything associated to Engineering and I'm also passionate for History and Geography.
                  I consider myself a fast learner, learning by doing and researching about the subject independently. "
                />
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <h1>Education</h1>
            </Grid>
            <Grid item xs={8}>
              {/* Simbolo do Ist e link para site do IST */}
              <Entry
                title="IST | Master's Degree in Electrical and Computers Engineering"
                desc="Major in Systems, Decision and Control / Minor in Computers, Second Cycle's Average: 17"
                date="2013 - 2018"
              />

              {/* Academic Merit/Excellence:
http://bit.ly/academic_merit */}

{/* Master Dissertation:
http://bit.ly/jorgeserras_dissertation */}

{/* Talk a bit about Thesis, Bolsa and Paper and why not PhD*/}

{/* Research Grant
Instituto de Telecomunicações & INESC-ID - Oct. 2018 / Feb. 2019
Associated to the research/development of an outlier detection system from
patients with cancer, integrated in project PERSEIDS funded by Portuguese
Foundation for Science and Technology (FCT). 

http://bit.ly/jorgeserras_DBNOD

*/}
            </Grid>

            <Grid item xs={8}>
              <h1>Main Skills</h1>
            </Grid>
            <Grid item xs={8}>
              <Entry
                title="IST | Electrical and Computer Engineering"
                desc="Major in Systems, Decision and Control / Minor in Computers, Second Cycle's Average: 17"
                date="2013 - 2018"
              />
            </Grid>
            {/* 
            C Python Java MatLab Simulink LaTEX Arduino LabVIEW JS R
React Redux Computer Vision Linux Machine Learning PHP MySQL 

And much more

*/}


            <Grid item xs={8}>
              <h1>Experience</h1>
            </Grid>
            <Grid item xs={8}>
              <Entry
                title="IST | Electrical and Computer Engineering"
                desc="Major in Systems, Decision and Control / Minor in Computers, Second Cycle's Average: 17"
                date="2013 - 2018"
              />
            </Grid>
            <Grid item xs={8}>
              <Entry
                title="Forall Phones | Front End Developer"
                desc="fsdfdsf  sdfdsf sdsd sdf sd sdf dsf sddssdf"
                date="April 2019 - April 2020"
              />
            </Grid>
          </Grid>

        </main>

      </div>

      {/* Waves SVG */}
      <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
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
