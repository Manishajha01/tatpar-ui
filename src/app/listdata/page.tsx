import React, { useEffect, useState } from "react";
import axios from "axios";

const QueryCards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://apidev.canyfix.com/v0/queries/all")
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
                    <h2 className="text-xl font-semibold mb-2">
                        {item.title || `Query #${index + 1}`}
                    </h2>
                    <p className="text-gray-600">
                        {item.description || "No description available."}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default QueryCards;