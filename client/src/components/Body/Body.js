import React from "react";
import "@fontsource/roboto";
import { CssBaseline } from "@material-ui/core";
import FirstContainer from "../Containers/FirstContainer";
import SecondContainer from "../Containers/SecondContainer";
import Newsletter from "../Containers/Newsletter";
import { TrustBadgeContainer } from "../Containers/TrustBadgeContainer";

function Body() {
  return (
    <section>
      <CssBaseline />
      {/* First container */}
      <FirstContainer />

      {/* Second Container */}
      <SecondContainer />

      {/* Third container */}
      <TrustBadgeContainer />

      {/* Fourth container */}
      <Newsletter />
    </section>
  );
}

export default Body;