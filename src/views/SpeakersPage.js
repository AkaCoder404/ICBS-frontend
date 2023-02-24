import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import TabCard from "components/cards/TabCardBoy.js";
import Footer from "components/footers/MiniCenteredFooter";

const dataTabs = {
  "Distinguished Lectures": [
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
  ],
  "Plenary Lectures": [
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
  ],
  "Invited Lectures": [
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
  ],
  "Contributed Lectures": [
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
    {
      title:'待定',
      content:'To be announced...',
      price:'To be announced...',
    },
  ],
}

export default () => (
  <AnimationRevealPage disabled>
    <Header/>
    <TabCard
      heading = "Speaker"
      tabs = {dataTabs}
    />
    <Footer />
  </AnimationRevealPage>
);
