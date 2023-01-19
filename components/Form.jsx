import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerSchema } from "schema/formSchema";


export default function Contact_us() {
  const {
    register, 
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  
  const submitForm = (data) => {
    //dito mo ata ilalagay ung code para mapunta sa sql
    console.log(data);

    event.target.reset();
    alert("Form Submitted Successfully");
  };


  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header_box}>
          <h1>Registration form</h1>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(submitForm)} >  
            <span> {errors.firstName?.message} </span>
            <span> {errors.lastName?.message} </span>
            <span> {errors.email?.message} </span>
            <span> {errors.mobile?.message} </span>
            <span> {errors.address?.message} </span>
            <span> {errors.student?.message} </span>
            <span> {errors.textArea?.message} </span>
            <div className={styles.textbox}>
              <input type="text" name="firstName" placeholder="First Name" {...register("firstName")}></input>
              <input type="text" name="lastName" placeholder="Last Name" {...register("lastName")}></input>
              <input type="text" name="email" placeholder="Email" {...register("email")}></input>
              <input type="text" name="mobile" placeholder="Mobile (+63)" {...register("mobile")}></input>
            </div>
            <div className={styles.address}>
              <input type="text" name="address" placeholder="Address" {...register("address")}></input>
            </div>
            <h3>Old TUP student?</h3>
            <div className={styles.bolean}>
              <input type="radio" name="student" {...register("radio")} value="yes" required />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="student" {...register("radio")} value="no" required />
              <label htmlFor="no">No</label>
            </div>
            <textarea
              type="text"
              rows="4"
              cols="70"
              placeholder="Why do you want to study here?"
              name="textArea"
              {...register("textArea")}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
