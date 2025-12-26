"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Menuo from "../../../public/images/menu.svg"
import MenuoL from "./Menuo";
//images
import Image from "next/image";
import Logo from "../../../public/images/logo.svg"

    function Header() {
        const [idx,setIdx] = useState(0)
        const [show,setShow] = useState(false)
        const [shadow,setShadow] = useState(false)

        const links = [
            {label:"Home",href:"/"},
            {label:"About Us",href:"#about"},
            {label:"Features",href:"#features"},
            {label:"Solution",href:"#solution"},
            {label:"Contact",href:"#contact"}
        ]

        useEffect(()=>{
            window.addEventListener("scroll",()=>{
                if(window.scrollY > 100){
                    setShadow(true)
                }else{
                    setShadow(false)
                }
            })
            return ()=> window.removeEventListener("scroll")
        },[])

    return (
    <>
        <MenuoL list={show} setList={setShow}/>
        <header className={`fixed top-0 left-[50%] translate-x-[-50%] ${shadow?"backdrop-blur-lg":""} z-50 w-1/1`}>
            <div className="collect flex justify-between items-center md:py-2">
                <div>
                    <Image src={Logo} alt="logo" width={130} height={130}/>
                </div>
                <ul className="flex max-md:hidden">
                    {links.map((link,index)=>(
                        <li key={index}>
                            <Link href={link.href} className={`text-white inline-block p-4 font-medium ${idx==index ? "active":""}
                            hover:text-[#7DE7EB] transition-all`}
                            onClick={()=>{
                                setIdx(index)
                            }}>{link.label}</Link>
                        </li>
                    ))} 
                </ul>
                <div className="md:hidden p-6 pr-0 cursor-pointer" onClick={()=>{
                        setShow(true)
                    }}>
                    <Image src={Menuo} alt="menuo" />
                </div>
            </div>
        </header>
    </>

    )
}

export default Header