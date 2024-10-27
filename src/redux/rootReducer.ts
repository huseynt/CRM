import { combineReducers } from '@reduxjs/toolkit';
import customerSlice from './slice/customerSlice';
import userSlice from './slice/userSlice';

const rootReducer = combineReducers({
    customer: customerSlice,
    user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
