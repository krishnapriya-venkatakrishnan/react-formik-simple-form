import React from "react";
import { useField } from "formik";

export default function Select({label, ...props}){
    const [field, meta] = useField(props)

    // console.log(useField(props))
    // [
    // {
    //     "name": "jobType"
    // },
    // {
    //     "touched": false,
    //     "initialTouched": false
    // },
    // {}
    // ]
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {(meta.touched && meta.error) ? (<div className="disp-error">{meta.error}</div>) : null}
        </>
    )
}