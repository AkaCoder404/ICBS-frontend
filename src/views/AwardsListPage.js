import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import TabCard from "components/custom/awardlisttabcards.js";
// import Features from "components/custom/table.js";
import Footer from "components/footers/MiniCenteredFooter";
import { BPAMathematicsSubjectCommittee, BPAMathematicsGlobalCommittee } from "utils/constants";

function createTabs() {
    const dataTabs = [];
    for (let i = 0; i < BPAMathematicsSubjectCommittee.length; i++) {
        const item = BPAMathematicsSubjectCommittee[i];
        dataTabs.push({
            title: item.name,
            content: item.people,
        });
    }
    return dataTabs;
}

function createTabs2() {
    const dataTabs = [];
    dataTabs.push({
      title: "Global Committee",
      content: BPAMathematicsGlobalCommittee,
    })
    return dataTabs;
}

const dataTabs = {
    "Subject Committee": createTabs(),
    "Global Committee":  createTabs2(),
  }
  

export default () => (
  <AnimationRevealPage disabled>
    <Header />
    <TabCard 
        heading = "Best Paper Awards Committee"
        tabs = {dataTabs}
    />
    <Footer />
  </AnimationRevealPage>
);