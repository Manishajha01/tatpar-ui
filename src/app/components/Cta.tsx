export default function Cta() {
    return (
        <section className="py-16 bg-[#FFD700]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#2C3E50] mb-6">Ready to Get Your Home Fixed?</h2>
                <p className="font-open-sans text-lg text-[#2C3E50]/80 max-w-2xl mx-auto mb-8">
                    Professional, reliable, and quick home services are just a click away. Book now and experience the difference!
                </p>
                <a
                    href="#book-service"
                    className="inline-block bg-white hover:bg-[#2C3E50] hover:text-white text-[#2C3E50] font-poppins font-semibold px-8 py-3 rounded-md text-lg transition duration-300"
                >
                    Book a Service
                </a>
            </div>
        </section>
    );
}
