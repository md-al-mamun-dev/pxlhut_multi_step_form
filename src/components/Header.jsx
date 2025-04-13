"use client"
import useTheme from "@/lib/useTheme";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-14 sm:h-16 md:h-20 lg:h-20 xl:h-24 2xl:h-28 shadow-md bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <div className="flex items-center space-x-2">
          <Link href="/" onClick={(e) => {  e.preventDefault();
                                            window.location.href = '/'; }}>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">Multi Step Form Application</div>
          </Link>
        </div>
        <button 
          className="relative w-14 h-8 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors p-1"
          onClick={toggleTheme} >
          <span
            className={`absolute left-1 transform transition-transform ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
            } w-6 h-6 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-md`}
          >
            {theme === 'dark' ? (
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.64 13.64A9 9 0 0110.36 2.36a9 9 0 1011.28 11.28z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.354a.5.5 0 01.5.5v2.293a.5.5 0 11-1 0V4.854a.5.5 0 01.5-.5zm0 12a.5.5 0 01.5.5v2.293a.5.5 0 11-1 0v-2.293a.5.5 0 01.5-.5zm7.146-5.646a.5.5 0 010 1h-2.293a.5.5 0 110-1h2.293zM6.854 12a.5.5 0 010 1H4.561a.5.5 0 010-1h2.293zm10.243 6.243a.5.5 0 11-.707.707l-1.621-1.621a.5.5 0 11.707-.707l1.621 1.621zm-9.9 0a.5.5 0 11-.707-.707l1.621-1.621a.5.5 0 11.707.707l-1.621 1.621zm9.9-12.486a.5.5 0 11-.707-.707l1.621-1.621a.5.5 0 11.707.707l-1.621 1.621zm-9.9 0L6.354 5.05a.5.5 0 11-.707-.707l1.621-1.621a.5.5 0 11.707.707L6.197 4.757zM12 7a5 5 0 100 10 5 5 0 000-10z" />
            </svg>
          )}
          </span>
        </button>
      </div>                
    </div>
  )
}
