"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition-all duration-500">
      <form
        action="https://formsubmit.co/awaisashraf.dev@gmail.com"
        method="POST"
        className="space-y-8"
        onSubmit={() => setIsSubmitting(true)}
      >
        {/* Prevent bot spam */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for contacting Awais!"
        />

        <div>
          <label className="block text-lg font-bold text-purple-400 mb-3">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 text-lg"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-lg font-bold text-purple-400 mb-3">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 text-lg"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="block text-lg font-bold text-purple-400 mb-3">
            Project Details
          </label>
          <textarea
            name="message"
            rows={6}
            required
            className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-400 text-lg resize-none"
            placeholder="Tell me about your ambitious project..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-xl rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden"
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Send size={24} />
              <span>SEND MESSAGE</span>
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 hover:animate-shimmer"></div>
        </motion.button>
      </form>
    </div>
  );
}
