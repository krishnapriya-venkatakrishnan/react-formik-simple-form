import React from "react";
import { useField } from "formik";

export default function Radio({children, ...props}){

    const [field, meta] = useField(props)

    return (
        <>
        <div className="check">
            <input {...field} {...props} />
            {children}
        </div>
        {meta.touched && meta.error ? <div className="disp-error">{meta.error}</div> : null}
        </>
    )

}
