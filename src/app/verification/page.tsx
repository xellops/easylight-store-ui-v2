import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import VerificationStatus from "@/components/VerificationStatus/VerificationStatus";
export default function verification() {
  return (
    <div className="flex ">
      <Sidebar />
      <Main>
        <Navbar />
        <VerificationStatus />
      </Main>
    </div>
  );
}
