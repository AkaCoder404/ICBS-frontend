import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// Custom Components
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import OneColWithSteps from "components/features/OneColWithSteps.js";


import {
  FundamentalScienceAwardTitle,
  FundamentalScienceAwardDesc,
  FundamentalScienceAwardDesc2,
  FundamentalScienceAwardRequirements,
} from "utils/constants";

// Images
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg/svg-decorator-blob-8.svg";

// Tailwind CSS
const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Content = tw.div`mt-0`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;
const DecoratorBlob3 = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-1/2 h-64 w-64 opacity-15 transform translate-x-1/2 text-primary-500`}
`;

const PrimaryButton = tw(PrimaryButtonBase)`-mt-8 text-sm inline-block mx-auto md:mx-0`;

export default ({ 
  heading = "Awards", 
  subheading = "",
  primaryButtonText = "See Award List",
  primaryButtonUrl = "/#/awardslist",
}) => {
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

          <PrimaryButton as="a" href={primaryButtonUrl}>
            {primaryButtonText}
          </PrimaryButton>
        </Content>
      </SingleColumn>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
      <DecoratorBlob3 />
    </Container>
  );
};
