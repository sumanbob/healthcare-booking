import React from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";
import BookingForm from "../components/BookingForm";

const DoctorProfile: React.FC = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) return <div className="p-6">Doctor not found.</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-bold">{doctor.name}</h2>
      <p className="mb-2">{doctor.specialization}</p>
      <p className="mb-4 text-sm text-gray-500">
        {doctor.available ? "Available Today" : "Next slot: Tomorrow"}
      </p>
      <BookingForm doctor={doctor} />
    </div>
  );
};

export default DoctorProfile;