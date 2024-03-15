'use client'

function Card({Features}) {
   
    return (
        <>
            {
                Features.map((item) => (
                    <div key={item.number} className="bg-gray-200 row-span-1 rounded-xl px-6 py-8 flex flex-col">
                        <span className="flex rounded-full justify-center text-center border-2 items-center bg-transparent border-gray-300 h-[80px] w-[80px] align-middle">
                            <h2 className="text-3xl leading-10 text-center align-middle text-zinc-600 -tracking-wider lg:text-4xl">{item.number}</h2>
                        </span>
                        <div className='mt-[230px]'>
                            <h2 className="text-3xl leading-10 text-zinc-600 -tracking-wider lg:text-4xl pb-6">{item.title}</h2>
                            <p className="text-base leading-6 text-gray-400">
                                {item.text}
                            </p>
                        </div>
                    </div>
                )
                )
            }
        </>

    )
}

export default Card