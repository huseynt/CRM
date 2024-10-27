import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;
import { ICustomerState } from "../../interface/interface"



const customerSlice = createSlice({
    name: "customer",
    initialState: <ICustomerState>{
        customers: []
    },
    reducers: {
        addCustomer: (state, action) => {
            state.customers.push(action.payload);
        },
        resetState: (state) => {
            state.customers = [];
        },
        deleteCustomer: (state, action) => {
            state.customers = state.customers.filter((customer) => customer.id !== action.payload.id);
        },
        changeCustomer: (state, action) => {
            const {id,customerid, customerName, customerSurname, cost} = action.payload;
            const point = state.customers.find((p) => p.id == id);
            if (point) {
                point.customerid = customerid;
                point.customerName = customerName;
                point.customerSurname = customerSurname;
                point.cost = cost;
            }
        }
    }
});

export default customerSlice.reducer;
export const { addCustomer, resetState, changeCustomer, deleteCustomer} = customerSlice.actions;
