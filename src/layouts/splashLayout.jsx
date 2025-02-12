import SplashCursor from "@/components/styles/SplashCursor";

const SplashLayout = ({ children }) => {
  return (
    <div className="w-full h-full bg-primaryDark">
      <SplashCursor />
      {children}
    </div>
  );
};
export default SplashLayout;
