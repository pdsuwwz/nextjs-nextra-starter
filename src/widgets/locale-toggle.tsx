import { Toggle } from '@/components/ui/toggle'
import { useLocale } from '@/hooks'
import { addBasePath } from 'next/dist/client/add-base-path'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

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
    // 滚动条位置记录
    const currentPosition = window.scrollY
    // 检查是否滚动到底部
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight

    const nextHref = {
      value: '',
    }
    if (currentLocale === 'zh') {
      nextHref.value = addBasePath(asPath.replace(`/zh`, `/en`))
    }
    else {
      nextHref.value = addBasePath(asPath.replace(`/en`, `/zh`))
    }

    router
      .replace(nextHref.value)
      .then(() => {
        // 滚动条位置恢复
        if (isAtBottom) {
          // 如果之前在底部，则依旧滚动到新的底部
          window.scrollTo(0, document.body.scrollHeight)
        }
        else {
          // 否则，恢复到之前的滚动位置
          window.scrollTo(0, currentPosition)
        }
      })
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
