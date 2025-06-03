import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PricingSection = () => {
  const [sessionCount, setSessionCount] = useState(1);

  // Calculate prices based on session count
  const personalCarePrice = Math.round(1500 * (sessionCount / 10)); // base ₹1500 for 10 sessions
  const guidedSupportPrice = Math.round(3000 * (sessionCount / 10)); // base ₹3000 for 10 sessions

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl text-green-800 font-bold text-center mb-16 text-navy-900"
        >
          Therapy Pricing
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Personal Care Plan */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.h3
              variants={fadeIn("up", 0.6)}
              className="text-xl text-green-700 mb-4"
            >
              Personal Care
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.7)}
              className="text-3xl font-bold mb-4"
            >
              ₹{personalCarePrice}/mo
            </motion.p>
            <p className="text-gray-600">
              Great for individuals starting their wellness journey. Includes
              access to certified therapists and self-guided tools.
            </p>
          </motion.div>

          {/* Guided Support Plan */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.h3
              variants={fadeIn("up", 0.6)}
              className="text-xl text-green-700 mb-4"
            >
              Guided Support
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.7)}
              className="text-3xl font-bold mb-4"
            >
              ₹{guidedSupportPrice}/mo
            </motion.p>
            <p className="text-gray-600">
              Ideal for deeper care. Includes more sessions, 1-on-1 therapy,
              emotional wellness resources, and priority support.
            </p>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.8)} className="max-w-xl mx-auto">
          <motion.p
            variants={fadeIn("up", 0.9)}
            className="text-center text-gray-600 mb-4"
          >
            {sessionCount} sessions/month
          </motion.p>

          <motion.div variants={fadeIn("up", 1.0)} className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">1</span>
              <input
                type="range"
                min="1"
                max="10"
                value={sessionCount}
                onChange={(e) => setSessionCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  accentColor: "green", // this works in modern browsers (especially Chrome/Edge)
                }}
              />
              <span className="text-sm text-gray-600">10</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1.1)}
            className="text-center mt-12"
          >
            <motion.p
              variants={fadeIn("up", 1.2)}
              className="text-xl text-green-700 mb-4"
            >
              Ready to begin your healing journey?
            </motion.p>
            <motion.button
              variants={fadeIn("up", 1.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
            >
              Book Your Plan
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
