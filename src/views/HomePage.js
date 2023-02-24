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

import { MathematicsCard, TheoreticalPhysicsCard, TechnologyCard } from "utils/constants";

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
    
    <ProfileThreeColGrid 
      heading = "Mathematics"
      subheading = "Founders"
      description = ""
      cards = {MathematicsCard}
    />
    <ProfileThreeColGrid 
      heading = "Theoretical Physics"
      subheading = "Founders"
      description = ""
      cards = {TheoreticalPhysicsCard}
    />
    <ProfileThreeColGrid 
      heading = "Information Science and Technology"
      subheading = "Founders"
      description = ""
      cards = {TechnologyCard}
    />

    <HeadingInfoContainer>
        <HeadingTitle>Awards</HeadingTitle>
    </HeadingInfoContainer>


    <Testimonial />
    {/* <ThreeColumnWithProfileImage /> */}

    {/* 底部导航栏 */}
    <Footer/>
  </AnimationRevealPage>
);