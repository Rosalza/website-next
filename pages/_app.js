import language from '@/constants/language'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import langContext from '@/components/langCtx'

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState({val: 'de', lng: language.de})
  const [langVal, setLangVal] = useState('de')

  useEffect(() => {
    if (langVal === 'de') {
      setLang({val: langVal, lng: language.de})
    } else if (langVal === 'en') {
      setLang({val: langVal, lng: language.en})
    }
  }, [langVal, lang])

  return (
    <langContext.Provider value={lang}>
      <button
        className='fixed z-[1000] bottom-10 text-white right-10 bg-indigo-950 w-16 h-16 rounded-full hover:bg-indigo-900 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'
        onClick={() => {
          if (langVal === 'de') {
            setLangVal('en')
          } else if (langVal === 'en') {
            setLangVal('de')
          }
        }}
      >
        {langVal.toLocaleUpperCase()}
      </button>
      <Component {...pageProps} />
    </langContext.Provider>
  )
}
