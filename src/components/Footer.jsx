import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import logo from "../assets/icon.png";

const Footer = () => {
  const footerLinks = {
    about: [
      { name: "Our Mission", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Customer Reviews", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    services: [
      { name: "3D Printing Services", href: "#" },
      { name: "Prototyping & Modeling", href: "#" },
      { name: "Custom Design Solutions", href: "#" },
      { name: "Material Consultation", href: "#" },
    ],
    support: [
      { name: "FAQs", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Technical Support", href: "#" },
    ],
    connect: [
      { name: "Customer Support", href: "#" },
      { name: "Live Chat", href: "#" },
      { name: "Newsletter Signup", href: "#" },
    ],
  };

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50"
    >
      <div className="section-container">
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeIn("right", 0.4)} className="lg:col-span-4">
            <motion.div
              variants={fadeIn("down", 0.5)}
              className="flex items-center gap-1 mb-6"
            >
              <motion.div
                variants={fadeIn("right", 0.3)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="lg:h-20 rounded-full object-cover w-auto h-15"
                  />
                </motion.div>
              </motion.div>
              <span className="text-xl font-medium ml-1">Merakinovus</span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              className="text-gray-600 mb-6"
            >
              Delivering precision 3D printing, prototyping, and custom solutions with cutting-edge technology and expert craftsmanship.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.7)} className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={fadeIn("left", 0.4)} className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    variants={fadeIn("up", 0.3 * (categoryIndex + 1))}
                  >
                    <motion.h3
                      variants={textVariant(0.2)}
                      className="text-lg font-medium mb-4 capitalize"
                    >
                      {category
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </motion.h3>
                    <motion.ul
                      variants={fadeIn("up", 0.4)}
                      className="space-y-3"
                    >
                      {links.map((link) => (
                        <motion.li key={link.name} variants={fadeIn("up", 0.1)}>
                          <motion.a
                            whileHover={{ x: 5 }}
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div
            variants={fadeIn("up", 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
              variants={fadeIn("right", 1.0)}
              className="text-gray-600 text-sm"
            >
              © {new Date().getFullYear()} merakinovus@gmail.com
            </motion.p>
            <motion.p
              variants={fadeIn("left", 1.0)}
              className="text-gray-600 text-sm"
            >
              Created with ❤️ by Devansh
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
