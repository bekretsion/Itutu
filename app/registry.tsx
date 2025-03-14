'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const root = document.documentElement
    
    const colors = {
      '--background': '210 40% 98%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '210 40% 98%',
      '--card-foreground': '222.2 84% 4.9%',
      '--popover': '210 40% 98%',
      '--popover-foreground': '222.2 84% 4.9%',
      '--primary': '201 96% 32%',
      '--primary-foreground': '210 40% 98%',
      '--secondary': '199 89% 48%',
      '--secondary-foreground': '210 40% 98%',
      '--muted': '210 40% 96.1%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '199 89% 48%',
      '--accent-foreground': '222.2 84% 4.9%',
      '--destructive': '0 84.2% 60.2%',
      '--destructive-foreground': '210 40% 98%',
      '--border': '214.3 31.8% 91.4%',
      '--input': '214.3 31.8% 91.4%',
      '--ring': '201 96% 32%',
      '--radius': '0.5rem'
    }

    Object.entries(colors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }, [theme])

  return <>{children}</>
} 