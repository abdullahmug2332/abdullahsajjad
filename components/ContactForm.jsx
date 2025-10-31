"use client";
import React, { useState } from "react";
import { GiStarShuriken } from "react-icons/gi";
import SplitText from "@/components/SplitText";
import Image from "next/image";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { RxInstagramLogo } from "react-icons/rx";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandWhatsapp } from "react-icons/tb";

export default function ContactForm({ data }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });

      const result = await res.json();
      if (result.success) {
        setFeedback("✅ Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        setFeedback("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      setFeedback("⚠️ Error sending message. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pad">
      <div className="container flex flex-col gap-[20px]">
        {/* Header */}
        <div className="w-full">
          <div className="flex justify-start items-center gap-[10px] mb-[10px]">
            <GiStarShuriken className="subheading text-[var(--primary)]" />
            <SplitText
              text={data.subTitle}
              className="text-[var(--primary)] font-bold text-[20px]"
            />
          </div>
          <SplitText text={data.title} className="font-bold heading" />
          <p className="para mb-[30px] lg:w-[80%]">{data.description}</p>
        </div>

        {/* Form + Right Side */}
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* Left Form Section */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 bgacc rounded-[20px] py-[45px] px-[15px] lg:px-[20px] flex flex-col gap-[20px] order-2 lg:order-1"
          >
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border px-[7px] py-[10px] focus:outline-0 rounded-[5px] placeholder-[var(--forground)]"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-[7px] py-[10px] focus:outline-0 rounded-[5px] placeholder-[var(--forground)]"
              placeholder="Email"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border px-[7px] py-[10px] focus:outline-0 rounded-[5px] placeholder-[var(--forground)] min-h-[200px]"
              placeholder="Enter Your Message..."
              required
            />
            <button
              type="submit"
              className="btn py-[10px] rounded font-semibold cursor-pointer"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {feedback && (
              <p className="text-center mt-2 text-[16px] text-[var(--primary)] font-semibold">
                {feedback}
              </p>
            )}
          </form>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 lg:px-[15px] order-1 lg:order-2">
            <button className="flex items-center gap-[10px] px-[20px] rounded-full font-[600] bgacc my-[10px]">
              <span className="color text-[35px]">•</span>
              <SplitText
                className="para font-[600]"
                text="Available for Work"
              />
            </button>
            <Image
              src={data.image}
              className="w-[100px] h-[100px] object-cover rounded-full mt-[20px] shadow-xl"
              alt="abdullah"
              width={400}
              height={400}
              unoptimized
            />
            <p className="para font-[500] mt-[20px]">{data.message}</p>
            <div className="flex items-center gap-[20px] mt-[30px]">
              <a
                href="https://www.linkedin.com/in/abdullah-sajjad-8881b9289/"
                target="_blank"
              >
                <FiLinkedin className="text-[29px] color duration-300 hover:translate-y-[-5px]" />
              </a>
              <a href="https://github.com/abdullahmug2332" target="_blank">
                <FiGithub className="text-[29px] color duration-300 hover:translate-y-[-5px]" />
              </a>
              <a
                href="https://www.instagram.com/abdullah__4741/"
                target="_blank"
              >
                <RxInstagramLogo className="text-[29px] color duration-300 hover:translate-y-[-5px]" />
              </a>
              <a href="https://wa.me/923254412292" target="_blank">
                <TbBrandWhatsapp className="text-[29px] color duration-300 hover:translate-y-[-5px]" />
              </a>
              <a href="mailto:abdullahmug2332@gmail.com" target="_blank">
                <MdOutlineMail className="text-[29px] color duration-300 hover:translate-y-[-5px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
