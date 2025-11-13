import type React from "react";

export default function MainContainer({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <div className="main-container 
            relative
            bg-[var(--leftpanel-maincontainer-clr)]
            h-[100vh] overflow-hidden w-full
            grid grid-cols-1
            md:grid-cols-[1.2fr_6fr]
            min-[2000px]:grid-cols-[0.9fr_5fr]
        ">
            { children }
        </div>
    )
}