import style from './sidebar.module.scss'
import { ISidebar } from '../../interface/interface'

const Sidebar: React.FC<ISidebar> = (props) => {
    const {sidebar, setSidebar, setNav, nav} = props;

  return (
    <div className={`${style.sidebar} ${sidebar && style.active}`}>

        <div className={style.sidebar_bg}
        onClick={() => setSidebar(!sidebar)}
        ></div>
      
        <div className={style.sidebar_main}>
            <h3 className={style.sidebar_main_head}>MENU</h3>
            <div className={style.sidebar_main_list}>

                <div className={`${style.sidebar_main_list_item} ${nav === "addCustomer" && style.selected}`}
                onClick={() => setNav("addCustomer")}
                >Add Customer</div>

                <div className={`${style.sidebar_main_list_item} ${nav === "addUser" && style.selected}`}
                onClick={() => setNav("addUser")}
                >Add User</div>

                <div className={`${style.sidebar_main_list_item} ${nav === "customer" && style.selected}`}
                onClick={() => setNav("customer")}
                >Customers</div>

                <div className={`${style.sidebar_main_list_item} ${nav === "user" && style.selected}`}
                onClick={() => setNav("user")}
                >Users</div>

            </div>

            <div className={style.sidebar_me}>
              <a href="https://github.com/huseynt">huseyn.t</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
