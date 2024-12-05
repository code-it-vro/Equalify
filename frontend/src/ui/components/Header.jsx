import { useEffect, useState } from "react"
import { DashboardIcon } from "../icons/DashboardIcon"
import { GroupIcon } from "../icons/GroupIcon"
import { Avatar } from "./Avatar"
import { NavLink } from "react-router-dom"


const gernericStyles = "z-30 px-10 md:px-16 lg:px-28";

export const Header = (props) => {
    const [initials,setInitials] = useState("")
    useEffect(()=>{
        const value = props.name.split(" ").map((word)=> word.charAt(0))
                        .slice(0,2).join("");
        setInitials(value);
    });

    return <nav className="sticky top-0">
        <div className={`${gernericStyles} flex justify-between items-center md:w-screen h-16 bg-brand-950 text-white`}>
            <div className="flex gap-10 md:gap-12 lg:gap-16 items-center  text-xl">
                <img src="../../public/EqualifyLogo.png" className="h-12" />
                <NavLink to="/"
                    style={({ isActive }) => {
                    return isActive ? {borderBottom : "4px solid white"} : {};
                    }}
                >
                    <div className="flex gap-4 h-16 items-center"><DashboardIcon /><span className="hidden md:block">Dashboard</span></div>
                </NavLink>
                <NavLink to="/groups"
                    style={({ isActive }) => {
                    return isActive ? { borderBottom : "4px solid white"} : {};
                    }}
                >
                    <div className="flex gap-4 h-16 items-center"><GroupIcon /><span className="hidden md:block">Groups</span></div>
                </NavLink>
            </div>
            <NavLink to="/profile">
                <Avatar initials={initials} />
            </NavLink>
        </div>
    </nav>
}