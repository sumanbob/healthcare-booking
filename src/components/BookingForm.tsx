import React, { useState } from "react";
import { useForm } from "react-hook-form";

type BookingFormProps = {
  doctor: {
    id: number;
    name: string;
    slots: string[];
  };
};

type FormData = {
  name: string;
  email: string;
  slot: string;
};

const BookingForm: React.FC<BookingFormProps> = ({ doctor }) => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Booking confirmed:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted)
    return <p className="text-green-600">Appointment booked successfully!</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name", { required: true })} className="border p-2 w-full" placeholder="Your Name" />
      <input {...register("email", { required: true })} type="email" className="border p-2 w-full" placeholder="Email" />
      <select {...register("slot", { required: true })} className="border p-2 w-full">
        <option value="">Select a time slot</option>
        {doctor.slots.map((slot, i) => (
          <option key={i} value={slot}>{new Date(slot).toLocaleString()}</option>
        ))}
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Book Appointment</button>
    </form>
  );
};

export default BookingForm;