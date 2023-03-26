import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg/svg-decorator-blob-7.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

// import ImageGoldSrc from "images/awards/Gold.png"
// import ImageSilverSrc from "images/awards/Silver.png"
// import ImageChernPrizeSrc from "images/awards/ChernPrize.png"
// import ImageInternationalSrc from "images/awards/International.png"


const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-6 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-lg w-3/5 sm:w-1/4 md:w-5/12 lg:w-1/3 xl:w-2/5 flex-shrink-0 h-24 md:h-40 xl:h-64 bg-contain bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
// const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Awards",
  subheading = "",
  cards = [],
}) => {
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>
            {subheading}
          </HeadingDescription>

          To be announced...
          {/* <Link href={"https://yauc.seu.edu.cn/2022/0701/c27546a413366/page.htm"}>新！ 第九届ICCM“创意本科论文奖” </Link>
          <Link href={"https://yauc.seu.edu.cn/2022/0701/c27546a413366/page.htm"}>NEW! The 9th ICCM Creative Undergraduate Thesis Award </Link> */}

        </HeadingInfoContainer>
        <Content>
           {cards.map((card, i) => (
            <div>
              <Card key={i} reversed={card.turnleft}>
                <Image imageSrc={card.imageSrc} />
              </Card>
              <Card key={i} reversed={card.turnleft}>
                <Details>
                {/* <Subtitle>{card.subtitle}</Subtitle> */}
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Link href={card.url}>Learn more</Link> */}
                </Details>
              </Card>
            </div>
          ))}
        </Content>
        <div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
      </SingleColumn>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
