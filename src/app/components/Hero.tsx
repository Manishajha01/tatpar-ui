import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-white text-[#2C3E50]" id="hero">
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left md:pr-12">
                    <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                        Professional Home Services in <span className="text-[#FFD700]">10 Minutes</span>
                    </h1>
                    <p className="font-open-sans text-lg md:text-xl mb-8 text-gray-700">
                        Expert plumbers, electricians, painters, and carpenters at your doorstep. Verified professionals, transparent pricing, and satisfaction guaranteed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#book-service"
                            className="bg-[#FFD700] hover:bg-[#F39C12] text-[#2C3E50] font-poppins font-semibold px-8 py-3 rounded-md text-lg transition duration-300 text-center"
                        >
                            Book Now
                        </a>
                        <a
                            href="#services"
                            className="bg-[#FFD700]/10 border-2 border-[#FFD700] hover:bg-[#FFD700] text-[#2C3E50] font-poppins font-semibold px-8 py-3 rounded-md text-lg transition duration-300 text-center"
                        >
                            Explore Services
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 mb-10 md:mb-0 flex items-center justify-center">
                    <div className="relative">
                        <Image
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Professional home service"
                            width={200}
                            height={150}
                            className="rounded-lg shadow-xl object-cover z-10 relative ml-4 "
                        />
                        <Image
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Professional home service second"
                            width={200}
                            height={150}
                            className="rounded-lg shadow-xl absolute top-10 -left-6 z-0 w-5/6"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
