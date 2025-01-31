import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden mb-4 bg-white">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FFA229] to-[#1C4670]" />
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-medium">{question}</h4>
        <ChevronRight
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>
      {isOpen && <div className="px-4 pb-4 text-gray-600">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The software uses advanced scanning algorithms to locate and restore deleted files from your computer's storage.",
    },
    {
      question: "How long does the file recovery process typically take?",
      answer:
        "The duration of the file recovery process can vary depending on the size of your storage device and the number of files to be recovered. Generally, it can take anywhere from a few minutes to several hours.",
    },
    {
      question: "Is it possible to recover files from a formatted drive?",
      answer:
        "Yes, in many cases it's possible to recover files from a formatted drive. Our software can scan the drive and attempt to reconstruct the file system, potentially recovering files that were present before formatting.",
    },
    {
      question: "Does your software work with all types of storage devices?",
      answer:
        "Our software is compatible with a wide range of storage devices, including internal and external hard drives, SSDs, USB flash drives, memory cards, and more. It supports both Windows and macOS file systems.",
    },
    {
      question: "Is there a limit to the file size that can be recovered?",
      answer:
        "There is no inherent limit to the file size that can be recovered. However, you'll need enough free space on another storage device to save the recovered files. Very large files may take longer to recover.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-orange-500 font-medium">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#3A2D28]">
            Frequent Ask Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#1B4168] hover:bg-[#1B4168]/90 text-white px-8 py-3 rounded-md flex items-center transition-colors
          text-lg duration-200">
            Show more
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
