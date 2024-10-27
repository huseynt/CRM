export interface IState {
    reducer: {
        user: IuserState[],
        lesson: ICustomerState[]
    }
}





//  User
export interface IuserState {
    users: INewUser[];
}

export interface IUser{ 
    firstname: string,
    surname: string,
    userid: string,
    age: number | null
}

export interface INewUser {
    id: number | string, 
    firstname: string,
    surname: string,
    userid: string,
    age: number | null
}



// Customer
export interface ICustomerState {
    customers: INewCustomer[];
}

export interface ICustomer { 
    customerid: string | number,
    customerName: string,
    customerSurname: string,
    cost: number
}

export interface INewCustomer { 
    id: number | string,
    customerid: string | number,
    customerName: string,
    customerSurname: string,
    cost: number
}



// Sidebar
export interface ISidebar {
    sidebar: boolean;
    setSidebar: (value: boolean) => void;
    setNav: (value: string) => void;
    nav: string;
}