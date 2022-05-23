import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    // get the active Route path
    let isAdminPage = useRouter().pathname.includes(`admin`) ? true : false

    const flexDisplay = `flex flex-col lg:flex-row justify-around`;

    return isAdminPage ? <></> : <footer className={`${flexDisplay} container lg:mx-auto mb-16 mt-32 pl-12 lg:pl-0`}>
        <div>
            <p>Jalan Suroyo No. 161 Mayangan Kota<br />Probolonggo 672000</p>
            <p className="mt-4">binarcarrental@gmail.com</p>
            <p className="mt-4">081-233-334-808</p>
        </div>
        <div className='flex flex-col font-medium'>
            <a href="#services" className="text-decoration-none text-dark">Our services</a>
            <a href="#whyus" className="text-decoration-none text-dark mt-3">Why Us</a>
            <a href="#testimonial" className="text-decoration-none text-dark mt-3">Testimonial</a>
            <a href="#faq" className="text-decoration-none text-dark mt-3">FAQ</a>
        </div>
        <div className='flex flex-col'>
            <p>Connect with us</p>
            <div className="flex gap-2 mt-4">
                <Link href="#"><img src="/images/icons/fb.svg" alt="facebook" /></Link>
                <Link href="#"><img src="/images/icons/ig.svg" alt="instagram" /></Link>
                <Link href="#"><img src="/images/icons/twitter.svg" alt="twitter" /></Link>
                <Link href="#"><img src="/images/icons/mail.svg" alt="email" /></Link>
                <Link href="#"><img src="/images/icons/twitch.svg" alt="twitch" /></Link>
            </div>
        </div>
        <div>
            <p className='mb-4'>Copyright Binar 2022</p>
            <Image alt="Logo" src='/images/logo.png' width={70} height={35} />
            {/* <img src="/images/logo.png" alt="Logo" className="mt-4" /> */}
        </div>
    </footer>
}