import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Features from "components/features/HorizontalWithAlternateImageAndText.js";
import Footer from "components/footers/MiniCenteredFooter";

export default () => (
  <AnimationRevealPage disabled>
    <Header />
    <Features />
    <Footer />
  </AnimationRevealPage>
);