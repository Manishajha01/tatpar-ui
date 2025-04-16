import { Wrench, Zap, PaintBucket, Hammer } from "lucide-react";
import Image from "next/image";

export default function Services() {
    const services = [
        {
            icon: <Wrench className="text-2xl text-[#2C3E50]" />,
            title: "Plumbing",
            description: "Leaky faucets, clogged drains, pipe repairs, and installations with guaranteed workmanship.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            btnText: "Book Plumber",
            personImage: "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        },
        {
            icon: <Zap className="text-2xl text-[#2C3E50]" />,
            title: "Electrical",
            description: "Wiring, installations, repairs, and maintenance by certified electricians for your safety.",
            image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            btnText: "Book Electrician",
            personImage: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        },
        {
            icon: <PaintBucket className="text-2xl text-[#2C3E50]" />,
            title: "Painting",
            description: "Interior and exterior painting services with premium quality paints and skilled professionals.",
            image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            btnText: "Book Painter",
            personImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        },
        {
            icon: <Hammer className="text-2xl text-[#2C3E50]" />,
            title: "Carpentry",
            description: "Furniture assembly, repairs, custom woodwork, and installations by expert carpenters.",
            image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            btnText: "Book Carpenter",
            personImage: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <section className="py-16 bg-white" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">Our Services</h2>
                    <p className="font-open-sans text-lg text-[#333333]/80 max-w-2xl mx-auto">
                        Professional home services delivered to your doorstep. Our experts are trained, verified, and ready to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="bg-[#FFD700]/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                                {service.icon}
                            </div>
                            <h3 className="font-poppins font-semibold text-xl text-[#2C3E50] text-center mb-3">
                                {service.title}
                            </h3>
                            <p className="font-open-sans text-[#333333]/80 text-center mb-4">
                                {service.description}
                            </p>
                            <div className="relative mb-4">
                                <Image
                                    src={service.image}
                                    alt={`${service.title} services`}
                                    width={250}
                                    height={150}
                                    className="w-full h-32 object-cover rounded-lg"
                                />
                                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFD700] bg-white">
                                    <Image
                                        src={service.personImage}
                                        alt={`${service.title} professional`}
                                        width={250}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <a
                                href="#book-service"
                                className="block text-center bg-[#FFD700] hover:bg-[#F39C12] text-[#2C3E50] font-poppins font-medium px-4 py-2 rounded-md transition duration-300 mt-6"
                            >
                                {service.btnText}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
