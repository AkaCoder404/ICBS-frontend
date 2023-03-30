import React from "react";
import tw from "twin.macro";

// Custom Components
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
// import Features from "components/features/ImageAndTextAndTable.js";
import Footer from "components/footers/MiniCenteredFooter";
import styled from "styled-components";
// import Features from "components/features/HorizontalWithAlternateImageAndText.js";

// Images
// import ImageXiJiaoSrc from "images/logistics/zijin.png";
// import ImageWenJinSrc from "images/logistics/ss.png";

// Tailwind CSS Styles
// const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center`;
const Content = tw.div`flex flex-col items-center`;

const Text = styled.div`
  ${tw`text-lg  text-gray-800 mt-10`}
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
    ${tw`mt-2 leading-loose font-style: italic`}
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

// const SubheadingData = <p>
//   You can book by telephone 86-025-85208888 with consortium name “东南大学ICCM2022/Southeast University ICCM2022”, or by email reservations@novotelnanjingeast.com with filling the <Link href={"https://nas.tsinghua-furoc.com:5001/sharing/kwEjRUyLV"}>here</Link>.
// </p>



export default () => (
    <AnimationRevealPage disabled>
         <Header />
        <Container>
            <SingleColumn>
                <HeadingInfoContainer>
                    <HeadingTitle>Policy on Conflict of Interest - the Best Paper Award</HeadingTitle>
                    {/* <HeadingTitle>Policy on Conflict of Interest - the Best Paper Award</HeadingTitle> */}
                    <HeadingDescription>
                     The Best Paper Award
                    </HeadingDescription>
                </HeadingInfoContainer>
                <Content>
                    <Text>
                        <p>No individual shall nominate or recommend a paper he/she (co-)authors for a BPA award, while serving as a BPA committee member. The same applies to co-author(s) of said committee member. However, the paper in question may still be considered for a BPA by one selection committee or another, if it is nominated or recommended by someone other than its author(s). To strike a balance between the integrity of the selection process, and the interests of co-authors of a BPA paper, the following policy shall apply:</p>

                        <p>If the paper in question is recommended by one (or more) selection committee to enter the next round, the committee member who (co-)authored it can request (in writing to the co-chairs of the ICBS) to withdraw the paper from award consideration. The selection committee that has recommended that paper shall then be asked to consider the issue of balancing the interests of the other co-authors (if any) of that paper, against the appearance of possible conflict of interests. Upon careful consideration, this selection committee shall then decide if that paper should enter the next round for an award.</p>

                        <p>The ICBS reserves the right to revoke an award, if the ICBS determines that the process of nomination or recommendation of a paper for a BPA, has violated the policy stated above. The ICBS's decision on this shall be final.</p>
                    </Text>
                </Content>
            </SingleColumn>
        </Container>
        <Footer />
    </AnimationRevealPage>
);