// ---------------- Import style ---------------------
import style from './customer.module.scss'
// -------------------- Import Hooks ---------------------
import { useState } from 'react'
// -------------------- Import Interface ---------------------
import { ICustomer } from '../../interface/interface'
// -------------------- Import Redux ---------------------
import { useDispatch, useSelector } from 'react-redux'
import { addCustomer } from '../../redux/slice/customerSlice'
import { RootState } from '../../redux/rootReducer'

const Class = () => {

    // ------------------------- Dispatch -----------------------------
    const dispatch = useDispatch();
    // ------------------------- useSelector -----------------------------
    const customersList: ICustomer[] = useSelector((state: RootState) => state.customer.customers);
    // ------------------------- useState -----------------------------
    const [check, setCheck] = useState<number>(0)
    const [customer, setCustomer] = useState<ICustomer>({
        customerid: "",
        customerName: "",
        customerSurname: "",
        cost: 0
    })
    // ------------------------- Submit Function -----------------------------
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        if ( 
            customersList.some(
                (customers) =>
                    customers.customerid === customer.customerid &&
                    customers.customerName === customer.customerName
            ) ||
            !customer.customerid ||
            !customer.customerName ||
            !customer.customerSurname ||
            !customer.cost) {
            setCheck(-1)
            resetForm()
        }  else {
            setCustomer({
                customerid: form.customerid.value,
                customerName: form.customerName.value,
                customerSurname: form.customerSurname.value,
                cost: form.cost.value
            })
            dispatch(addCustomer({ 
                id: customersList.length + 1,
                ...customer
            }))
            setCheck(1)
            resetForm()
        }
    }
    // ------------------------- Change Function -----------------------------
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }
    // ------------------------- Reset Function -----------------------------
    const resetForm = () => {
        setTimeout(() => {
            setCustomer({
                customerid: "",
                customerName: "",
                customerSurname: "",
                cost: 0
            })
            setCheck(0)
        },1000)
    }
    

  return (
      <div className={style.customer} id='classForm'>
        <div className={style.customer_head} style={{textAlign: "center"}}>
            <div>-</div>
            <h2>Customer Form</h2>
            <div>-</div>
        </div>
        <form className={style.customer_customerForm} onSubmit={submit}>

            <div className={style.customer_customerForm_section}>
                <label className={style.customer_customerForm_section_label} htmlFor="customerid">Customer ID</label>
                <input className={style.customer_customerForm_section_input} type="text" placeholder="customer id" name="customerid" id="customerid" onChange={change} value={customer.customerid}/>
            </div>

            <div className={style.customer_customerForm_section}>
                <label className={style.customer_customerForm_section_label} htmlFor="customerName">Customer Name</label>
                <input className={style.customer_customerForm_section_input} type="text" placeholder="customer name" name="customerName" id="customerName" onChange={change} value={customer.customerName}/>
            </div>

            <div className={style.customer_customerForm_section}>
                <label className={style.customer_customerForm_section_label} htmlFor="customerSurname">Customer Surname</label>
                <input className={style.customer_customerForm_section_input} type="text" placeholder="customer surname" name="customerSurname" id="customerSurname" onChange={change} value={customer.customerSurname}/>
            </div>

            <div className={style.customer_customerForm_section}>
                <label className={style.customer_customerForm_section_label} htmlFor="cost">Total Cost</label>
                <input className={style.customer_customerForm_section_input} type="number" placeholder="total cost" name="cost" id="cost" onChange={change} value={customer.cost}/>
            </div>
            
            <div className={style.customer_customerForm_info}>
                <div className={style.customer_customerForm_info_error} style={{color:"red",fontWeight: 500, fontSize: "12px", display: check == -1 ? "": "none"}}>Please fill in all fields</div>
                <div className={style.customer_customerForm_info_done} style={{color:"green",fontWeight: 500, fontSize: "12px", display: check == 1 ? "": "none"}}>Customer added successfully</div>
            </div>

            <input className={style.customer_customerForm_btn} type="submit" value="Add Customer"/>
        </form>
      </div>
  )
}

export default Class