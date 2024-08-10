import React from "react";
import { useField } from "formik";

export default function Checkbox({children, ...props}){

    const [field, meta] = useField(props)

    return (
        <>
        <div className="check">
            <input type="checkbox" {...field} {...props} />
            {children}
        </div>
        {meta.touched && meta.error ? (<div className="disp-error">{meta.error}</div>): null}
        </>
    )

}
