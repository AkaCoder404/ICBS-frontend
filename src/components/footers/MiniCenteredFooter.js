import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {Container as ContainerBase } from "components/misc/Layouts.js"
// import logo from "../../images/logo.svg";
// import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
// import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
// import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";

import ImageErWeiMaSrc from "images/home/ErWeiMa.png"

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TwoColumns = tw.div`flex flex-wrap justify-evenly`;
// const Column = tw.div`w-1/2 mb-8 md:mb-5 text-sm sm:text-base text-center md:text-left`;
// const LinkList = tw.ul`mt-4 text-sm font-medium`;
// const LinkListItem = tw.li`mt-3`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
// const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
// const SocialLink = styled.a`
//   ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
//   svg {
//     ${tw`w-5 h-5`}
//   }
// `;

const CodeImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-32 h-32 bg-contain bg-center rounded`}
`

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            {/* <LogoImg src={logo} /> */}
            <LogoText>ICBS 2023</LogoText>
          </LogoContainer>
          <LinksContainer>
            <TwoColumns>
              {/* <Column>
              <LinkList>
              <LinkListItem> */}
              <Link href="/iccm2022/#/">Home</Link>
              {/* </LinkListItem>
              <LinkListItem> */}
              <Link href="/iccm2022/#/committees">Committees</Link>
              {/* </LinkListItem>
              <LinkListItem> */}
              <Link href="/iccm2022/#/awards">Awards</Link>
              {/* </LinkListItem>
              <LinkListItem> */}
              <Link href="/iccm2022/#/speakers">Speakers</Link>
              {/* </LinkListItem>
              <LinkListItem> */}
              <Link href="/iccm2022/#/program">Program</Link>
              {/* </LinkListItem>
              </LinkList>
              </Column>
              <Column>
              <LinkList>
              <LinkListItem> */}
              <Link href="/iccm2022/#/news">News</Link>
              {/* </LinkListItem>
              <LinkListItem> */}
              <Link href="/iccm2022/#/registration">Registration</Link>
              {/* </LinkListItem>
              <LinkListItem> */}
              <Link href="/iccm2022/#/logistics">Logistics</Link>
              {/* </LinkListItem>
              <LinkListItem> */}
              <Link href="/iccm2022/#/download">Download</Link>
              {/* </LinkListItem>
              </LinkList>
              </Column> */}
            </TwoColumns>
          </LinksContainer>
          <SocialLinksContainer>
            {/* <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink> */}
            <CodeImage imageSrc={ImageErWeiMaSrc} />
          </SocialLinksContainer>
          <CopyrightText>
            &copy; COPYRIGHT © 2023 ICBS
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
