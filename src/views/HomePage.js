import React from "react";
import tw from "twin.macro";

// Custom Components
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Carousel from "components/hero/CarouselImage.js";
import MainFeature from "components/features/OneColVideoWithStats.js";
// import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid.js";
// import ProfileThreeColGrid5 from "components/cards/ProfileThreeColGrid5.js";                    //eslint-disable-line
// import ThreeColumnWithProfileImage from "components/testimonials/ThreeColumnWithProfileImage";  //eslint-disable-line
import Hosts from "components/cards/ThreeColContactDetails.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import Footer from "components/footers/MiniCenteredFooter";
import Header from "components/headers/light.js";

import { testimonials } from "../utils/constants";
import { host, organizers } from "../utils/constants";


// Tailwind CSS Styles

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

    {/* 主办方 */}
    <Hosts 
      cards={host}
      heading="主办方"
      subheading="Hosts"
      description="Hosts"
    />

    <Hosts
      cards={organizers}
      heading="承办方"
      subheading="Organizers"
      description="Organizers"
    ></Hosts>

    <Testimonial 
      testimonials={testimonials}
    />
    
    {/* 底部导航栏 */}
    <Footer/>
  </AnimationRevealPage>
);