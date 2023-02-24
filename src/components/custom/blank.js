import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// Custom Components
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import OneColWithSteps from "components/features/OneColWithSteps.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid.js";

import {
  MathematicsCard,
  TheoreticalPhysicsCard,
  TechnologyCard,
  FundamentalScienceAwardDesc2,
  BestPaperAwardTitle,
} from "utils/constants";
import {
  FundamentalScienceAwardTitle,
  FundamentalScienceAwardDesc,
  FundamentalScienceAwardRequirements,
} from "utils/constants";
import {
  BestPaperAwardDesc,
  BestPaperAwardDesc2,
  BestPaperAwardCategories,
} from "utils/constants";

// Images
// import ImageGoldSrc from "images/awards/Gold.png"
// import ImageSilverSrc from "images/awards/Silver.png"
// import ImageChernPrizeSrc from "images/awards/ChernPrize.png"
// import ImageInternationalSrc from "images/awards/International.png"
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg/svg-decorator-blob-8.svg";

// Tailwind CSS
const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Content = tw.div`mt-0`;

// const Card = styled.div((props) => [
//   tw`mt-6 md:flex justify-center items-center`,
//   props.reversed ? tw`flex-row-reverse` : "flex-row",
// ]);
// const Image = styled.div((props) => [
//   `background-image: url("${props.imageSrc}");`,
//   tw`rounded-lg w-3/5 sm:w-1/4 md:w-5/12 lg:w-1/3 xl:w-2/5 flex-shrink-0 h-24 md:h-40 xl:h-64 bg-contain bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
// ]);
// const Details = tw.div`mt-4 md:mt-0 mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
// // const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
// const Title = tw.h4`text-3xl font-bold text-gray-900`;
// const Description = tw.p`mt-2 text-sm leading-loose`;
// const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const DecoratorBlob3 = styled(SvgDecoratorBlob3)`
    ${tw`pointer-events-none -z-20 absolute right-0 top-1/2 h-64 w-64 opacity-15 transform translate-x-1/2 text-primary-500`}
`;

export default ({ heading = "Awards", subheading = "" }) => {
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{subheading}</HeadingDescription>
        </HeadingInfoContainer>
        <Content>
          <OneColWithSteps
            heading={FundamentalScienceAwardTitle}
            description={FundamentalScienceAwardDesc}
            description2={FundamentalScienceAwardDesc2}
            steps={FundamentalScienceAwardRequirements}
            subheading={"Award"}
          />

          <ProfileThreeColGrid
            heading="Mathematics"
            subheading="Co-chaired by"
            description=""
            cards={MathematicsCard}
          />
          <ProfileThreeColGrid
            heading="Theoretical Physics"
            subheading="Co-chaired by"
            description=""
            cards={TheoreticalPhysicsCard}
          />
          <ProfileThreeColGrid
            heading="Information Science and Technology"
            subheading="Co-chaired by"
            description=""
            cards={TechnologyCard}
          />

          <OneColWithSteps
            heading={BestPaperAwardTitle}
            description={BestPaperAwardDesc}
            description2={BestPaperAwardDesc2}
            steps={BestPaperAwardCategories}
            subheading={"Award"}
          />
        </Content>
      </SingleColumn>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
      <DecoratorBlob3 />
    </Container>
  );
};
