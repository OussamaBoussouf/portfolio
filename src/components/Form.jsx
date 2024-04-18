import { useForm } from "react-hook-form";
import "./form.css";
import { X } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Form({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "visible");
  }, []);

  const onSubmit = (data) => console.log(data);

  return (
    <motion.form
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.9, type: "spring", stiffness: 80, ease: "easeIn" }}
      className="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <button onClick={onClose} className="form-close" type="button">
        <X />
      </button>
      <h2 className="form-title">Contact</h2>
      <div className="form-name">
        <label htmlFor="fullName">Full name :</label> <br />
        <input
          type="text"
          {...register("fullName", { required: true })}
          name="fullName"
          placeholder="full name"
        />
        {errors.fullName && (
          <span className="form-error">The full name is required</span>
        )}
      </div>
      <div className="form-email">
        <label htmlFor="email">Email :</label> <br />
        <input
          type="text"
          {...register("email", { required: true })}
          name="email"
          placeholder="xyz@gmail.com"
        />
        {errors.email && (
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
        <button className="form-submit" type="submit">
          Send
        </button>
      </div>
    </motion.form>
  );
}

export default Form;
