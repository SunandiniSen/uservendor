import { createSlice } from "@reduxjs/toolkit";

export const Vendor = createSlice({
  name: "VendorData",
  initialState: {
    fields: [
      { key: "vendorId", label: "Vendor Id" },
      { key: "vendorName", label: "Vendor Name" },
      { key: "status", label: "Status" },
      { key: "emailAddress", label: "Email Address" },
    ],
    vendors: [
      {
        vendorId: "123146571744489",
        vendorName: "Vendor One",
        status: "ACTIVE",
        emailAddress: "user_one@example.com",
      },
      {
        vendorId: "123146573444489",
        vendorName: "Vendor Two",
        status: "INACTIVE",
        emailAddress: "user_one@example.com",
      },
    ],
  },
  reducers: {
    addVendor: (state, actions) => {
      state.vendors = [...state.vendors, actions.payload];
    },
  },
});

export const { addUsers } = Vendor.actions;
export default Vendor.reducer;
