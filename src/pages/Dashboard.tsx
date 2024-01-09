import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs"
import { FaRegBell } from "react-icons/fa"
import userpic from "../assets/userpic.png"


const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar />
      
      <main className="dashboard">
        <div className="bar">

          <BsSearch  />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img  src={userpic} alt="User"/>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;
