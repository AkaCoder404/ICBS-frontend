import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import TabGrid from "components/cards/TabCardProgram.js";
import Footer from "components/footers/MiniCenteredFooter";

import I1 from "images/HomePage/carousel1.jpg"
// import I2 from "images/program/p1.png";
// import I3 from "images/program/p1.png";
// import I4 from "images/program/81/Stephen Shing-Toung YAU.png";
// import I5 from "images/program/81/Binyong SUN.png";
// import I6 from "images/program/81/Weinan E.png";
// import I7 from "images/program/81/Jianqing FAN.png";
// import I8 from "images/program/81/Zhiming CHEN.png";
// import I9 from "images/program/81/Xu SHEN.png";
// import I10 from "images/program/81/Ngaiming MOK.png";
// import I11 from "images/program/81/Peng DING.png";
// import I12 from "images/program/p1.png";
// import I13 from "images/program/81/Shi JIN.png";
// import I14 from "images/program/81/Xi-Ping ZHU.png";
// import I15 from "images/program/81/Jintai DING.png";
// import I16 from "images/program/81/Xuhua HE.png";
// import I17 from "images/program/81/Yufei ZHAO.png";
// import I18 from "images/program/81/Yi GU.png";
// import I19 from "images/program/p1.png";
// import I20 from "images/program/81/Zhengyi ZHOU.png";
// import I21 from "images/program/81/Zhijie CHEN.png";
// import I22 from "images/program/81/Guixiang HONG.png";
// import I23 from "images/program/81/Congwen LIU.png";
// import I24 from "images/program/81/Dang-Zheng LIU.png";
// import I25 from "images/program/81/Zhigang JIA.png";
// import I26 from "images/program/81/Tingchun WANG.png";
// import I27 from "images/program/81/Yongquan HU.png";
// import I28 from "images/program/81/Baoxuan ZHU.png";
// import I29 from "images/program/81/Gao CHEN.png";
// import I30 from "images/program/81/Jie WU.png";
// import I31 from "images/program/81/Mengni LI.png";
// import I32 from "images/program/81/Qiaozhen MA.png";
// import I33 from "images/program/81/Jun WANG.png";
// import I34 from "images/program/81/Weinan E.png";
// import I35 from "images/program/81/Xiaoying DAI.png";
// import I36 from "images/program/p1.png";

// import I37 from "images/program/p1.png"
// import I38 from "images/program/p1.png"
// import I39 from "images/program/p1.png"
// import I40 from "images/program/82/Hui-Chun ZHANG.png"
// import I41 from "images/program/82/Ping ZHANG.png"
// import I42 from "images/program/82/Thomas LAM.png"
// import I43 from "images/program/82/Meng CHEN.png"
// import I44 from "images/program/82/Wen-Wei LIN.png"
// import I45 from "images/program/82/Zhaobing FAN.png"
// import I46 from "images/program/82/Daxin XU.png"
// import I47 from "images/program/82/Kui WANG.png"
// import I48 from "images/program/82/Yunhui WU.png"
// import I49 from "images/program/82/Bin GUI.png"
// import I50 from "images/program/p1.png"
// import I51 from "images/program/82/Youjin ZHANG.png"
// import I52 from "images/program/82/Rongchan ZHU.png"
// import I53 from "images/program/82/Chenglong BAO.png"
// import I54 from "images/program/82/Xingdong FENG.png"
// import I55 from "images/program/82/Kei Yuen CHAN.png"
// import I56 from "images/program/82/Min CHEN.png"
// import I57 from "images/program/82/Ruizhi HUANG.png"
// import I58 from "images/program/82/Gang LIAO.png"
// import I59 from "images/program/82/Mei MING.png"
// import I60 from "images/program/82/Xingdong TANG.png"
// import I61 from "images/program/82/Xiangchan ZHU.png"
// import I62 from "images/program/p1.png"
// import I63 from "images/program/p1.png"
// import I64 from "images/program/82/Hongliang LU.png"
// import I65 from "images/program/82/Hui GAO.png"
// import I66 from "images/program/82/Shicheng WANG.png"
// import I67 from "images/program/p1.png"
// import I68 from "images/program/p1.png"
// import I69 from "images/program/82/Yun WANG.png"
// import I70 from "images/program/p1.png"
// import I71 from "images/program/p1.png"
// import I72 from "images/program/p1.png"

// import I73 from "images/program/p1.png"
// import I74 from "images/program/p1.png"
// import I75 from "images/program/83/Nan GAO.png"
// import I76 from "images/program/p1.png"
// import I77 from "images/program/83/Lixin LIU.png"
// import I78 from "images/program/p1.png"
// import I79 from "images/program/p1.png"
// import I80 from "images/program/83/Lingmin LIAO.png"
// import I81 from "images/program/83/Wanke YIN.png"
// import I82 from "images/program/p1.png"
// import I83 from "images/program/83/Yan XU.png"
// import I84 from "images/program/83/Shuo ZHANG.png"
// import I85 from "images/program/83/Daqing YANG.png"
// import I86 from "images/program/83/Xiaoshan LI.png"
// import I87 from "images/program/83/Yusheng LI.png"
// import I88 from "images/program/83/Weijun XU.png"
// import I89 from "images/program/83/Ruihan GUO.png"
// import I90 from "images/program/83/Jianguo HUANG.png"
// import I91 from "images/program/p1.png"
// import I92 from "images/program/83/Chuangqiang HU.png"
// import I93 from "images/program/p1.png"
// import I94 from "images/program/p1.png"
// import I95 from "images/program/83/Xiangke CHANG.png"
// import I96 from "images/program/p1.png"
// import I97 from "images/program/83/Yuan ZHANG.png"
// import I98 from "images/program/p1.png"
// import I99 from "images/program/83/Xiaodong LIU.png"
// import I100 from "images/program/83/Jianfeng HOU.png"
// import I101 from "images/program/83/Zicheng QIAN.png"
// import I102 from "images/program/83/Fengling LI.png"
// import I103 from "images/program/83/Jiming MA.png"
// import I104 from "images/program/p1.png"
// import I105 from "images/program/83/Chunjing XIE.png"
// import I106 from "images/program/83/Kai ZHENG.png"
// import I107 from "images/program/83/Ling-Yan HUNG.png"
// import I108 from "images/program/83/Ziqing XIE.png"
// import I109 from "images/program/83/Qi YE.png"
// import I110 from "images/program/p1.png"
// import I111 from "images/program/83/Sen YANG.png"
// import I112 from "images/program/p1.png"
// import I113 from "images/program/83/Maochun ZHU.png"
// import I114 from "images/program/p1.png"
// import I115 from "images/program/83/Sebastien PALCOUX.png"
// import I116 from "images/program/83/Qiang WEN.png"
// import I117 from "images/program/83/Yinhua XIA.png"
// import I118 from "images/program/83/Xinlong FENG.png"
// import I119 from "images/program/p1.png"
// import I120 from "images/program/83/Limeng XIA.png"
// import I121 from "images/program/83/Laiyuan GAO.png"
// import I122 from "images/program/p1.png"
// import I123 from "images/program/p1.png"
// import I124 from "images/program/83/Taishun LIU.png"
// import I125 from "images/program/83/Zhiwei WANG.png"
// import I126 from "images/program/p1.png"
// import I127 from "images/program/83/Wenjia JING.png"
// import I128 from "images/program/83/Zhaojun WANG.png"
// import I129 from "images/program/83/Hao SUN.png"
// import I130 from "images/program/83/Enxin WU.png"
// import I131 from "images/program/83/Bingbing LIANG.png"
// import I132 from "images/program/83/Kui JI.png"
// import I133 from "images/program/p1.png"
// import I134 from "images/program/83/Wei SONG.png"
// import I135 from "images/program/83/Bin WU.png"
// import I136 from "images/program/p1.png"

// import I137 from "images/program/84/Xiangdi HUANG.png"
// import I138 from "images/program/p1.png"
// import I139 from "images/program/p1.png"
// import I140 from "images/program/p1.png"
// import I141 from "images/program/p1.png"
// import I142 from "images/program/84/Weiping LI.png"
// import I143 from "images/program/p1.png"
// import I144 from "images/program/p1.png"
// import I145 from "images/program/p1.png"
// import I146 from "images/program/p1.png"
// import I147 from "images/program/p1.png"
// import I148 from "images/program/84/Chunhui QIU.png"
// import I149 from "images/program/p1.png"
// import I150 from "images/program/84/Yi LI.png"
// import I151 from "images/program/84/Shuang MIAO.png"
// import I152 from "images/program/84/Zuoqin WANG.png"
// import I153 from "images/program/84/Shilin YU.png"
// import I154 from "images/program/84/Zhenfu WANG.png"
// import I155 from "images/program/p1.png"
// import I156 from "images/program/p1.png"
// import I157 from "images/program/84/Qizhong LIN.png"
// import I158 from "images/program/p1.png"
// import I159 from "images/program/84/Haibao DUAN.png"
// import I160 from "images/program/84/Chao WANG.png"
// import I161 from "images/program/p1.png"
// import I162 from "images/program/p1.png"
// import I163 from "images/program/p1.png"
// import I164 from "images/program/p1.png"
// import I165 from "images/program/84/Min ZHANG.png"
// import I166 from "images/program/p1.png"
// import I167 from "images/program/84/Chung Pang MOK.png"
// import I168 from "images/program/84/Chung Pang MOK.png"
// import I169 from "images/program/p1.png"
// import I170 from "images/program/84/Jian ZHOU.png"
// import I171 from "images/program/p1.png"
// import I172 from "images/program/84/Bo XUE.png"
// import I173 from "images/program/84/Zhaoyang YIN.png"
// import I174 from "images/program/84/Deng ZHANG.png"
// import I175 from "images/program/84/Hui YU.png"
// import I176 from "images/program/p1.png"
// import I177 from "images/program/84/Yifei CHEN.png"
// import I178 from "images/program/84/Guanghui WANG.png"
// import I179 from "images/program/84/Fengchun LEI.png"
// import I180 from "images/program/84/Hongwei XU.png"
// import I181 from "images/program/84/Jiafu NING.png"
// import I182 from "images/program/p1.png"
// import I183 from "images/program/p1.png"
// import I184 from "images/program/p1.png"
// import I185 from "images/program/p1.png"
// import I186 from "images/program/p1.png"
// import I187 from "images/program/84/Huhe HAN.png"
// import I188 from "images/program/84/Haizhong LI.png"
// import I189 from "images/program/84/Hongjun GAO.png"
// import I190 from "images/program/84/Wei WANG.png"
// import I191 from "images/program/84/Xindong XU.png"
// import I192 from "images/program/p1.png"
// import I193 from "images/program/p1.png"
// import I194 from "images/program/84/Tiexiang LI.png"
// import I195 from "images/program/p1.png"
// import I196 from "images/program/84/Ying ZHANG.png"
// import I197 from "images/program/84/Tao ZHENG.png"
// import I198 from "images/program/84/Jinsong WU.png"
// import I199 from "images/program/84/Xiaoliu WANG.png"
// import I200 from "images/program/84/Xiankui MENG.png"
// import I201 from "images/program/84/Huijie QIAO.png"
// import I202 from "images/program/84/Jie DU.png"
// import I203 from "images/program/p1.png"
// import I204 from "images/program/p1.png"
// import I205 from "images/program/p1.png"
// import I206 from "images/program/p1.png"
// import I207 from "images/program/84/Rena ESKAR.png"
// import I208 from "images/program/p1.png"
// import I209 from "images/program/84/Ghulam RASOOL.png"
// import I210 from "images/program/84/Rui DONG.png"
// import I211 from "images/program/p1.png"
// import I212 from "images/program/84/Hamed ADAMI.png"

// import I213 from "images/program/85/Xin ZHANG.png"
// import I214 from "images/program/85/Xin NIE.png"
// import I215 from "images/program/85/Hejun SUN.png"
// import I216 from "images/program/85/Zuonong ZHU.png"
// import I217 from "images/program/85/Yuxiang LI.png"
// import I218 from "images/program/85/Xin LIANG.png"
// import I219 from "images/program/85/Hao YIN.png"
// import I220 from "images/program/85/Ge XIONG.png"
// import I221 from "images/program/85/Xiaobin LI.png"
// import I222 from "images/program/85/Di YANG.png"
// import I223 from "images/program/85/Minxin HUANG.png"
// import I224 from "images/program/85/Rongfang GONG.png"

// const cards1 = [
//   {
//     imageSrc:I1,
//     title: "Moduli of algebraic varieties",
//     content: "Caucher BIRKAR",
//     price: "08:00-09:00",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I2,
//     title: "The AD+ duality program",
//     content: "Hugh WOODIN",
//     price: "09:00-10:00",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I3,
//     title: "Topological recursion and crepant transformation conjecture",
//     content: "Chiu-Chu Melissa LIU",
//     price: "10:15-11:15",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I4,
//     title: "The geometry of genome space and its applications",
//     content: "Stephen Shing-Toung YAU",
//     price: "11:20-12:20",
//     rating: "国际会议报告厅 ",
//     url: "#"
//   },
//   {
//     imageSrc:I5,
//     title: "Special unipotent representations of classical Lie groups",
//     content: "Binyong SUN",
//     price: "11:20-12:20",
//     rating: "紫金会见厅",
//     url: "#"
//   },
//   {
//     imageSrc:I6,
//     title: "A Mathematical Introduction to Machine Learning",
//     content: "Weinan E",
//     price: "11:20-12:20",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I7,
//     title: "Stability and Approximability of deep ReLU networks in Statistical Learning",
//     content: "Jianqing FAN",
//     price: "11:20-12:20",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I8,
//     title: "Some Progress of Numerical Methods for Inverse Problems",
//     content: "Zhiming CHEN",
//     price: "13:20-14:20",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I9,
//     title: "p-adic periods and Shimura varieties",
//     content: "Xu SHEN",
//     price: "13:20-14:20",
//     rating: "紫金会见厅",
//     url: "#"
//   },
//   {
//     imageSrc:I10,
//     title: "Complex differential geometry in action: from uniruled projective manifolds to arithmetico-geometric problems on complex function fields",
//     content: "Ngaiming MOK",
//     price: "13:20-14:20",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I11,
//     title: "Covariate adjustment in multi-armed, possibly factorial experiments",
//     content: "Peng DING",
//     price: "13:20-14:20",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I12,
//     title: "THE GEOMETRY OF KAHLER VARIETIES WITH  NUMERICALLY EFFECTIVE RICCI CURVATURES",
//     content: "Junyan CAO",
//     price: "13:20-14:20",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I13,
//     title: "TBD",
//     content: "Shi JIN",
//     price: "14:25-15:25",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I14,
//     title: "On complete noncompact Kaehler manifolds with positive curvature",
//     content: "Xi-Ping ZHU",
//     price: "14:25-15:25",
//     rating: "紫金会见厅",
//     url: "#"
//   },
//   {
//     imageSrc:I15,
//     title: "待定",
//     content: "Jintai DING",
//     price: "14:25-15:25",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I16,
//     title: "The G-variations",
//     content: "Xuhua HE",
//     price: "14:25-15:25",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I17,
//     title: "Equiangular lines and eigenvalue multiplicities",
//     content: "Yufei ZHAO",
//     price: "14:25-15:25",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I18,
//     title: "Counterexamples to Fujita’s conjecture in positive characteristic",
//     content: "Yi GU",
//     price: "15:40-16:25",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I19,
//     title: "Some results on steady Prandtl Equation with general initial data",
//     content: "Yue WANG",
//     price: "15:40-16:25",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I20,
//     title: "On fillings of contact links of isolated quotient singularities",
//     content: "Zhengyi ZHOU",
//     price: "15:40-16:25",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I21,
//     title: "On the singular SU(3) Toda system on the torus",
//     content: "Zhijie CHEN",
//     price: "15:40-16:25",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I22,
//     title: "SOME PROGRESSES ON MAXIMAL INEQUALITIES IN NONCOMMUTATIVE ANALYSIS",
//     content: "Guixiang HONG",
//     price: "15:40-16:25",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I23,
//     title: "On the contractivity conjecture of Pavlovi",
//     content: "Congwen LIU",
//     price: "15:40-16:25",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I24,
//     title: "Phase Transition of eigenvalues in Non-Hermitian Random Matrix Theory",
//     content: "Dang-Zheng LIU",
//     price: "15:40-16:25",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I25,
//     title: "Robust Color Image and Video Inpainting: Model, Theory and Algorithms",
//     content: "Zhigang JIA",
//     price: "15:40-16:25",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I26,
//     title: "Convergence analysis of numerical methods for the nonlinear Schrödinger-type equations",
//     content: "Tingchun WANG",
//     price: "15:40-16:25",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I27,
//     title: "On mod p Jacquet-Langlands correspondence for GL2(Qp)",
//     content: "Yongquan HU",
//     price: "16:30-17:15",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I28,
//     title: "Hankel-total-positivity of combinatorial sequences",
//     content: "Baoxuan ZHU",
//     price: "16:30-17:15",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I29,
//     title: "An attempt towards the Hodge conjecture",
//     content: "Gao CHEN",
//     price: "16:30-17:15",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I30,
//     title: "Aspects of Homotopy Patterns",
//     content: "Jie WU",
//     price: "16:30-17:15",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I31,
//     title: "Global Hӧlder regularity of the Dirichlet problem for a class of fully nonlinear elliptic equations",
//     content: "Mengni LI",
//     price: "16:30-17:15",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I32,
//     title: "The Long Time Dynamics of the Suspension Bridge Equations",
//     content: "Qiaozhen MA",
//     price: "16:30-17:15",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I33,
//     title: "Existence and multiplicity of positive solutions for the elliptic and parabolic system",
//     content: "Jun WANG",
//     price: "16:30-17:15",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I34,
//     title: "tbd",
//     content: "Si LI",
//     price: "16:30-17:15",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I35,
//     title: "Convergent orthogonality preserving appoximations of the Kohn-Sham orbitals",
//     content: "Xiaoying DAI",
//     price: "16:30-17:15",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I36,
//     title: "Consistent Model-free High-Dimensional Variable Screening for Binary Response",
//     content: "Xiaodan FAN",
//     price: "16:30-17:15",
//     rating: "丁香厅",
//     url: "#"
//   },
// ];

// const cards2 = [
//   {
//     imageSrc:I37,
//     title: "Essential dimension and prismatic cohomology",
//     content: "Mark KISIN",
//     price: "08:00-09:00",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I38,
//     title: "Superintegrability and representation theory",
//     content: "Nicolai RESHETIKHIN",
//     price: "09:00-10:00",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I39,
//     title: "Repeated emergence of 4/3-exponent",
//     content: "Jian DING",
//     price: "10:15-11:15",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I40,
//     title: "A free boundary problem on non-collapsing RCD metric measure spaces",
//     content: "Hui-Chun ZHANG",
//     price: "11:20-12:20",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I41,
//     title: "GLOBAL HYDROSTATIC APPROXIMATION OF HYPERBOLIC NAVIER-STOKES SYSTEM WITH SMALL GEVREY CLASS 2 DATA",
//     content: "Ping ZHANG",
//     price: "11:20-12:20",
//     rating: "紫金会见厅",
//     url: "#"
//   },
//   {
//     imageSrc:I42,
//     title: "Positroids,knots, and Catalan numbers",
//     content: "Thomas LAM",
//     price: "11:20-12:20",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I43,
//     title: "On explicit birational geometry for varieties of general type",
//     content: "Meng CHEN",
//     price: "11:20-12:20",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I44,
//     title: "Eigen-Decomposition and Fast Solvers for 3D Maxwell’s Equations for Photonic Cristals and Complex Media",
//     content: "Wen-Wei LIN",
//     price: "11:20-12:20",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I45,
//     title: "Geometric approach to quantum algebras",
//     content: "Zhaobing FAN",
//     price: "13:20-14:05",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I46,
//     title: "Parallel transport for Higgs bundles over p-adic curves",
//     content: "Daxin XU",
//     price: "13:20-14:05",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I47,
//     title: "The Second Robin Eigenvalue for Laplacian on Space Forms",
//     content: "Kui WANG",
//     price: "13:20-14:05",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I48,
//     title: "Recent progress on first eigenvalues of hyperbolic surfaces for large genus",
//     content: "Yunhui WU",
//     price: "13:20-14:05",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I49,
//     title: "Equivalence of the Braided Tensor Categories Associated to Unitary Vertex Operator Algebras and Conformal Nets",
//     content: "Bin GUI",
//     price: "13:20-14:05",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I50,
//     title: "PERTURBATION METHOD AND ASYMPTOTIC GEOMETRY OF SCHWARZSCHILD BLACK HOLE",
//     content: "Pengyu LE",
//     price: "13:20-14:05",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I51,
//     title: "Frobenius Manifolds and Bihamiltonian Integrable Hierarchies",
//     content: "Youjin ZHANG",
//     price: "13:20-14:05",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I52,
//     title: "A stochastic analysis approach to lattice Yang–Mills",
//     content: "Rongchan ZHU",
//     price: "13:20-14:05",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I53,
//     title: "Learning Robust Imaging Models without Paired Data",
//     content: "Chenglong BAO",
//     price: "13:20-14:05",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I54,
//     title: "Deep Over-parameterized Quantile Regression",
//     content: "Xingdong FENG",
//     price: "13:20-14:05",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I55,
//     title: "Generalized GanGrossPrasad relevant pairs in terms of parabolic inductions",
//     content: "Kei Yuen CHAN",
//     price: "14:10-14:55",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I56,
//     title: "An (F1, F4)-partition of planar graphs with girth 6",
//     content: "Min CHEN",
//     price: "14:10-14:55",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I57,
//     title: "Homotopy of manifolds",
//     content: "Ruizhi HUANG",
//     price: "14:10-14:55",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I58,
//     title: "Symbolic extensions for 3-dimensional diffeomorphisms",
//     content: "Gang LIAO",
//     price: "14:10-14:55",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I59,
//     title: "Local well-posedness to the capillary water-waves problem with contact angles",
//     content: "Mei MING",
//     price: "14:10-14:55",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I60,
//     title: "NON-DEGENERACY OF BUBBLE SOLUTIONS FOR NONLINEAR HARTREE EQUATIONS",
//     content: "Xingdong TANG",
//     price: "14:10-14:55",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I61,
//     title: "A class of singular SPDEs via convex integration",
//     content: "Xiangchan ZHU",
//     price: "14:10-14:55",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I62,
//     title: "Non-line-of-sight Imaging",
//     content: "Lingyun QIU",
//     price: "14:10-14:55",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I63,
//     title: "Covariate-adaptive randomization in clinical trials for balancing covariates",
//     content: "Lixin ZHANG",
//     price: "14:10-14:55",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I64,
//     title: "Co-degree threshold for rainbow perfect matchings in uniform hypergraphs",
//     content: "Hongliang LU",
//     price: "15:10-15:55",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I65,
//     title: "de Rham crystals on the prismatic site",
//     content: "Hui GAO",
//     price: "15:10-15:55",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I66,
//     title: "Extendability over the 4-sphere and invariant spin structures of surface automorphisms",
//     content: "Shicheng WANG",
//     price: "15:10-15:55",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I67,
//     title: "Heintze-Karcher’s inequality and Alexandrov’s soap bubble theorem",
//     content: "Chao XIA",
//     price: "15:10-15:55",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I68,
//     title: "Small Hankel operators between weighted Bergman spaces",
//     content: "Yongjiang DUAN",
//     price: "15:10-15:55",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I69,
//     title: "Some progress on Leray's problem",
//     content: "Yun WANG",
//     price: "15:10-15:55",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I70,
//     title: "Finite time singularities for mean curvature flow of surfaces",
//     content: "Haozhao LI",
//     price: "15:10-15:55",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I71,
//     title: "Volume Conjecture, Chern-Simons Theory and Resurgence",
//     content: "Jie GU",
//     price: "15:10-15:55",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I72,
//     title: "Mathematical and numerical aspects of an inverse eddy problem",
//     content: "Junqing CHEN",
//     price: "15:10-15:55",
//     rating: "虎踞厅",
//     url: "#"
//   },
// ];

// const cards3 = [
//   {
//     imageSrc:I73,
//     title: "Free interface problems and stablizing effects of transversal magnetic fields",
//     content: "Zhouping XIN",
//     price: "08:00-09:00",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I74,
//     title: "Free interface problems and stablizing effects of transversal magnetic fields",
//     content: "Kenji FUKAYA",
//     price: "09:00-10:00",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I75,
//     title: "CATEGORICAL METHODS IN REPRESENTATION THEORY",
//     content: "Nan GAO",
//     price: "10:15-11:00",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I76,
//     title: "Universal Quadratic Forms over p-adic Fields and Number Fields",
//     content: "Yong HU",
//     price: "10:15-11:00",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I77,
//     title: "THE GEOMETRY AND METRICS ON TEICHMU ̈LLER SPACES",
//     content: "Lixin LIU",
//     price: "10:15-11:00",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I78,
//     title: "Milnor-Witt motive, Bockstein spectral sequence and application",
//     content: "Nanjun YANG",
//     price: "10:15-11:00",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I79,
//     title: "On stochastic NLS: wellposedness and long time behavior",
//     content: "Chenjie FAN",
//     price: "10:15-11:00",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I80,
//     title: "Simultaneous shrinking target problem of the dynamical systems x2 and x3",
//     content: "Lingmin LIAO",
//     price: "10:15-11:00",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I81,
//     title: "Finite types conditions for real smooth hypersurfaces",
//     content: "Wanke YIN",
//     price: "10:15-11:00",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I82,
//     title: "PAGOSA and its applications in high energetic material fields",
//     content: "Juliana REN",
//     price: "10:15-11:00",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I83,
//     title: "Structure-preserving arbitrary Lagrangian-Eulerian high order methods for hyperbolic conservation law with source term",
//     content: "Yan XU",
//     price: "10:15-11:00",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I84,
//     title: "Partially adjoint discretizations of adjoint operators: preservation of strong dualities and closed range theorem",
//     content: "Shuo ZHANG",
//     price: "10:15-11:00",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I85,
//     title: "On refined forest covering and packing of graphs",
//     content: "Daqing YANG",
//     price: "11:05-11:50",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I86,
//     title: "Extension of Multiple-valued holomorphic functions on a Stein space",
//     content: "Xiaoshan LI",
//     price: "11:05-11:50",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I87,
//     title: "Ramsey numbers in sparse graphs",
//     content: "Yusheng LI",
//     price: "11:05-11:50",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I88,
//     title: "A homogenisation problem with singular random force",
//     content: "Weijun XU",
//     price: "11:05-11:50",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I89,
//     title: "Arbitrary high-order fully-decoupled numerical schemes for phase-field models of two-phase incompressible flows",
//     content: "Ruihan GUO",
//     price: "11:05-11:50",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I90,
//     title: "Two numerical methods for an elliptic Hemivariational inequality with applications to contact mechanics",
//     content: "Jianguo HUANG",
//     price: "11:05-11:50",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I91,
//     title: "Dirac series",
//     content: "Chao-Ping DONG",
//     price: "13:20-14:05",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I92,
//     title: "On the k-th Tjurira number of weighted homogeneous singularities",
//     content: "Chuangqiang HU",
//     price: "13:20-14:05",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I93,
//     title: "The Lipschitz theory of hyperbolic surfaces",
//     content: "Yi HUANG",
//     price: "13:20-14:05",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I94,
//     title: "SOME RESULTS ON THE MAPPING CLASS GROUP OF HIGH DIMENSIONAL MANIFOLDS",
//     content: "Yang SU",
//     price: "13:20-14:05",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I95,
//     title: "On the Novikov peakon system together with its spectral and inverse spectral problems",
//     content: "Xiangke CHANG",
//     price: "13:20-14:05",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I96,
//     title: "Operator valued random matrices and asymptotic freeness",
//     content: "Weihua LIU",
//     price: "13:20-14:05",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I97,
//     title: "On Geometries of Finitary Random Interlacements",
//     content: "Yuan ZHANG",
//     price: "13:20-14:05",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I98,
//     title: "Some generalized Halanay-type inequalities and their applications in multi-agent systems",
//     content: "Qiang JIA",
//     price: "13:20-14:05",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I99,
//     title: "Direct sampling method for inverse scattering problems",
//     content: "Xiaodong LIU",
//     price: "13:20-14:05",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I100,
//     title: "Hypergraphs with infinitely many extremal constructions",
//     content: "Jianfeng HOU",
//     price: "14:10-14:55",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I101,
//     title: "Moduli of Fontaine-Laffaille modules and a mod p local-global compatibility result",
//     content: "Zicheng QIAN",
//     price: "14:10-14:55",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I102,
//     title: "On $H'$-splittings of 3-manifolds",
//     content: "Fengling LI",
//     price: "14:10-14:55",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I103,
//     title: "ParSchwartz’s complex hyperbolic surface",
//     content: "Jiming MA",
//     price: "14:10-14:55",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I104,
//     title: "The nonlinear modulational instability of the Stokes waves in 2d water waves",
//     content: "Qingtang SU",
//     price: "14:10-14:55",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I105,
//     title: "Analysis on steady compressible subsonic jet flows with general far field condi- tion",
//     content: "Chunjing XIE",
//     price: "14:10-14:55",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I106,
//     title: "Singular scalar curvature equations",
//     content: "Kai ZHENG",
//     price: "14:10-14:55",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I107,
//     title: "From tensor networks for p-adic CFT to 1+1 D real CFTs",
//     content: "Ling-Yan HUNG",
//     price: "14:10-14:55",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I108,
//     title: "Several Local Minimax Methods for Finding Saddle Points and Their Applications",
//     content: "Ziqing XIE",
//     price: "14:10-14:55",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I109,
//     title: "Machine Learning in Banach Spaces: A Black‐box or White‐box Method?",
//     content: "Qi YE",
//     price: "14:10-14:55",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I110,
//     title: "Wild ramification of nearby cycles",
//     content: "Haoyu HU",
//     price: "15:10-15:55",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I111,
//     title: "Bloch-Ogus theorem, cyclic homology and deformation of Chow groups",
//     content: "Sen YANG",
//     price: "15:10-15:55",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I112,
//     title: "Quantization for biharmonic maps and Yang-Mills fields on non-collapsing degenerating Einstein 4-manifolds and applications",
//     content: "Youmin CHEN",
//     price: "15:10-15:55",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I113,
//     title: "New progress on Existence on-existence and uniqueness of the maximizers for Trudinger-Moser type inequalities",
//     content: "Maochun ZHU",
//     price: "15:10-15:55",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I114,
//     title: "Construct of quasi-periodic solutions via Nash-Moser iteration",
//     content: "Yingte SUN",
//     price: "15:10-15:55",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I115,
//     title: "The quest of a finite purely quantum group",
//     content: "Sebastien PALCOUX",
//     price: "15:10-15:55",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I116,
//     title: "Balanced partial entanglement and mixed state correlations",
//     content: "Qiang WEN",
//     price: "15:10-15:55",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I117,
//     title: "Hybrid WENO schemes for Euler equations",
//     content: "Yinhua XIA",
//     price: "15:10-15:55",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I118,
//     title: "Difference finite element method for 3D steady incompressible Navier-Stokes equations",
//     content: "Xinlong FENG",
//     price: "15:10-15:55",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I119,
//     title: "Subconvexity problem for Rankin-Selberg and triple product L-functions within conductor dropping range",
//     content: "Yueke HU",
//     price: "16:00-16:45",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I120,
//     title: "The twisted Whittaker modules over quantum group Uq(gln+1) ",
//     content: "Limeng XIA",
//     price: "16:00-16:45",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I121,
//     title: "Some results on Yau's problem of the curve flow",
//     content: "Laiyuan GAO",
//     price: "16:00-16:45",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I122,
//     title: "Anosov flows on Dehn surgeries on the figure-eight knot",
//     content: "Bin YU",
//     price: "16:00-16:45",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I123,
//     title: "W l,p solvability for higher order elliptic equations on Lipschitz and convex domains",
//     content: "Jun GENG",
//     price: "16:00-16:45",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I124,
//     title: "Geometric Function Theory of Several Complex Variables",
//     content: "Taishun LIU",
//     price: "16:00-16:45",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I125,
//     title: "Title: Linear Invariants of Complex Manifolds",
//     content: "Zhiwei WANG",
//     price: "16:00-16:45",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I126,
//     title: "Rozansky-Witten theory and KZ-equations",
//     content: "Babak HAGHIGHAT",
//     price: "16:00-16:45",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I127,
//     title: "Layer potential techniques in homogenization theory",
//     content: "Wenjia JING",
//     price: "16:00-16:45",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I128,
//     title: "Activation discovery with FDR control Application to fMRI data-= 5634-27890可96-3636--------//-/*-/",
//     content: "Zhaojun WANG",
//     price: "16:00-16:45",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I129,
//     title: "TAME PARAHORIC NONABELIAN HODGE CORRESPONDENCE ON CURVES",
//     content: "Hao SUN",
//     price: "16:50-17:35",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I130,
//     title: "An invitation to diffeological spaces",
//     content: "Enxin WU",
//     price: "16:50-17:35",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I131,
//     title: "On the existence and coexistence of expansivity",
//     content: "Bingbing LIANG",
//     price: "16:50-17:35",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I132,
//     title: "Geometry of holomorphic vector bundles and similarity of commuting tuples of operators",
//     content: "Kui JI",
//     price: "16:50-17:35",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I133,
//     title: "Toda-type equations and their links to numerical algorithms and orthogonal polynomials",
//     content: "Xing-Biao HU",
//     price: "16:50-17:35",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I134,
//     title: "TsT, black holes, and irrelevant deformations",
//     content: "Wei SONG",
//     price: "10:00",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I135,
//     title: "Carleman estimates for stochastic degenerate/singular differential equations and its applications",
//     content: "Bin WU",
//     price: "10:00",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I136,
//     title: "Numerical mathematics of quasiperiodic systems",
//     content: "Kai JIANG",
//     price: "10:00",
//     rating: "丁香厅",
//     url: "#"
//   },
//   ];

// const cards4 = [
//   {
//     imageSrc:I137,
//     title: "On existence and blowup behavior of the compressible Navier-Stokes equations and related models: from Nash’s conjecture to front edge",
//     content: "Xiangdi HUANG",
//     price: "08:00-09:00",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I138,
//     title: "Non-archimedean Quantum K-theory and Gromov-Witten invariants",
//     content: "Tony Yue YU",
//     price: "08:00-09:00",
//     rating: "紫金会见厅",
//     url: "#"
//   },
//   {
//     imageSrc:I139,
//     title: "Angular momentum and supertranslation in general relativity",
//     content: "Mu-Tao WANG",
//     price: "08:00-09:00",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I140,
//     title: "On a non-uniform extension of Baranyai’s Theorem",
//     content: "Hao HUANG",
//     price: "08:00-09:00",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I141,
//     title: "PERIODS OF SINGULAR CYCLIC COVERS",
//     content: "Bong LIAN",
//     price: "08:00-09:00",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I142,
//     title: "A Road Map to Gromov-Witten Invariants on Calabi-Yau Quintic Threefolds",
//     content: "Weiping LI",
//     price: "09:00-10:00",
//     rating: "国际会议报告厅",
//     url: "#"
//   },
//   {
//     imageSrc:I143,
//     title: "Singularities of Ricci flow and Ricci solitons",
//     content: "Huai-Dong CAO",
//     price: "09:00-10:00",
//     rating: "紫金会见厅",
//     url: "#"
//   },
//   {
//     imageSrc:I144,
//     title: "Mass formulas and the basic locus of unitary Shimura varieties",
//     content: "Chia-Fu YU",
//     price: "09:00-10:00",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I145,
//     title: "Higher index theory at infinity and Gromov’s compactness conjecture",
//     content: "Guoliang YU",
//     price: "09:00-10:00",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I146,
//     title: "Lorentzian geometry and Einstein equations",
//     content: "Bing-Long CHEN",
//     price: "09:00-10:00",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I147,
//     title: "On hamiltonicity of line graphs",
//     content: "Xiaoling MA",
//     price: "10:15-11:00",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I148,
//     title: "A Schwarz lemma for complete complex Finsler manifolds",
//     content: "Chunhui QIU",
//     price: "10:15-11:00",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I149,
//     title: "Some cases for the project GMCD",
//     content: "Jin CAO",
//     price: "10:15-11:000",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I150,
//     title: "Boundedness and monotonicity in Ricci-type flows",
//     content: "Yi LI",
//     price: "10:15-11:00",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I151,
//     title: "Some free boundary problems in the study of two-body motion",
//     content: "Shuang MIAO",
//     price: "10:15-11:00",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I152,
//     title: "Semiclassical oscillating functions of isotropic type and their applications",
//     content: "Zuoqin WANG",
//     price: "10:15-11:00",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I153,
//     title: "Coadjoint orbit method via deformation quantization",
//     content: "Shilin YU",
//     price: "10:15-11:00",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I154,
//     title: "Recent Progress in Mean Field Limit for Interacting Particle Systems",
//     content: "Zhenfu WANG",
//     price: "10:15-11:00",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I155,
//     title: "Model analysis and risk assessment of four-tier emergency response and dynamic zeroing",
//     content: "Zhigui LIN",
//     price: "10:15-11:00",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I156,
//     title: "Computational Quantum Mechanics in Phase Space",
//     content: "Sihong SHAO",
//     price: "10:15-11:00",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I157,
//     title: "待定Fan-complete Ramsey numbers",
//     content: "Qizhong LIN",
//     price: "11:05-11:50",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I158,
//     title: "Packing paths into subcubic graphs",
//     content: "Wensong LIN",
//     price: "11:05-11:50",
//     rating: "绿柳厅",
//     url: "#"
//   },
//   {
//     imageSrc:I159,
//     title: "Making Schubert Calculus Calculable",
//     content: "Haibao DUAN",
//     price: "11:05-11:50",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I160,
//     title: "Equivariant embeddings of closed surfaces in spheres",
//     content: "Chao WANG",
//     price: "11:05-11:50",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I161,
//     title: "Quantum differentiability–the analytical perspective",
//     content: "Xiao XIONG",
//     price: "11:05-11:50",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I162,
//     title: "Categories of operator algebras and Generalied topological spaces",
//     content: "Chikeung NG",
//     price: "11:05-11:50",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I163,
//     title: "Algebraic curves and algebro-geometric solutions to soliton equations",
//     content: "Xianguo GENG",
//     price: "11:05-11:50",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I164,
//     title: "A new approach to an inverse source problem for the wave equation",
//     content: "Haibing WANG",
//     price: "11:05-11:50",
//     rating: "木兰厅",
//     url: "#"
//   },

//     {
//     imageSrc:I165,
//     title: "Numerical Solution of Minkowski problem and Its applications on Medical imaging",
//     content: "Min ZHANG",
//     price: "11:05-11:50",
//     rating: "虎踞厅",
//     url: "#"
//   },  {
//     imageSrc:I166,
//     title: "FINITE ELEMENT COMPLEXES FROM COMPLEXES",
//     content: "Xuehai HUANG",
//     price: "11:05-11:50",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I167,
//     title: "seudorandom Vectors Generation Using Elliptic Curves And Applications to Wiener Processes",
//     content: "Chung Pang MOK",
//     price: "13:20-14:05",
//     rating: "红杉厅",
//     url: "#"
//   },

//   {
//     imageSrc:I168,
//     title: "Longest cycles in highly-connected graphs ",
//     content: "Bo NING",
//     price: "13:20-14:05",
//     rating: "绿柳厅",
//     url: "#"
//   },  {
//     imageSrc:I169,
//     title: "Signal reconstruction by conjugate gradient algorithm based on smoothing norm",
//     content: "Caiying WU",
//     price: "13:20-13:40",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I170,
//     title: "Moments, Lattice Paths, and KP Hierarchy",
//     content: "Jian ZHOU",
//     price: "13:20-14:05",
//     rating: "秀竹厅",
//     url: "#"
//   },

//   {
//     imageSrc:I171,
//     title: "Measure theoretic aspect of Hamilton-Jacobi equation",
//     content: "Wei CHENG",
//     price: "13:20-14:05",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I172,
//     title: "Integrable Dynamic Systems with N-Peakon",
//     content: "Bo XUE",
//     price: "13:20-14:05",
//     rating: "白桦厅",
//     url: "#"
//   },  {
//     imageSrc:I173,
//     title: "On a two dimensional nonlocal shallow-water model",
//     content: "Zhaoyang YIN",
//     price: "13:20-14:05",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I174,
//     title: "Multi-bubble blow-up solutions and multi-solitons to (stochastic) nonlinear Schrödinger equations",
//     content: "Deng ZHANG",
//     price: "13:20-14:05",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I175,
//     title: "Self-Organized Hydrodynamic Models for Alignment and the Application to Myxobacteria",
//     content: "Hui YU",
//     price: "13:20-14:05",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I176,
//     title: "Eigenvector-Dependent Nonlinear Eigenvalue Problems in Data Science",
//     content: "Leihong ZHANG",
//     price: "13:20-14:05",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I177,
//     title: "The Jordan property of Cremona groups",
//     content: "Yifei CHEN",
//     price: "14:10-14:55",
//     rating: "红杉厅",
//     url: "#"
//   },

//   {
//     imageSrc:I178,
//     title: "Embeddings in “random like” (hyper)graphs",
//     content: "Guanghui WANG",
//     price: "14:10-14:55",
//     rating: "绿柳厅",
//     url: "#"
//   },  {
//     imageSrc:I179,
//     title: "Invariants of 3-manifolds from Heegaard splittings",
//     content: "Fengchun LEI",
//     price: "14:10-14:55",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I180,
//     title: "On geometry and topology for certain Riemannian submanifolds",
//     content: "Hongwei XU",
//     price: "14:10-14:55",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I181,
//     title: "The extension of (quasi-)plurisubharmonic functions on complex manifolds",
//     content: "Jiafu NING",
//     price: "14:10-14:55",
//     rating: "龙蟠厅",
//     url: "#"
//   },

//   {
//     imageSrc:I182,
//     title: "待定",
//     content: "Hanfeng LI",
//     price: "14:10-14:55",
//     rating: "白桦厅",
//     url: "#"
//   },  {
//     imageSrc:I183,
//     title: "Global stability of the compressible viscous surface waves in an infinite layer",
//     content: "Guilong GUI",
//     price: "14:10-14:55",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I184,
//     title: "Rational Q-system and quiver gauge theory",
//     content: "Yunfeng JIANG",
//     price: "14:10-14:55",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I185,
//     title: "Free Boundary Problems for Measuring Credit Rating Migration Risks",
//     content: "Jin LIANG",
//     price: "14:10-14:55",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I186,
//     title: "The nonlinear finite volume scheme preserving maximum principle on distorted meshes",
//     content: "Zhiqiang SHENG",
//     price: "14:10-14:55",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I187,
//     title: "FROM SPHERICAL CENTER SET TO THE UPPER BOUND THEOREM AND THE LOWER BOUND THEOREM",
//     content: "Huhe HAN",
//     price: "15:10-15:55",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I188,
//     title: "Curvature flows for hypersurfaces in hyperbolic space and their geometric applications",
//     content: "Haizhong LI",
//     price: "15:10-15:55",
//     rating: "银杏厅",
//     url: "#"
//   },

//     {
//     imageSrc:I189,
//     title: "Wong-Zakai type approximations of rough random dynamical systems by smooth noise",
//     content: "Hongjun GAO",
//     price: "15:10-15:55",
//     rating: "龙蟠厅",
//     url: "#"
//   },  {
//     imageSrc:I190,
//     title: "k-CAUCHY-FUETER COMPLEXES IN QUATERNIONIC ANALYSIS OF SEVERAL VARIABLES",
//     content: "Wei WANG",
//     price: "15:10-15:55",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I191,
//     title: "Quasi-periodic solutions of NLS with Liouvillean Frequencies",
//     content: "Xindong XU",
//     price: "15:10-15:55",
//     rating: "丹凤厅",
//     url: "#"
//   },

//   {
//     imageSrc:I192,
//     title: "Movement of Lee-Yang zeros",
//     content: "Jianping JIANG",
//     price: "15:10-15:55",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I193,
//     title: "Introducing bootstrap test technique to identify spatial heterogeneity in geographically and temporally weighted regression models",
//     content: "Zhimin HONG",
//     price: "15:10-15:55",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I194,
//     title: "Novel algorithms for measure-preserving parameterizations of 3-manifolds with applications",
//     content: "Tiexiang LI",
//     price: "15:10-15:55",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I195,
//     title: "The p-adic Gelfand-Kapranov-Zelevinsky hypergeometric complex",
//     content: "Hao ZHANG",
//     price: "16:00-16:45",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I196,
//     title: "Shifted trace polynomials for closed geodesics on most symmetric hyperbolic tori: Positivity, log-concavity and monotonicity ",
//     content: "Ying ZHANG",
//     price: "16:00-16:45",
//     rating: "银杏厅",
//     url: "#"
//   },

//   {
//     imageSrc:I197,
//     title: "Parabolic Monge-Ampère equations on almost Hermitian manifolds",
//     content: "Tao ZHENG",
//     price: "16:00-16:45",
//     rating: "秀竹厅",
//     url: "#"
//   },  {
//     imageSrc:I198,
//     title: "Quantum Fourier Analysis",
//     content: "Jinsong WU",
//     price: "16:00-16:45",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I199,
//     title: "The Evolution of Area-preserving and Length-preserving Inverse Curvature Flows for Immersed Locally Convex Closed Plane Curves",
//     content: "Xiaoliu WANG",
//     price: "16:00-16:45",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I200,
//     title: "A Kahlerness criterion for real-classes on projective manifolds through extendibility of singular potentials",
//     content: "Xiankui MENG",
//     price: "16:00-16:45",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I201,
//     title: "Efficient filtering for multiscale McKeanVlasov stochastic differential",
//     content: "Huijie QIAO",
//     price: "16:00-16:45",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I202,
//     title: "High order bound preserving methods for compressible multi-species flow with chemical reactions",
//     content: "Jie DU",
//     price: "16:00-16:45",
//     rating: "丁香厅",
//     url: "#"
//   },
//   {
//     imageSrc:I203,
//     title: "Grobner-Shirshov 基及 Drinfeld Jimbo 量子群 ",
//     content: "Gulshadam YUNUS",
//     price: "16:50-17:10",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I204,
//     title: "绿柳厅",
//     content: "Cezar LUPU",
//     price: "16:50-17:10",
//     rating: "绿柳厅",
//     url: "#"
//   }, 
//   {
//     imageSrc:I205,
//     title: "Emergent SUSY in two dimensions",
//     content: "Ken KIKUCHI",
//     price: "16:50-17:10",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I206,
//     title: "The Furstenberg–Sárközy theorem and asymptotic total ergodicity",
//     content: "Andrew James",
//     price: "16:50-17:10",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I207,
//     title: "Schrödinger 方程的高精度差分格式研究",
//     content: "Rena ESKAR",
//     price: "16:50-17:10",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I208,
//     title: "Connectivity of the Space of Pointed Hyperbolic Surfaces",
//     content: "Sangsan WARAKKAGUN",
//     price: "16:50-17:10",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I209,
//     title: "Rheological behavior of nanofluids and Recent trends in applied Mathematics",
//     content: "Ghulam RASOOL",
//     price: "16:50-17:10",
//     rating: "丹凤厅",
//     url: "#"
//   },
//   {
//     imageSrc:I210,
//     title: "Assessing the transmissibility of the new SARS-CoV-2 variants: from Delta to Omicron",
//     content: "Rui DONG",
//     price: "16:50-17:10",
//     rating: "木兰厅",
//     url: "#"
//   },
//   {
//     imageSrc:I211,
//     title: "Bakry-Emery curvature on graphs as an eigenvalue problem",
//     content: "Supanat KAMTUE",
//     price: "16:50-17:10",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I212,
//     title: "Null boundary phase space in diverse dimensions",
//     content: "Hamed ADAMI",
//     price: "16:50-17:10",
//     rating: "丁香厅",
//     url: "#"
//   },
//   ];

// const cards5 = [
//   {
//     imageSrc:I213,
//     title: "Mean-variance asset-liability management with affine diffusion factor process and a reinsurance option",
//     content: "Xin ZHANG",
//     price: "08:00-08:45",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I214,
//     title: "Cyclic Higgs bundles and minimal surfaces in pseudo-hyperbolic spaces",
//     content: "Xin NIE",
//     price: "08:00-08:45",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I215,
//     title: "The Morse index, rigidity and classification of self-shrinkers and ξ-submanifolds",
//     content: "Hejun SUN",
//     price: "08:00-08:45",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I216,
//     title: "Connection between integrable nonlinear differential-difference hierarchy and integrable nonlinear PDE hierarchy",
//     content: "Zuonong ZHU",
//     price: "08:00-08:45",
//     rating: "龙蟠厅",
//     url: "#"
//   },
//   {
//     imageSrc:I217,
//     title: "Well-posedness of Keller-Segel systems with tensor-valued sensitivity",
//     content: "Yuxiang LI",
//     price: "08:00-08:45",
//     rating: "白桦厅",
//     url: "#"
//   },
//   {
//     imageSrc:I218,
//     title: "Stochastic algebraic Riccati equations are almost as easy as deterministic ones",
//     content: "Xin LIANG",
//     price: "08:00-08:45",
//     rating: "虎踞厅",
//     url: "#"
//   },
//   {
//     imageSrc:I219,
//     title: "Neck analysis for harmonic map and Yang-Mills field and its applications",
//     content: "Hao YIN",
//     price: "08:50-09:35",
//     rating: "红杉厅",
//     url: "#"
//   },
//   {
//     imageSrc:I220,
//     title: "Sharp affine isoperimetric inequalities for the volume decomposition functionals of polytopes",
//     content: "Ge XIONG",
//     price: "08:50-09:35",
//     rating: "银杏厅",
//     url: "#"
//   },
//   {
//     imageSrc:I221,
//     title: "待Mirror symmetry and boundary conditions",
//     content: "Xiaobin LI",
//     price: "08:50-09:35",
//     rating: "秀竹厅",
//     url: "#"
//   },
//   {
//     imageSrc:I222,
//     title: "Enumerative Invariants in Large Genera",
//     content: "Di YANG",
//     price: "08:50-09:35",
//     rating: "B102",
//     url: "#"
//   },
//   {
//     imageSrc:I223,
//     title: "Modular Anomaly Equation for Schur Index of N=4 Super-Yang-Mills",
//     content: "Minxin HUANG",
//     price: "08:50-09:35",
//     rating: "B103",
//     url: "#"
//   },
//   {
//     imageSrc:I224,
//     title: "Bioluminescence Tomography：Modelling and Reconstruction",
//     content: "Rongfang GONG",
//     price: "08:50-09:35",
//     rating: "B122",
//     url: "#"
//   },
// ];


const cards6 = [
  {
    imageSrc:I1,
    title: "To be announced...",
    content: "To be announced...",
    price: "08:00-08:45",
    rating: "TBD",
    url: "#"
  },
  {
    imageSrc:I1,
    title: "To be announced...",
    content: "To be announced...",
    price: "08:00-08:45",
    rating: "TBD",
    url: "#"
  },
  {
    imageSrc:I1,
    title: "To be announced...",
    content: "To be announced...",
    price: "08:00-08:45",
    rating: "TBD",
    url: "#"
  },
  {
    imageSrc:I1,
    title: "To be announced...",
    content: "To be announced...",
    price: "08:00-08:45",
    rating: "TBD",
    url: "#"
  },
  {
    imageSrc:I1,
    title: "To be announced...",
    content: "To be announced...",
    price: "08:00-08:45",
    rating: "TBD",
    url: "#"
  },
  {
    imageSrc:I1,
    title: "To be announced...",
    content: "To be announced...",
    price: "08:00-08:45",
    rating: "TBD",
    url: "#"
  },
  {
    imageSrc:I1,
    title: "To be announced...",
    content: "To be announced...",
    price: "08:00-08:45",
    rating: "TBD",
    url: "#"
  },
  {
    imageSrc:I1,
    title: "To be announced...",
    content: "To be announced...",
    price: "08:00-08:45",
    rating: "TBD",
    url: "#"
  },
];


const TabsData = {
  "17th July": cards6,
  "18th July": cards6,
  "19th July": cards6,
  "20th July": cards6,
  "21st July": cards6,
}

export default () =>{
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  return (  
    <AnimationRevealPage disabled>
      <Header/>
      <TabGrid
        heading = {
          <>Academic report <HighlightedText>Schedule</HighlightedText></>
        }
        tabs = {TabsData}
      />
      <Footer />
    </AnimationRevealPage>
  );
}