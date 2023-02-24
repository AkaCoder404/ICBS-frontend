import React from "react";
import tw from "twin.macro";

// Custom Components
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Carousel from "components/hero/CarouselImage.js";
import MainFeature from "components/features/OneColVideoWithStats.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid.js";
// import ProfileThreeColGrid5 from "components/cards/ProfileThreeColGrid5.js";                    //eslint-disable-line
// import ThreeColumnWithProfileImage from "components/testimonials/ThreeColumnWithProfileImage";  //eslint-disable-line
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import Footer from "components/footers/MiniCenteredFooter";
import Header from "components/headers/light.js";

import OneColWithSteps from "components/features/OneColWithSteps.js";

import { MathematicsCard, TheoreticalPhysicsCard, TechnologyCard, FundamentalScienceAwardDesc2, BestPaperAwardTitle } from "utils/constants";
import { FundamentalScienceAwardTitle, FundamentalScienceAwardDesc, FundamentalScienceAwardRequirements } from "utils/constants";
import { BestPaperAwardDesc, BestPaperAwardDesc2, BestPaperAwardCategories } from "utils/constants";


// Tailwind CSS Styles
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`

export default () => (
  <AnimationRevealPage disabled>

    {/* {alert("2022年大会退费工作已截止，8月31日后不再接受退费申请!")} */}

    {/* 顶部导航栏 */}
    <Header/>

    <div style={{
      marginBottom: 10,
    }}></div>

    {/* 轮播图组件 */}
    <Carousel />

    {/* 左视频右文字组件 */}
    <MainFeature />

    {/* <HeadingInfoContainer>
        <HeadingTitle>Founders</HeadingTitle>
    </HeadingInfoContainer> */}
    
    <HeadingInfoContainer>
        <HeadingTitle>Awards</HeadingTitle>
    </HeadingInfoContainer>

    <OneColWithSteps 
      heading={FundamentalScienceAwardTitle}
      description={FundamentalScienceAwardDesc}
      description2 = {FundamentalScienceAwardDesc2}
      steps={FundamentalScienceAwardRequirements}
      subheading={"Award"}
    />

    <ProfileThreeColGrid 
      heading = "Mathematics"
      subheading = "Co-chaired by"
      description = ""
      cards = {MathematicsCard}
    />
    <ProfileThreeColGrid 
      heading = "Theoretical Physics"
      subheading = "Co-chaired by"
      description = ""
      cards = {TheoreticalPhysicsCard}
    />
    <ProfileThreeColGrid 
      heading = "Information Science and Technology"
      subheading = "Co-chaired by"
      description = ""
      cards = {TechnologyCard}
    />

  <OneColWithSteps 
      heading={BestPaperAwardTitle}
      description={BestPaperAwardDesc}
      description2 = {BestPaperAwardDesc2}
      steps={BestPaperAwardCategories}
      subheading={"Award"}
    />

    <Testimonial />
    {/* <ThreeColumnWithProfileImage /> */}

    {/* 底部导航栏 */}
    <Footer/>
  </AnimationRevealPage>
);