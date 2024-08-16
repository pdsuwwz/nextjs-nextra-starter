export function CustomFooter() {
  return (
    <div className="text-zinc-600 dark:text-zinc-300/[0.8] font-[inter]">
      MIT Licensed | Copyright © 2020-
      { new Date().getFullYear() }
      {' '}
      Wisdom.
    </div>
  )
}
