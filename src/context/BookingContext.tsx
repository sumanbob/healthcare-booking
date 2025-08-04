import React, { createContext, ReactNode, useContext, useState } from "react";

type BookingContextType = {
  bookings: any[];
  addBooking: (booking: any) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<any[]>([]);
  const addBooking = (booking: any) => setBookings([...bookings, booking]);

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within BookingProvider");
  return context;
};