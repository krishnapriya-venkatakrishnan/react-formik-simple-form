import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";

export default function App(){

    const formSubmit = values => {
        alert(JSON.stringify(values, null, 2))
    }

    return (

        <Formik
        initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            jobType: "",
            empTime: "other",
            acceptedTerms: false,
        }}
        validationSchema={Yup.object({
            firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
            lastName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            jobType: Yup.string().oneOf(['designer', 'development', 'product', 'other'], "Invalid job type").required("Required"),
            empTime: Yup.string().oneOf(["half", "full"], "Invalid employement option").required("Required"),
            acceptedTerms: Yup.boolean().oneOf([true], "You must accept the terms and conditions").required("Required")
        })}
        onSubmit={formSubmit}
        >
        
            <div className="form-container">
                <Form>
                    <TextInput
                    label="First name"
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    />
                    
                    <TextInput
                    label="Last name"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    />

                    <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    />

                    <Select label="Job type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </Select>
                    
                    <div className="radio">
                        <Radio type="radio" name="empTime" value="half">
                            Half time employee
                        </Radio>

                        <Radio type="radio" name="empTime" value="full">
                            Full time employee
                        </Radio>

                        <Radio type="radio" name="empTime" value="other">
                            Other
                        </Radio>
                    </div>

                    <Checkbox name="acceptedTerms" type="checkbox">
                    I accept the terms and conditions
                    </Checkbox>

                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        
        </Formik>
    )
}