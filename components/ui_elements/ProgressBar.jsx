'use client'
import { useState, useEffect } from "react";

const ProgressBar = ({ percentage, bgColor }) => {
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        setBarWidth((percentage / 100) * 452);
    }, [percentage]);

    return (
        <div className="w-[452px] h-3 flex-shrink-0 rounded-[40px] bg-[#F5F5F5]">
            <div className={`h-3 w-[452px]`}>
                <div className="rounded-[40px] h-full"
                    style={{
                        width: `${barWidth}px`,
                        background:`${bgColor}`,
                    }} >

                    </div> 
            </div>
        </div>
    );
};

export default ProgressBar