
import { useState } from "react";
// import { `apiRequest` } from "@/lib/queryClient";
// import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import axios from "axios";


const BookService: React.FC = () => {
    const [isPending, setIsPending] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        address: "",
        date: new Date().toISOString().split("T")[0], // <-- today's date in YYYY-MM-DD,
        description: "",
        service: "",
        // fastservice: false
    });
    const [isChecked, setIsChecked] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };


    const [errors, setErrors] = useState({
        name: "",
        number: "",
        service: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log("ansme");
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        let valid = true;
        const newErrors = { name: "", number: "", service: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
            valid = false;
        }

        if (!/^\d{10}$/.test(formData.number)) {
            newErrors.number = "Phone number must be 10 digits";
            valid = false;
        }

        if (!formData.service) {
            newErrors.service = "Please select a service";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Checking")
        if (validate()) {


            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/queries/add`, formData); // ✅ Your API route here
                setResponseMsg("✅ Form submitted successfully!");
                console.log("Response:", res.data);
                setIsPending(false);
            } catch (err: unknown) {
                console.error("Error submitting form:", err);
                setResponseMsg("❌ Failed to submit form.");
            }
            // You can send the form data to your backend here
        }
    };

    return (
        <section className="py-16 bg-white" id="book-service">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12">
                            <h2 className="font-poppins font-bold text-3xl text-[#2C3E50] mb-6">Book a Service</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="font-poppins font-medium text-[#333333]" htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="number">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        placeholder="1234567890"
                                        maxLength={10}
                                        className="w-full px-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                    />
                                    {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
                                </div>

                                <div>
                                    <label htmlFor="address">Address</label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-1 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="date">Preferred Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="w-full px-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service">Select a Service *</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full border p-2 rounded"
                                    >
                                        <option value="">-- Please choose an option --</option>
                                        <option value="cleaning">Cleaning</option>
                                        <option value="plumbing">Plumbing</option>
                                        <option value="electrical">Electrical</option>
                                        <option value="gardening">Gardening</option>
                                    </select>
                                    {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                                </div>
                                <div className="flex flex-row items-start space-x-3 space-y-0">

                                    <div className="space-y-1 leading-none">
                                        <label className="ml-2 font-open-sans text-[#333333]">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                            />
                                            {/* ✅ Conditional rendering based on checkbox state */}
                                            {isChecked ? (
                                                <b className="text-green-600  gap-2">Emergency Service Requested!</b>
                                            ) : (
                                                <b className="text-red-600  gap-6">Emergency Service Required?</b>
                                            )}
                                        </label>


                                    </div>
                                </div>

                                {isPending ?
                                    <input
                                        type="submit"
                                        className="w-full bg-[#FFD700] hover:bg-[#F39C12] text-[#2C3E50] font-poppins font-semibold px-4 py-4 rounded-md transition duration-300"
                                    >

                                    </input>
                                    : "Booked Now"
                                }

                                {responseMsg && <p className="mt-4">{responseMsg}</p>}
                            </form>
                        </div>

                        <div className=" hidden md:block">
                            <Image
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Home service professional in yellow"
                                height={150}
                                width={250}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div >
            {/* 
            {isPending && (
                <div className="mt-6 p-4 border rounded bg-gray-50">
                    <h3 className="font-semibold mb-2">📋 Submitted Data:</h3>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Phone:</strong> {formData.number}</p>
                    <p><strong>Service:</strong> {formData.service}</p>
                </div>
            )} */}


        </section >



    );

};

export default BookService;
