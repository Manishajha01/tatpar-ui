"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

interface ServiceBooking {
    number: string;
    name: string;
    service: string;
    address: string | null;
    description: string | null;
    tenMinBooking: boolean | null;
    date: string | null;
    totalAmount: number | null;
}

const QueryCards = () => {
    const [data, setData] = useState<ServiceBooking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/queries/all`)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-10 text-lg">Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {data.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md border">
                    <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium text-gray-700">Name:</span> {item.name}</p>
                        <p><span className="font-medium text-gray-700">Phone:</span> {item.number}</p>
                        <p><span className="font-medium text-gray-700">Service:</span> {item.service}</p>
                        <p><span className="font-medium text-gray-700">Address:</span> {item.address || 'N/A'}</p>
                        <p><span className="font-medium text-gray-700">Description:</span> {item.description || 'N/A'}</p>
                        <p><span className="font-medium text-gray-700">Priority item:</span> {item.tenMinBooking ? 'Yes' : 'No'}</p>
                        {/* <p><span className="font-medium text-gray-700">Date:</span> {new Date(item.date).toLocaleDateString()}</p> */}
                        <p><span className="font-medium text-gray-700">Total Amount:</span> ₹{item.totalAmount}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default QueryCards;