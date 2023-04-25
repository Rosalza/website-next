import React, { useContext } from 'react'
import styles from '@/styles/styles'
import { RosalzaLogo } from '@/assets'
import { footerLinks, socialMedia } from '@/constants'
import langContext from './langCtx'
import Image from 'next/image'

const Footer = () => {
  const lang = useContext(langContext)
  
  return(
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <Image src={"RosalzaLogo.svg"} alt='Rosalza' width={100} height={100} className='w-[100px] h-[100px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[400px]`}>{lang.lng.footer.slogan}</p>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {lang.val === 'de' ? footerLink.titleDE : footerLink.titleEN}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal tex-center text-[18px] leading-[27px] text-white'>2023 Rosalza. All Rights Reserved.</p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <Image key={social.id} src={social.icon} alt={social.id} width={21} height={21} onClick={() => window.open(social.link, '_blank')} className={`w-[21px] h-[21px] object-contain cursor-pointer 
          ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`} />
        ))}
      </div>
    </div>
  </section>
)
}

export default Footer