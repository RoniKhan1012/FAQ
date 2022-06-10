import React,{useState} from 'react'

import {faqsdata} from './data.js'
import FAQ from './FAQ.js';
import style from "./faqs.module.css"

const FAQS = () => {

  const [faqs, setFaqs] = useState(faqsdata);

  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1>FAQS</h1>
        {faqs.map(faq => <FAQ key={faq.id} { ... faq}/>)}
      </section>
    </main>
  )
}

export default FAQS