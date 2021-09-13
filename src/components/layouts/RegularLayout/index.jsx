import Navbar from "../../organisms/Navbar";
import "./RegularLayout.css";

const RegularLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default RegularLayout;
