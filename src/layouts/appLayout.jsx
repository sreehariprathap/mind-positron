import AppNavbar from "@/components/ui/appNavbar"

const AppLayout = ({children}) => {
  return (
    <div>
        <AppNavbar />
        {children}
    </div>
  )
}
export default AppLayout