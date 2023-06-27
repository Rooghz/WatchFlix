import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <h1 className="text-2xl md:text-4xl text-center text-gray-700 dark:text-white font-extrabold">
                Choose Your Premium Plan
            </h1>
            <p className="max-w-2xl text-gray-500 dark:text-white text-center md:mx-auto mx-4 mt-4 text-sm md:text-lg ">
                Subscribe Now and Start Streaming
            </p>
        </div>
    )
}

const Step = ({ text }) => {
    return (
        <div className="flex flex-row items-start space-x-2 my-4 justify-start">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
                className="h-4 w-4 text-green-500 mt-1"
            >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <p className="text-gray-600 dark:text-white">{text}</p>
        </div>
    )
}

const MobilePricing = () => {

    const handlePayment = async () => {
        const options = {
            key: 'rzp_test_gCQu5SOp8apALq',
            amount: 19900,
            currency: 'INR',
            name: 'WatchFlix OTT - Mobile',
            description: 'Purchase',
            handler: (response) => {
                console.log(response); // Handle the response from Razorpay
            },
            prefill: {
                email: 'customer@example.com',
                contact: '1234567890',
            },
            notes: {
                address: 'Kolkata',
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <div className="relative z-10">
                <div
                    className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-700"
                    style={{ zIndex: 20 }}
                >
                    <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-4">
                        Mobile
                    </h2>
                    <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
                        <span className="text-4xl">₹</span>199
                    </p>
                    <div className="features">
                        <Step text="Ad-free" />
                        <Step text="No. of screens: 1" />
                        <Step text="Max audio quality: Stereo" />
                        <Step text="Max video quality: HD (720p)" />
                        <Step text="Device: Mobile" />
                    </div>

                    <button className="w-full rounded-md py-4 font-semibold bg-tmk-blue mt-4 text-white buy-now flex justify-center items-center" onClick={handlePayment}>
                        <p>Buy Now</p>
                    </button>

                </div>
                <div
                    className="absolute inset-0 transform -rotate-3 opacity-20 rounded-md  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                    style={{ zIndex: -20 }}
                ></div>
            </div>
        </>
    )
}

const PremiumPricing = () => {

    const handlePayment = async () => {
        const options = {
            key: 'rzp_test_gCQu5SOp8apALq',
            amount: 49900,
            currency: 'INR',
            name: 'WatchFlix OTT - Premium',
            description: 'Purchase',
            handler: (response) => {
                console.log(response); // Handle the response from Razorpay
            },
            prefill: {
                email: 'customer@example.com',
                contact: '1234567890',
            },
            notes: {
                address: 'Kolkata',
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <div className="relative z-10">
                <div
                    className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border-2 border-tmk-blue dark:border-gray-700"
                    style={{ zIndex: 20 }}
                >
                    <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-6">
                        Premium
                    </h2>
                    <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
                        <span className="text-4xl">₹</span>499
                    </p>
                    <div className="features mx-auto">
                        <Step text="Ad-free" />
                        <Step text="No. of screens: 2" />
                        <Step text="Max audio quality: Dolby 5.1" />
                        <Step text="Max video quality: FHD (1080p)" />
                        <Step text="Premium support over email" />
                        <Step text="Device: Mobile, Laptop" />
                    </div>

                    <button className="w-full rounded-md py-4 font-semibold bg-tmk-blue mt-4 text-white buy-now flex justify-center items-center" onClick={handlePayment}>
                        <p>Buy Now</p>
                    </button>

                </div>
                <div className="flex justify-center">
                    <div
                        className="absolute bg-tmk-blue rounded-md px-2 py-2 font-semibold -top-5 dark:text-gray-100"
                        style={{ zIndex: 20 }}
                    >
                        <div className='flex justify-center highlight'>
                            <p>MOST POPULAR</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const PlusPricing = () => {

    const handlePayment = async () => {
        const options = {
            key: 'rzp_test_gCQu5SOp8apALq',
            amount: 79900,
            currency: 'INR',
            name: 'WatchFlix OTT - Premium 4k',
            description: 'Purchase',
            handler: (response) => {
                console.log(response); // Handle the response from Razorpay
            },
            prefill: {
                email: 'customer@example.com',
                contact: '1234567890',
            },
            notes: {
                address: 'Kolkata',
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <div className="relative z-10">
                <div
                    className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-700"
                    style={{ zIndex: 20 }}
                >
                    <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-4">
                        Premium 4k
                    </h2>
                    <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
                        <span className="text-4xl">₹</span>799
                    </p>
                    <div className="features">
                        <Step text="Ad-free" />
                        <Step text="No. of screens: 4" />
                        <Step text="Max audio quality: Dolby Atmos" />
                        <Step text="Max video quality: UHD (2160p)" />
                        <Step text="Device: Mobile, TV, Laptop" />
                    </div>

                    <button className="w-full rounded-md py-4 font-semibold bg-tmk-blue mt-4 text-white buy-now flex justify-center items-center" onClick={handlePayment}>
                        <p>Buy Now</p>
                    </button>

                    {/* <button className="w-full rounded-md py-4 font-semibold bg-tmk-blue mt-4">Buy Now</button> */}
                </div>
                <div
                    className="absolute inset-0 transform -rotate-3 opacity-20 rounded-md  bg-gradient-to-r from-yellow-200 via-green-200 to-green-500"
                    style={{ zIndex: -20 }}
                ></div>
            </div>
        </>
    )
}

export default function PricingComponent() {
    return (
        <div>
            <div className="page-container pt-28">
                <Header />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 mx-4 md:mx-8 xl:mx-40 gap-8 z-10 content-center items-center">
                <MobilePricing />
                <PremiumPricing />
                <PlusPricing />
            </div>
        </div>
    )
}

