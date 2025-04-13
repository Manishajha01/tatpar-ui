import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Priya Sharma",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
            rating: 5,
            text: "Amazing service! My leaky sink was fixed within 15 minutes of calling. The plumber was professional, friendly, and extremely skilled. Highly recommend!"
        },
        {
            name: "Rahul Patel",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
            rating: 4.5,
            text: "The electrician arrived in just 10 minutes as promised and fixed our power outage. Very transparent pricing with no hidden fees. Will definitely use again!"
        },
        {
            name: "Anita Desai",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
            rating: 5,
            text: "The carpenter did an excellent job assembling my new furniture. He was punctual, neat, and very skilled. The whole process was hassle-free and extremely convenient!"
        }
    ];

    return (
        <section className="py-16 bg-white" id="testimonials">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">What Our Customers Say</h2>
                    <p className="font-open-sans text-lg text-[#333333]/80 max-w-2xl mx-auto">
                        Donot just take our word for it - hear from our satisfied customers
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-100 rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={250}
                                    height={150}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-poppins font-semibold text-lg text-[#2C3E50]">{testimonial.name}</h4>
                                    <div className="flex text-[#FFD700]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill={i < Math.floor(testimonial.rating) ? "#FFD700" : (i < testimonial.rating ? "#FFD700" : "none")}
                                                className={i < Math.floor(testimonial.rating) ? "text-[#FFD700]" : (i < testimonial.rating ? "text-[#FFD700] fill-half" : "text-gray-300")}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="font-open-sans text-[#333333]/80 italic">
                                {testimonial.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
