import Image from "next/image"
import Script from "next/script"

const Header = () => {    
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-col items-center">                
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <Image
                          src="/logo.png"
                          width={200}
                          height={200}
                          alt="ChatCue"
                    />
                </a>
            </div>
            <Script src="https://tally.so/widgets/embed.js" async />
        </header>
    )
}

export default Header