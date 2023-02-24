import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import ImageBirkarSrc from "images/home/forum/Birkar.png"
import ImageFigalliSrc from "images/home/forum/Figalli.png"
import ImageFukayaSrc from "images/home/forum/Fukaya.png"
import ImageNicolaiSrc from "images/home/forum/Nicolai.png"
import ImageHughSrc from "images/home/forum/hugh.png"
import ImageDJSrc from "images/home/dl/dingjian.png"
import ImageLQJSrc from "images/home/dl/liuqiuju.png"
import ImageXZPSrc from "images/home/dl/xinzhouping.png"

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
// const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
// const CardImage = styled.div`
//   ${props => css`background-image: url("${props.imageSrc}");`}
//   ${tw`w-64 h-64 bg-contain bg-center rounded`}
// `

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
// const CardButton = tw(PrimaryButtonBase)`text-sm`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const Text = styled.div`
  ${tw`text-center text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
`;

export default ({
  heading = "ICCM Forum",
  subheading = "Speakers",
  description = "",
  cards = [
    // {
    //   imageSrc: ImageChenYuanSrc,
    //   position: "陈元",
    //   name: "Yuan CHEN",
    //   text: <p>十二届全国政协副主席、<br/>原国家开发银行董事长</p>
    // },
    // {
    //   imageSrc: ImageShenXiangYangSrc,
    //   position: "沈向洋",
    //   name: "Harry SHUM",
    //   text: <p>粤港澳大湾区数字经济<br/>研究院理事长、<br/>清华大学高等研究院教授</p>
    // },    
    // {
    //   imageSrc: ImageXueQiKunSrc,
    //   position: "薛其坤",
    //   name: "Qikun XUE",
    //   text: <p>中国科学院院士、<br/>南方科技大学校长</p>
    // },    
    {
      imageSrc: ImageBirkarSrc,
      position: "Caucher Birkar",
      name: "Caucher Birkar",
      text: <p>欧洲皇家学会院士、<br/>英国皇家学会院士、<br/>清华大学教授</p>
    },
    {
      imageSrc: ImageDJSrc,
      position: "Jian DING",
      name: "Jian DING",
      text: <p>北京大学教授</p>
    },
    {
      imageSrc: ImageFigalliSrc,
      position: "Alessio Figalli",
      name: "Alessio Figalli",
      text: <p>苏黎世联邦理工学院教授</p>
    },
    {
      imageSrc: ImageFukayaSrc,
      position: "Kenji Fukaya",
      name: "Kenji Fukaya",
      text: <p>日本学士院院士、<br/>纽约州立大学石溪分校教授</p>
    },
    {
      imageSrc: ImageLQJSrc,
      position: "Chiu-Chu Melissa Liu",
      name: "Chiu-Chu Melissa Liu",
      text: <p>哥伦比亚大学教授</p>
    },
    {
      imageSrc: ImageNicolaiSrc,
      position: "Nicolai Reshetikhin",
      name: "Nicolai Reshetikhin",
      text: <p>清华大学教授</p>
    },
    {
      imageSrc: ImageHughSrc,
      position: "Hugh Woodin",
      name: "Hugh Woodin",
      text: <p>美国艺术与科学学院院士、<br/>哈佛大学教授</p>
    },
    {
      imageSrc: ImageXZPSrc,
      position: "Zhouping XIN",
      name: "Zhouping XIN",
      text: <p>香港中文大学教授</p>
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <CardContainer key={index}>
              <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                <CardImageContainer imageSrc={card.imageSrc}>
                  <CardHoverOverlay
                    variants={{
                      hover: {
                        opacity: 1,
                        height: "auto"
                      },
                      rest: {
                        opacity: 0,
                        height: 0
                      }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Text><p>{card.text}</p></Text>
                    {/* <CardButton>Learn more</CardButton> */}
                  </CardHoverOverlay>
                </CardImageContainer>
              </Card>
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
              </CardContent>
            </CardContainer>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
