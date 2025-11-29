import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import WalletBalance from "@/components/WalletBalance/WalletBalance";

export default function Wallet() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <Main>
        <Navbar />

        <WalletBalance />
      </Main>
    </div>
  );
}
