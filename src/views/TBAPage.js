import React from "react";
import tw from "twin.macro";
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import styled from "styled-components";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Content = tw.div`flex flex-col items-center`;

const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  div {
    ${tw`items-center pt-5 pb-5 pl-24`}
  }
  table {
    ${tw`border-separate border border-black border-2 `}
  }
  th {
    ${tw`p-5`}
  }
  td {
    ${tw`border-separate border border-black p-5`}
  }
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default () => (
  <AnimationRevealPage disabled>
    <Header />
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>To be announced...</HeadingTitle>
          {/* <HeadingDescription>
            日程安排
          </HeadingDescription> */}
        </HeadingInfoContainer>

        <Content>
        <Text>
          <div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          </Text>
        </Content>
      </SingleColumn>
    </Container>
    <Footer />
  </AnimationRevealPage>
);