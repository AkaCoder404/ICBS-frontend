import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
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
export default ({ 
  headingText = "Registration Info" 
  }) => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <div>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Registration Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Participant</p>
                    <p>(Professor, Associate Professor, Assistant Professor, Lecturer, Post-doc, Teacher or Others)</p>
                  </td>
                  <td><p>CNY 2000</p></td>
                </tr>
                <tr>
                  <td>
                    <p>Student</p>
                    <p>(Undergraduate, Postgraduate and Doctor)</p>
                  </td>
                  <td><p>CNY 600</p></td>
                </tr>
              </tbody>
            </table>
            </div>
            <h1>The registration fee includes</h1>
            <br/>
            <ul>
              <li><p>Access to the lectures</p></li>
              <li><p>Conference materials</p></li>
              <li><p>Lunches</p></li>
              <li><p>Dinners</p></li>
              <li><p>Coﬀee breaks etc</p></li>
              P.S. Accommodation not included
            </ul>

            <h1>Banquet</h1>
            {/* <p>Extra 200CNY for the conference banquet on 1 August 2022</p> */}
            <p>Participant: Extra 200CNY for the conference banquet on 1 August 2022</p>
            <p>Student: Included in registration fee</p>

            <h1>Payment Policies</h1>
            <p>Registration fee will be collected by the Tsinghua University online payment system.</p>
            <p>The system provides domestic payment service with Alipay, WeChat Pay and international payment with the bank of China (for oversea cardholders using MasterCard, Visa and JBC).</p>
            <p>No commission charge or extra charge for paying the registration fee.</p>
            <p>All payment must be made in CNY (China Yuan).</p>

            <h1>Cancellation Policies</h1>
            <p>Cancellation must be submitted through the congress email (iccm2022@tsinghua.edu.cn) by email. </p>
            <p>No refund for cancellation after 1st August 2022.</p>
            <p>Refund will be made uniformly in the following month after the conference.</p>
            <p>Cancellation request will be accepted via email only and must identify the registrant’s name and university along with the application.</p>

            <h1>Contact</h1>
            <p>Please contact us if you have any questions about the registration fee.</p>
            <p>Email: <a href="/#/download">iccm2022@mail.tsinghua.edu.cn</a></p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
