import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { Subheading as SubheadingBase } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg/svg-decorator-blob-7.svg";

// import MenbersCard from "components/cards/ThreeColContactDetails.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardGroup = tw.div`display: inline-block mb-10 w-full`;
const CardHeader = tw(SubheadingBase)`text-center md:text-left`;
const CardHeaderDescription = tw.p`mt-2 text-sm text-gray-600 text-center md:text-left`;
const Cards = tw.div`flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0 h-40 w-72`;
// const CardImageContainer = styled.div`
//   ${props => css`background-image: url("${props.imageSrc}");`}
//   ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
// `;
// const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
// const CardRating = styled.div`
//   ${tw`mr-1 text-sm font-bold flex items-end`}
//   svg {
//     ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
//   }
// `;

// const CardHoverOverlay = styled(motion.div)`
//   background-color: rgba(255, 255, 255, 0.5);
//   ${tw`absolute inset-0 flex justify-center items-center`}
// `;
// const CardButton = tw(PrimaryButtonBase)`text-sm`;

// const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-xl font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-base font-medium text-gray-600 font-bold`;
const CardPrice = tw.p`mt-4 text-sm`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

// const Column = styled.div`
//   ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
// `;

export default ({ heading = "", tabs }) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((group, index2) => (
              <CardGroup key={index2}>
                <CardHeader>{group.title}  
                  { group.judges ? <CardHeaderDescription>{group.judges} Judges, {group.anonymous} Anonymous </CardHeaderDescription> : null }
                </CardHeader>
               
                <Cards>
                {group.content.map((item, index3) => (
                  <CardContainer key={index3}>
                    <Card
                      className="group"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <CardText>
                        <CardTitle>{item.name}</CardTitle>
                        <CardContent>{item.school_chinese}</CardContent>
                        <CardPrice>{item.school_english}</CardPrice>
                      </CardText>
                    </Card>
                  </CardContainer>
                ))}
                </Cards>
              </CardGroup>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
// const getRandomCards = () => {
//   const cards = [];

//   // Shuffle array
//   return cards.sort(() => Math.random() - 0.5);
// };
