import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactFormPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Wrapper>

      <h1>Contact US</h1>

      <form
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/thank-you"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className="info">
          <label>
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            <input type="email" name="email" placeholder="Your email" />
          </label>
        </div>
        <label>
          <textarea name="message" placeholder="Write your message" />
        </label>
        <br />
        <ReCAPTCHA className="ReCAPTCHA" sitekey="{process.env.GATSBY_RECAPTCHA_KEY}" />
        <button className="submit" type="submit">Send</button>
      </form>

    </Wrapper>
  </Layout>
)


const Wrapper = Styled.div`
margin: 0 auto;
height: 65vh;
padding-top: 50px;
width: 80%;
    h1 {
      text-align: center;
      text-transform: uppercase;
    }
        form {
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1100px;
          width: 60%;
        }

        input{
          background: #E5E5E5;
          border: 1px solid #F4F4ED;
          box-sizing: border-box;
          color: #4C4C4C;
          font-size: 18px;
          margin: 5px 20px;
          height: 5vh;
        }
        textarea {
          background: #E5E5E5;
          border: 1px solid #F4F4ED;
          box-sizing: border-box;
          color: #4C4C4C;
          height: 20vh;
          padding: 10px;
          width: 20vw;
        }
        .info {
          width: 350px;
          margin: 0;

        }

        .submit {
          background: linear-gradient(180deg, #DA0D46 0%, #570018 100%), #DA0D46;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
          border: none;
          color: white;
          letter-spacing: 0.02em;
          padding: 10px 20px;
          margin: 20px 0 0 40px;
          text-align: center;
          text-transform: uppercase;
          /* width: 220px; */
        }
        .ReCAPTCHA {
          margin-right: 12rem;
        }
        .hidden {
          display: none;
        }


      @media (max-width: 400px) {

          form {
            display: none;
          }
          h1 {
            margin: 0;
            text-align: center;
            font-size: 24px;
          }
          p {
              font-size: 18px;
          }
          textarea {
            width: 500px;
          }
          .email-btn {
            color: white;
            background: linear-gradient(180deg, #4C4C4C 0%, #000000 100%), #4C4C4C;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            margin: 0 auto;
            width: 40%;
        }
      }
@media ( min-width: 700px){
  input{
    width: 300px;
  }
}
`
export default ContactFormPage;