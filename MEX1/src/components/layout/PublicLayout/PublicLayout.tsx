import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function PublicLayout() {
  return (
    <div className="public-layout">
      <Header />
      <main className="public-layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
