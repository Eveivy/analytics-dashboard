import SalesChart from "@/components/SalesChart";
import OrdersTable from "@/components/OrdersTable";
import Statistics from "@/components/Statistics";
import TopPlatforms from "@/components/TopPlatforms";


export default function Home() {
  return (
    <section className="grid grid-cols-3 gap-4 px-5 w-full">
      <div className="col-span-2 w-100">
        <SalesChart />
        <OrdersTable/>
      </div>
      <div>
        <Statistics/>
        <TopPlatforms/>
      </div>
    </section>
  );
}
