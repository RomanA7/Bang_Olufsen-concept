import Image from "next/image"


function ImageOne() {
    return (
        <div className="w-full relative overflow-hidden my-6">
            <Image src={"/main.png"}
                width={0}
                height={0}
                alt="Wireless over-ear Bluetooth headphones"
                layout="responsive"
                objectFit="contain"
            />
            <div className="px-6 flex flex-col py-9 relative  bg-neutral-900 md:flex-row sm:items-center md:justify-between lg:bg-transparent lg:absolute lg:bottom-10 lg:flex-col lg:items-start">
                <h2 className="pb-4 text-3xl leading-10 text-gray-50 -tracking-wider lg:text-4xl lg:w-[50%] lg:pb-7 sm:w-[45%] sm:pb-4">
                    Our wireless over-ear Bluetooth headphones let you lose yourself in sound
                </h2>
                <p className=" text-base leading-6 text-gray-300 lg:w-[50%] sm:pb-4 top-10 lg:pt-1 sm:w-[45%]">
                    whether you’re working out, concentrating at the office or flying to your next holiday destination.
                </p>
            </div>
        </div>
    )
}

export default ImageOne