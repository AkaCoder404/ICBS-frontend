// Images
import ImageSHINGTUNGSrc from "images/people/SHINGTUNG.png";
import ImageCAUCHERSrc from "images/people/CAUCHER.png";
import ImageNICOLAISrc from "images/people/NICOLAI.png";
import ImageDAVIDSrc from "images/people/DAVID.jpg";
import ImageNIMASrc from "images/people/NIMA.jpg";
import ImageQIONGHAISrc from "images/people/QIONGHAI.jpg";
import ImageCHISrc from "images/people/CHI.jpg";
// import ImageQIUCHENGTONGSrc from "images/home/QiuChenTong.png"
import imageIVENSrc from "images/people/IVEN.jpg";

// Homepage card constants
const ShingTungYao = {
  imageSrc: ImageSHINGTUNGSrc,
  position: "丘成桐",
  name: "Shing-Tung Yau",
  text: "Fields Medal recipient of 1982.",
};

const CaucherBirkar = {
  imageSrc: ImageCAUCHERSrc,
  position: "Caucher Birkar",
  name: "Caucher Birkar",
  text: "Fields Medal recipient of 2018",
  school_chinese: "清华大学，中国",
  school_english: "Tsinghua University, China"
};

const NicolaiReshetikhin = {
  imageSrc: ImageNICOLAISrc,
  position: "Nicolai Reshetikhin",
  name: "Nicolai Reshetikhin",
  text: "Weyl-Wigner Award recipient of 2022",
};

const DavidGross = {
  imageSrc: ImageDAVIDSrc,
  position: "David Gross",
  name: "David Gross",
  text: "Nobel Laureate in Physics of 2004",
};

const NimaArkaniHamed = {
  imageSrc: ImageNIMASrc,
  position: "Nima Arkani-Hamed",
  name: "Nima Arkani-Hamed",
  text: "Breakthrough Prize recipient of 2012",
};

const QionghaiDai = {
  imageSrc: ImageQIONGHAISrc,
  position: "戴琼海",
  name: "Qionghai Dai",
  text: "A member of the Chinese Academy of Engineering",
};

const AndrewYao = {
  imageSrc: ImageCHISrc,
  position: "姚期智",
  name: "Andrew Yao",
  text: "Turing Prize recipient of 2000",
};

export const MathematicsCard = [
  CaucherBirkar,
  NicolaiReshetikhin,
  ShingTungYao,
];
export const TheoreticalPhysicsCard = [
  DavidGross,
  NimaArkaniHamed,
  ShingTungYao,
];
export const TechnologyCard = [QionghaiDai, AndrewYao, ShingTungYao];

// export const DistinguishedCard = [
//   {
//     imageSrc: ImageBirkarSrc,
//     position: "Caucher Birkar",
//     name: "Caucher Birkar",
//     text: (
//       <p>
//         欧洲皇家学会院士、
//         <br />
//         英国皇家学会院士、
//         <br />
//         清华大学教授
//       </p>
//     ),
//     link: (
//       <a href="https://nas.tsinghua-furoc.com:5001/sharing/RXW6f5Joq">PPT</a>
//     ),
//   },
//   {
//     imageSrc: ImageDJSrc,
//     position: "Jian DING",
//     name: "Jian DING",
//     text: <p>北京大学教授</p>,
//     link: (
//       <a href="https://nas.tsinghua-furoc.com:5001/sharing/4D1m4HN3k">PPT</a>
//     ),
//   },
//   {
//     imageSrc: ImageFigalliSrc,
//     position: "Alessio Figalli",
//     name: "Alessio Figalli",
//     text: <p>苏黎世联邦理工学院教授</p>,
//     link: (
//       <a href="https://nas.tsinghua-furoc.com:5001/sharing/PoZIRkHCI">PPT</a>
//     ),
//   },
//   {
//     imageSrc: ImageFukayaSrc,
//     position: "Kenji Fukaya",
//     name: "Kenji Fukaya",
//     text: (
//       <p>
//         日本学士院院士、
//         <br />
//         纽约州立大学石溪分校教授
//       </p>
//     ),
//     link: "PPT",
//   },
//   {
//     imageSrc: ImageMKSrc,
//     position: "MARK KISIN",
//     name: "MARK KISIN",
//     text: <p>哈佛大学教授</p>,
//     link: (
//       <a href="https://nas.tsinghua-furoc.com:5001/sharing/oBlxdUnXG">PPT</a>
//     ),
//   },
//   {
//     imageSrc: ImageLQJSrc,
//     position: "Chiu-Chu Melissa Liu",
//     name: "Chiu-Chu Melissa Liu",
//     text: <p>哥伦比亚大学教授</p>,
//     link: (
//       <a href="https://nas.tsinghua-furoc.com:5001/sharing/2EijKuUVa">PPT</a>
//     ),
//   },
//   {
//     imageSrc: ImageNicolaiSrc,
//     position: "Nicolai Reshetikhin",
//     name: "Nicolai Reshetikhin",
//     text: <p>清华大学教授</p>,
//     link: (
//       <a href="https://nas.tsinghua-furoc.com:5001/sharing/z6Hj6HTeB">PPT</a>
//     ),
//   },
//   {
//     imageSrc: ImageHughSrc,
//     position: "Hugh Woodin",
//     name: "Hugh Woodin",
//     text: (
//       <p>
//         美国艺术与科学学院院士、
//         <br />
//         哈佛大学教授
//       </p>
//     ),
//     link: (
//       <a href="https://nas.tsinghua-furoc.com:5001/sharing/qEA3WbQ27">PPT</a>
//     ),
//   },
//   {
//     imageSrc: ImageXZPSrc,
//     position: "Zhouping XIN",
//     name: "Zhouping XIN",
//     text: <p>香港中文大学教授</p>,
//     link: (
//       <a href="https://nas.tsinghua-furoc.com:5001/sharing/CZ1PYl9Zc">PPT</a>
//     ),
//   },
// ];

// Awards Information
// The Fundamental Science Award
export const FundamentalScienceAwardTitle =
  "The Fundamental Science Lifetime Award (FSLA)";
export const FundamentalScienceAwardDesc = (
  <>
    <p>
      A Fundamental Science Lifetime Award is conferred on one individual, who
      has made fundamental and deeply influential contributions to basic
      science. The work that is cited for this award must be widely considered
      or expected to have great impact on its subject for at least 30 years. It
      must also be a contribution that is widely considered pioneering. The
      cited contributions must have been presented and published in refereed
      journals. A FSLA recipient is invited to, and must be present, at the ICBS
      to accept the award in person. The value of a FSLA is 8 million RMB.
    </p>
    <br />
    <p>A nomination for a FSLA should include the following:</p>
  </>
);
export const FundamentalScienceAwardRequirements = [
  {
    heading: "Letter of Nomination",
    description:
      "A letter of nomination, including reasons that the nominee deserves the award, and a summary of the nominee's scientific contributions.",
  },
  {
    heading: "CV",
    description: "The CV of the nominee.",
  },
  {
    heading: "Supporting Letters",
    description: "Supporting letters (up to 5).",
  },
  {
    heading: "Scientific Achievements",
    description:
      "A citation of the nominee's scientific achievements, about 50 words.",
  },
  {
    heading: "Abstract",
    description:
      "An abstract of nominee's research contributions, about 200 words.",
  },
];
export const FundamentalScienceAwardDesc2 = (
  <>
    <p>
      The year 2023 shall be the inaugural year for the FSLA in Mathematics and
      in Theoretical Computer and Information Sciences. The award shall be
      announced in Spring 2023, and presented at the ICBS in Beijing in July
      2023.
    </p>
  </>
);

// The Best Paper Award
export const BestPaperAwardTitle = "The Best Paper Award (BPA)";
export const BestPaperAwardDesc =
  "A Best Paper Award is conferred to a paper for outstanding results in basic sciences, published in the last five years. Winners shall be selected from 36 categories in three basic science subjects: Mathematics, Theoretical Physics, and Theoretical Computer and Information Science. These categories include";

export const BestPaperAwardDesc2 = (
  <>
    <p>
      Each year, recipients of a Best Paper Award winning paper shall be invited
      to lecture at the International Congress of Basic Science, to be held in
      Beijing in the summer of that year. At least one author of the paper must
      be present at the ICBS, to accept the award. Upon the acceptance of the
      award, authors of a winning paper shall receive a total sum of USD25,000.
      Details of the rules and regulations governing this award and
      disbursements of funds are stated in an award notification. The year 2023
      shall be the inaugural year for the BPA. Awards shall be announced in
      Spring 2023, and presented at the ICBS in Beijing in July 2023.
    </p>
  </>
);

export const BestPaperAwardCategories = [
  {
    heading: "Mathematics",
    description:
      "Combinatorics, Discrete Geometry, and Graph theory, Mathematical Logic, Foundations and Category Theory, Number Theory, Commutative Algebra and Algebraic Geometry, Homological Algebra, K-Theory and Noncommutative Algebra, One and Several variables, Complex Dynamical Syste, Ordinary Differential Equations and Special Functions, D Module, Partial Differential Equations, Dynamics Systems, Ergodic Theory and Diophantine Approximation, Fourier Analysis and Harmonic Analysis, Functional Analysis and Operator Theory, Calculus of Variations and Optimal Control, General Relativity, Geometric Analysis, Algebraic and Geometric Topology, Symplectic and Differential Topology, Probability Theory and Stochastic Processes, Statistics, Numerical Analysis and Scientific Computation, Differential Geometry, Lie Theory and Representation Theory, Mathematics of String Theory and Condensed Matter",
  },
  {
    heading: "Theoretical Physics",
    description:
      "Quantum Field Theory, String Theory and Quantum Gravity, Condensed Matter, General Relativity and Quantum Cosmology",
  },
  {
    heading: "Theoretical Computer and Information Science",
    description:
      "Artificial Intelligence, Robotics Science and System, Signal Processing, Theoretical Computer Science, Graphics and Geometric Computing, Biophotonics, Cryptography and Information Security, Bioinformatics, Computational Optics, and Big Data Technology",
  },
];

// Testimonials
export const testimonials = [
  {
    imageSrc: ImageSHINGTUNGSrc,
    quote:
      "Welcome to the International Congress of Basic Science. Best minds around the world will come together this July to understand the fundamental science in nature. We hope Best Paper Award will set a standard for the field of fundamental science，including mathematics, physics, computer science and engineer. We will give grand awards to major leaders of the fundamental science. ",
    customerName: "Shing-Tung Yau",
    customerTitle: "Chair professor of Tsinghua University",
  },
  {
    imageSrc: ImageCAUCHERSrc,
    quote:
      "The International Congress of Basic Science is different from any other events. It's not just a gathering of big names. Top researchers from mathematics, physics, computer science, technology will discuss their current and top-quality work. I encourage young people and researchers to attend this event either online or in person. ",
    customerName: "Caucher Birkar",
    customerTitle: "Professor of Tsinghua University",
  },
  {
    imageSrc: imageIVENSrc,
    quote:
      "The International Congress of Basic Science will be the first major scientific gathering of researchers from many countries of different ages since the pandemic. It's a major opportunity to meet new mathematics and learn about recent development.",
    customerName: "Iven Fesenko",
    customerTitle: "Number Theory Mathematician",
  },
];

// Host and Organizers
export const host = [
  {
    title: "北京市人民政府",
    description: "The People's Government of Beijing Municipality",
  },
  {
    title: "中国科学技术协会",
    description: "China Association for Science and Technology",
  },
  {
    title: "世界华人数学家大会联盟",
    description: "International Consortium of Chinese Mathematicians",
  },
];

export const organizers = [
  {
    title: "北京市科学技术委员会",
    description: "Beijing Municipal Science & Technology Commission",
  },
  {
    title: "中关村科技园区管理委员会",
    description: "Administrative Commission of Zhongguancun Science Park",
  },
  {
    title: "北京市科学技术协会",
    description: "Beijing Association for Science and Technology",
  },
  {
    title: "北京市怀柔区人民政府",
    description: "Huairou District People's Government of Beijing Municipality",
  },
  {
    title: "北京怀柔科学城管理委员会",
    description: "Beijing Huairou National Comprehensive Science Center",
  },
  {
    title: "清华大学丘成桐数学科学中心",
    description: "Yau Mathematical Sciences Center, Tsinghua University",
  },
  {
    title: "北京雁栖湖应用数学研究院",
    description:
      "Yanqi Lake Beijing Institute of Mathematical Sciences and Applications",
  },
];

// 数学方向委员会名单
// Subject Committe of Best Paper Award (Mathematics)*

// function person(name, school_chinese, school_english) {
//   return {
//     "name": name,
//     "school_chinese": school_chinese,
//     "school_english": school_english
//   }
// }

const BennySudakov = {
  name: "Benny Sudakov",
  school_chinese: "苏黎世联邦理工学院",
  school_english: "ETH Zurich, Switzerland",
};

const MichaelKrivelevich = {
  name: "Michael Krivelevich",
  school_chinese: "以色列特拉维夫大学",
  school_english: "Tel Aviv University, Israel",
};

const AlexanderBobenko = {
  name: "Alexander Bobenko",
  school_chinese: "德国柏林工业大学",
  school_english: "Technische Universität, Germany",
};

const PaulHorn = {
  name: "Paul Horn",
  school_chinese: "美国丹佛大学",
  school_english: "University of Denver, USA",
};

// 2
const TheodoreSlaman = {
  name: "Theodore Slaman",
  school_chinese: "美国加州大学圣地亚哥分校",
  school_english: "University of California, Berkely, USA",
};

const WilliamHughWoodin = {
  name: "William Hugh Woodin",
  school_chinese: "美国哈佛大学",
  school_english: "Harvard University, USA",
};

const ChiTatChong = {
  name: "Chi Tat Chong",
  school_chinese: "新加坡国立大学",
  school_english: "National University of Singapore, Singapore",
};

const AndreasWeiermann = {
  name: "Andreas Weiermann",
  school_chinese: "荷兰根特大学",
  school_english: "Universiteit Gent, Holland",
};

// 3
const PierreColmez = {
  name: "Pierre Colmez",
  school_chinese: "法国国家科学研究中心",
  school_english: "Centre national de la recherche scientifique, France",
};

const DipendraPrasad = {
  name: "Dipendra Prasad",
  school_chinese: "印度塔塔基础研究所",
  school_english: "Tata Institute of Fundamental Research, India",
};

const SugWooShin = {
  name: "Sug Woo Shin",
  school_chinese: "美国加利福尼亚大学伯克利分校",
  school_english: "University of California, Berkely, USA",
};

// 4
const FedorBogomolov = {
  name: "Fedor Bogomolov",
  school_chinese: "美国纽约大学",
  school_english: "New York University, USA",
};

const VyacheslavShokurov = {
  name: "Vyacheslav Shokurov",
  school_chinese: "美国约翰霍普金斯大学",
  school_english: "Johns Hopkins University, USA",
};

const SpencerBloch = {
  name: "Spencer Bloch",
  school_chinese: "美国芝加哥大学",
  school_english: "University of Chicago, USA",
};

const ChristopherDerekHacon = {
  name: "Christopher Derek Hacon",
  school_chinese: "美国犹他大学",
  school_english: "University of Utah, USA",
};

const CarlosSimpson = {
  name: "Carlos Simpson",
  school_chinese: "法国蔚蓝海岸大学",
  school_english: "Université Côte d'Azur, France",
};

// 5
const YanSoibelman = {
  name: "Yan Soibelman",
  school_chinese: "美国堪萨斯州立大学",
  school_english: "Kansas State University, USA",
};

const BernhardKeller = {
  name: "Bernhard Keller",
  school_chinese: "巴黎城市大学",
  school_english: "City University of Paris, France",
};

const AlexyBondal = {
  name: "Alexy Bondal",
  school_chinese: "俄罗斯科学院",
  school_english: "Russian Academy of Sciences, Moscow",
};

// 6
const NgaimingMok = {
  name: "Ngaiming Mok",
  school_chinese: "香港大学，中国香港",
  school_english: "The University of Hong Kong, Hong Kong, China",
};

const DuongHongPhong = {
  name: "Duong Hong Phong",
  school_chinese: "美国哥伦比亚大学",
  school_english: "Columbia University, USA",
};

const BoBerndtsson = {
  name: "Bo Berndtsson",
  school_chinese: "瑞典查哥德堡大学",
  school_english: "University of Gothenburg, Sweden",
};

// 7
const MasatoshiNoumi = {
  name: "Masatoshi Noumi",
  school_chinese: "日本神户大学",
  school_english: "Kobe University, Japan",
};

const ShinobuHosono = {
  name: "Shinobu Hosono",
  school_chinese: "日本学习院大学",
  school_english: "Gakushuin University, Japan",
};

const BongLian = {
  name: "Bong Lian",
  school_chinese: "美国布兰迪斯大学",
  school_english: "Brandeis University, USA",
};

// 8
const ZhoupingXin = {
  name: "Zhouping Xin",
  school_chinese: "香港中文大学，中国香港",
  school_english: "The Chinese University of Hong Kong, Hong Kong, China",
};
const XuJiaWang = {
  name: "Xu-Jia Wang",
  school_chinese: "澳大利亚国立大学",
  school_english: "Australian National University, Australia",
};
const IgorRodnianski = {
  name: "Igor Rodnianski",
  school_chinese: "美国普林斯顿大学",
  school_english: "Princeton University, USA",
};
const WilhelmSchlag = {
  name: "Wilhelm Schlag",
  school_chinese: "美国耶鲁大学",
  school_english: "Yale University, USA",
};
const YanGuo = {
  name: "Yan Guo",
  school_chinese: "美国布朗大学",
  school_english: "Brown University, USA",
};

const ChenGuiQiang = {
  name: "Chen Gui-Qiang",
  school_chinese: "英国牛津大学",
  school_english: "University of Oxford, UK",
};

// 9
const AntonZorich = {
  name: "Anton Zorich",
  school_chinese: "巴黎7学",
  school_english: "University of Paris 7, France",
};
const ShrikrishnaGopalraoDani = {
  name: "Shrikrishna Gopalrao Dani",
  school_chinese: "印度孟买大学",
  school_english: "University of Mumbai Campus, India",
};
const NikolayMoshchevitin = {
  name: "Nikolay Moshchevitin",
  school_chinese: "俄罗斯莫斯科罗蒙诺索夫州立大学",
  school_english: "Moscow Lomonosov State University, Russia",
};
const VitalyBergelson = {
  name: "Vitaly Bergelson",
  school_chinese: "美国俄亥俄州立大学",
  school_english: "The Ohio State University, USA",
};
const BassamFayad = {
  name: "Bassam Fayad",
  school_chinese: "美国马里兰大学",
  school_english: "University of Maryland, USA",
};

// 10
const ChristopherSogge = {
  name: "Christopher Sogge",
  school_chinese: "美国约翰霍普金斯大学",
  school_english: "Johns Hopkins University, USA",
};
const GuozhenLu = {
  name: "Guozhen Lu",
  school_chinese: "美国康涅狄格大学",
  school_english: "University of Connecticut, USA",
};

const YannickSire = {
  name: "Yannick Sire",
  school_chinese: "约翰霍普金斯大学",
  school_english: "Johns Hopkins University, USA",
};

const AlexIosevich = {
  name: "Alex Iosevich",
  school_chinese: "美国罗彻斯特大学",
  school_english: "University of Rochester, USA",
};

const ChangxingMiao = {
  name: "Changxing Miao",
  school_chinese: "北京应用物理与计算数学研究所",
  school_english:
    "Institute of Applied Physics and Computational Mathematics, China",
};

// 11
const YasuyukiKawahigashi = {
  name: "Yasuyuki Kawahigashi",
  school_chinese: "日本东京大学",
  school_english: "University of Tokyo, Japan",
};

const GuoliangYu = {
  name: "Guoliang Yu",
  school_chinese: "美国德州农工大学",
  school_english: "Texas A&M University, USA",
};

const GeorgeArthurElliott = {
  name: "George Arthur Elliott",
  school_chinese: "加拿大多伦多大学",
  school_english: "University of Toronto, Canada",
};

// 12
const TristanCollins = {
  name: "Tristan Collins",
  school_chinese: "美国麻省理工学院",
  school_english: "Massachusetts Institute of Technology, USA",
};

const CamilloDeLellis = {
  name: "Camillo De Lellis",
  school_chinese: "美国高级研究所",
  school_english: "Institute for Advanced Study, USA",
};

const AlessioFigalli = {
  name: "Alessio Figalli",
  school_chinese: "瑞士苏黎世大学",
  school_english: "ETH Zurich, Switzerland",
};

const JunchengWei = {
  name: "Juncheng Wei",
  school_chinese: "加拿大不列颠哥伦比亚大学",
  school_english: "University of British Columbia, Canada",
};

// 13
const PiotrChrusciel = {
  name: "Piotr Chrusciel",
  school_chinese: "奥地利维也纳大学",
  school_english: "University of Vienna, Austria",
};

const LarsAndersson = {
  name: "Lars Andersson",
  school_chinese: "德国马克斯·普朗克引力物理研究所",
  school_english: "Max Planck Institute for Gravitational Physics, Germany",
};

const SergiuKlainerman = {
  name: "Sergiu Klainerman",
  school_chinese: "美国普林斯顿大学",
  school_english: "Princeton University, USA",
};
const RobertWald = {
  name: "Robert Wald",
  school_chinese: "美国芝加哥大学",
  school_english: "University of Chicago, USA",
};
const LanhsuanHuang = {
  name: "Lanhsuan Huang",
  school_chinese: "康涅狄格大学",
  school_english: "University of Connecticut, USA",
};

// 14
const AkitoFutaki = {
  name: "Akito Futaki",
  school_chinese: "清华大学，中国",
  school_english: "Tsinghua University, China",
};
const BenAndrews = {
  name: "Ben Andrews",
  school_chinese: "澳大利亚国立大学",
  school_english: "Australian National University, Australia",
};
const WilliamMinicozzi = {
  name: "William Minicozzi",
  school_chinese: "美国麻省理工学院",
  school_english: "Massachusetts Institute of Technology, USA",
};
const RafeMazzeo = {
  name: "Rafe Mazzeo",
  school_chinese: "美国斯坦福大学",
  school_english: "Stanford University, USA",
};
const ValentinoTosatti = {
  name: "Valentino Tosatti",
  school_chinese: "美国纽约大学",
  school_english: "New York University, USA",
};

// 15
const BensonFarb = {
  name: "Benson Farb",
  school_chinese: "美国芝加哥大学",
  school_english: "University of Chicago, USA",
};
const MladenBestvina = {
  name: "Mladen Bestvina",
  school_chinese: "美国犹他大学",
  school_english: "University of Utah, USA",
};
const RalphCohen = {
  name: "Ralph Cohen",
  school_chinese: "美国斯坦福大学",
  school_english: "Stanford University, USA",
};
const PeterMay = {
  name: "Peter May",
  school_chinese: "美国芝加哥大学",
  school_english: "University of Chicago, USA",
};
const ShmuelWeinberger = {
  name: "Shmuel Weinberger",
  school_chinese: "美国芝加哥大学",
  school_english: "University of Chicago, USA",
};
const MikhailKhovanov = {
  name: "Mikhail Khovanov",
  school_chinese: "美国哥伦比亚大学",
  school_english: "Columbia University, USA",
};

// 16
const MichaelHutchings = {
  name: "Michael Hutchings",
  school_chinese: "美国加利福尼亚大学伯克利分校",
  school_english: "University of California, Berkeley, USA",
};
const AndrasJuhasz = {
  name: "Andras Juhasz",
  school_chinese: "英国牛津大学",
  school_english: "University of Oxford, UK",
};
const JohnEtnyre = {
  name: "John Etnyre",
  school_chinese: "美国佐治亚理工学院",
  school_english: "Georgia Institute of Technology, USA",
};

// 17
const GregoryFrancisLawler = {
  name: "Gregory Francis Lawler",
  school_chinese: "美国芝加哥大学",
  school_english: "University of Chicago, USA",
};
const PaulBourgade = {
  name: "Paul Bourgade",
  school_chinese: "美国纽约大学",
  school_english: "New York University, USA",
};
const LaszloErdos = {
  name: "László Erdös",
  school_chinese: "奥地利科学技术研究所",
  school_english: "Institute of Science and Technology Austria, Austria",
};
const JeanBertoin = {
  name: "Jean Bertoin",
  school_chinese: "法国苏黎世大学",
  school_english: "Institut für Mathematik Universität Zürich, France    ",
};
const TakashiKumagai = {
  name: "Takashi Kumagai",
  school_chinese: "日本早稻田大学",
  school_english: "Waseda University, Japan",
};

// 18
const TzeLeungLai = {
  name: "Tze Leung Lai",
  school_chinese: "美国斯坦福大学",
  school_english: "Stanford University, USA",
};
const JianqingFan = {
  name: "Jianqing Fan",
  school_chinese: "美国普林斯顿大学",
  school_english: "Princeton University, USA",
};
const XihongLin = {
  name: "Xihong Lin",
  school_chinese: "美国哈佛大学",
  school_english: "Harvard University, USA",
};
const DonaldRubin = {
  name: "Donald Rubin",
  school_chinese: "清华大学，中国",
  school_english: "Tsinghua University, China",
};
const JunLiu = {
  name: "Jun Liu",
  school_chinese: "美国哈佛大学",
  school_english: "Harvard University, USA",
};

// 19
const ChiWangShu = {
  name: "Chi-Wang Shu",
  school_chinese: "美国布朗大学",
  school_english: "Brown University, USA",
};
const XiaopingWang = {
  name: "Xiaoping Wang",
  school_chinese: "香港科技大学, 中国香港",
  school_english:
    "Hong Kong University of Science and Technology, Hong Kong, China",
};

// 20
const VladimirMarkovic = {
  name: "Vladimir Markovic",
  school_chinese: "英国牛津大学",
  school_english: "University of Oxford, UK",
};
const SongSun = {
  name: "Song Sun",
  school_chinese: "美国加州大学伯克利分校",
  school_english: "University of California, USA",
};

// 21
const WilfriedSchmid = {
  name: "Wilfried Schmid",
  school_chinese: "美国哈佛大学",
  school_english: "Harvard University, USA",
};
const RaphaëlRouquier = {
  name: "Raphaël Rouquier",
  school_chinese: "美国加州大学洛杉矶分校",
  school_english: "University of California, USA",
};
const CatharinaStroppel = {
  name: "Catharina Stroppel",
  school_chinese: "德国波恩大学数学研究所",
  school_english: "Mathematisches Institut der Universität Bonn, German",
};
const OlivierSchiffmann = {
  name: "Olivier Schiffmann",
  school_chinese: "法国巴黎-萨克莱大学",
  school_english: "Université Paris-Saclay, France",
};
const MichelFinkelberg = {
  name: "Michel Finkelberg",
  school_chinese: "俄罗斯国立高等经济研究大学",
  school_english: "HSE University, Russia",
};

// 22
const KenjiFukaya = {
  name: "Kenji Fukaya",
  school_chinese: "美国石溪大学",
  school_english: "Stony Brook University, USA",
};
const DanielStuartFreed = {
  name: "Daniel Stuart Freed",
  school_chinese: "美国德克萨斯大学奥斯汀分校",
  school_english: "University of Texas at Austin, USA",
};
const KevinJosephCostello = {
  name: "Kevin Joseph Costello",
  school_chinese: "加拿大周边理论物理研究所",
  school_english: "Perimeter Institute for Theoretical Physics, Canada",
};
const SergeiGukov = {
  name: "Sergei Gukov",
  school_chinese: "美国加州理工学院",
  school_english: "California Institute of Technology, USA",
};
const GregMoore = {
  name: "Greg Moore",
  school_chinese: "美国罗格斯大学",
  school_english: "Rugers University, USA",
};

// 1
export const CombinatricsDescriteGeometryAndGraphTheory = {
  name: "Combinatrics, Descrite Geometry and Graph Theory",
  panels: 5,
  anonymity: 1,
  people: [BennySudakov, MichaelKrivelevich, AlexanderBobenko, PaulHorn],
};

// 2
export const MathematicalLogicFoundationsAndCategoryTheory = {
  name: "Mathematical Logic, Foundations and Category Theory",
  panels: 4,
  anonymity: 0,
  people: [TheodoreSlaman, WilliamHughWoodin, ChiTatChong, AndreasWeiermann],
};

// 3
export const NumberTheory = {
  name: "Number Theory",
  panels: 4,
  anonymity: 1,
  people: [PierreColmez, DipendraPrasad, SugWooShin],
};

// 4
export const CommutativeAlgebraAndAlgebraicGeometry = {
  name: "Commutative Algebra and Algebraic Geometry",
  panels: 5,
  anonymity: 0,
  people: [
    FedorBogomolov,
    VyacheslavShokurov,
    SpencerBloch,
    ChristopherDerekHacon,
    CarlosSimpson,
  ],
};

// 5
export const HomologicalAlgebraKTheoryAndNoncommutativeAlgebra = {
  name: "Homological Algebra, K-Theory and Noncommutative Algebra",
  panels: 3,
  anonymity: 0,
  people: [YanSoibelman, BernhardKeller, AlexyBondal],
};

// 6
export const OneAndSeveralVariablesComplexDynamicalSyste = {
  name: "One and Several Variables Complex Dynamical Systems",
  panels: 6,
  anonymity: 3,
  people: [NgaimingMok, DuongHongPhong, BoBerndtsson],
};

// 7
export const OrdinaryDifferentialEquationsAndSpecialFunctionsAndDModule = {
  name: "Ordinary Differential Equations and Special Functions and D-Module",
  panels: 4,
  anonymity: 1,
  people: [MasatoshiNoumi, ShinobuHosono, BongLian],
};

// 8
export const PartialDifferentialEquations = {
  name: "Partial Differential Equations",
  panels: 6,
  anonymity: 1,
  people: [
    ZhoupingXin,
    XuJiaWang,
    IgorRodnianski,
    WilhelmSchlag,
    YanGuo,
    ChenGuiQiang,
  ],
};

// 9
export const DynamicsSystemsErgodicTheoryAndDiophantineApproximation = {
  name: "Dynamics, Systems, Ergodic Theory and Diophantine Approximation",
  panels: 6,
  anonymity: 1,
  people: [
    AntonZorich,
    ShrikrishnaGopalraoDani,
    NikolayMoshchevitin,
    VitalyBergelson,
    BassamFayad,
  ],
};

// 10
export const FourierAnalysisAndHarmonicAnalysis = {
  name: "Fourier Analysis and Harmonic Analysis",
  panels: 5,
  anonymity: 0,
  people: [
    ChristopherSogge,
    GuozhenLu,
    YannickSire,
    AlexIosevich,
    ChangxingMiao,
  ],
};

// 11
export const FunctionalAnalysisAndOperatorTheory = {
  name: "Functional Analysis and Operator Theory",
  panels: 6,
  anonymity: 3,
  people: [YasuyukiKawahigashi, GuoliangYu, GeorgeArthurElliott],
};

// 12
export const CalculusOfVariationsAndOptimalControl = {
  name: "Calculus of Variations and Optimal Control",
  panels: 4,
  anonymity: 0,
  people: [TristanCollins, CamilloDeLellis, AlessioFigalli, JunchengWei],
};

// 13
export const GeneralRelativity = {
  name: "General Relativity",
  panels: 5,
  anonymity: 0,
  people: [
    PiotrChrusciel,
    LarsAndersson,
    SergiuKlainerman,
    RobertWald,
    LanhsuanHuang,
  ],
};

// 14
export const GeometricAnalysis = {
  name: "Geometric Analysis",
  panels: 5,
  anonymity: 0,
  people: [
    AkitoFutaki,
    BenAndrews,
    WilliamMinicozzi,
    RafeMazzeo,
    ValentinoTosatti,
  ],
};

// 15
export const AlgebraicAndGeometricTopology = {
  name: "Algebraic and Geometric Topology",
  panels: 6,
  anonymity: 0,
  people: [
    BensonFarb,
    MladenBestvina,
    RalphCohen,
    PeterMay,
    ShmuelWeinberger,
    MikhailKhovanov,
  ],
};

// 16
export const SymplecticAndDifferentialToplogy = {
  name: "Symplectic and Differential Toplogy",
  panels: 6,
  anonymity: 3,
  people: [MichaelHutchings, AndrasJuhasz, JohnEtnyre],
};

// 17
export const ProbabilityTheoryAndStochasticProcesses = {
  name: "Probability Theory and Stochastic Processes",
  panels: 5,
  anonymity: 0,
  people: [
    GregoryFrancisLawler,
    PaulBourgade,
    LaszloErdos,
    JeanBertoin,
    TakashiKumagai,
  ],
};

// 18
export const Statistics = {
  name: "Statistics",
  panels: 5,
  anonymity: 0,
  people: [TzeLeungLai, JianqingFan, XihongLin, DonaldRubin, JunLiu],
};

// 19
export const NumericalAnalysisAndScientificComputation = {
  name: "Numerical Analysis and Scientific Computation",
  panels: 5,
  anonymity: 3,
  people: [ChiWangShu, XiaopingWang],
};

// 20
export const DifferentialGeometry = {
  name: "Differential Geometry",
  panels: 4,
  anonymity: 2,
  people: [VladimirMarkovic, SongSun],
};

// 21
export const LieTheoryAndRepresentationTheory = {
  name: "Lie Theory and Representation Theory",
  panels: 5,
  anonymity: 0,
  people: [
    WilfriedSchmid,
    RaphaëlRouquier,
    CatharinaStroppel,
    OlivierSchiffmann,
    MichelFinkelberg,
  ],
};

// 22
export const MathematicalOfStringTheoryAndCondensedMatter = {
  name: "Mathematical of String Theory and Condensed Matter",
  panels: 5,
  anonymity: 0,
  people: [
    KenjiFukaya,
    DanielStuartFreed,
    KevinJosephCostello,
    SergeiGukov,
    GregMoore,
  ],
};

export const BPAMathematicsSubjectCommittee = [
  CombinatricsDescriteGeometryAndGraphTheory,
  MathematicalLogicFoundationsAndCategoryTheory,
  NumberTheory,
  CommutativeAlgebraAndAlgebraicGeometry,
  HomologicalAlgebraKTheoryAndNoncommutativeAlgebra,
  OneAndSeveralVariablesComplexDynamicalSyste,
  OrdinaryDifferentialEquationsAndSpecialFunctionsAndDModule,
  PartialDifferentialEquations,
  DynamicsSystemsErgodicTheoryAndDiophantineApproximation,
  FourierAnalysisAndHarmonicAnalysis,
  FunctionalAnalysisAndOperatorTheory,
  CalculusOfVariationsAndOptimalControl,
  GeneralRelativity,
  GeometricAnalysis,
  AlgebraicAndGeometricTopology,
  SymplecticAndDifferentialToplogy,
  ProbabilityTheoryAndStochasticProcesses,
  Statistics,
  NumericalAnalysisAndScientificComputation,
  DifferentialGeometry,
  LieTheoryAndRepresentationTheory,
  MathematicalOfStringTheoryAndCondensedMatter,
];



// Global Committee of Best Paper Award (Mathematics)*
// const BennySudakov = {
//   name: "Benny Sudakov",
//   school_chinese :	"苏黎世联邦理工学院",
//   school_english: "ETH Zurich, Switzerland"
// }
const WilliamHugWoodin = {
  name: "William Hug Woodin",
  school_chinese :	"美国哈佛大学",
  school_english: "Harvard University, USA"
}
// const SugWooShin = {
//   name: "Sug Wo Shin",
//   school_chinese :	"美国加利福尼亚大学伯克利分校",
//   school_english: "University of California, Berkeley, USA"
// }
const VyacheslaShokurov = {
  name: "Vyachesla Shokurov",
  school_chinese :	"美国约翰霍普金斯大学",
  school_english: "Johns Hopkins University, USA"
}
const CarloSimpson = {
  name: "Carlo Simpson",
  school_chinese :	"法国蔚蓝海岸大学",
  school_english: "Université Côte d'Azur, France"
}
// const YanSoibelman = {
//   name: "Ya Soibelman",
//   school_chinese :	"美国堪萨斯州立大学",
//   school_english: "Kansas State University, USA"
// }
const DuongHonPhong = {
  name: "Duong Hon Phong",
  school_chinese :	"美国哥伦比亚大学",
  school_english: "Columbia University, USA"
}
// const BongLian = {
//   name: "Bong Lian",
//   school_chinese :	"美国布兰迪斯大学",
//   school_english: "Brandeis University, USA"
// }
// const ZhoupingXin = {
//   name: "Zhouping Xin",
//   school_chinese :	"香港中文大学，中国香港",
//   school_english: "The Chinese University of Hong Kong, China"
// }
// const AntonZorich = {
//   name: "Anton Zorich",
//   school_chinese :	"巴黎7大",
//   school_english: "University of Paris 7, France"
// }
// const ShrikrishnaGopalraoDani = {
//   name: "Shrikrishna Gopalrao Dani",
//   school_chinese :	"印度孟买大学",
//   school_english: "University of Mumbai Campus, India"
// }
// const ChristopherSogge = {
//   name: "Christopher Sogge",
//   school_chinese :	"美国约翰霍普金斯大学",
//   school_english: "Johns Hopkins University, USA"
// }
// const GuoliangYu = {
//   name: "Guoliang Yu",
//   school_chinese :	"美国德州农工大学",
//   school_english: "Texas A&M University, USA"
// }
// const GeorgeArthurElliott = {
//   name: "George Arthur Elliott",
//   school_chinese :	"多伦多大学",
//   school_english: "University of Toronto, Canada"
// }
// const CamilloDeLellis = {
//   name: "Camill D'Lellis",
//   school_chinese :	"美国高级研究所",
//   school_english: "Institute for Advanced Study, USA"
// }
// const AlessioFigalli = {
//   name: "Alessi Figalli",
//   school_chinese :	"瑞士苏黎世大学",
//   school_english: "ETH Zurich, Switzerland"
// }
// const SergiuKlainerman = {
//   name: "Sergi Klainerman",
//   school_chinese :	"美国普林斯顿大学",
//   school_english: "Princeton University, USA"
// }
// const RobertWald = {
//   name: "Rober Wald",
//   school_chinese :	"美国芝加哥大学",
//   school_english: "University of Chicago, USA"
// }
// const AkitoFutaki = {
//   name: "Akit Futaki",
//   school_chinese :	"清华大学，中国",
//   school_english: "Tsinghua University, China"
// }
// const ValentinoTosatti = {
//   name: "Valentin Tosatti",
//   school_chinese :	"美国纽约大学",
//   school_english: "New York University, USA"
// }
// const MikhailKhovanov = {
//   name: "Mikhai Khovanov",
//   school_chinese :	"美国哥伦比亚大学",
//   school_english: "Columbia University, USA"
// }
// const MichaelHutchings = {
//   name: "Michae Hutchings",
//   school_chinese :	"美国加利福尼亚大学伯克利分校",
//   school_english: "University of California, USA"
// }
// const LaszloErdos = {
//   name: "László Erdös",
//   school_chinese :	"奥地利科学技术研究所",
//   school_english: "Institute of Science and Technology Austria, Austria"
// }
// const TzeLeungLai = {
//   name: "Tze Leung Lai",
//   school_chinese :	"美国斯坦福大学",
//   school_english : 	"Stanford University, USA"
// }

// const DonaldRubin = {
//   name : "Donald Rubin",
//   school_chinese :	"清华大学，中国",
//   school_english : 	"Tsinghua University, China"
// }

// const JunLiu = {
//   name : "Jun Liu",
//   school_chinese :	"美国哈佛大学",
//   school_english : 	"Harvard University, USA"
// }
// const VladimirMarkovic = {
//   name : "Vladimir Markovic",
//   school_chinese :	"英国牛津大学",
//   school_english : 	"University of Oxford, UK"
// }
// const KenjiFukaya = {
//   name : "Kenji Fukaya",
//   school_chinese :	"美国石溪大学",
//   school_english : 	"Stony Brook University, USA"
// }
// }
// const SergeiGukov = {
//   name : "Sergei Gukov",
//   school_chinese :	"美国加州理工学院",
//   school_english : 	"California Institute of Technology, USA"
// }
// const YannickSire = {
//   name : "Yannick Sire",
//   school_chinese :	"约翰斯·霍普金斯大学",
//   school_english : 	"Johns Hopkins University, USA"
// }
// const CaucherBirkar = {
//   name : "Caucher Birkar",
//   school_chinese :	"清华大学，中国",
//   school_english : 	"Tsinghua University, China"
// }
const IvanFesenko = {
  name : "Ivan Fesenko",
  school_chinese :	"英国华威大学",
  school_english : 	"The University of Warwick, UK"
}
const LanHsuanHuang = {
  name : "Lan Hsuan Huang",
  school_chinese :	"美国康涅狄格大学",
  school_english : 	"University of Connecticut, USA"
}
const YichaoTian = {
  name: "Yichao Tian",
  school_chinese :	"中国科学院",	
  school_english: "Chinese Academy of Science, China"
}
const ZhiweiYun = {
  name : "Zhiwei Yun",
  school_chinese :	"美国麻省理工学院",	
  school_english: "Massachusetts Institute of Technology, USA"
}
const BhargavBhatt = {
  name: "Bhargav Bhatt",
  school_chinese :	"美国密歇根大学",	
  school_english: "University of Michigan, USA"
}
const ShingTungYau = {
  name: "Shing Tung Yau",
  school_chinese :	"清华大学，中国",
  school_english: "Tsinghua University, China"
}

export const BPAMathematicsGlobalCommittee = [
  BennySudakov,
  WilliamHugWoodin,
  SugWooShin,
  VyacheslaShokurov,
  CarloSimpson,
  YanSoibelman,
  DuongHonPhong,
  BongLian,
  ZhoupingXin,
  AntonZorich,
  ShrikrishnaGopalraoDani,
  ChristopherSogge,
  GuoliangYu,
  GeorgeArthurElliott,
  CamilloDeLellis,
  AlessioFigalli,
  SergiuKlainerman,
  RobertWald,
  AkitoFutaki,
  ValentinoTosatti,
  MikhailKhovanov,
  MichaelHutchings,
  LaszloErdos,
  TzeLeungLai,
  DonaldRubin,
  JunLiu,
  VladimirMarkovic,
  KenjiFukaya,
  SergeiGukov,
  YannickSire,
  CaucherBirkar,
  IvanFesenko,
  LanHsuanHuang,
  YichaoTian,
  ZhiweiYun,
  BhargavBhatt,
  ShingTungYau
];



// Committee members
const JengDawYu = {
  imageSrc: "",
  chinese_name: "余正道",
  english_name: "Jeng-Daw YU",
};
const ZeqianChen = {
  imageSrc: "",
  chinese_name: "陈泽乾",
  english_name: "Zeqian CHEN",
};
const LixinCheng = {
  imageSrc: "",
  chinese_name: "程立新",
  english_name: "Lixin CHENG",
};
const QihuaWang = {
  imageSrc: "",
  chinese_name: "王启华",
  english_name: "Qihua WANG",
};
const BinXu = {
  imageSrc: "",
  chinese_name: "许宾",
  english_name: "Bin XU",
};
const RonggangShi = {
  imageSrc: "",
  chinese_name: "石荣刚",
  english_name: "Ronggang SHI",
};
const MingXiao = {
  imageSrc: "",
  chinese_name: "肖鸣",
  english_name: "Ming XIAO",
};
const NgaiChingWong = {
  imageSrc: "",
  chinese_name: "黄毅青",
  english_name: "Ngai-Ching WONG",
};
const FuTsunWei = {
  imageSrc: "",
  chinese_name: "魏福村",
  english_name: "Fu-Tsun WEI",
};
const GuohuaZhang = {
  imageSrc: "",
  chinese_name: "张国华",
  english_name: "Guohua ZHANG",
};
const YunZhao = {
  imageSrc: "",
  chinese_name: "赵云",
  english_name: "Yun ZHAO",
};

const XuechengWang = {
  imageSrc: "",
  chinese_name: "王学成",
  english_name: "Xuecheng WANG",
};



export const ScientificCommittee = {
  name: "科学委员会",
  members: [
    JengDawYu,
    ZeqianChen,
    LixinCheng,
    QihuaWang,
    BinXu,
    RonggangShi,
    MingXiao,
    NgaiChingWong,
    FuTsunWei,
    GuohuaZhang,
    YunZhao,
    XuechengWang,
  ],
};

export const ExecutiveCommittee = {
  name: "执行委员会",
  members: [],
};

export const OrganizingCommittee = {
  name: "组织委员会",
  members: [],
};
