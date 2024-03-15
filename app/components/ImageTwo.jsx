import Image from "next/image"
import Btn from "./Btn"

Image
function ImageTwo() {
    return (
        <div className="w-full relative overflow-hidden my-6">
            <Image src={"/imagetwo.jpeg"}
                width={0}
                height={0}
                alt="Wireless over-ear Bluetooth headphones"
                layout="responsive"
                objectFit="contain"
            />
            <div className="px-6 flex flex-col py-9 relative  bg-neutral-900 md:flex-row sm:items-center md:justify-between lg:bg-transparent lg:absolute lg:bottom-10 lg:flex-col lg:items-start">
                <h2 className="pb-10 text-3xl leading-10 text-gray-50 -tracking-wider lg:text-4xl lg:w-[50%] sm:w-[70%] sm:text-center lg:text-left md:text-left">
                    Since 1925, Bang & Olufsen has created iconic audio and home entertainment products to the highest standards of sound, craft, and design.
                </h2>
                <span>
                    <Btn url={'/Our-Story'} name={"Our Story"} />
                </span>
            </div>
        </div>
    )
}

export default ImageTwo