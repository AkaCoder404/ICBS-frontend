import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg/svg-decorator-blob-3.svg";

import ImageText1Src from "images/program/text1.png"; //eslint-disable-line
import ImageText2Src from "images/program/text2.png"; //eslint-disable-line
import ImageText3Src from "images/program/text3.png"; //eslint-disable-line

import ImageJiangPaiSrc from "images/news/JiangPai.png";
import ImageHeYingSrc from "images/news/HeYing.png";
import ImageJieChuSrc from "images/news/JieChu.png"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-12`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
// const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  heading = "Heading Text",
  subheading = "Our Expertise",
  blogPosts = [
    {
      imageSrc: ImageJiangPaiSrc,
      category: "ICCM数学奖往届获奖者回顾",
      title: "第八届世界华人数学家大会于北京时间6月9日上午9点在清华大学新清华学堂开幕。在上午举行的大会开幕式暨颁奖典礼上，2019年陈省身奖、国际合作奖和ICCM数学奖三大奖项将现场揭晓并予以颁发。",
      url: "https://mp.weixin.qq.com/s/rA_uZ31x6X_xy7kpiLNlLw"
    },
    {
      imageSrc: ImageHeYingSrc,
      category: "第七届世界华人数学家大会隆重开幕",
      title: "8月6日,由中国科学院数学与系统科学研究院、中国科学院晨兴数学中心和清华大学联合主办的第七届世界华人数学家大会在人民大会堂隆重开幕。大会主席是著名数学家丘成桐教授。",
      url: "http://www.amss.cas.cn/xwdt/zhxw/2016/201608/t20160808_4648703.html"
    },
    {
      imageSrc: ImageJieChuSrc,
      category: "第八届世界华人数学家大会杰出报告",
      title: "2019年6月10日-11日上午，沃尔夫奖获得者、美国加州大学理查德·舍恩院士，菲尔兹奖获得者、美国范德堡大学沃恩·琼斯院士等7位世界顶尖数学家在清华大学大礼堂作杰出报告。",
      url: "https://mp.weixin.qq.com/s/bsbScVUxHxCtB7ezM_H71g"
    }
  ],
}) => {
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
          {/* <HeadingDescription>{subheading}</HeadingDescription> */}
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                <Link href={post.url}>View more</Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
