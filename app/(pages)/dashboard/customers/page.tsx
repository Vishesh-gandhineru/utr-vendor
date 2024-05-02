import DashboardLayout from "@/components/DashboardComponents/DashBoardLayout"
import CustomerProfileCard from "@/components/CustomerComponents/CustomerDetailCard"

const customers = () => {
  return (
    <DashboardLayout>
     <div className="mb-[20px] text-5xl uppercase  tracking-widest ">
        Customers
      </div>
    <section className="grid grid-cols-3 gap-7">
      <CustomerProfileCard />
      <CustomerProfileCard />
      <CustomerProfileCard />
      <CustomerProfileCard />
      <CustomerProfileCard />
    </section>
  </DashboardLayout>
  )
}

export default customers