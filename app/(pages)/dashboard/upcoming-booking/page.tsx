import DashboardLayout from "@/components/DashboardComponents/DashBoardLayout";
import BookingCard from "@/components/BookingComponets/BookingCard";

export default function upcomingBooking() {
  return (
    <DashboardLayout>
      <div className="mb-8 text-2xl uppercase  tracking-widest ">
        upcoming Booking
      </div>
      <section className="grid grid-cols-3 gap-5">
        <BookingCard completed={false} cancelled={false} upcoming={true} />
        <BookingCard completed={false} cancelled={true} upcoming={false} />
        <BookingCard cancelled={false} completed={false} upcoming={true} />
        <BookingCard completed={false} cancelled={false} upcoming={true} />
        <BookingCard cancelled={true} completed={false} upcoming={false} />
      </section>
    </DashboardLayout>
  );
}
