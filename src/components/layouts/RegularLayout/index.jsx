import Footer from "../../organisms/Footer";
import Navbar from "../../organisms/Navbar";
import "./RegularLayout.css";

const RegularLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="layout-children">{children}</div>
      <Footer />
    </div>
  );
};

export default RegularLayout;
