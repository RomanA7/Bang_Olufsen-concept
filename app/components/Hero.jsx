import Image from 'next/image'
import Btn from './Btn';

function Hero() {
    return (
        <div className="flex flex-col relative items-center h-[900px] bg-gray-200 rounded-xl mx-6 overflow-hidden lg:h-[1200px]">
            <div className="text-center px-12 text-zinc-600 text-4xl leading-[2.7rem] lg:text-[60px] lg:leading-[4.4rem] tracking-tighter">
                <h1 className="mt-10 lg:mt-[70px]">Toe-Tapping Music That</h1>
                <h1 className="mb-[30px] ">Travels With You.</h1>
            </div>
            <Btn  url={'/Headphones'} name={"Buy Now"}/>
            <Image
                src={"/background-headphones.webp"}
                className="mt-[200px] absolute lg:mt-[200px]"
                alt="headphones"
                layout="fill" objectFit="contain"
            />
        </div>
    )
}

export default Hero;
