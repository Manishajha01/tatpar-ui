export default function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: "Select Your Service",
            description: "Choose from our range of home services including plumbing, electrical work, painting, and carpentry."
        },
        {
            number: 2,
            title: "Book An Appointment",
            description: "Schedule a convenient time or opt for our 10-minute emergency response service."
        },
        {
            number: 3,
            title: "Relax & Get It Fixed",
            description: "Our verified professional will arrive promptly and solve your problem with quality service."
        }
    ];

    return (
        <section className="py-16 bg-white" id="how-it-works">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">How It Works</h2>
                    <p className="font-open-sans text-lg text-[#333333]/80 max-w-2xl mx-auto">
                        Getting help is quick and easy with our simple 3-step process
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center p-6 relative">
                            <div className="bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center text-[#2C3E50] text-2xl font-bold mb-6 mx-auto">
                                {step.number}
                            </div>
                            <h3 className="font-poppins font-semibold text-xl text-[#2C3E50] mb-3">{step.title}</h3>
                            <p className="font-open-sans text-[#333333]/80">
                                {step.description}
                            </p>

                            {/* Connector (visible only on md and above) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/4 right-0 w-full h-1 bg-gray-200" style={{ zIndex: -1 }}>
                                    <div className="w-1/2 h-full bg-[#FFD700] float-left"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#book-service"
                        className="inline-block bg-[#FFD700] hover:bg-[#F39C12] text-[#2C3E50] font-poppins font-semibold px-8 py-3 rounded-md text-lg transition duration-300"
                    >
                        Book a Service Now
                    </a>
                </div>
            </div>
        </section>
    );
}
