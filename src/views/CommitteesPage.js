import React from "react";
// Custom Components
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
// import TabCard from "components/cards/TabCardBoy.js";
import TabCard from "components/custom/committeetabcards";
import Footer from "components/footers/MiniCenteredFooter";
// Constants
import { ScientificCommittee } from "utils/constants";

// const dataTabs = {
//   "Scientific Committee": [
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//   ],
//   "Executive Committee": [
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//   ],
//   "Organizing Committee": [
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//     {
//       title:'待定',
//       content:'To be announced...',
//       price:'To be announced...',
//     },
//   ],
// }

// function createCommitteeTabs() {
//   const dataTabs = []
//   dataTabs.push({
//     title: 'Scientific Committee',
//     content: ScientificCommittee.members
//   })
// }

const dataTabs1 = {
  "Scientific Committee": ScientificCommittee.members,
  "Executive Committee": [],
  "Organizing Committee": []
}


export default () => (
  <AnimationRevealPage disabled>
    <Header/>
    <TabCard
      heading = "Committee members"
      tabs = {dataTabs1}
    />
    <Footer />
  </AnimationRevealPage>
);