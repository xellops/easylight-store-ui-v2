import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import SecurityDetails from "@/components/SecurityInfo/SecuritySettingsDetails";

export default function SecuritySettings() {
  return (
    <div className="flex ">
      <Sidebar />
      <Main>
        <Navbar />
        <SecurityDetails />
      </Main>
    </div>
  );
}
