import React, { useState } from 'react';
import './DepositBonusForm.css';

const DepositBonusForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        agree: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (formData.name && formData.email && formData.phone && formData.country && formData.agree) {
            alert('Form submitted successfully!');
        }
    };

    return (
        <div className="form-wrapper">

            <form className="bonus-form" onSubmit={handleSubmit}>
                <div >
                    <span className='label-text'>First and Last Name*</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={submitted && !formData.name ? 'error' : 'input-type'}
                    />
                    {submitted && !formData.name && (
                        <span className="error-message">This field is required.</span>
                    )}
                </div>
                <div >
                    <span className='label-text'>Email*</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={submitted && !formData.email ? 'error' : 'input-type'}
                    />
                    {submitted && !formData.email && (
                        <span className="error-message">This field is required.</span>
                    )}
                </div>
                <div >
                    <span className='label-text'>Phone Number*</span>
                    <div>
                        <div className="d-flex align-items-center">
                            <select
                                style={{padding:'.62rem'}}
                                className={submitted && !formData.phone ? 'code-selector error' : 'code-selector input-type'}
                            >
                                <option value="+61">+61</option>
                                <option value="+1">+1</option>
                                <option value="+91">+91</option>
                            </select>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={submitted && !formData.phone ? 'error input-phone' : 'input-type input-phone'}
                            />
                        </div>
                        {submitted && !formData.email && (
                            <span className="error-message">This field is required.</span>
                        )}
                    </div>
                    <div className='mt-3'>
                        <span className='label-text'>Country*</span>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={submitted && !formData.country ? 'error country-padding' : 'input-type country-padding'}
                        >
                            <option value=""></option>
                            <option value="Australia">Australia</option>
                            <option value="USA">USA</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                    {submitted && !formData.country && (
                        <span className="error-message">This field is required.</span>
                    )}
                </div>
                <div>
                    <div className="checkbox-label">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                           
                        />
                        <p >
                            By completing this form, I confirm that I am opening a live account with IC Markets Global and that I have read and agreed to the<a> Terms and Conditions</a>, Deposit Bonus Terms and Conditions,<a>Privacy Policy</a> , and <a>Cookies Policy</a> .
                        </p>

                    </div>
                    {submitted && !formData.agree && (
                        <span className="error-message">Please accept terms and conditions.</span>
                    )}
                </div>
                <p className="terms-note">*Terms and Conditions apply</p>

                <button className="hero-button-register">Register</button>
            </form>
        </div>
    );
};

export default DepositBonusForm;