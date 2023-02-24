// 
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// Custom Components
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";

// Images
import { ReactComponent as SvgDotPattern } from "images/svg/dot-pattern.svg";
import Iccm2019Src from "images/home/iccm2019.png";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import VideoTestSrc from "images/videos/icbs.mp4";


// const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
//   padding-bottom: 56.25% !important;
//   padding-top: 0px !important;
//   ${tw`rounded`}
//   iframe {
//     ${tw`rounded bg-black shadow-xl`}
//   }
// `;

const Container = tw.div`relative`;
// const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
// const HeadingTitle = tw.h5`font-bold text-primary-500`
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-10 md:py-12`;
const OneColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-12`;

const ImageColumn =  tw.div`flex-shrink-0 md:h-auto relative text-center flex flex-col items-center`;

const TextContent = tw.div`text-center md:text-left mb-10`;

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
      {/* The <span tw="text-primary-500">9th</span> International Congress of Chinese Mathematicians(ICCM2022). */}
      The first <span tw="text-primary-500">International Congress</span> in
      Basic Science (ICBS)
    </>
  ),
  description = (
    <p>
      The inaugural International Congress of Basic Science (ICBS) shall be held
      in Beijing during the week of July 16, 2023. This will be an annual
      conference funded and hosted by the Beijing City government, as part of an
      effort to strongly support and promote basic research in Sciences
      worldwide. The conference shall include three different major subjects:
      Mathematics, Theoretical Physics, Theoretical Computer and Information
      Science. To celebrate and honor achievements of the world's scientific
      community, two major awards — the Fundamental Science Lifetime Award, and
      the Best Paper Award, shall be announced at the conference, we expect to
      have 150+ distinguished speakers. We also expect leaders of China to
      present the grand awards. The award ceremonies and the conference will
      commence at the People's Hall of China on July 16.

      {/* will be held in Beijing in late July 2023. The ICBS is an academic event
      that brings together scientists around the world to discuss current
      significant development and explore future trend in Mathematics,
      Theoretical Physics and Information Science and Technology. The ICBS is
      initiated by Professor Shing-Tung Yau, and jointly hosted by the Beijing
      government, China Association for Science and Technology and ICBS. It is
      expected that about 800 participants will attend ICBS 2023, and
      Distinguished Lectures will be presented at the forum. The winners of the
      Fundamental Science Lifetime Awards and the Best Paper Awards will be
      announced at the ceremony.
      <br />
      The Lifetime Award is given for long lasting contributions that should
      have or expected to have impact for 30 years or more. It should be a
      result that can be called a pioneering contribution. The cited
      contributions should be presented and published in refereed physical
      journals.
      <br />
      The Best Paper Award will be given for an outstanding result in papers
      published in the last 5 years. Winners will be selected from various areas
      of Mathematics, Theoretical Physics and Information Science and
      Technology. Winners (authors of a winning paper) will receive prize, and a
      travel fund to travel to the ICBS. The selected award will be announced
      and thus validated only if one of the authors will be physically present
      at the ceremony. */}
    </p>
  ),
  imageSrc = Iccm2019Src,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
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
      <OneColumn>
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

         <ImageColumn>
          {/* {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />} */}
          <ResponsiveVideoEmbed css={imageCss}
              url = {VideoTestSrc}
              background = "transparent"
          />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
      </OneColumn>
    </Container>
  );
};
