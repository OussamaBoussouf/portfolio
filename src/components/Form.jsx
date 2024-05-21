import { useForm } from "react-hook-form";
import "./form.css";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Form({ onClose }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "visible");
  }, []);

  const onSubmit = (data) => {
    if (data) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_b4w274i",
          "template_5d3emzl",
          form.current,
          "ldgxf-CkUImT4swhr"
        )
        .then(
          () => {
            toast.success("Your message has been sent");
            onClose();
          },
          () => {
            toast.error("Something went wrong");
          }
        )
        .finally(() => setLoading(false));
    }
  };

  return (
    <motion.form
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.9,
        type: "spring",
        delay: 0.5,
      }}
      className="form"
      ref={form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <button onClick={onClose} className="form-close" type="button">
        <X />
      </button>
      <h2 className="form-title">Contact</h2>
      <div className="form-name">
        <label htmlFor="user_name">Full name :</label> <br />
        <input
          type="text"
          {...register("user_name", { required: true })}
          name="user_name"
          placeholder="full name"
        />
        {errors.user_name && (
          <span className="form-error">The full name is required</span>
        )}
      </div>
      <div className="form-email">
        <label htmlFor="user_email">Email :</label> <br />
        <input
          type="text"
          {...register("user_email", { required: true })}
          name="user_email"
          placeholder="xyz@gmail.com"
        />
        {errors.user_email && (
          <span className="form-error">The email is required</span>
        )}
      </div>
      <div className="form-message">
        <label htmlFor="message">Your message :</label> <br />
        <textarea
          name="message"
          {...register("message", { required: true })}
          rows="5"
          placeholder="Message"
        ></textarea>
        {errors.message && (
          <span className="form-error">The message field is required</span>
        )}
      </div>
      <div className="form-submit-container">
        <button className="form-submit" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </motion.form>
  );
}

export default Form;
