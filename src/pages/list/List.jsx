import Datatable from "../../components/datatable/Datatable";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./list.scss";
const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
