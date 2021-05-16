import React, { FC, useState } from "react"

export const App = () => {
    return (
        <div className="reactApp">
            <Element pips={3} />
        </div>
    )
}

interface ElementProps {
    pips: number; 
}


export const Element: FC<ElementProps> = (props) => {
    const [pips, setPips] =useState<number>(0)
    const lot = pips * 100
    return(
        <div>
        <input type="text" /> * <input type="text" /> = <span>0</span>
        </div>
    )
}