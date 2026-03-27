'use client'

import { useEffect } from 'react'

const GA_ID = 'G-VCR6017LB8'
const BAIDU_SRC = 'https://hm.baidu.com/hm.js?d5ad5e04e6af914c01767926567602be'

export default function ThirdPartyScripts() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (!document.querySelector(`script[src*="${GA_ID}"]`)) {
      const gtagScript = document.createElement('script')
      gtagScript.async = true
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(gtagScript)

      const inline = document.createElement('script')
      inline.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `
      document.head.appendChild(inline)
    }

    if (!document.querySelector(`script[src="${BAIDU_SRC}"]`)) {
      const hmScript = document.createElement('script')
      hmScript.src = BAIDU_SRC
      document.head.appendChild(hmScript)
    }
  }, [])

  return null
}
