"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { DotPattern } from "../ui/dot-pattern";
import { BorderBeam } from "../ui/border-beam";
import { RainbowButton } from "../ui/rainbow-button";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import social media icons

export default function ContactUs() {
    const [uiRating, setUiRating] = useState(0);
    const [uxRating, setUxRating] = useState(0);
    const [featuresRating, setFeaturesRating] = useState(0);
    const [improvements, setImprovements] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            name,
            email,
            message,
            uiRating,
            uxRating,
            featuresRating,
            improvements,
        };

        try {
            const response = await fetch("http://localhost:5000/api/feedback/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("Feedback submitted successfully!");
                // Reset form fields
                setName("");
                setEmail("");
                setMessage("");
                setUiRating(0);
                setUxRating(0);
                setFeaturesRating(0);
                setImprovements("");
            } else {
                setSubmitStatus("Failed to submit feedback. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmitStatus("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 py-10 sm:px-4 ">
            {/* Title with Animation */}
            <p className="text-white text-5xl font-bold mb-7 -tracking-wide md:text-6xl sm:text-4xl text-center">
                Contact Me & Feedback
            </p>

            {/* Contact & Feedback Form */}
            <div className="relative bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-2xl h-auto md:h-[970px] sm:w-full sm:px-4 sm:py-6">
                <BorderBeam duration={5} />

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div>
                        <label className="text-white block mb-2">Your Name</label>
                        <input
                            type="text"
                            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="text-white block mb-2">Your Email</label>
                        <input
                            type="email"
                            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="text-white block mb-2">Your Message</label>
                        <textarea
                            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                            placeholder="Write your message here..."
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    {/* UI & UX Ratings */}
                    <div className="mt-6">
                        <label className="text-white block mb-2">Rate UI (User Interface)</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`cursor-pointer text-2xl ${uiRating >= star ? "text-yellow-400" : "text-gray-500"}`}
                                    onClick={() => setUiRating(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-white block mb-2">Rate UX (User Experience)</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`cursor-pointer text-2xl ${uxRating >= star ? "text-yellow-400" : "text-gray-500"}`}
                                    onClick={() => setUxRating(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="text-white block mb-2">Rate App Features</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`cursor-pointer text-2xl ${featuresRating >= star ? "text-yellow-400" : "text-gray-500"}`}
                                    onClick={() => setFeaturesRating(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Suggestions & Improvements */}
                    <div className="mt-6">
                        <label className="text-white block mb-2">Any suggestions for improvement?</label>
                        <textarea
                            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                            placeholder="Share your suggestions here..."
                            rows="3"
                            value={improvements}
                            onChange={(e) => setImprovements(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
                            disabled={isSubmitting}
                        >
                            <RainbowButton>
                                {isSubmitting ? "Submitting..." : "Submit Form"}
                            </RainbowButton>
                        </button>
                        {submitStatus && (
                            <p className={`mt-4 ${submitStatus.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
                                {submitStatus}
                            </p>
                        )}
                    </div>
                </form>
            </div>

            {/* Social Media Links Box */}
            <div className="relative bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-2xl mt-8 sm:w-full sm:px-4 sm:py-6">
                <BorderBeam duration={5} />
                <h2 className="text-white text-2xl font-bold mb-6 text-center">Connect with Me</h2>
                <div className="flex justify-center space-x-6 sm:space-x-4">
                    <a
                        href="https://github.com/rasikarakhewar3010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-all duration-300"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rasika-rakhewar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-all duration-300"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="https://www.instagram.com/rasika_rakhewar?igsh=cGM5MWVzem53YXNl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-all duration-300"
                    >
                        <FaInstagram size={32} />
                    </a>
                </div>
            </div>

            {/* Background Effect */}
            <DotPattern
                className={cn(
                    "absolute inset-0 opacity-30 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
                )}
            />
        </div>
    );
}