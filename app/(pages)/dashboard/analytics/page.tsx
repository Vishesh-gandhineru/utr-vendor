import DashboardLayout from "@/components/DashboardComponents/DashBoardLayout"
import { SimpleBarChart } from "@/components/AnalyticsComponents/BarChart"
  import SimpleAreaChart from "@/components/AnalyticsComponents/SimpleAreaChart"
const analytics = () => {


  const monthSale = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    { 
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ]
  return (
    <DashboardLayout>
         <div className="mb-[20px] text-5xl uppercase  tracking-widest ">
        Analytics
      </div>
    <section className="grid grid-cols-2 gap-9">
        <div>
      <h2 className="my-10 text-2xl uppercase tracking-widest">This Months sales</h2>
      <SimpleBarChart data={monthSale} />
        </div>
        <div>
      <h2 className="my-10 text-2xl uppercase tracking-widest">last Months sales</h2>
      <SimpleAreaChart  />
        </div>
      </section>
  </DashboardLayout>
  )
}

export default analytics