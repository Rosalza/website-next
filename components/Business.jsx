import React, { useContext } from 'react'
import { features } from '@/constants'
import styles, { layout } from '@/styles/styles'
import Button from './Button'
import langContext from './langCtx'
import Image from 'next/image'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[60px] g-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <Image src={icon} alt='icon' width={50} height={50} className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  const lang = useContext(langContext)

  return (
  <section id='about' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>{lang.lng.about.headlineSeg1}<br className='sm:block hidden' /> {lang.lng.about.headlineSeg2} <span 
            className='text-gradient2'>{lang.lng.about.headlineGold}</span> {' '} {lang.lng.about.headlineSeg3} <br className='sm:block hidden' /> {lang.lng.about.headlineSeg4}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{lang.lng.about.text} </p>

      <Button styles='mt-10' label={lang.lng.about.buttonText} onClick={() => document.querySelector( '#contact' ).scrollIntoView({ behavior: 'smooth', block: 'start' })}/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} icon={feature.icon} title={lang.val === 'de' ? feature.titleDE : feature.titleEN} content={lang.val === 'de' ? feature.contentDE : feature.contentEN} index={index} />
      ))}
    </div>

  </section>
)
}

export default Business