import React from "react";
import { useField } from "formik";

export default function TextInput({label, ...props}){
    // console.log(props)

    // {
    // "label": "firstName",
    // "name": "firstName",
    // "type": "text",
    // "placeholder": "Enter first name"
    // }

    const [field, meta] = useField(props)

    // console.log(useField(props))
    // [
    //     {
    //         "name": "firstName",
    //         "value": ""
    //     } -> this object includes onChange, onBlur properties as well,
    //     {
    //         "value": "",
    //         "touched": false,
    //         "initialValue": "",
    //         "initialTouched": false
    //     } -> this object included error, initialError properties as well,
    //     {} -> this object includes setError, setTouched, setValue properties
    // ]

    
    // console.log(field)
    // {
    // "name": "firstName",
    // "value": ""
    // }

    // console.log(meta)
    // {
    // "value": "",
    // "touched": false,
    // "initialValue": "",
    // "initialTouched": false
    // }

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label> 
            <input {...field} {...props} />
            {meta.touched && meta.error ? (<div className="disp-error">{meta.error}</div>): null}
        </>
    )


}