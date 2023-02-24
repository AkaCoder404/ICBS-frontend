//
import React from "react";
// import tw from "twin.macro";

// Custom Components
// import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
// import Features from "components/features/ImageAndTextAndTable.js";
import Footer from "components/footers/MiniCenteredFooter";
// import styled from "styled-components";
import Features from "components/features/HorizontalWithAlternateImageAndText.js";

// Images
// import ImageXiJiaoSrc from "images/logistics/zijin.png";
// import ImageWenJinSrc from "images/logistics/ss.png";

// Tailwind CSS Styles
// const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
// const Container = tw.div`relative`;
// const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
// const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center`;
// const Content = tw.div`flex flex-col items-center`;

// const Text = styled.div`
//   ${tw`text-lg  text-gray-800`}
//   div {
//     ${tw`items-center pt-5 pb-5 pl-24`}
//   }
//   table {
//     ${tw`border-separate border border-black border-2 `}
//   }
//   th {
//     ${tw`p-5`}
//   }
//   td {
//     ${tw`border-separate border border-black p-5`}
//   }
//   p {
//     ${tw`mt-2 leading-loose`}
//   }
//   h1 {
//     ${tw`text-3xl font-bold mt-10`}
//   }
//   h2 {
//     ${tw`text-2xl font-bold mt-8`}
//   }
//   h3 {
//     ${tw`text-xl font-bold mt-6`}
//   }
//   ul {
//     ${tw`list-disc list-inside`}
//     li {
//       ${tw`ml-2 mb-3`}
//       p {
//         ${tw`mt-0 inline leading-normal`}
//       }
//     }
//   }
// `;

// const SubheadingData = <p>
//   You can book by telephone 86-025-85208888 with consortium name “东南大学ICCM2022/Southeast University ICCM2022”, or by email reservations@novotelnanjingeast.com with filling the <Link href={"https://nas.tsinghua-furoc.com:5001/sharing/kwEjRUyLV"}>here</Link>.
// </p>

// Constants
// const CardData1 = [
//   {
//     turnleft: true,
//     imageSrc: ImageXiJiaoSrc,
//     title: "南京紫金山庄",
//     description:
//       <p>
//         南京紫金山庄坐落于紫金山山脚，是一所集山、水、城、林于一体的天然氧吧，山庄致力于打造一站式现代服务型综合机构，内设有大型宴会厅、会议室、康体馆、特色餐饮及多元化客房等现代化基础设施，是人工智能化时代下，引领国内外打造多位一体服务项目的先驱。
//         <br/>
//         The Purple Palace is a natural oxygen bar integrating mountains, water, city and forest , which is located at the foot of the Purple Mountain. It is committed to building a modern service type comprehensive institution. It has a large banquet hall, conference room, health and recreation hall, special dining room, diversified guest rooms and other modern infrastructure. It is a Leading domestic and international pioneer in building several integrated service projects under the age of AI.
//         <br/>
//         <br/>
//         <b>Address:</b>
//         <br/>
//         中国南京环陵路18号
//         <br/>
//         No.18 Huanling Road, Nanjing, China
//         <br/><br/>
//         <b>Telephone: </b>
//         025-84858888
//       </p>,
//     url: "https://nas.tsinghua-furoc.com:5001/sharing/DAHnDjs30"
//   },
// ];

// const CardData = [
//   {
//     turnleft: false,
//     imageSrc: ImageWenJinSrc,
//     title: "南京玄武苏宁诺富特酒店",
//     description:
//       <p>
//         南京玄武苏宁富特酒店位于南京玄武区苏宁大道9号，毗邻“金陵毓秀”的紫金山风景区，紧邻苏宁总部及时尚生活广场，四周交通网发达，是一座兼并深厚文化底蕴和现代科技感的高端商务酒店。
//         <br/>
//         Novotel is a high-end business hotel with culture and modern technology. It is located at No.9 Suning Avenue, Xuanwu District, Nanjing which is  adjacent to the Purple Mountain scenic area of “Jinling Yu Xiu”, close to Su Ning headquarters and fashion life square and surrounded by developed transportation network.
//         <br/><br/>
//         <b>Address:</b>
//         <br/>
//         江苏省南京市玄武区苏宁大道9号
//         <br/>
//         9, Suning Avenue, Xuanwu District, Nanjing City, Jiangsu Province
//         <br/><br/>
//         <b>Telephone: </b>
//         025-85208888
//       </p>,
//     url: "https://nas.tsinghua-furoc.com:5001/sharing/HsyNsmrcF"
//   },
// ];

export default () => (
  <AnimationRevealPage disabled>
    <Header />
    <Features 
      heading="Logistics"
    />
    {/* <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Overview Schedule</HeadingTitle>
          <HeadingDescription>
            日程安排
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
        <Text>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Schedule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td><p>To be announced...</p></td>
                  <td>TBD</td>
                  <td>To be announced... To be announced... To be announced... </td>
                </tr>
                <tr>
                <td><p>To be announced...</p></td>
                  <td>TBD</td>
                  <td>To be announced... To be announced... To be announced... </td>
                </tr>
                <tr>
                <td><p>To be announced...</p></td>
                  <td>TBD</td>
                  <td>To be announced... To be announced... To be announced... </td>
                </tr>
                <tr>
                <td><p>To be announced...</p></td>
                  <td>TBD</td>
                  <td>To be announced... To be announced... To be announced... </td>
                </tr>
                <tr>
                <td><p>To be announced...</p></td>
                  <td>TBD</td>
                  <td>To be announced... To be announced... To be announced... </td>
                </tr>
                <tr>
                <td><p>To be announced...</p></td>
                  <td>TBD</td>
                  <td>To be announced... To be announced... To be announced... </td>
                </tr>
              </tbody>
            </table>
          </div>
          </Text>
        </Content>
      </SingleColumn>
    </Container>
    <Features 
      heading = "Conference venue"
      subheading = "会场"
      cards = {CardData1}
    />
    <Features 
      heading = "Accommodation"
      subheading = {SubheadingData}
      cards = {CardData}
    /> */}
    <Footer />
  </AnimationRevealPage>
);