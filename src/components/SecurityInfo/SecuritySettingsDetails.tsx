import ChangePassword from "../Password/ChangePassword";
export default function SecurityDetails() {
  return (
    <div className="ml-3 mt-4 ">
      <h1 className="text-[18px] font-semibold">Security Settings</h1>

      <ChangePassword />
    </div>
  );
}
