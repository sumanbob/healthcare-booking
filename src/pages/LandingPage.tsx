import React, { useState } from "react";
import { doctors } from "../data/doctors";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Find a Doctor</h1>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Search by name or specialization"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-2 gap-4">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => navigate(`/doctor/${doctor.id}`)}
            className="cursor-pointer border rounded-lg p-4 shadow hover:bg-gray-50"
          >
            <img src={doctor.image} alt={doctor.name} className="w-20 h-20 rounded-full mb-2" />
            <h2 className="font-semibold">{doctor.name}</h2>
            <p>{doctor.specialization}</p>
            <p className="text-sm text-gray-500">
              {doctor.available ? "Available Today" : "Next slot: Tomorrow"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;