import logo from '../public/logo.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderLogo() {
    return (
        <Link href="/">
            <div className="hidden text-white lg:flex items-center space-x-2">
                <Image
                    src={logo}
                    alt='Logo'
                    height={28}
                    width={28}
                />
                <p className='font-semibold text-2xl'>
                    CFMS
                </p>
            </div>
        </Link>
    )
}
