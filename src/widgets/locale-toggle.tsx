import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { addBasePath } from 'next/dist/client/add-base-path'
import { useLocale } from '@/hooks'
import { Toggle } from '@/components/ui/toggle'

/**
 * 快速切换语言组件，用于覆盖 nextra 原生切换下拉框
 */
export default function LocaleToggle({
  className,
}: {
  className?: string
}) {
  const { currentLocale } = useLocale()

  const router = useRouter()
  const { asPath } = router

  const changeLocale = useCallback(() => {
    const nextHref = {
      value: '',
    }
    if (currentLocale === 'zh') {
      nextHref.value = addBasePath(asPath.replace(`/zh`, `/en`))
    }
    else {
      nextHref.value = addBasePath(asPath.replace(`/en`, `/zh`))
    }
    router.replace(nextHref.value)
  }, [asPath, currentLocale, router])

  return (
    <Toggle
      size="sm"
      className={className}
      onClick={changeLocale}
    >
      {
        currentLocale === 'zh'
          ? <span className="icon-[uil--letter-chinese-a]"></span>
          : <span className="icon-[ri--english-input]"></span>
      }
    </Toggle>
  )
}
