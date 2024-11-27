"use client";
interface ContactProps {
  // Add props here
}
import { useState } from "react";

import Input from "@/components/molecules/Input";
import FileInput from "@/components/molecules/FileInput";
import Textarea from "@/components/molecules/Textarea";
import Button from "@/components/atoms/Button";

const Contact: React.FC<ContactProps> = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    location: "",
    productFile: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Add submit logic here
    e.preventDefault();
    console.log("Submitted", formData);
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      className="flex w-full flex-col gap-4 md:w-full md:pb-20 md:pl-5 md:pt-10 lg:pt-[130px] xl:pb-[128px] xl:pl-[90px] xl:pr-[60px]"
      onSubmit={handleSubmit}
    >
      <Input
        id="name"
        label="First and Last Name"
        value={formData.name}
        isRequired
        onChange={handleChange}
      />
      <Input
        id="email"
        label="Email"
        value={formData.email}
        isRequired
        onChange={handleChange}
      />
      <Input
        id="brandName"
        label="Brand Name"
        value={formData.brandName}
        isRequired
        onChange={handleChange}
      />
      <Input
        id="location"
        label="Location"
        value={formData.location}
        isRequired
        onChange={handleChange}
      />
      <FileInput
        id="productFile"
        label="Sell Sheet or Product Catalog"
        value={formData.productFile}
        isRequired
        onChange={handleChange}
      />
      <Textarea
        id="message"
        label="Message"
        value={formData.message}
        isRequired
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Contact;
