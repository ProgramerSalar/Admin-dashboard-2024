import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userpic from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar />

      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userpic} alt="User" />
        </div>

        <section className="widget-container">
        <WidgetItem percent={40} amount={true} value={432} heading="Revinew" color="rgb(0,115, 255)" />
        <WidgetItem percent={-10}  value={43234} heading="Users" color="rgb(0,115, 255)" />
        <WidgetItem percent={400} amount={true} value={43234} heading="Transaction" color="rgb(0,115, 255)" />
        <WidgetItem percent={400}  value={43234} heading="Products" color="rgb(0,115, 255)" />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent} %{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />  {percent} %{" "}
        </span>
      )}
    </div>



    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>


    
  </article>
);

export default Dashboard;
