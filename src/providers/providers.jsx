'use client'
import {HeroUIProvider} from '@heroui/react'
import { AuthProvider } from './AuthProvider'

export function Providers({children}) {
  return (
    <HeroUIProvider>
      <AuthProvider>
      {children}
      </AuthProvider>
    </HeroUIProvider>
  )
}