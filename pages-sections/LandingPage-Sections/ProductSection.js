import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SettingsIcon from '@mui/icons-material/Settings';
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>See what we offer</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Camper Parking Lot"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={AirportShuttleIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="No Time Limit"
              description="You can stay as long as you want. No time limit just let"
              icon={AlarmOnIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Monitored 24/7"
              description="The parking lot is fully monitored for the entire stay of yours."
              icon={CameraOutdoorIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Monitored 24/7"
              description="The parking lot is fully monitored for the entire stay of yours."
              icon={CameraOutdoorIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Snack"
              description="The parking lot is fully monitored for the entire stay of yours."
              icon={IcecreamIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Service"
              description="The parking lot is fully monitored for the entire stay of yours."
              icon={SettingsIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
