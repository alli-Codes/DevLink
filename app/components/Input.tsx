'use client'

import { useState } from "react"
import validateForm from "../lib/validateForm"

export default function Input({ type, placeholder, label, showLabel, onValueChange }: { type: string, placeholder: string, label: string, showLabel: boolean, onValueChange: Function }) {
    const [inputData, setInputData] = useState('h')
    
    const handleInputChange = function (value: string) {
        // let result = validateForm(inputData)
        console.log(value)
        onValueChange(value)
    }
    return (
        <div className="flex flex-col gap-1">
            {showLabel ? <label htmlFor="" className="text-[#333333] text-xs ">{ label }</label> : undefined}
            <input className="px-4 py-3 border border-[#D9D9D9] rounded-lg" type={type} placeholder={placeholder} name="" id="" onChange={(e) => handleInputChange(e.target.value)} />
        </div>
    )
}