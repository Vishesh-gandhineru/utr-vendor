import DashboardLayout from "@/components/DashboardComponents/DashBoardLayout"
import BookingCard from "@/components/BookingComponets/BookingCard"

const pastBooking = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 text-2xl uppercase  tracking-widest ">
        Past Booking
      </div>
      <section className="grid grid-cols-3 gap-5">
        <BookingCard completed={true} cancelled={false} upcoming={false} />
        <BookingCard completed={true} cancelled={false} upcoming={false} />
        <BookingCard cancelled={true} completed={false} upcoming={false} />
       
      </section>
    </DashboardLayout>
  )
}

export default pastBooking