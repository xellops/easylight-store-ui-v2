import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import SavedCardInfo from "@/components/SavedCardInfo/SavedCardInfo";

export default function SavedCards() {
  return (
    <div className="flex ">
      <Sidebar />
      <Main>
        <Navbar />

        <SavedCardInfo />
      </Main>
    </div>
  );
}
