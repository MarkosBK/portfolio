'use client'

import { Button } from '@/components/ui/Button'
import { Github, Linkedin, Facebook, Mail, Send } from 'lucide-react'
import { m } from 'framer-motion'
import { Link } from '@/i18n/routing'
import { SOCIAL_LINKS } from '@/lib/constants/social'

interface SocialLinksProps {
  className?: string
  showEmail?: boolean
  showTelegram?: boolean
}

export default function SocialLinks({
  className = '',
  showEmail = false,
  showTelegram = false,
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: 'GitHub',
      color: 'bg-gray-800 hover:bg-gray-900',
      href: SOCIAL_LINKS.github,
      icon: <Github size={20} className="text-white" />,
    },
    {
      name: 'LinkedIn',
      color: 'bg-blue-700 hover:bg-blue-800',
      href: SOCIAL_LINKS.linkedin,
      icon: <Linkedin size={20} className="text-white" />,
    },
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-700',
      href: SOCIAL_LINKS.facebook,
      icon: <Facebook size={20} className="text-white" />,
    },
    ...(showTelegram
      ? [
          {
            name: 'Telegram',
            color: 'bg-blue-500 hover:bg-blue-600',
            href: SOCIAL_LINKS.telegram,
            icon: <Send size={20} className="text-white" />,
          },
        ]
      : []),
    ...(showEmail
      ? [
          {
            name: 'Email',
            color: 'bg-red-600 hover:bg-red-700',
            href: SOCIAL_LINKS.email,
            icon: <Mail size={20} className="text-white" />,
          },
        ]
      : []),
  ]

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((social, index) => (
        <m.div
          key={social.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.15, y: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
        >
          <Button
            as={Link}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`h-12 w-12 ${social.color} flex cursor-pointer items-center justify-center rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl`}
            aria-label={social.name}
            size="sm"
            isIconOnly
          >
            {social.icon}
          </Button>
        </m.div>
      ))}
    </div>
  )
}
