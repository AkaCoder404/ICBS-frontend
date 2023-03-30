import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; // eslint-disable-line

/*
 * 这是该项目的入口点组件。
 * 可以通过分别取消注释导入和导出行，将以下导出的默认 App 组件更改为任何预构建的登录页面组件。
 * 查看登陆页面组件之一以更好地了解如何导入和渲染不同的组件
 * （始终确保如果正在构建自己的页面，根组件应该是 AnimationRevealPage 组件。
 * 可以使用 disabled 属性禁用动画。
 *
 *
 */

/* 构建自定义页面，请使用 AnimationRevealPage 作为页面的包装组件 */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero 部分是页面上最顶部的部分,它也包含标题。
 * 所以你不需要 import headers
 * separately
 */

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
// import LoginPage from "pages/Login.js";
// import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

// import ComponentRenderer from "ComponentRenderer.js";
// import MainLandingPage from "MainLandingPage.js";
// import ThankYouPage from "ThankYouPage.js";

// Import Routes
import HomePage from "views/HomePage";
import CommitteesPage from "views/CommitteesPage";
import AwardsPage from "views/AwardsPage"
import AwardsListPage from "views/AwardsListPage";
import SpeakersPage from "views/SpeakersPage";
import ProgramPage from "views/ProgramPage";
import NewsPage from "views/NewsPage";
import RegistrationPage from "views/RegistrationPage";
import LogisticsPage from "views/LogisticsPage";
// import DownloadPage from "views/DownloadPage";
import RegisterInfoPage from "views/RegisterInfoPage";
import SignUpPage from "views/SignUpPage";
import LogInPage from "views/LogInPage";
import TBAPage from "views/TBAPage";
import BPAPolicyPage from "views/BPAPolicyPage";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // 如果您想禁用动画，只需在页面的组件中使用如下禁用的`prop` 
  // 返回 <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <Router>
      <Switch>
        {/* <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/thank-you">
          <ThankYouPage />
        </Route> */}
        <Route path="/committees"> <CommitteesPage/>  </Route>
        <Route path="/awards"> <AwardsPage/> </Route> 
        <Route path="/awardslist"> <AwardsListPage/> </Route>
        <Route path="/bpapolicy"> <BPAPolicyPage/> </Route>
        <Route path="/speakers"> <SpeakersPage/> </Route> 
        <Route path="/program"> <ProgramPage/> </Route> 
        <Route path="/news"> <NewsPage/> </Route> 
        <Route path="/registration"> <RegistrationPage/> </Route>
        <Route path="/logistics"> <LogisticsPage/> </Route>
        <Route path="/download"> <TBAPage/> </Route>
        <Route path="/register"> <RegisterInfoPage/> </Route>
        <Route path="/signup"> <SignUpPage/> </Route>
        <Route path="/login"> <LogInPage/> </Route>
        <Route path="/"> <HomePage /> </Route>

        {/* Special Pages */}
        {/* <Route path="/bpapolicy"> <BPAPolicyPage/> </Route> */}
      </Switch>
    </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;
// export default MainLandingPage;
