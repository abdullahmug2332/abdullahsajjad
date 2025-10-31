import ContactForm from '@/components/ContactForm'
import Faqs from '@/components/Faqs'
import React from 'react'


export default function page() {
  const contact = {
    form: {
      subTitle: "Get In Touch",
      title: "Let’s Talk ",
      description:
        "Have a question, project idea, or collaboration in mind? Fill out the form below and I’ll get back to you shortly. I’m always excited to discuss new opportunities and creative solutions.",
      image: "/abdullah.JPG",
      message: "My inbox is always open for new ideas, collaborations, or freelance projects. Whether you’re looking to bring your vision to life, need help with web development, or just want to discuss creative possibilities — feel free to reach out anytime. I’d be more than happy to connect and explore how we can work together!"
    },
    faqs: {
      title: "Frequently Asked Questions",
      subtitle: "Get quick answers before reaching out",
      description:
        "We’ve gathered some of the most common questions clients ask about my work process, project timelines, and communication. If you don’t see your question here, feel free to send me a message — I’ll be happy to help!",
      allFaqs: [
        {
          question: "01. What kind of projects do you work on?",
          answer:
            "I specialize in building modern, responsive websites and web applications using React, Next.js, Node.js, and WordPress. Whether it’s a personal portfolio, eCommerce store, or full-stack business solution — I can help bring your idea to life."
        },
        {
          question: "02. How long does it take to complete a project?",
          answer:
            "The timeline depends on the project’s size and complexity. A simple website can take about one to two weeks, while a more complex application might take several weeks. I always share a detailed timeline before starting any project."
        },
        {
          question: "03. Do you offer website maintenance or updates after project delivery?",
          answer:
            "Yes, I provide ongoing support and maintenance packages to ensure your website stays secure, fast, and up to date. You can also request new features or design improvements anytime."
        },
        {
          question: "04. What is your working process?",
          answer:
            "My process includes understanding your goals, designing wireframes or mockups, developing the project, testing it thoroughly, and then deploying it. I also keep you updated throughout the process."
        },
        {
          question: "05. How can I contact you for a project or collaboration?",
          answer:
            "You can use the contact form on this website or email me directly. I usually respond within 24 hours — so feel free to reach out anytime!"
        }
      ]
    }

  }
  return (
    <>
      <ContactForm data={contact.form} />
      <Faqs data={contact.faqs} />
    </>
  )
}
