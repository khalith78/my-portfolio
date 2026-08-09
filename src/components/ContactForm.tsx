import React, { useState } from "react";
import { Send, CheckCircle2, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const {name,value} = e.target;

    setFormData(prev=>({
      ...prev,
      [name]:value
    }));

    setError("");

  };


const handleSubmit = async (e: React.FormEvent) => {

  e.preventDefault();

  if(!formData.name.trim()){
    setError("Please enter your name");
    return;
  }

  if(!formData.email.includes("@")){
    setError("Please enter a valid email");
    return;
  }


  setIsSubmitting(true);


  try {

    const response = await fetch(
      "https://formspree.io/f/mjybkyyl",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },

        body:JSON.stringify({

          name:formData.name,

          email:formData.email,

          subject:formData.subject,

          message:formData.message

        })

      }
    );


    if(response.ok){

      setSubmitSuccess(true);

      setTimeout(() => {
  setSubmitSuccess(false);
}, 5000);


      setFormData({

        name:"",
        email:"",
        subject:"",
        message:""

      });

    }
    else{

      setError("Something went wrong. Try again.");

    }


  }

  catch(error){

    setError("Unable to send message.");

  }


  finally{

    setIsSubmitting(false);

  }


};



  return (

<div
className="
bg-[#121212]/80
border
border-white/5
p-6
sm:p-8
rounded-3xl
"
>


<AnimatePresence mode="wait">


{
!submitSuccess ? (


<motion.form

key="form"

initial={{
opacity:0
}}

animate={{
opacity:1
}}

onSubmit={handleSubmit}

className="space-y-5"

>


<h4
className="
font-display
font-bold
text-xl
text-white
"
>
Send a Message
</h4>



{error && (

<div
className="
bg-red-950/40
border
border-red-500/20
text-red-400
text-xs
p-3
rounded-lg
"
>

{error}

</div>

)}





{/* Name */}

<div>

<label
className="
text-[10px]
uppercase
font-mono
text-gray-500
block
mb-1.5
"
>
Name
</label>


<input

type="text"

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your full name"

className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
text-sm
text-white
placeholder-gray-600
outline-none
focus:border-brand-orange
transition-all
"

/>

</div>






{/* Email */}

<div>

<label
className="
text-[10px]
uppercase
font-mono
text-gray-500
block
mb-1.5
"
>
Email
</label>


<input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="you@example.com"

className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
text-sm
text-white
placeholder-gray-600
outline-none
focus:border-brand-orange
transition-all
"

/>


</div>






{/* Subject */}

<div>

<label
className="
text-[10px]
uppercase
font-mono
text-gray-500
block
mb-1.5
"
>
Subject
</label>


<input

type="text"

name="subject"

value={formData.subject}

onChange={handleChange}

placeholder="What is this about?"

className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
text-sm
text-white
placeholder-gray-600
outline-none
focus:border-brand-orange
transition-all
"

/>


</div>







{/* Message */}

<div>

<label
className="
text-[10px]
uppercase
font-mono
text-gray-500
block
mb-1.5
"
>
Message
</label>


<textarea

name="message"

rows={5}

value={formData.message}

onChange={handleChange}

placeholder="Tell me about your project or idea."

className="
w-full
bg-black/40
border
border-white/10
rounded-xl
px-4
py-3
text-sm
text-white
placeholder-gray-600
outline-none
focus:border-brand-orange
transition-all
resize-none
"

/>


</div>






<button

type="submit"

disabled={isSubmitting}

className="
w-full
flex
items-center
justify-center
gap-2

bg-white
text-black

font-bold

py-3.5

rounded-xl

hover:bg-brand-orange
hover:text-white

transition-all

disabled:opacity-50
"

>


{
isSubmitting ?

<>

<RefreshCw
className="w-4 h-4 animate-spin"
/>

Sending...

</>

:

<>

Send Message

<Send
className="w-4 h-4"
/>

</>

}



</button>



</motion.form>



)

:

(


<motion.div

key="success"

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

className="
text-center
py-10
"

>


<CheckCircle2

className="
mx-auto
w-14
h-14
text-green-500
mb-4
"

/>


<h3
className="
text-white
text-xl
font-bold
"
>
Message Sent!
</h3>


<p
className="
text-gray-400
text-sm
mt-2
"
>
Thanks for reaching out. I'll get back to you soon.
</p>


</motion.div>


)

}



</AnimatePresence>


</div>


  );

}