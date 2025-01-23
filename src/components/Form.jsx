import { useEffect, useRef, useState } from "react";
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Message,
  SubmitButton,
  StyledForm,
  CloseButton,
  FormDivider,
} from "../styles/Form.style";
import emailjs from "@emailjs/browser";

function Form({ onClose, onSuccess, onError }) {
  const formContainer = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email !== "" && data.message !== "") {
      setLoading(true);
      emailjs
        .sendForm(
          "service_b4w274i",
          "template_5d3emzl",
          e.target,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          onClose();
          onSuccess();
        })
        .catch((err) => {
          onError();
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  };

  const handleClick = () => {
    if (formContainer.current) {
      const fadeOut = [{ bottom: "-70%" }];
      const fadeOutTiming = {
        duration: 500,
        fill: "forwards",
      };

      const animation = formContainer.current.animate(fadeOut, fadeOutTiming);
      animation.finished.then(() => onClose());
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "visible");
  }, []);

  return (
    <FormContainer ref={formContainer}>
      <CloseButton onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 72 72"
        >
          <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>
        </svg>
      </CloseButton>
      <StyledForm onSubmit={handleSubmit}>
        <FormDivider>
          <FormGroup>
            <Label htmlFor="full-name">Full name</Label>
            <Input
              required
              id="full-name"
              type="text"
              name="user_name"
              placeholder="John Doe"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              required
              id="email"
              type="email"
              name="user_email"
              placeholder="xyz@example.com"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </FormGroup>
        </FormDivider>
        <FormGroup>
          <Label>Message</Label>
          <Message
            required
            placeholder="Type your message here..."
            name="message"
            rows={7}
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
        </FormGroup>
        <SubmitButton disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </SubmitButton>
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
