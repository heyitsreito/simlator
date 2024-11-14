import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" aria-hidden="true" />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" aria-hidden="true" />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" aria-hidden="true" />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 留学エージェント. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
