import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-base-100 min-h-screen pt-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold  mb-2">Contact Us</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions, feedback, or need help? We’d love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-base-100 rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-semibold  mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e6bf84] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e6bf84] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e6bf84] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e6bf84] text-white font-semibold py-2 rounded-lg hover:bg-[#d2a865] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            className="flex flex-col justify-between bg-base-100 rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

              <div className="space-y-4 text-gray-600 mb-6">
                <p>
                  <span className="font-medium">📍 Address:</span> 123 Book
                  Street, Dhaka, Bangladesh
                </p>
                <p>
                  <span className="font-medium">📞 Phone:</span> +880 1234 567
                  890
                </p>
                <p>
                  <span className="font-medium">✉️ Email:</span>{" "}
                  support@bookbridge.com
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5328376214384!2d90.41251861543135!3d23.810331684563524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79c5c3f9e8b%3A0xf9c8e5e18f0a2d1c!2sDhaka!5e0!3m2!1sen!2sbd!4v1634567890123!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
