import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🖨️",
      label: "3D Printer",
      title: "High-Quality 3D Printing",
      description:
        "Using state-of-the-art 3D printers, we deliver precise and detailed prints tailored to your specifications.",
    },
    {
      icon: "⚙️",
      label: "Custom Design Services",
      title: "Custom CAD Modeling",
      description:
        "Our design experts help bring your ideas to life with custom CAD models ready for printing or prototyping.",
    },
    {
      icon: "🚚",
      label: "Fast Delivery",
      title: "Quick Turnaround & Shipping",
      description:
        "From printing to your doorstep, we ensure fast and reliable delivery to keep your projects on schedule.",
    },
  ];

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4"
        >
          Why Choose Our 3D Printing Services?
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600 max-w-2xl mx-auto">
          We combine cutting-edge technology with expert craftsmanship to deliver custom 3D printing solutions that meet your unique needs.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.3 * (index + 1))}
            className="flex flex-col items-center p-6 text-center"
          >
            <motion.div
              variants={fadeIn("down", 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#E3F2FD" : index === 1 ? "#E8F5E9" : "#FFF3E0",
              }}
            >
              <span role="img" aria-label={feature.label} className="text-3xl">
                {feature.icon}
              </span>
            </motion.div>
            <motion.h3
              variants={textVariant(0.3)}
              className="text-2xl font-medium mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.6 * (index + 1))}
              className="text-gray-500"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeIn("up", 0.7)} className="text-center mt-12">
        <motion.button
          variants={fadeIn("up", 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-purple-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
        >
          Get Your Custom Quote
          <div className="absolute inset-0 -z-10 rounded-full bg-purple-600/40 blur-2xl opacity-50"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
