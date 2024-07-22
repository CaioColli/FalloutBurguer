import PhoneInput from 'react-phone-number-input/input'
import './InputsComponent.css'
import { useState } from 'react'

export const InputsComponent = ({ placeholder, type, label, inputType, maxLength, onChange, valueCep }) => {
    const [value, setValue] = useState()

    const handleChange = (e) => {
        const newValue = inputType === 'phone' ? e : e.target.value
        setValue(newValue)

        if (onChange) {
            onChange({ target: { value: newValue } })
        }
    }
    
    return (
        <>
            <div className="input-container">
                {inputType === 'phone' ? (
                    <PhoneInput
                        className="input-field"
                        defaultCountry='BR'
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        maxLength={15}
                    />
                ) :
                    <input
                        placeholder={placeholder}
                        className="input-field"
                        type={type}
                        maxLength={maxLength}
                        onChange={onChange}
                        value={valueCep}
                    />}

                <label htmlFor="input-field" className="input-label">{label}</label>
                <span className="input-highlight"></span>
            </div>
        </>
    )
}