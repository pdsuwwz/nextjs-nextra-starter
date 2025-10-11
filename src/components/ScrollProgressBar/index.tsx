'use client'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

interface ScrollProgressBarProps {
  height?: number // 进度条高度，默认 3px
  colors?: string[] // 渐变色数组，默认彩虹渐变
  zIndex?: number // z-index 层级，默认 9999
  smoothness?: number // 平滑度(0-1)，默认 0.15，越小越平滑但响应稍慢
}

const defaultColors = [
  '#00CED1',
  '#4072ed',
  '#9370DB',
]


export default function ScrollProgressBar({
  height = 4,
  colors = defaultColors,
  zIndex = 9999,
  smoothness = 0.15,
}: ScrollProgressBarProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // 使用 ref 存储动画相关状态，避免重复渲染
  const rafIdRef = useRef<number | null>(null)
  const currentProgressRef = useRef(0)
  const targetProgressRef = useRef(0)
  const lastScrollTimeRef = useRef(0)
  const isAnimatingRef = useRef(false)

  // 计算目标滚动进度
  const calculateTargetProgress = useCallback(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    const scrollableHeight = documentHeight - windowHeight

    if (scrollableHeight <= 0) {
      return { progress: 0, visible: false }
    }

    const scrollProgress = (scrollTop / scrollableHeight) * 100
    const clampedProgress = Math.min(Math.max(scrollProgress, 0), 100)

    return {
      progress: clampedProgress,
      visible: scrollTop > 0,
    }
  }, [])

  // 平滑动画函数 - 使用 lerp (线性插值) 实现平滑过渡
  const animateProgress = useCallback(() => {
    const now = performance.now()
    const timeSinceLastScroll = now - lastScrollTimeRef.current

    // 计算当前进度到目标进度的差值
    const diff = targetProgressRef.current - currentProgressRef.current

    // 如果差值很小且已经 200ms 没有滚动，停止动画
    if (Math.abs(diff) < 0.01 && timeSinceLastScroll > 200) {
      currentProgressRef.current = targetProgressRef.current
      setProgress(currentProgressRef.current)
      isAnimatingRef.current = false
      return
    }

    // 使用 lerp 平滑插值
    currentProgressRef.current += diff * smoothness
    setProgress(currentProgressRef.current)

    // 继续动画
    rafIdRef.current = requestAnimationFrame(animateProgress)
  }, [smoothness])

  // 启动平滑动画
  const startAnimation = useCallback(() => {
    if (!isAnimatingRef.current) {
      isAnimatingRef.current = true
      animateProgress()
    }
  }, [animateProgress])

  // 处理滚动事件
  const handleScroll = useCallback(() => {
    lastScrollTimeRef.current = performance.now()

    const { progress: newProgress, visible } = calculateTargetProgress()
    targetProgressRef.current = newProgress
    setIsVisible(visible)

    // 启动或继续动画
    startAnimation()
  }, [calculateTargetProgress, startAnimation])

  // 处理窗口大小变化
  const handleResize = useCallback(() => {
    const { progress: newProgress, visible } = calculateTargetProgress()
    targetProgressRef.current = newProgress
    currentProgressRef.current = newProgress
    setProgress(newProgress)
    setIsVisible(visible)
  }, [calculateTargetProgress])

  // 监听滚动和窗口变化
  useEffect(() => {
    // 初始化
    const { progress: initialProgress, visible } = calculateTargetProgress()
    targetProgressRef.current = initialProgress
    currentProgressRef.current = initialProgress
    setProgress(initialProgress)
    setIsVisible(visible)

    // 使用节流优化滚动事件
    let scrollTimeout
    const throttledScroll = () => {
      clearTimeout(scrollTimeout)
      handleScroll()
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      window.removeEventListener('resize', handleResize)
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [calculateTargetProgress, handleScroll, handleResize])

  // 路由切换时重置
  useEffect(() => {
    const timer = setTimeout(() => {
      const { progress: newProgress, visible } = calculateTargetProgress()
      targetProgressRef.current = newProgress
      currentProgressRef.current = newProgress
      setProgress(newProgress)
      setIsVisible(visible)

      // 取消正在进行的动画
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
        isAnimatingRef.current = false
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname, calculateTargetProgress])

  // 生成渐变色字符串
  const gradientColors = colors.join(', ')

  return (
    <div
      className="fixed top-0 left-0 right-0 pointer-events-none"
      style={{ zIndex }}
      aria-hidden="true"
    >
      <div
        className="origin-left"
        style={{
          height: `${height}px`,
          width: `${progress}%`,
          background: `linear-gradient(to right, ${gradientColors})`,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 150ms ease-out',
          willChange: 'width',
          // 使用 transform 代替 width 动画以获得更好的性能
          // 但这里我们保持 width 因为需要精确的进度显示
        }}
      />
    </div>
  )
}
