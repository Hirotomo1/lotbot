import React, { FC, useState } from "react"

export const MarginCulc: FC = () => {
    const [margin, setMargin] =useState<number>(0)
    
    const [tolerancePercentage, setTolerancePercentage] =useState<number>(0)
    
    const percentage = tolerancePercentage /100

    const toleranceMargin = margin * percentage

    const handleChange = (event: any) => {
        switch(event.target.name) {
            case 'margin' :
                setMargin(event.target.value)
                break;
            case 'tolerancePercentage' :
                setTolerancePercentage(event.target.value)
                break;
        }
    }
    
    return(
        <div className="MarginCulc">
            <div>損失許容額:￥{ toleranceMargin }</div>
        <label>
            証拠金(円):
            <input type="text" name="margin" onChange={handleChange} />
        </label>
        <label>
            損失許容割合(%):
            <input type="text" name="tolerancePercentage" onChange={handleChange} />
        </label>
        </div>
    )
}