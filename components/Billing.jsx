import React, { useContext } from 'react'
import styles, { layout } from '@/styles/styles'
import { InlineWidget } from 'react-calendly'
import langContext from './langCtx'

const Billing = () => {
  const lang = useContext(langContext)
  
  return (
  <section id='contact' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className='w-[100%] h-[80vh] justify-center items-center bg-primary'>
        <InlineWidget 
          url='https://calendly.com/rosalza-bln/demo-call?hide_event_type_details=1&hide_gdpr_banner=1'
          styles={{
            height: '100%',
            width: '100%'
          }}
        />
      </div>

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>{lang.lng.contact.headlineSeg1} <span 
            className='text-gradient2'>{lang.lng.contact.headlineGold1}</span> {lang.lng.contact.headlineSeg2} <br/> <span 
            className='text-gradient2'>{lang.lng.contact.headlineGold2}</span> {lang.lng.contact.headlineSeg3}<br className='sm:block hidden' /></h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {lang.lng.contact.text1}<br/>
        <br />
        {lang.lng.contact.text2}<br />
        <br />
      </p>

      {/*<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain cursor-pointer' />
</div>*/}

    </div>
  
  </section>
)
}

export default Billing