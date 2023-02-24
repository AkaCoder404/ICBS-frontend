import React from "react";
import tw from "twin.macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Feature from "components/features/TwoColWithButton.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Footer from "components/footers/MiniCenteredFooter";

import ImageBLHouSrc from "images/news/80Hou.png"
import ImageNvXingSrc from "images/news/NvXing.png"
import ImageJieChuSrc from "images/news/JieChu.png"
import ImageYMSCSrc from "images/news/YMSC.png"

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => (
  <AnimationRevealPage disabled>
    <Header/>
    <Feature
      subheading={<Subheading>相关活动信息</Subheading>}
      heading="世界华人数学家联盟决定以约翰·科茨院士命名ICCM国际合作奖"
      buttonRounded={false}
      primaryButtonUrl = "https://mp.weixin.qq.com/s/q7NwRtoCgUwavU2TGeDKew"
      primaryButtonText="View More"
      description = "2022年5月9日，英国皇家科学院院士、世界著名数论学家约翰·亨利·科茨（John Henry Coates）与世长辞。为纪念并感谢科茨教授自上世纪90年代以来为推动中国数学发展做出的突出贡献，世界华人数学家联盟决定，以这位杰出的数学家命名ICCM国际合作奖，即约翰·科茨国际合作奖。..."
      imageSrc = {ImageYMSCSrc}
      textOnLeft={false}
    />
    <Feature
      subheading={<Subheading>相关活动信息</Subheading>}
      heading="盘点第八届世界华人数学家大会80后牛人"
      buttonRounded={false}
      primaryButtonUrl = "https://mp.weixin.qq.com/s/5r7oxRgxjsWqj5bNNPLntA"
      primaryButtonText="View More"
      description = "数学大奖如菲尔兹奖、ICCM数学奖评选都有一个与其它学科奖项不同的特点，就是年龄限制，菲尔兹奖是40岁，ICCM奖为45岁，这一上限设置旨在鼓励更多年轻的数学家崭露头角，闯出自己的一片天地。这期推送就让我们来盘点一下出席本届大会的80后学术新秀，看他们如何风华正茂，指点数学江山。"
      imageSrc = {ImageBLHouSrc}
    />
    <Feature
      subheading={<Subheading>相关活动信息</Subheading>}
      heading="她们的数学梦——ICCM大会上的女性声音"
      buttonRounded={false}
      primaryButtonUrl = "https://mp.weixin.qq.com/s/fV0FppcCPZc-DBVYs5blTw"
      primaryButtonText="View More"
      description = "在今年的大会上，来自清华大学丘成桐数学科学中心的华人女数学家单芃教授获ICCM数学奖银奖；日本东北大学原子分子材料科学高等研究院院长小谷元子（Motoko Kotani）在科学技术前沿论坛上作主题演讲；德国柏林自由大学的伊莲娜·艾诺（Helene Esnault）教授作杰出报告；在大会34位受邀作大会“一小时报告”的报告人中，有7位是华人女数学家..."
      imageSrc = {ImageNvXingSrc}
      textOnLeft={false}
    />
    <Feature
      subheading={<Subheading>相关活动信息</Subheading>}
      heading="第八届世界华人数学家大会杰出报告"
      buttonRounded={false}
      primaryButtonUrl = "https://mp.weixin.qq.com/s/bsbScVUxHxCtB7ezM_H71g"
      primaryButtonText="View More"
      description = "2019年6月10日-11日上午，沃尔夫奖获得者、美国加州大学理查德·舍恩（Richard Schoen）院士，菲尔兹奖获得者、美国范德堡大学沃恩·琼斯（Vaughan Jones）院士等7位世界顶尖数学家在清华大学大礼堂作杰出报告。"
      imageSrc = {ImageJieChuSrc}
    />
    <Blog 
      heading = "往届回顾"
      subheading = "后续相关新闻，敬请期待"
    />
    <Footer />
  </AnimationRevealPage>
);