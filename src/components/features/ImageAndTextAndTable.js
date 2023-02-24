import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/svg/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

import ImageXiJiaoSrc from "images/logistics/xijiao.png";
import ImageWenJinSrc from "images/logistics/wenjin.png";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center`;

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
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

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
      turnleft: true,
      imageSrc: ImageXiJiaoSrc,
      title: "Xĳiao Hotel",
      description:
        "XiJiao Hotel is located in Zhongguancun High-tech Development Zone, convenient to many universities including Tsinghua University and Peking University. This Beijing hotel has more than 400 guest rooms ranging from single rooms to suites equipped with satellite TVs, international direct dial telephones, Internet access and mini bars. On-site dining outlets serve Chinese, Japanese and Korean dishes. For business travelers, this Beijing hotel provides a business center and various well-equipped conference rooms. In terms of relaxation, guests can burn calories at the gym, pay a visit to the spa or go bowling.",
      url: "http://www.xijiao-hotel.com.cn"
    },
    {
      turnleft: false,
      imageSrc: ImageWenJinSrc,
      title: <p>Beĳing Wenjin<br/>International Hotel</p>,
      description:
        "Wenjin Hotel is located in TusPark which is known as “China’s Silicon Valley”, in the heart of Zhongguancun District, Beijing. The hotel borders Tsinghua University in the north, Peking University in the west, and very close to the Headquarters of Microsoft, Google and Sohu. It is close to the Summer Palace, also the Garden of Perfection and Brightness.",
      url: "http://www.wenjin.com.cn"
    },
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
                <Link href={card.url}>Learn more</Link>
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
