import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <ContactUsForm 
        subheading = ""
        heading = "Registration"
      />
      <Footer />
    </AnimationRevealPage>
  );
};
