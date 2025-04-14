import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#2C3E50] text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <a href="#" className="inline-block mb-4">
                            <span className="text-white font-poppins font-bold text-2xl">
                                <span className="text-[#FFD700]">T</span>atparr
                            </span>
                        </a>
                        <p className="font-open-sans text-gray-300 mb-4">
                            Professional home services delivered in 10 minutes by verified experts.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-[#FFD700] transition duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="text-white hover:text-[#FFD700] transition duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="text-white hover:text-[#FFD700] transition duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="text-white hover:text-[#FFD700] transition duration-300">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-poppins font-semibold text-lg text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 font-open-sans text-gray-300">
                            <li>
                                <a href="#services" className="hover:text-[#FFD700] transition duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="hover:text-[#FFD700] transition duration-300">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:text-[#FFD700] transition duration-300">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#faqs" className="hover:text-[#FFD700] transition duration-300">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#FFD700] transition duration-300">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-poppins font-semibold text-lg text-white mb-4">Services</h4>
                        <ul className="space-y-2 font-open-sans text-gray-300">
                            <li>
                                <a href="#book-service" className="hover:text-[#FFD700] transition duration-300">
                                    Plumbing
                                </a>
                            </li>
                            <li>
                                <a href="#book-service" className="hover:text-[#FFD700] transition duration-300">
                                    Electrical
                                </a>
                            </li>
                            <li>
                                <a href="#book-service" className="hover:text-[#FFD700] transition duration-300">
                                    Painting
                                </a>
                            </li>
                            <li>
                                <a href="#book-service" className="hover:text-[#FFD700] transition duration-300">
                                    Carpentry
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-[#FFD700] transition duration-300">
                                    View All Services
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-poppins font-semibold text-lg text-white mb-4">Support</h4>
                        <ul className="space-y-2 font-open-sans text-gray-300">
                            <li>
                                <a href="#" className="hover:text-[#FFD700] transition duration-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#FFD700] transition duration-300">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#FFD700] transition duration-300">
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#FFD700] transition duration-300">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#FFD700] transition duration-300">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center">
                    <p className="font-open-sans text-gray-400">
                        &copy; {new Date().getFullYear()} Tatparr. All rights reserved. Home Services in 10 Minutes.
                    </p>
                </div>
            </div>
        </footer>
    );
}
