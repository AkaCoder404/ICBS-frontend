import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro";   //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import SimpleWithSideImageFAQS from "components/faqs/SimpleWithSideImage.js";
// import Iframe from 'react-iframe' 

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
// const Email = tw.span`text-sm mt-6 block text-gray-500`;
// const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <SimpleWithSideImageFAQS/>
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "东南大学",
            description: (
              <>
                <Address>
                  <AddressLine>SOUTHEAST UNIVERSITY</AddressLine>
                  {/* <AddressLine>Endicott, NY 13760</AddressLine> */}
                </Address>
                {/* <Email>contact@iccm.com</Email>
                <Phone>+1 (203) 991-6988</Phone> */}
              </>
            )
          },
          {
            title: "清华大学",
            description: (
              <>
                <Address>
                  <AddressLine>TSINGHUA UNIVERSITY</AddressLine>
                  {/* <AddressLine>Dekalb, IL 60115</AddressLine> */}
                </Address>
                {/* <Email>contact@iccm.com</Email>
                <Phone>+1 (203) 991-6988</Phone> */}
              </>
            )
          },
          {
            title: "南京市麒麟科技创新园管委会",
            description: (
              <>
                <Address>
                  <AddressLine>NANJING CHI-LIN TECHNOLOGY INNOVATION PARK</AddressLine>
                  {/* <AddressLine>Sacramento, CA 95820</AddressLine> */}
                </Address>
                {/* <Email>contact@iccm.com</Email>
                <Phone>+1 (203) 991-6988</Phone> */}
              </>
            )
          }
        ]}
      />
      {/* <div> */}
        {/* <iframe src="https://surl.amap.com/QKyFwZO3To" width="100%" height="330px" frameborder="0" style="border:0" allowfullscreen></iframe> */}
        {/* <Iframe url="https://surl.amap.com/QKyFwZO3To"
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
      </div> */}
      <Footer />
    </AnimationRevealPage>
  );
};
