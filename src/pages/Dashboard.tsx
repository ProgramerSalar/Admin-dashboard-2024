import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userpic from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Chart";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable"




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
          <WidgetItem
            percent={40}
            amount={true}
            value={432}
            heading="Revinew"
            color="rgb(0,115, 255)"
          />
          <WidgetItem
            percent={-10}
            value={43234}
            heading="Users"
            color="rgb(0,115, 255)"
          />
          <WidgetItem
            percent={400}
            amount={true}
            value={43234}
            heading="Transaction"
            color="rgb(0,115, 255)"
          />
          <WidgetItem
            percent={400}
            value={43234}
            heading="Products"
            color="rgb(0,115, 255)"
          />
        </section>

        <section className="graph-container">
          <div className="revinew-chart">
            <h2>Revinew & Transaction</h2>
            <BarChart
              data_1={[34, 32, 34, 32, 43]}
              data_2={[43, 32, 43, 34, 32]}
              title_1="Revinew"
              title_2="Transaction"
              bgColor_1="rgb(0, 115, 255)"
              bgColor_2="rgb(53, 162, 235, 0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            {data.categories.map((i) => (
              <CategoryItem
                key={i.heading}
                heading={i.heading}
                value={i.value}
                color={`hsl(${i.value * 4},${i.value}%,50%)`}
              />
            ))}

            <div></div>
          </div>
        </section>

        <section className="transation-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* chart  */}
            <DoughnutChart
              labels={["female", "male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%, 56)","rgba(53, 162, 235, 0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          {/* Table  */}
          <Table data={data.transaction} />
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
          <HiTrendingDown /> {percent} %{" "}
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

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
