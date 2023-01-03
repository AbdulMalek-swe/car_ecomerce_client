
import { useForm } from "react-hook-form";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Complain = () => {
    const { register,reset,handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data =>{
        const proced = window.confirm("are you sure you give your feedback ?");
        if(proced){
            console.log(data);
            emailjs.sendForm('service_8u15s9k', 'template_zrbp9zk', data, 'user_ZSYBsoJvpjp0A3P1Gz5jp')
    .then((result) => {
        console.log(result.text);
        reset();
    }, (error) => {
        console.log(error.text);
    });
        }
       
       reset();
         
    }
    
    console.log(watch("example"));
    return (
        <div >
            <h1 className="m-3">CONTACT WITH ME</h1>
      
                  <div className="mx-auto w-50">
                  <form className="me-auto" onSubmit={handleSubmit(onSubmit)}>  
   
   <input className="form-control" placeholder="enter your name"  {...register("name")} /> <br/>
   <input className="form-control " placeholder="enter your mail" {...register("email", { required: true })} /> <br/>
   <textarea  className="form-control " placeholder="description" {...register("message", { required: true })} />
   <br/>
   
   <input  class="btn btn-primary mb-3 w-25"  type="submit" value="send" />
 </form>
                  </div>
        </div>
    );
};

export default Complain;