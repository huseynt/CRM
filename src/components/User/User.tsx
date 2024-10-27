// ---------------- Import style ---------------------
import style from './user.module.scss'
// -------------------- Import Hooks ---------------------
import { useState } from 'react'
// -------------------- Import Interface ---------------------
import { IUser } from '../../interface/interface'
// -------------------- Import Redux ---------------------
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../redux/slice/userSlice'
import { RootState } from '../../redux/rootReducer'


const User = () => {
    // ------------------------- Dispatch -----------------------------
    const dispatch = useDispatch();
    // ------------------------- useSelector -----------------------------
    const userList: IUser[] = useSelector((state: RootState) => state.user.users);
    // ------------------------- useState -----------------------------
    const [check, setCheck] = useState<number>(0)
    const [user,setUser] = useState<IUser>({
        firstname: "",
        surname: "",
        userid: "",
        age: null
    })
    // ------------------------- Submit Function -----------------------------
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if ( userList.find((user) => 
            user.userid === form.userid.value) || 
            form.firstname.value === "" || 
            form.surname.value === "" || 
            form.userid.value === "" || 
            form.age.value === "") {
            setCheck(-1)
            resetForm()
        }  else {
            setUser({
                firstname: form.firstname.value,
                surname: form.surname.value,
                userid: form.userid.value,
                age: form.age.value
            })
            dispatch(addUser({ 
                id: user.userid,
                ...user
            }))
            setCheck(1)
            resetForm()
        }
    }
    // ------------------------- Change Function -----------------------------
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    // ------------------------- Reset Function -----------------------------
    const resetForm = () => {
        setTimeout(() => {
            setUser({
                firstname: "",
                surname: "",
                userid: "",
                age: 0
            })
            setCheck(0)
        },1000)
    }
    

  return (
      <div className={style.user} id='userForm'>
        <div className={style.user_head} style={{textAlign: "center"}}>
            <div>-</div>
            <h2>User Form</h2>
            <div>-</div>
        </div>
        <form className={style.user_userForm} onSubmit={submit}>
            <div className={style.user_userForm_section}>
                <label className={style.user_userForm_section_label} htmlFor="firstname">User Name</label>
                <input className={style.user_userForm_section_input} type="text" placeholder="enter name" name="firstname" id="firstname" onChange={change} value={user.firstname}/>
            </div>

            <div className={style.user_userForm_section}>
                <label className={style.user_userForm_section_label} htmlFor="surname">User Surrname</label>
                <input className={style.user_userForm_section_input} type="text" placeholder="enter surname" name="surname" id="surname" onChange={change} value={user.surname}/>
            </div>

            <div className={style.user_userForm_section}>
                <label className={style.user_userForm_section_label} htmlFor="userid">User ID</label>
                <input className={style.user_userForm_section_input} type="text" placeholder="enter user id" name="userid" id="userid" onChange={change} value={user.userid}/>
            </div>

            <div className={style.user_userForm_section}>
                <label className={style.user_userForm_section_label} htmlFor="age">Age</label>
                <input className={style.user_userForm_section_input} type="number" placeholder="enter your age" name="age" id="age" onChange={change} value={user.age ? user.age : ""}/>
            </div>

            <div className={style.user_userForm_info}>
                <div className={style.user_userForm_info_error} style={{color:"red",fontWeight: 500, fontSize: "12px", display: check == -1 ? "": "none"}}>Please fill in all fields or same user</div>
                <div className={style.user_userForm_info_done} style={{color:"green",fontWeight: 500, fontSize: "12px", display: check == 1 ? "": "none"}}>User added successfully</div>
            </div>
            
            <input className={style.user_userForm_btn} type="submit" value="Add User"/>
        </form>
      </div>
  )
}

export default User;