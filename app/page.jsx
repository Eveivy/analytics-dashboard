import SalesChart from "@/components/SalesChart";
import OrdersTable from "@/components/OrdersTable";
import Statistics from "@/components/Statistics";
import TopPlatforms from "@/components/TopPlatforms";


export default function Home() {
  return (
    // <section className="grid grid-cols-3 gap-5 px-5 w-full absolute left-[77px] right-0">
    //   <div className="col-span-2">
    //     <SalesChart />
    //     <OrdersTable/>
    //   </div>
    //   <div>
    //     <Statistics/>
    //     <TopPlatforms/>
    //   </div>
    // </section>
    <section className="gap-5 flex px-5 absolute left-[77px] right-0 h-[670px] overflow-y-scroll mt-24 pb-10">
      <div className="w-[65%] mt-4">
        <SalesChart />
        <OrdersTable/>
      </div>
      <div className="w-[35%] mt-4">
        <Statistics/>
        <TopPlatforms/>
      </div>
    </section>
  );
}
