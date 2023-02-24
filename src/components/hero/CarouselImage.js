import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Carousel from 'react-bootstrap/Carousel'

// Custom Components
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

// Images
// import VideoTestSrc from "images/home/HomePageTestVideo.mp4";
import CarouselImageSrc1 from "images/HomePage/carousel1.jpg"
// import CarouselImageSrc2 from "images/home/homepageimage2.jpg"
import CarouselImageSrc3 from "images/HomePage/carousel2.jpg"

// Tailwind CSS
// const StyledHeader = styled(Header)`
//   ${tw`mb-3`}
//   // ${tw`pt-8 max-w-none`}
//   // ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
//   //   ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
//   // }
//   // ${NavToggle}.closed {
//   //   ${tw`text-gray-100 hover:text-primary-500`}
//   // }
// `;
const Container = styled.div`
  ${tw`relative -mx-8 bg-center bg-cover`}
  // background-image: url(${CarouselImageSrc1});
`;

// const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-5`;  // 图像滤镜
// const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
// const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
// const LeftColumn = tw.div`flex flex-col items-center lg:block`;
// const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

// const Heading = styled.h1`
//   ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
//   span {
//     ${tw`inline-block mt-2`}
//   }
// `;

// eslint-disable-line
// const SlantedBackground = styled.span`
//   ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
//   &::before {
//     content: "";
//     ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
//   }
// `;

// const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

// const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

// const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
//   padding-bottom: 56.25% !important;
//   padding-top: 0px !important;
//   ${tw`rounded`}
//   iframe {
//     ${tw`rounded bg-black shadow-xl`}
//   }
// `;

// const getRandomCards = () => {
  
// }

export default () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImageSrc1}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImageSrc2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{fontSize: '3vw'}}>第九届世界华人数学家大会</h3>
            <p style={{fontSize: '2vw'}}>The 9th International Congress of Chinese Mathematicians</p>
          </Carousel.Caption>
        </Carousel.Item> */}

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CarouselImageSrc3}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Container>
  );
};
