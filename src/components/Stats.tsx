export default function Stats() {
    const stats = [
        { number: "5000+", text: "Happy Customers" },
        { number: "500+", text: "Expert Professionals" },
        { number: "10", text: "Minute Response" },
        { number: "4.8/5", text: "Customer Rating" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {stats.map((stat, index) => (
                        <div className="p-4" key={index}>
                            <p className="font-poppins font-bold text-3xl md:text-4xl text-[#F39C12] mb-2">
                                {stat.number}
                            </p>
                            <p className="font-open-sans text-[#333333]">{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
