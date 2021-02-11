import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
// import Styled from "styled-components"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

const ContactFormPage = () => (
    //  <Layout>
        <div>
          <h1>Contact</h1>
  
          <form 
              name="Contact Form" 
              method="POST" 
              data-netlify="true"
              action="/thank-you"
              data-netlify-recaptcha="true"
          >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                  <label>Your Name:</label>
                  <input type="text" name="name" />
              </div>
              <div>
                  <label>Your Email:</label>
                  <input type="email" name="email" />
              </div>
              <div>
                  <label>Message:</label>
                  <textarea name="message" />
              </div>
              <br />
              <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
              <button type="submit">Send</button>
          </form>
        </div>
    //  </Layout>
  )


// const Wrapper = Styled.div`
// margin: 0 auto;
// height: 65vh;
// padding-top: 50px;
// width: 100%;
//     h1 {
//       text-align: center;
//       text-transform: uppercase;
//     }
//         form {
//           margin: 0 auto;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           max-width: 1100px;
//           width: 60%;
//         }

//         input, textarea {
//           background: #E5E5E5;
//           border: 1px solid #F4F4ED;
//           box-sizing: border-box;
//           color: #4C4C4C;
//           font-size: 18px;
//           margin: 0 20px;
//           height: 5vh;
//         }
//         .info {
//           width: 350px;
//           margin: 0;

// }

//         textarea {
//           height: 100%;
//           padding: 10px;
//           width: 400px;
//         }
//         .submit {
//           background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
//           box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//           border-radius: 15px;
//           border: none;
//           color: white;
//           letter-spacing: 0.02em;
//           padding: 10px;
//           margin: 20px 0 0 180px;
//           text-align: center;
//           text-transform: uppercase;
//           width: 220px;
//         }
//         .hidden {
//           display: none;
//         }


//       @media (max-width: 400px) {

//           .hidden {
//             display: flex;
//             flex-direction: column;
//             margin: 20px;

//             width: 90%;
//           }
//           form {
//             display: none;
//           }
//           h1 {
//             margin: 0;
//             text-align: center;
//             font-size: 24px;
//           }
//           p {
//               font-size: 18px;
//           }
//           .email-btn {
//             color: white;
//             background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
//             box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//             border-radius: 15px;
//             margin: 0 auto;
//             width: 40%;
//         }
//       }
// @media ( min-width: 700px){
//   input{
//     width: 300px;
//   }
// }
// `
export default ContactFormPage;