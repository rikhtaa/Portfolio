import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

//configure email
//giving Nodemailer the keys to your Gmail account from env
const transporter = nodemailer.createTransport({
  service: "gmail",   
  auth: {
    user: process.env.NEXT_PUBLIC_SENDER_USER,
    pass: process.env.NEXT_PUBLIC_SENDER_PASS,
  },
});


export async function POST(request){
  console.log("User:", process.env.NEXT_PUBLIC_SENDER_USER);
  console.log("Pass:", process.env.NEXT_PUBLIC_SENDER_PASS);
  console.log("To:", process.env.NEXT_PUBLIC_RECIEVER_USER);
  try {
    //Get data from the request:
    const {name, email, message} = await request.json()

    //validation
    //The expression becomes true if any part is true. ---> OR operator
    if(!name || !email || !message){ 
      return NextResponse.json(
        {error: "Name, Email and Message are required!"},
        {status:400},
      )
    }
    //Build the email:
    const mailOption = {
      from:process.env.NEXT_PUBLIC_SENDER_USER,
      to:process.env.NEXT_PUBLIC_RECIEVER_USER,
      subject:"New Contact Form Submission",
      text:`
      Name:${name}
      Email:${email}
      Message:${message}
      `,
    }
      
    //Send the email
    await transporter.sendMail(mailOption);
   
    return NextResponse.json(
      {message: "Contact Form Submitted Successfully!"},
      {status:200},
    )
  } catch (error){
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {error: "Failed processing contact form!"},
      {status:500},
    )
    
  }
}
