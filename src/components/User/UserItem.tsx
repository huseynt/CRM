// ---------------- Import style ---------------------
import style from "../User/userItem.module.css"
// -------------------- Import Hooks ---------------------
import { useState, useEffect } from "react"
// -------------------- Import Interface ---------------------
import { INewUser } from "../../interface/interface"
// -------------------- Import Redux ---------------------
import { useDispatch } from "react-redux"
import { changeUser, deleteUser} from "../../redux/slice/userSlice"


const UserItem = (props:INewUser) => {
  // ------------------------- Dispatch -----------------------------
  const dispatch = useDispatch();
  // ------------------------- useState / Props -----------------------------
  const { id, firstname, surname, userid, age} = props;
  const [edit, setEdit] = useState(false);
  const [newUser, setNewUser] = useState({
    id: id,
    firstname: firstname,
    surname: surname,
    userid: userid,
    age: age
  });
  // ------------------------- Change Function -----------------------------
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (edit) {
      setNewUser({
        ...newUser,
        [e.target.name]: e.target.value,
      });
    }
  };
  // ------------------------- Edit Function -----------------------------
  const editSubmit = () => {
    if (edit) {
      dispatch(
        changeUser({
          id: newUser.id,
          firstname: newUser.firstname,
          surname: newUser.surname,
          userid: newUser.userid,
          age: newUser.age
        })
      );
    }
    setEdit(!edit);
  };
  // ------------------------- Delete Function -----------------------------
  const deleteItem = () => {
    dispatch(
      deleteUser({
        id: newUser.id
      })
    );
  };
  // ------------------------- useEffect -----------------------------
  useEffect(() => {
    setNewUser({
      id: id,
      firstname: firstname,
      surname: surname,
      userid: userid,
      age: age
    });
  }, [id, firstname, surname, userid, age]);

  return (
    <tr className={style.tr}>
      <td>
        <input
          type="text"
          name="userid"
          value={newUser.userid}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="firstname"
          value={newUser.firstname}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="text"
          name="surname"
          value={newUser.surname}
          onChange={change}
          style={{backgroundColor: edit ? "#87fdb8" : "unset"}}
          disabled={!edit}
        />
      </td>

      <td>
        <input
          type="number"
          name="age"
          value={newUser.age ? newUser.age : ""}
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

export default UserItem;