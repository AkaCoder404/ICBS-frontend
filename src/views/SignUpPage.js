import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/svg/signup-illustration.svg";
// import logo from "images/logo.svg";
// import googleIconImageSrc from "images/google-icon.png";
// import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
// import { SignUp } from "utils/account";
// import RegistrationForm form "./RegisterPage";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 md:mx-48 xl:mx-96 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`w-full p-6 sm:p-12 `;
// const LogoLink = tw.a``;
// const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

// const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
// const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-lg`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
// const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
// const IllustrationImage = styled.div`
//   ${props => `background-image: url("${props.imageSrc}");`}
//   ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
// `;
const URLData = window.location.href.split('?')[1];
const CheckBox = tw.div`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

export default (
  {
    emailData = URLData.split('&')[0].split('=')[1],
    nameData = URLData.split('&')[1].split('=')[1],
    genderData = URLData.split('&')[2].split('=')[1],
    affiliationData = URLData.split('&')[3].split('=')[1].split('#')[0],
    logoLinkUrl = "#",
    illustrationImageSrc = illustration,
    headingText = "Sign Up",
    submitButtonText = "Sign Up",
    SubmitButtonIcon = SignUpIcon,
    tosUrl = "/#/register",
    signInUrl = "http://iccm.tsinghua.edu.cn/manager/user/login/",
    formAction = "http://iccm.tsinghua.edu.cn/backend/api/register/",
    formMethod = "post",
  },
) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          {/* <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink> */}
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <Form action={formAction} method={formMethod} id="forms" 
                  // onSubmit={()=>{
                  // var form = document.getElementById('forms');
                  // console.log(form);
                  // return true;
                  // }}
                >
                <Input name="chi_name" placeholder="Chinese Name" required/>
                <Input name="eng_name" placeholder="English Name" defaultValue={nameData} required/>
                <Input name="gender" placeholder="Gender" defaultValue={genderData} required/>
                <Input name="affiliation" placeholder="Affiliation" defaultValue={affiliationData} required/>

                <Select name="title" placeholder="Title/Appellation" required>
                  <option value="1">Professor</option>
                  <option value="2">Associate Professor</option>
                  <option value="3">Assistant Professor</option>
                  <option value="4">Lecturer</option>
                  <option value="5">Post-doc</option>
                  <option value="6">Teacher</option>
                  <option value="7">Student</option>
                  <option value="8">Others</option>
                </Select>

                <Input type="tel" name="mobile_no" placeholder="Mobile Number" required/>
                <Input type="email" name="email" placeholder="Email Address" defaultValue={emailData} required/>
                <Input name="mailing_address" placeholder="Mailing Address"/>
                <Input type="url" name="homepage" placeholder="Homepage"/>
                <CheckBox>
                  <input type="checkbox" name="need_visa" id="Invitation" value="Invitation"/>
                  <label htmlFor="Invitation">{" "}Invitation Letter for F Visa Application</label>
                </CheckBox>
                <Input type="password" name="password" placeholder="Password" required/>
                <SubmitButton type="submit" 
                    //   onSubmit = {() => { 
                    //   console.log("Submit");
                    //   console.log(document.getElementById("chi_name").value)
                    //   // window.open("http://iccm.tsinghua-furoc.com:23300/")
                    //   // let data = "123";
                    //   // SignUp(data).then(response => {
                    //   //   console.log(response.data)
                    //   // }).catch(error => { console.log(error.toString()); });  
                    // }}
                  >
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  I have browsed to confirm {" "}
                  <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                    the registration requirements
                  </a>
                </p>

                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <a href={signInUrl} tw="border-b border-gray-500 border-dotted">
                    Log In
                  </a>
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
