import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import OrderHistory from "@/components/OrderHistory/OrderHistory";

const Orders = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Main>
        <Navbar />
        <OrderHistory />
      </Main>
    </div>
  );
};

export default Orders;
