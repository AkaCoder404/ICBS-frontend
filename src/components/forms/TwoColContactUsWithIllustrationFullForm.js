import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { useHistory } from "react-router-dom";
// import EmailIllustrationSrc from "images/email-illustration.svg";
import RegistrationImageSrc from "images/registration/registration.png"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0 invisible`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

// const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export default ({
  subheading = "Registration",
  heading = <>一键完成<span tw="text-primary-500">注册</span><wbr/>操作</>,
  description = <>Online Registration Deadline : To be announced...</>,
  submitButtonText = "Suspension of registration",
  // formAction = "/#/signup",
  formAction = "http://iccm.tsinghua.edu.cn/manager/user/register/",
  formMethod = "get",
  textOnLeft = true,
}) => {

  // eslint-disable-next-line
  let history = useHistory();
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const OnClickPoster = () => {
    // console.log("Click Poster");
    // // Navigate to the poster session page @ http://icbs.cn/postersession using navigate
    // history.push("/postersession");
    window.location.href = "http://icbs.cn/postersession";
  }
  
  
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={RegistrationImageSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <SubmitButton onClick={OnClickPoster} >Apply for the Poster Session</SubmitButton>

            {/* <Link href="/#/register"> View more </Link> */}
            <Form action={formAction} method={formMethod}>
              <Input type="email" name="email" placeholder="Email Address" />
              <Input type="text" name="name" placeholder="English Name" />
              <Input type="text" name="gender" placeholder="Gender" />
              <Textarea name="affiliation" placeholder="Affiliation" />
              <SubmitButton type="submit" disabled>{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
