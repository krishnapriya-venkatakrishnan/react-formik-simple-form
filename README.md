## React- Form validation using Formik and Yup

### Overview
This repository contains a simple React application demonstrating the use of Formik for form management and Yup for form validation. 
The form captures user information, including first name, last name, email, job type, employment time, and acceptance of terms and conditions. 
Formik handles the form submission and validation, while Yup defines the schema and validation rules.

### Tree view
Displayed using ReacTree

![Tree](https://github.com/user-attachments/assets/8636be58-615d-4df5-9d30-5fd89de1268a)


### Components and its usage
- App: The App component is the main component that wraps the form with Formik. It defines the initial form values, validation schema, and submission behavior.
    - Key Parts:
        - Initial Values: Defines the starting values of the form fields.
        - Validation Schema: Uses Yup to enforce form input rules.
            - firstName: Required, maximum of 15 characters.
            - lastName: Required, maximum of 15 characters.
            - email: Required, must be a valid email format.
            - jobType: Required, must be one of the predefined job types.
            - empTime: Required, must be one of the predefined options (half or full).
            - acceptedTerms: Required, must be checked (true).
        - Form Submission: Handles what happens when the form is submitted (in this case, an alert with form data).
- TextInput: The TextInput component is a reusable input field component for text inputs. It integrates with Formik to manage form state and display validation errors.
- Select: The Select component is a dropdown menu used for selecting a job type. It is integrated with Formik and Yup for state management and validation.
- Radio: The Radio component allows users to select an employment time. It is a grouped radio button input that works seamlessly with Formik.
- Checkbox: The Checkbox component represents the terms and conditions checkbox. It ensures the user agrees to the terms before submitting the form.

### Live Demo
(https://scrimba-krishna-v-formik-form.netlify.app/)
