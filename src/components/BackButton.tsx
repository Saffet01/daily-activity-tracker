import Link from 'next/link'

export default function BackButton() {
  return (
    <Link 
      href="/"
      className="absolute top-8 left-8 text-white text-2xl"
    >
      ←
    </Link>
  )
} 