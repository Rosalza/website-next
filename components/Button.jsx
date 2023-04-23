import React from 'react'

const Button = ({ styles, label, onClick }) => {
  return (
    <button type='button' onClick={onClick} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>{label}</button>
  )
}

export default Button