const Input = ({ inputType, inputId, inputName, inputPlace, isRequired, inputClass }) => {
    return(
        <input type={inputType} id={inputId} name={inputName} placeholder={inputPlace} required={isRequired} className={`${inputClass} border border-neutral-gray min-h-15 rounded-full px-8 w-full focus:border-primary-blue focus:outline-0`}/>
    )
}

export default Input;