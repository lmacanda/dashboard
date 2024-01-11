import Sidebar from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
