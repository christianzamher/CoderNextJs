import Link from "next/link";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "My App - Contact Page",
  description: "Talk to us, we can help you",
};

const Contact = () => {
  return <>
    <ContactForm/>
  </>;
};

export default Contact;
