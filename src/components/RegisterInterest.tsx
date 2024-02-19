'use client';

import Script from 'next/script';

const RegisterInterest = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Register Interest</h1>
                    <iframe data-tally-src="https://tally.so/embed/3jQ9l4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="1" title="Register Interest
"></iframe>
                    <Script
                        id="tally-js"
                        src="https://tally.so/widgets/embed.js"
                        onLoad={() => {
                            Tally.loadEmbeds();
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default RegisterInterest