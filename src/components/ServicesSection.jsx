
import { BiBrain, BiConversation, BiHeartCircle, BiCalendarCheck } from 'react-icons/bi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <BiBrain className="w-8 h-8 text-purple-600" />,
      title: "Cognitive Therapy",
      description: "Helping you reframe negative thought patterns and build resilience.",
      link: "#learn-more"
    },
    {
      icon: <BiConversation className="w-8 h-8 text-teal-500" />,
      title: "One-on-One Counseling",
      description: "Confidential support to talk through your challenges and emotions.",
      link: "#learn-more"
    },
    {
      icon: <BiHeartCircle className="w-8 h-8 text-pink-500" />,
      title: "Emotional Wellness",
      description: "Explore mindfulness, self-love, and tools for emotional balance.",
      link: "#learn-more"
    },
    {
      icon: <BiCalendarCheck className="w-8 h-8 text-blue-500" />,
      title: "Guided Sessions",
      description: "Structured therapy plans personalized for your healing journey.",
      link: "#learn-more"
    }
  ]

  return (
    <section id="services" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
      >
        {/* Header */}
        <motion.div 
          variants={fadeIn('right', 0.4)}
          className="md:w-1/3"
        >
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
          >
            Empower Your Mind, Embrace Your Peace
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.5)}
            className="text-gray-600 text-lg mb-4 md:w-4/5"
          >
            Discover holistic therapy services tailored to support your emotional well-being.
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 0.6)}
            className="space-y-3"
          >
            <motion.div 
              variants={fadeIn('right', 0.7)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-600"></div>
              </div>
              <span className="text-gray-600">Certified therapists and counselors</span>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 0.8)}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-600"></div>
              </div>
              <span className="text-gray-600">Confidential & compassionate support</span>
            </motion.div>
          </motion.div>
          <motion.button 
            variants={fadeIn('up', 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-purple-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-purple-700 transition-colors"
          >
            Book a Session
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white w-full sm:max-w-xs cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                variants={fadeIn('down', 0.4 * (index + 1))}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2"
              >
                {service.title}
              </motion.h3>
              <motion.p 
                variants={fadeIn('up', 0.5 * (index + 1))}
                className="text-gray-600 mb-4"
              >
                {service.description}
              </motion.p>
              <motion.a 
                variants={fadeIn('up', 0.6 * (index + 1))}
                href={service.link}
                aria-label={`Learn more about ${service.title}`}
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesSection
