import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

function Layout({ children }) {
  return (
    <main className="min-h-screen overflow-hidden bg-carbon text-slate-100">
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
