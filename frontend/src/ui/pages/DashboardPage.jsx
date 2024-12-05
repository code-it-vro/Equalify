import { useState } from "react";
import { Header } from "../components/Header"
import { Card } from "../components/Card";
import { RupeeIcon } from "../icons/RupeeIcon";
import { GroupIcon } from "../icons/GroupIcon";
import { Footer } from "../components/Footer";
import { ExpenseTable } from "../components/ExpenseTable";
import { ContentWrapper } from "../components/ContentWrapper";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../../atoms/authState";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const recentExpenses = [
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Fooding",
        amount : 100,
        group : "New Friends",
        date : "28th Nov, 2024"
    }
];

const gernericStyles = "px-10 md:px-16 lg:px-28 py-10";

export const DashboardPage = () => {
    const [name,setName] = useState("Ankit Sharma");
    const [spending,setSpending] = useState(0);
    const [groupCount, setGroupCount] = useState(0);
    const isAuth = useRecoilValue(authState);
    const navigate = useNavigate();

    useEffect(()=>{
      const token = window.sessionStorage.getItem("token");
      if(!token){
        navigate("/login");
      }

      
    },[])

    return <div>
            <div className="text-4xl font-bold">Welcome {name}!</div>
            <div className="flex gap-6 lg:gap-10 flex-wrap my-10 justify-center lg:justify-start">
                <Card className="w-full max-w-96 rounded-md px-6 py-6">
                    <div className="text-xl flex justify-between">
                        <span>Total Spendings</span>
                        <RupeeIcon />
                    </div>
                    <div className="mt-6 text-3xl font-bold">{Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            }).format(spending)}</div>
                </Card>
                <Card className="w-full max-w-96 rounded-md px-6 py-6">
                    <div className="text-xl flex justify-between">
                        <span>Total Groups</span>
                        <GroupIcon />
                    </div>
                    <div className="mt-6 text-3xl font-bold">{groupCount}</div>
                </Card>
            </div>
            <div className="w-full">
                <ExpenseTable expenseData={recentExpenses} />
            </div>
    </div>
}