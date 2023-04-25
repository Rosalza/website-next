import React, { useContext } from 'react'
import { Billing, Footer, Navbar } from '@/components'
import langContext from '@/components/langCtx'
import styles from '@/styles/styles'

export default function BookingConf() {
    const lang = useContext(langContext)


  return (
    <div className='bg-primary w-full overflow-hidden px-[10%]'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        
        <Billing />

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Footer />
        </div>
        </div>
    </div>
  )
}
