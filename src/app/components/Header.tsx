import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <span className="text-[#2C3E50] font-poppins font-bold text-2xl">
                        <span className="text-[#F39C12]">M</span>istri
                    </span>
                </Link>

                <nav className="hidden md:flex space-x-6">
                    <a href="#services" className="font-poppins font-medium text-[#333333] hover:text-[#F39C12]">
                        Services
                    </a>
                    <a href="#how-it-works" className="font-poppins font-medium text-[#333333] hover:text-[#F39C12]">
                        How It Works
                    </a>
                    <a href="#testimonials" className="font-poppins font-medium text-[#333333] hover:text-[#F39C12]">
                        Testimonials
                    </a>
                    <a href="#faqs" className="font-poppins font-medium text-[#333333] hover:text-[#F39C12]">
                        FAQs
                    </a>
                    <a href="#contact" className="font-poppins font-medium text-[#333333] hover:text-[#F39C12]">
                        Contact
                    </a>
                </nav>

                <div className="flex items-center space-x-4">
                    <a
                        href="#book-service"
                        className="hidden md:block bg-[#FFD700] hover:bg-[#F39C12] text-[#2C3E50] font-poppins font-medium px-5 py-2 rounded-md transition duration-300"
                    >
                        Book a Service
                    </a>
                    <button
                        className="md:hidden text-[#2C3E50] focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white w-full absolute top-full left-0 shadow-md ${isMenuOpen ? "block" : "hidden"
                    }`}
            >
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex flex-col space-y-3">
                        <a
                            href="#services"
                            className="font-poppins font-medium text-[#333333] hover:text-[#F39C12] py-2"
                            onClick={closeMenu}
                        >
                            Services
                        </a>
                        <a
                            href="#how-it-works"
                            className="font-poppins font-medium text-[#333333] hover:text-[#F39C12] py-2"
                            onClick={closeMenu}
                        >
                            How It Works
                        </a>
                        <a
                            href="#testimonials"
                            className="font-poppins font-medium text-[#333333] hover:text-[#F39C12] py-2"
                            onClick={closeMenu}
                        >
                            Testimonials
                        </a>
                        <a
                            href="#faqs"
                            className="font-poppins font-medium text-[#333333] hover:text-[#F39C12] py-2"
                            onClick={closeMenu}
                        >
                            FAQs
                        </a>
                        <a
                            href="#contact"
                            className="font-poppins font-medium text-[#333333] hover:text-[#F39C12] py-2"
                            onClick={closeMenu}
                        >
                            Contact
                        </a>
                        <a
                            href="#book-service"
                            className="bg-[#FFD700] hover:bg-[#F39C12] text-[#2C3E50] font-poppins font-medium px-5 py-2 rounded-md transition duration-300 inline-block text-center"
                            onClick={closeMenu}
                        >
                            Book a Service
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
