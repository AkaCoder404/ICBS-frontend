import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import TabCard from "components/cards/TabCardBoy.js";
import Footer from "components/footers/MiniCenteredFooter";

const dataTabs = {
  "Scientific Committee": [
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
  "Executive Committee": [
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
  "Organizing Committee": [
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
      heading = "Committee members"
      tabs = {dataTabs}
    />
    <Footer />
  </AnimationRevealPage>
);