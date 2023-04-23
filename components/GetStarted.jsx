import React, { useContext } from 'react'
import styles from '@/styles/styles'
import langContext from './langCtx'
import Image from 'next/image'

const GetStarted = () => {

  const lang = useContext(langContext)
  
  return (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} onClick={() => document.querySelector( '#contact' ).scrollIntoView({ behavior: 'smooth', block: 'start' })}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>{lang.lng.hero.buttonText1}</span>
        </p>
        <Image src={"arrow-up.svg"} alt='arrow' width={23} height={23} className='w-[23px] h-[23px] object-contain' />
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>{lang.lng.hero.buttonText2}</span>
      </p>
    </div>
  </div>
)
}


export default GetStarted