/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, auth} from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import FileUpload from '@/components/ui/FileUpload'


export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId 
  return (
    <div className="w-screen  min-h-screen bg-gradient-to-t from-gray-100 to-gray-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-seibold font bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent self-center">A new way to read PDF's</h1>
            <UserButton afterSignOutUrl='/' />
          </div>
          <div className="flex mt-3 ">
            {isAuth && <Button > Check out your pdf's </Button>}
          </div>

          <p className="max-w-xl mt-3 text-lg text-slate-400"> 
            Ever wanted to speed up your PDF reading?
            Our AI-powered PDF reader helps you read long PDFs more efficiently and effectively. <br />

            Join our beta program today and start reading PDFs like never before!
          </p>
          <div className='w-full mt-5'>
            {isAuth ? (<FileUpload />):
            (
              <Link href="/sign-in">
                <Button>
                  Get Started
                  <LogIn className='w-4 h4 ml-2'/>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
    </div>
  )
}
