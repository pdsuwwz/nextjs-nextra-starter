'use client'

import dynamic from 'next/dynamic'

const LoginForm = dynamic(() => import('@/components/auth/login-form'), {
  ssr: false,
})

export default function LoginFormClient() {
  return <LoginForm />
}
