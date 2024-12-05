import { atom } from "recoil";

export const userRegister = atom({
    key : 'userRegister',
    default : import.meta.env.VITE_SERVER_URL+"/users/register"
})

export const userLogin = atom({
    key : 'userLogin',
    default : import.meta.env.VITE_SERVER_URL+"/users/login"
})

export const userProfile = atom({
    key : 'userProfile',
    default : import.meta.env.VITE_SERVER_URL+"/users/profile"
})

export const userExpenses = atom({
    key : 'userExpenses',
    default : import.meta.env.VITE_SERVER_URL+"/users/expenses"
})