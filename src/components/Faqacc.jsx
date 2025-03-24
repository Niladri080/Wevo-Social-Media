import { useState } from "react";

const faqs = [
  {
    question: "How do I create an account on WEVO?",
    answer:
      "Click on 'Sign Up', fill in your details, and verify your email to create an account.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Go to the login page, click 'Forgot Password?', and follow the instructions sent to your email.",
  },
  {
    question: "Is my data secure on WEVO?",
    answer:
      "Yes, WEVO follows strict privacy policies and uses encryption to protect user data.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Go to 'Settings' > 'Account' > 'Delete Account'. Please note that this action is irreversible.",
  },
  {
    question: "Can I change my username?",
    answer:
      "Yes, go to 'Settings' > 'Profile' > 'Edit Username' to update your username.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5 main-faq">
      <h2 className="text-center mb-4 text-green">
        Frequently Asked Questions
      </h2>
      <div className="accordion height-m bg-faq" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header bg-faq">
              <button
                className={`accordion-button bg-beize-green ${
                  openIndex === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse bg-beize-green-ans ${
                openIndex === index ? "show" : ""
              }`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
