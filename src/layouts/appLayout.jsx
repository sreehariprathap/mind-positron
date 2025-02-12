import AppNavbar from "@/components/ui/appNavbar";
import AppWhatsappContact from "@/components/ui/AppWhatsappContact";

const AppLayout = ({ children }) => {
  return (
    <div>
      <AppNavbar />
      <div className="p-4">
        {children}
        <AppWhatsappContact />
      </div>
    </div>
  );
};
export default AppLayout;
