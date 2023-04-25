import React, { useContext } from 'react'
import styles from '@/styles/styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import langContext from './langCtx'
import Image from 'next/image'

const Hero = () => {

  const lang = useContext(langContext)
  
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <Image src={"hero-logo.svg"} alt='discount' width={32} height={32} className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>{lang.lng.hero.widgetWhite1}</span> {lang.lng.hero.widgetGray1} {' '}
            <span className='text-white'>{lang.lng.hero.widgetWhite2}</span> {lang.lng.hero.widgetGray2}
          </p>
        </div>
      
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            {lang.lng.hero.headlineWhite1} <br className='sm:block hidden' /> {' '} 
            {lang.lng.hero.headlineWhite2}<br className='sm:block hidden' /> {' '} 
            <span 
            className='text-gradient2'>{lang.lng.hero.headlineGold}</span> {' '}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'
        ></h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{lang.lng.hero.text}</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={"/robot.png"} alt='billing' width={500} height={500} className='w-[100%] h-[100%] object-contain relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

    </section>
)
}

export default Hero
