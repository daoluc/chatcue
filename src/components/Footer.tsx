import Image from "next/image"

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font items-center">
            <div className="container px-5 py-2 mx-auto flex items-center flex-row">
                <a className="flex title-font font-medium items-center justify-start text-gray-900">
                    <Image
                        src="/logo.png"
                        width={120}
                        height={120}
                        alt="ChatCue"
                    />
                </a>
                <p className="text-sm text-gray-500 ml-4 pl-4 border-l-2 border-gray-200 py-2 mt-0">© {new Date().getFullYear()} ChatCue
                </p>
            </div>
        </footer>
    )
}

export default Footer