
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const ContactLine = () => {
  return (
    <div className="hidden md:flex bg-[#1C4670] text-gray-300 px-4 py-2 justify-between items-center">
      <div className="flex gap-6">
        <a
          href="www.registerKaro.in"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <FaEnvelope />
          www.registerKaro.in
        </a>
        <a
          href="tel:9891775566"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <FaPhone />
          98917755666
        </a>
      </div>

      <div className="flex gap-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaPinterest />
        </a>
      </div>
    </div>
  );
};

export default ContactLine;
