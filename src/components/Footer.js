import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Mainconteiner, AltContainer } from "../Style";
import styled from "styled-components";
import { toast } from "react-toastify";
import "../keyframe.css";
const AltYazi = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 150%;
  text-align: right;
  letter-spacing: 0.01em;
  color: #0a0a14;
  width: 50%;
  @media (max-width: 760px) {
    font-size: 32px;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;
const GithubLink = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #1769ff;
  text-decoration: none;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;
const PersonalBlog = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #0a0a14;
  text-decoration: none;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;
const LinkedIn = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #1769ff;
  text-decoration: none;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;
const Email = styled.a`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #af0c48;
  text-decoration: none;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: #f4f4f4;
  box-shadow: -20px -20px 40px -6px rgba(0, 0, 0, 0.2);

  margin: 100px 0;
  @media (max-width: 1470px) {
    margin: 75px 0;
  }
  @media (max-width: 760px) {
    margin: 30px 0;
  }
`;
const InputAlani = styled.input`
  width: 350px;
  height: 35px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  border-style: solid;
  padding: 0.8em;
  border: none;
  margin-top: 0.7em;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  border-radius: 5000px;
  @media (max-width: 760px) {
    width: 95%;
    text-align: center;
  }
`;
const LabelAlani = styled.label`
  padding: 20px;
  font-size: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Sus = styled.div`
  position: relative;
  width: 275px;
  height: 18px;
  left: -62px;
  top: -245px;
  background: #82bbff;
  border-radius: 4px;
  opacity: 0.5;
`;

const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_5h0asbl",
        "template_5g9og87",
        form.current,
        "plEAcxkL8x8dAh9R0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(e);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: { İsimSoyisim: "", email: "", kurumİsmi: "", mesaj: "" },
    mode: "onChange",
  });
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ İsimSoyisim: "", email: "", kurumİsmi: "", mesaj: "" });
    }
  }, [formState, reset]);
  function Bildirim() {
    toast.success("Başarıyla Gönderildi");
  }
  return (
    <div id="Hireme">
      <Mainconteiner>
        <AltContainer>
          <FooterContainer>
            <AltYazi>Let's work together on your next product.</AltYazi>
            <Navigation>
              <GithubLink
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Alita1093?tab=repositories"
              >
                Github
              </GithubLink>
              <PersonalBlog target="_blank" rel="noreferrer" href="/">
                Personal Blog
              </PersonalBlog>
              <LinkedIn
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/furkan-%C3%B6zt%C3%BCrk-64912b102/"
              >
                LinkedIn
              </LinkedIn>
              <Email
                target="_blank"
                rel="noreferrer"
                href="furkanozturk1635@gmail.com"
              >
                Email
              </Email>
            </Navigation>
          </FooterContainer>

          <FormContainer ref={form} onSubmit={handleSubmit(sendEmail)}>
            <LabelAlani htmlFor="İsimSoyisim">
              <Sus></Sus>
              İsim Soyisim
              <InputAlani
                id="İsimSoyisim"
                name="İsimSoyisim"
                type="text"
                {...register("İsimSoyisim", {
                  required: "İsim Alanı Doldurulmalıdır",
                  minLength: {
                    value: 5,
                    message: "İsim Soyisim en az 5 karakter içermelidir",
                  },
                })}
              />
            </LabelAlani>
            {errors.İsimSoyisim && <p>{errors.İsimSoyisim.message}</p>}
            <LabelAlani>
              Email
              <InputAlani
                type="email"
                name="email"
                {...register("email", {
                  required: "Email Alanı Doldurulmalıdır",
                  minLength: {
                    value: 5,
                    message: "En az 5 karakter girilmeli",
                  },
                })}
              />
            </LabelAlani>
            {errors.email && <p>{errors.email.message}</p>}
            <LabelAlani>
              Kurum İsmi
              <InputAlani
                name="kurumİsmi"
                type="text"
                {...register("kurumİsmi", {
                  required: "Kurum İsmi Alanı Doldurulmalıdır",
                })}
              />
            </LabelAlani>
            {errors.kurumİsmi && <p>{errors.kurumİsmi.message}</p>}
            <LabelAlani>
              Mesaj
              <InputAlani
                name="mesaj"
                type="text"
                {...register("mesaj", {
                  required: "Mesaj Alanı Doldurulmalıdır",
                  minLength: {
                    value: 10,
                    message: "Mesajınız 10 karakterden az olamaz",
                  },
                })}
              />
            </LabelAlani>
            {errors.mesaj && <p>{errors.mesaj.message}</p>}

            <button onClick={Bildirim} type="submit" disabled={!isValid}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Gönder
            </button>
          </FormContainer>
        </AltContainer>
      </Mainconteiner>
    </div>
  );
};
export default Footer;
