import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../reducers/userSlice';
import VendorReducer from '../reducers/vendorSlice';

export default configureStore({
    reducer: {
        users: UserReducer,
        vendors: VendorReducer,
    }
});
