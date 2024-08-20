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
      const fadeOut = [{ transform: "translate3d(-50%, 0%, 0)", opacity: "0" }];
      const fadeOutTiming = {
        duration: 700,
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
      <CloseButton onClick={handleClick}>X</CloseButton>
      <StyledForm onSubmit={handleSubmit}>
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
