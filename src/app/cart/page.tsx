import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import Shopping from "@/components/Shopping/Shopping";
import Recomended from "@/components/Recomended/Recomended";

const Cart = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Main>
        <Navbar />
        <h2 className="ml-3 mt-4 font-sans font-semibold">Shopping Cart</h2>

        <Shopping />

        <Recomended />
      </Main>
    </div>
  );
};

export default Cart;
