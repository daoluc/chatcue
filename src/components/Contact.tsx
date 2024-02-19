import Link from 'next/link'

const Contact = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Interested?</h1>
                    <div className="lg:w-2/3 mx-auto leading-relaxed text-base pb-5">Kindly email us at <b>ChatCue@mit.edu</b> or register interest below, and we will get in touch with you. Thank you for your interest! </div>
                    <Link href="#tally-open=3jQ9l4&tally-layout=modal&tally-width=350&tally-emoji-animation=none" className="flex mx-auto text-white bg-slate-700 border-0 py-2 px-8 focus:outline-none hover:bg-slate-500 rounded text-lg">Register Interest</Link>                   
                </div>
            </div>
        </section>
    )
}

export default Contact