import React, { useContext } from 'react'
import { Footer, Navbar } from '@/components'
import langContext from '@/components/langCtx'
import styles from '@/styles/styles'
import Image from 'next/image'

export default function BookingConf() {
    const lang = useContext(langContext)


  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth} justify-center items-center flex`}>
                <div className={`${styles.boxWidth} justify-center items-center flex flex-col`}>
                    <Image src={"RosalzaLogo.svg"} width={700} height={700} alt='rosalza' className='w-[30%] h-[30%]' />
                    <h1 class="mb-[2%] mt-12 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-200">{lang.lng.confirmation.headline}</span></h1>
                    <p class="text-lg font-normal mb-[10%] text-gray-500 lg:text-xl dark:text-gray-400">{lang.lng.confirmation.text}.</p>
                </div>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Footer />
        </div>
        </div>
    </div>
  )
}
