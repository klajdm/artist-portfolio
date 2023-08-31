import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:klajdart@gmail?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className="relative min-w-fit min-h-screen flex  flex-col text-center justify-evenly mx-auto items-center ">
      <h2 className=" absolute top-12 font-['Roboto_Slab'] lg:top-32 md:top-16 uppercase tracking-[10px] text-gray-500 text-xl lg:text-2xl ">
        Contact
      </h2>

      <div className=" flex flex-col space-y-10">
        <div className="space-y-5">
          <Link
            href="tel:+355675432456"
            className="flex items-center space-x-5 justify-center"
          >
            <PhoneIcon className="text-gray-500/80 h-5  w-5 animate-pulse" />
            <p className="">+355675432456</p>
          </Link>

          <Link
            href="mailto: klajdart@gmail.com"
            className="flex items-center space-x-5 justify-center"
          >
            <EnvelopeIcon className="text-gray-500/80 h-5  w-5 animate-pulse" />
            <p className="">klajdart@gmail.com</p>
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-5 md:space-y-2 w-fit mx-auto"
        >
          <div className="flex-col md:flex-row md:space-x-2 space-y-5 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full md:w-fit"
              type="text"
              name="name"
              autoComplete="on"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full md:w-fit"
              type="email"
              name="email"
              autoComplete="on"
              required
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            required
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            name="message"
            required
          />
          <div className="flex items-end justify-end pt-4">
            <button
              type="submit"
              className=" bg-black/90 border border-black py-2 px-5 rounded-full text-white font-semibold text hover:bg-black/80"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
