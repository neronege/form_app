import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';



const Form=()=> {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => (errors);
 
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="index">
      <input type="text" placeholder="First name"  {...register("name", {required: true, maxLength: 20})} />
      {errors.name && errors.name.type === "required" && <span className="text">*This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span className="text">*Max length exceeded</span> }
      </div>
      <div className="index">
      <input type="text" placeholder="Last name"  {...register("Lastname", {required: true, maxLength: 20})} />
      {errors.Lastname && errors.Lastname.type === "required" && <span className="text">*This is required</span>}
      {errors.Lastname && errors.Lastname.type === "maxLength" && <span className="text">*Max length exceeded</span> }
      </div>
      <div className="index">
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.Lastname && errors.Email.type === "required" && <span className="text"> *This is required</span>}
      </div>
      <div className="index">
      <input type="tel" placeholder="Mobile number" {...register("Mobilenumber", {required: true, minLength: 10, maxLength: 12})} />
      {errors.Lastname && errors.Mobilenumber.type === "required" && <span className="text">*This is required</span>}
      </div>
      
      <div>
      <textarea className="index-text" {...register("Mesajınız", {})} />
      </div>
      <input type="submit" />
    </form>
  );
}

export default Form