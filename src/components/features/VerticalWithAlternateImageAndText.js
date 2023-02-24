import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/svg/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

// import Image1Src from "images/awards/MedalOfMathematicsAndAppliedMathematics.png"
// import ImageTestSrc from "images/awards/test.png";

import ImageGoldSrc from "images/awards/Gold.png"
import ImageSilverSrc from "images/awards/Silver.png"
import ImageChernPrizeSrc from "images/awards/ChernPrize.png"
import ImageInternationalSrc from "images/awards/International.png"


const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
// const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default ({
  heading = "Awards",
  subheading = "",
  cards = [
    {
      turnleft: false,
      imageSrc: ImageGoldSrc,
      // subtitle: "Paid",
      title: "ICCM Medal of Mathematics and Applied Mathematics",
      description:
        "The ICCM Medal of Mathematics is awarded to outstanding mathematicians of Chinese descent to encourage them in their pursuit of mathematical truth. Up to six medals, two gold and four silver, are awarded every three years at the International Congress of Chinese Mathematicians. The ICCM Medals also carry a cash award of US $25,000 for each of the gold medalists; and US $ 10,000 for each of the silver medalists. A committee of internationally renowned mathematicians, chaired by Professor Shing-Tung Yau, selects the medalists.In addition to the name of medalists, each gold and silver medal has the image of a Möbius band and a fundamental domain. They were chosen not only for the simplicity of the image, but also because of their significant contributions to the development of mathematics in 20th century.    The Möbius band (also known as the Möbius strip) was discovered in 1858 by the German mathematician and astronomer August Ferdinand Möbius. This curious one-sided surface does not have any orientation, yet has a distinct topographical character. It was one of the most important discoveries of the 20th century, which has profoundly influenced modern physics, classical physics as well as modern mathematics, including geometry.\nA fundamental domain is related to the concept of a group, which can be used to express symmetry in mathematics. During the late 19th century, infinite discrete group was studied but only until the 20th century, did it become a main subject area in mathematics. This field of study is not only important in geometry but also in number theory. Practically all the famous developments in modern number theory are related to concepts of fundamental domain and discrete group.",
      // url: "https://timerse.com"
    },

    {
      turnleft: true,
      imageSrc: ImageSilverSrc,
      // subtitle: "Free",
      title: "ICCM Medals of Mathematics Selection Committee",
      description:
        "The selection committee for the ICCM Medal of Mathematics is chaired by Professor Shing-Tung Yau. A nomination committee for the ICCM Medal of Mathematics, comprising a maximum of fifty Chinese mathematicians worldwide, nominates individuals based on their research, qualifications, and vita. Subsequently, the nomination committee submits the names of the nominated individuals, along with supporting materials, to the selection committee. After a thorough multi-step review, the selection committee, comprising leading mathematicians with diﬀerent research interest, makes a final decision. All the members of the selection committee, with the exception of the committee chair, are non-Chinese, thereby ensuring the independence and integrity of their decision.",
      // url: "https://timerse.com"
    },

    {
      turnleft: false,
      imageSrc: ImageChernPrizeSrc,
      // subtitle: "Exclusive",
      title: "The Chern Prize",
      description:
        "The Chern Prize in mathematics was established in 2001 in honor of Professor Shing-Shen Chern, one of the greatest geometers and Chinese mathematicians of the twentieth century. The Chern Prize is presented every three years to mathematicians of Chinese descent who have made exceptional contributions to mathematical research or to public service activities in support of mathematics.",
      // url: "https://timerse.com"
    },

    {
      turnleft: true,
      imageSrc: ImageInternationalSrc,
      // subtitle: "Free",
      title: "The ICCM International Cooperation Award",
      description:
        "The ICCM International Cooperation Award is presented to an individual who has promoted the development of mathematics in China, Hong Kong, and Taiwan through collaboration, teaching, and support of Chinese mathematicians. The inaugural award was presented at the Third International Congress of Chinese Mathematicians in 2004. The Selection Committee for the ICCM International Cooperation Award in 2004 was chaired by Professor Shing-Tung Yau, President of the International Congress of Chinese Mathematicians.",
      // url: "https://timerse.com"
    }
  ],
}) => {
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>
            {subheading}
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={card.turnleft}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                {/* <Subtitle>{card.subtitle}</Subtitle> */}
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>Learn more</Link> */}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
