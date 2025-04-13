
export default function Faqs() {
    const faqs = [
        {
            question: "How quickly can I expect a service professional to arrive?",
            answer: "For emergency services, we guarantee a professional will arrive within 10 minutes of booking confirmation. For regular appointments, you can schedule a time that works best for you, and our professionals will arrive within the specified time slot."
        },
        {
            question: "Are your service professionals verified?",
            answer: "Yes, all our professionals undergo thorough background checks, skill verification, and training before joining our platform. We ensure they are licensed (where applicable) and fully qualified to perform their respective services."
        },
        {
            question: "How is the pricing determined?",
            answer: "Our pricing is transparent and based on the type of service, complexity of the job, and parts or materials required. You'll receive a clear estimate before work begins, and there are no hidden charges. For standard services, we have fixed rates that you can view on our pricing page."
        },
        {
            question: "Do you offer any warranty on services?",
            answer: "Yes, we stand behind our work with a 30-day service warranty. If you face any issues with the work performed within 30 days, we'll send a professional to fix it at no additional cost."
        },
        {
            question: "What areas do you service?",
            answer: "We currently service major metropolitan areas and their surrounding suburbs. Please enter your location on our booking form to check if we provide services in your area."
        }
    ];

    return (
        <section className="py-16 bg-white" id="faqs">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#2C3E50] mb-4">Frequently Asked Questions</h2>
                    <p className="font-open-sans text-lg text-[#333333]/80 max-w-2xl mx-auto">
                        Find answers to common questions about our services
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div >
                        {faqs.map((faq, index) => (
                            <div
                                key={index}

                                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <div className="flex justify-between items-center w-full bg-white p-4 text-left font-poppins font-medium text-[#2C3E50] hover:bg-gray-50 transition duration-300">
                                    {faq.question}
                                </div>
                                <div className="bg-white p-4 pt-0 font-open-sans text-[#333333]/80">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
