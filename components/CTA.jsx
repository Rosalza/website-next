import React, { useContext, useRef, useState } from 'react'
import styles from '@/styles/styles'
import Button from './Button'
import langContext from './langCtx'
import emailjs from '@emailjs/browser'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const initialFormData = Object.freeze({
  name: "",
  email: "",
  text: ""
})

const CTA = () => {
  const lang = useContext(langContext)
  const [formData, updateFormData] = useState(initialFormData)
  const [successIcon, setSuccessIcon] = useState('none')
  const [errorIcon, setErrorIcon] = useState('none')
  const mailForm = useRef()

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('fired')
    console.log(formData);
    emailjs.sendForm('service_sion5q8', 'template_h4cczuc', mailForm.current, 'D1T0mA6WsgcWdiIGn')
      .then((result) => {
          console.log(result.text);
          updateFormData({email: "", name: "", text: ""})
          successIcon !== '' ? setSuccessIcon('') : setSuccessIcon('none')
      }, (error) => {
          console.log(error.text);
          updateFormData({email: "", name: "", text: ""})
          errorIcon !== '' ? setErrorIcon('') : setErrorIcon('none')
      });
  };

  return(
  <section id='form' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>{lang.lng.form.headline}</h2>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST" onSubmit={handleSubmit} ref={mailForm} className='mt-5'>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-1 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-rows-1 gap-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label htmlFor="client-email-1" className="block text-sm font-medium leading-6 text-gray-900">
                      {lang.lng.form.label1}
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <input
                        type="email"
                        name="email"
                        id="client-email-1"
                        className="block w-full rounded rounded-r-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="ex@testing.com"
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="client-email-2" className="block text-sm font-medium leading-6 text-gray-900">
                      {lang.lng.form.label2}
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="client-email-2"
                        className="block w-full rounded rounded-r-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Name"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 mt-5">
                {lang.lng.form.label3}
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="text"
                    rows={3}
                    className="mt-1 block w-full rounded-md px-3 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                    placeholder="Schreiben sie etwas ..."
                    onChange={handleChange}
                    value={formData.text}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-15 flex-col`}>
      <Button label={lang.lng.form.buttonText} onClick={handleSubmit} />
      <div className='mt-[35%]'>
        <FaCheckCircle style={{color: '#399E5A', fontSize: '60px', display: successIcon}} />  
        <FaExclamationCircle style={{color: '#EC4E20', fontSize: '60px', display: errorIcon}} />  
      </div>
    </div>
  </section>
)
}

export default CTA