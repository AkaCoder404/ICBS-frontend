// Images
import ImageSHINGTUNGSrc from "images/people/SHINGTUNG.png";
import ImageCAUCHERSrc from "images/people/CAUCHER.png";
import ImageNICOLAISrc from "images/people/NICOLAI.png";
import ImageDAVIDSrc from "images/people/DAVID.jpg";
import ImageNIMASrc from "images/people/NIMA.jpg";
import ImageQIONGHAISrc from "images/people/QIONGHAI.jpg";
import ImageCHISrc from "images/people/CHI.jpg";
import ImageQIUCHENGTONGSrc from "images/home/QiuChenTong.png"
import imageIVENSrc from "images/people/IVEN.jpg"

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
  ShingTungYao,
  CaucherBirkar,
  NicolaiReshetikhin,
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
    description: "Combinatorics, Discrete Geometry, and Graph theory, Mathematical Logic, Foundations and Category Theory, Number Theory, Commutative Algebra and Algebraic Geometry, Homological Algebra, K-Theory and Noncommutative Algebra, One and Several variables, Complex Dynamical Syste, Ordinary Differential Equations and Special Functions, D Module, Partial Differential Equations, Dynamics Systems, Ergodic Theory and Diophantine Approximation, Fourier Analysis and Harmonic Analysis, Functional Analysis and Operator Theory, Calculus of Variations and Optimal Control, General Relativity, Geometric Analysis, Algebraic and Geometric Topology, Symplectic and Differential Topology, Probability Theory and Stochastic Processes, Statistics, Numerical Analysis and Scientific Computation, Differential Geometry, Lie Theory and Representation Theory, Mathematics of String Theory and Condensed Matter"
  },
  {
    heading: "Theoretical Physics",
    description: "Quantum Field Theory, String Theory and Quantum Gravity, Condensed Matter, General Relativity and Quantum Cosmology"
  },
  {
    heading: "Theoretical Computer and Information Science",
    description: "Artificial Intelligence, Robotics Science and System, Signal Processing, Theoretical Computer Science, Graphics and Geometric Computing, Biophotonics, Cryptography and Information Security, Bioinformatics, Computational Optics, and Big Data Technology"
  }
]


// Testimonials
export const testimonials = [
  {
    imageSrc: ImageSHINGTUNGSrc,
    quote:
      "Welcome to the International Congress of Basic Science. Best minds around the world will come together this July to understand the fundamental science in nature. We hope Best Paper Award will set a standard for the field of fundamental science，including mathematics, physics, computer science and engineer. We will give grand awards to major leaders of the fundamental science. ",
    customerName: "Shing-Tung Yau",
    customerTitle: "Chair professor of Tsinghua University"
  },
  {
    imageSrc: ImageCAUCHERSrc,
    quote:
      "The International Congress of Basic Science is different from any other events. It's not just a gathering of big names. Top researchers from mathematics, physics, computer science, technology will discuss their current and top-quality work. I encourage young people and researchers to attend this event either online or in person. ",
    customerName: "Caucher Birkar",
    customerTitle: "Professor of Tsinghua University"
  },
  {
    imageSrc: imageIVENSrc,
    quote:
      "The International Congress of Basic Science will be the first major scientific gathering of researchers from many countries of different ages since the pandemic. It's a major opportunity to meet new mathematics and learn about recent development.",
    customerName: "Iven Fesenko",
    customerTitle: "Number Theory Mathematician"
  },
];