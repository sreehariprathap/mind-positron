import AppNavbar from "@/components/ui/appNavbar"

const AppLayout = ({children}) => {
  return (
    <div>
        <AppNavbar />
        <div className="p-4">
        {children}
        </div>
    </div>
  )
}
export default AppLayout