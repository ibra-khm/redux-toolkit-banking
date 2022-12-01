import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts"
        },
        {
            id: 3,
            customerName: "Rhianna Fletcher",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 4,
            customerName: "Adrian Ball",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 5,
            customerName: "Mustafa Jarvis",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 6,
            customerName: "Ciara Allison",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 7,
            customerName: "Mohammed Barrera",
            accountNumber: "123456",
            accountType: "Savings"
        },
    ],
    count: 7,

};
export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.accounts.push(action.payload);
            state.count += 1;

        },
        removeUser: (state, action) => {
            state.accounts = state.accounts.filter(
                (account) => account.id != action.payload

            );
            state.count -= 1;

        },
    },

});

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer