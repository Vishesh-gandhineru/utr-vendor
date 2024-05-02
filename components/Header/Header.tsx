import Link from "next/link"
import Image from "next/image"

export default function Header () {
    return (
        <header className="flex h-16 w-full items-center justify-between bg-white px-4 shadow-sm dark:bg-[--background] sm:px-6 md:px-8 border-b-2 py-[50px]">
      <Link className="flex items-center" href="/">
        <Image src='/utr-logo.png' alt="logo" width={200} height={100} priority/>
      </Link>
      <div className="flex items-center gap-2">
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
          href="#"
        >
          Sign In
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
          href="#"
        >
          Sign Up
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600"
          href="/dashboard"
        >
          Dashboard
        </Link>
      </div>
    </header>
    )
}