// ------------------------------ Import Style ------------------------------------
import style from "./App.module.css";
// ------------------------------ Import Components ---------------------------------
import User from "./components/User/User";
import Customer from "./components/Customer/Customer";
import ClassItem from "./components/Customer/CustomerItem";
import StudentItem from "./components/User/UserItem";
// ------------------------------ Import Redux / Interface ----------------------------------
import { useSelector } from "react-redux";
import { INewUser, INewCustomer } from "./interface/interface";
import { RootState } from "./redux/rootReducer";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";


function App() {
  const [sidebar, setSidebar] = useState(false);
  const [nav, setNav] = useState("addCustomer");

  // ------------------------------ useSelector ------------------------------------
  const userList: INewUser[] = useSelector(
    (state: RootState) => state.user.users
  );
  const customerList: INewCustomer[] = useSelector(
    (state: RootState) => state.customer.customers
  );

  return (
    <div className={style.app}>
      <div className={style.up}>
        <h2 className={style.head}>CRM SYSTEM</h2>
        <div className={style.menu}
        onClick={() => setSidebar(!sidebar)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0a63d7"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} setNav={setNav} nav={nav}/>


      {/* User and Customer Form */}
      <div className={style.upForm}>
        {nav === "addUser" && <User />}
        {nav === "addCustomer" && <Customer />}
      </div>
      

      <div className={style.tables}>
        
        {/* User Table */}
        { nav === "user" &&
        <table className={style.table}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Surname</th>
              <th>Age</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
              return (
                <StudentItem
                  key={index}
                  id={user.id}
                  firstname={user.firstname}
                  surname={user.surname}
                  userid={user.userid}
                  age={user.age}
                />
              );
            })}
          </tbody>
        </table>}

        {/* Customer Table */}
        { nav === "customer" &&
          <table className={style.table}>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Customer Surname</th>
                <th>Cost</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customerList.map((customer, index) => {
                return (
                  <ClassItem
                    key={index}
                    id={customer.id}
                    customerid={customer.customerid}
                    customerName={customer.customerName}
                    customerSurname={customer.customerSurname}
                    cost={customer.cost}
                  />
                );
              })}
            </tbody>
          </table>}
      </div>
    </div>
  );
}

export default App;