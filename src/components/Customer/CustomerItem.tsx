// ---------------- Import style ---------------------
import style from "./customerItem.module.css"
// -------------------- Import Hooks ---------------------
import { useState, useEffect } from "react"
// -------------------- Import Interface ---------------------
import { INewCustomer } from "../../interface/interface"
// -------------------- Import Redux ---------------------
import { useDispatch } from "react-redux"
import { deleteCustomer, changeCustomer} from "../../redux/slice/customerSlice"


const CustomerItem = (props:INewCustomer) => {

  // ------------------------- Dispatch -----------------------------
  const dispatch = useDispatch();
  // ------------------------- useState / Props -----------------------------
  const { id, customerid, customerName, customerSurname, cost} = props;
  const [edit, setEdit] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    id: id,
    customerid: customerid,
    customerName: customerName,
    customerSurname: customerSurname,
    cost: cost
  });

  // ------------------------- Change Function -----------------------------
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setNewCustomer({
        ...newCustomer,
        [e.target.name]: e.target.value,
      });
    }
  };

  // ------------------------- Edit Function -----------------------------
  const editSubmit = () => {
    if (edit) {
      dispatch(
        changeCustomer({
          id: newCustomer.id,
          customerid: newCustomer.customerid,
          surname: newCustomer.customerName,
          studentNumber: newCustomer.customerSurname,
          cost: newCustomer.cost
        })
      );
    }
    setEdit(!edit);
  };

  // ------------------------- Delete Function -----------------------------
  const deleteItem = () => {
    dispatch(
      deleteCustomer({
        id: newCustomer.id,
        customerid: newCustomer.customerid,
        surname: newCustomer.customerName,
        studentNumber: newCustomer.customerSurname,
        cost: newCustomer.cost
      })
    );
  };

  // ------------------------- useEffect -----------------------------
  useEffect(() => {
    setNewCustomer({
      id: id,
      customerid: customerid,
      customerName: customerName,
      customerSurname: customerSurname,
      cost: cost
    });
  }, [
    id,
    customerid,
    customerName,
    customerSurname,
    cost
  ]);


  return (
    <tr className={style.tr}>
      <td>
        <input
          type="text"
          name="lessonName"
          value={newCustomer.customerid}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="teacherName"
          value={newCustomer.customerName}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="teacherNumber"
          value={newCustomer.customerSurname}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="cost"
          value={newCustomer.cost}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>


      <td
        style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
        onClick={editSubmit}
        className={style.edit}
      >
        {!edit ? "Edit" : "Submit"}
      </td>
      <td
        onClick={deleteItem}
        className={style.delete}
      >
        X
      </td>
    </tr>
  )
}

export default CustomerItem