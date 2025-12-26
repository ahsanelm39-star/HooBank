"use client"

import { useEffect, useState } from "react"

export default function Status() {


    const [number, setNumber] = useState({
    user: 0,
    company: 0,
    transaction: 0,
    });

    useEffect(()=>{
        let interval = setInterval(()=>{
            setNumber((prev)=>{
                const next = {
                    user: prev.user <= 3792 ? prev.user+11 : prev.user,
                    company : prev.company <= 229 ? prev.company +1 : prev.company,
                    transaction:prev.transaction<= 479 ? prev.transaction+2 :prev.transaction
                }
                if(prev.user == 3800 && prev.company == 230 && prev.transaction == 480){
                    clearInterval(interval)
                }
                return next
            })
            return ()=> clearInterval(interval)
        },10)
    },[])


    return (
        <div className="pb-14">
            <div className="collect flex flex-wrap items-center justify-center gap-16 font-medium">
                <div className="flex items-center gap-2">
                    <span className="text-white text-[30px] md:text-[40px]">{number.user}+</span>
                    <span className="spechial_bg mt-2">USER ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white text-[30px] md:text-[40px]">{number.company}+</span>
                    <span className="spechial_bg mt-2">TRUSTED BY COMPANY</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white text-[30px] md:text-[40px]">${number.transaction}M+</span>
                    <span className="spechial_bg mt-2">TRANSACTION</span>
                </div>
            </div>
        </div>
    )
}
