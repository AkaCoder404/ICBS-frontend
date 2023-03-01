import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

// Custom Components
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/svg/dot-pattern.svg";
import Iccm2019Src from "images/home/iccm2019.png";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import VideoTestSrc from "images/videos/HomePageTestVideo.mp4";

// Tailwind CSS Styles
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 md:py-12`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-5/12 flex-shrink-0 md:h-auto relative bg-white`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const TextContent = tw.div`text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const Statistics = tw.div`flex flex-col items-center block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left inline-block mr-5 sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;
const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

export default ({
  subheading = "Welcome",
  heading = (
    <>
      The <span tw="text-primary-500">9th</span> International Congress of
      Chinese Mathematicians(ICCM2022).
    </>
  ),
  description = "The 9th International Congress of Chinese Mathematicians will be held in Nanjing from 31 July to 5 August, 2022 (ICCM2022). It is jointly hosted by Southeast University,Nanjing Chi-Lin Technology Innovation Park and Yau Mathematical Sciences Center (YMSC) of Tsinghua University, Initiated by Professor Shing-Tung Yau, ICCM is a triennial event that brings together Chinese and overseas mathematicians to discuss current significant developments and explore future directions in both pure and applied mathematics. It is expected that about 2000 participants will attend ICCM2022. In the first two days, ICCM Awards will be announced at the ceremony, followed by the ICCM Forum and Distinguished Lectures. There will be lectures in various fields of mathematics and academic events for students in the rest of the program.",
  imageSrc = Iccm2019Src,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
}) => {
  const defaultStatistics = [
    {
      key: "Participants",
      value: "1000+",
    },
    {
      key: "Lectures",
      value: "300+",
    },
    {
      key: "Events",
      value: "10+",
    },
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {/* {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />} */}
          <ResponsiveVideoEmbed
            css={imageCss}
            url={VideoTestSrc}
            background="transparent"
          />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
