import { createSlice } from "@reduxjs/toolkit";

export const Users = createSlice({
  name: "UserData",
  initialState: {
    fields: [
      { key: "userId", label: "User Id" },
      { key: "userName", label: "User Name" },
      { key: "status", label: "Status" },
      { key: "emailAddress", label: "Email Address" },
    ],
    users: [
      {
        userId: "123146571744489",
        userName: "User One",
        status: "ACTIVE",
        emailAddress: "user_one@example.com",
      },
      {
        userId: "123146573444489",
        userName: "User Two",
        status: "INACTIVE",
        emailAddress: "user_one@example.com",
      },
    ],
  },
  reducers: {
    addUsers: (state, actions) => {
      state.users = [...state.users, actions.payload];
    },
  },
});

export const { addUsers } = Users.actions;
export default Users.reducer;
