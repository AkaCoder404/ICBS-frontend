import React from "react";
import tw from "twin.macro";
// import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/svg/team-illustration-2.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import { ReactComponent as SvgDotPattern } from "images/svg/dot-pattern.svg";

const Container = tw.div`relative`;
// const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
// const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const OneColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-12`;
// const TextContent = tw.div`text-center md:text-left mb-10`;
// const TextColumn = styled(Column)(props => [
//   tw`md:w-6/12 mt-16 md:mt-0`,
// //   props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
// ]);

// const Image = styled.img(props => [
//   props.imageRounded && tw`rounded`,
//   props.imageBorder && tw`border`,
//   props.imageShadow && tw`shadow`
// ]);

// const DecoratorBlob = styled(SvgDotPattern)(() => [
//   tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
// ]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Steps = tw.ul`mt-12`;
const StepGroup = tw.div`display: inline-block w-full`;
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3  leading-loose text-sm text-gray-600 font-medium`;
const StepsButton = tw(PrimaryButtonBase)`ml-16 mt-4 w-80 text-sm`;
// const StepsButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300  mt-4 w-80 text-sm`;
export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  description2 = "",
  buttonTexts = [],
  urls = [],
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Register",
      description: "Create an account with us using Google or Facebook.",
    },
    {
      heading: "Download",
      description:
        "Browse and Download the template that you like from the marketplace.",
    },
    {
      heading: "Run",
      description:
        "Follow the instructions to setup and customize the template to your needs.",
    },
  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container>
      <OneColumn>
        {/* <TextColumn> */}
        <TextContent>
          <Subheading>{subheading}</Subheading>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
          <Steps>
            {steps.map((step, index) => (
              <StepGroup>
                <Step key={index}>
                  <StepNumber>
                    {(index + 1).toString().padStart(2, "0")}
                  </StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                    <StepDescription>{step.description}</StepDescription>
                  </StepText>
                </Step>
                {buttonTexts[index] ? (
                  <StepsButton><a style={{color: " #edf2f7"}} href={urls[index]}> {buttonTexts[index]} </a></StepsButton>
                ) : null}
              </StepGroup>
            ))}
          </Steps>
        </TextContent>
        {/* </TextColumn> */}
          { heading === "The Best Paper Award (BPA)" ? <a style={{color: 'blue'}} href="/#/bpapolicy"> Policy on Conflict of Interest </a> : null }
      </OneColumn>
    </Container>
  );
};
