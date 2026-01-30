// layouts/MainLayout.js
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
