import React, { useState } from 'react'

export default function SimpleForm() {

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const [errors, setErrors] = useState({})

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return re.test(email)
    }

    function handleChange(event) {

        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {}

        //validate fields
        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email is not valid'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        } else {

            console.log('Form submitted:', formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: ''
            })
            setErrors({})
        }
    }

    return (
        <div className='p-12'>
            <form onSubmit={handleSubmit} noValidate>
                <div className='mb-4'>
                    <label className='block mb-2'>First Name:</label>
                    <input
                        className='border-2 border-gray-300 p-2 w-full'
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p className='text-red-500'>{errors.firstName}</p>}
                </div>
                <div className='mb-4'>
                    <label className='block mb-2'>Last Name:</label>
                    <input
                        className='border-2 border-gray-300 p-2 w-full'
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <p className='text-red-500'>{errors.lastName}</p>}

                </div>

                <div className='mb-4'>
                    <label className='block mb-2'>Email:</label>
                    <input
                        className='border-2 border-gray-300 p-2 w-full'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email}</p>}

                </div>
                <button className='bg-green-500 text-white p-2 rounded-md hover:bg-green-600'>Submit</button>
            </form>

            <div className='mt-8'>
                <h3 className='font-bold'>Form Values:</h3>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
            </div>
        </div>
    )
}
