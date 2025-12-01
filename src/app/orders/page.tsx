import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
const Orders = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <Navbar />
      </Main>
    </div>
  );
};

export default Orders;
