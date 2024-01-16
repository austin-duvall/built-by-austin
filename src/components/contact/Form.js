import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';


const publicKey = process.env.REACT_APP_PUBLIC_KEY
const serviceId = process.env.REACT_APP_SERVICE_ID
const templateId = process.env.REACT_APP_TEMPLATE_ID


export default function Form() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const sentReset = () => {
    setTimeout(() => {
      setSent(false);
    }, 5000)
  }

  const errorReset = () => {
    setTimeout(() => {
      setSendError(false)
    }, 5000)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required().max(50),
    email: Yup.string()
      .max(100)
      .email()
      .required()
      .test('period', 'Invalid Email',(value) => {
        return /\./.test(value)
      }),
    message: Yup.string().required().max(2000),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setSending(true);
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey, values)
        .then((response) => {
          console.log('Email sent successfully!', response)
          setSending(false);
          setSent(true);
          sentReset();
        })
        .catch((error) => {
          console.error('Error sending email:', error)
          setSending(false);
          setSendError(true);
          errorReset();
        });
      formik.resetForm();
    }    
  })

  const nameError = formik.touched.name && formik.errors.name
  const emailError = formik.touched.email && formik.errors.email
  const msgError = formik.touched.message && formik.errors.message
  const emptyError = (formik.values.name.length && formik.values.email.length && formik.values.message.length) === 0

  const disabler = () => {
    setIsDisabled(nameError || emailError || msgError || emptyError)
  }

  useEffect(() => {
    disabler();
  }, [nameError, emailError, msgError, emptyError])

  const messageDisplay = () => {
    if (isDisabled && sent) {
      return <h3 className='greenMessage'>sent!</h3>
    } else if (isDisabled && sending) {
      return <h3 className='greyMessage'>sending...</h3>
    } else if (isDisabled && sendError) {
      return <h3 className='redMessage'>error sending. please try again.</h3>
    } else if (!isDisabled) {
      return <h3>ready to go!</h3>
    } else {
      return <h3 className='redMessage'>(all fields required)</h3>
    }
  }

  return (
    <div className='entFormCont'>  
      <form ref={formRef} onSubmit={formik.handleSubmit} >
        <div className='nameCont fields'>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder='name'
            className={`fieldInput ${nameError ? 'touched' : 'notTouched'}`}
            maxLength={50}
            aria-label='Name'
          />
        </div>
        <div>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder='email'
            className={`fieldInput ${emailError ? 'touched' : 'notTouched'}`}
            maxLength={100}
            aria-label='Email'
          />
        </div>
        <div className='msgCont fields'>
          <textarea
            id='message'
            name='message'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder='message'
            className={`fieldText textArea ${msgError ? 'touched' : 'notTouched'}`}
            maxLength={2001}
            aria-label='message'
          />
        </div>
        <div className='buttonContainer'>
          {messageDisplay()}
          <button
            className={sent || sending || sendError ? 'hideSubmitButton' : 'submitButton'}
            type='submit'
            disabled={isDisabled}
            >send
          </button>
        </div>
      </form>
    </div>
  )
};