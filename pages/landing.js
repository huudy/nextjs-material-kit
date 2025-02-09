import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Camper Camp"
        // rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "primary"
        }}
        {...rest}
      />
      <Parallax filter responsive image="./img/camp.jpeg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Camper Camp.</h1>
              <h4>
                A nice and safe place for your camper or a car. You can stay for couple of hours, entire day or event the entire night. 
              </h4>
              <br />
              <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                See the prices
              </Button>
            </a>
          </Link>
          <Link href="/login">
                <a>
                  <Button
                    color="danger"
                    size="lg"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-play" />
                    Watch video
                  </Button>
                </a>
            </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection /> */}
          {/* <WorkSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
