'use client'
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

function Nav() {

    const [isOpen, setIsOpen] = useState(false)
    let cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const menuItemsData = [
        {
            title: 'Headphones',
            url: '/Headphones',
        },
        {
            title: 'Our Story',
            url: '/Our-Story',
        },
    ];

    
    useEffect(() => {
      if (cart.length > 0) {setIsOpen(true)}
      
    }, [cart]);

    let total = cart.reduce(
        (accu, i) => accu + i.products[0].item[0].variants[i.numb].price.centAmount * i.quantity,
        0,)


    return (
        <>
            <div onClick={() => setIsOpen(false)} className={`fixed flex right-0 top-0 z-50 w-[100%] h-[100vh] bg-gray ${isOpen ? "translate-x-[0]" : "translate-x-[100%] lg:translate-x-[100%]"}`}></div>
            <div className={`fixed right-0 top-0 lg:w-[500px] md:w-[500px] w-[100%] h-[100%] z-50 bg-neutral-800 transition-all ease-[cubic-bezier(.99,.08,.08,.88)] duration-300 overflow-y-auto ${isOpen ? "translate-x-[0]" : "translate-x-[100%] lg:translate-x-[100%]"}`}>
                <div onClick={() => setIsOpen(false)} className="right-7 absolute top-10 h-[40px] w-[40px] bg-gray-200 text-3xl flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-400 transition-all ease-in duration-100">
                    <svg className="h-4 w-4 text-zinc-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </div>
                {cart.length > 0 ? <div className="mt-[10vh] mx-6 flex-col h-[68vh] lg:h-[74%] sm:h-[75%] overflow-x-scroll no-scrollbar">
                    {cart.map((i) => (
                        <div key={i.colorVariant}>
                            <div className="flex items-center justify-between my-7">
                                <img className="h-[auto] w-[120px] mr-[20px]  flex-shrink-0 rounded-md border border-zinc-700" src={i.products[0].item[0].variants[i.numb].mediaItems[0].media.defaultAssetUrl} />
                                <div className="flex-col flex justify-around w-[150px] lg:w-[200px] sm:w-[420px]">
                                    <p className="text-base pb-[40px] flex text-gray-300">{i.products[0].item[0].productDetail.productName}</p>
                                    <div className="flex w-[100px] border-solid border-[0.5px] border-zinc-700 rounded-[50px] justify-center text-zinc-600 bg-transparent">
                                        <button onClick={() => dispatch(decrementQuantity(i.products[0].item[0].variants[i.numb].slug))} className='text-2xl hover:text-yellow-300 transition hover:duration-180'>-</button>
                                        <p className='text-base px-3 items-center flex'>{i.quantity}</p>
                                        <button onClick={() => dispatch(incrementQuantity(i.products[0].item[0].variants[i.numb].slug))} className='text-2xl mb-[4px] hover:text-yellow-300 transition hover:duration-180' >+</button>
                                    </div>
                                </div>
                                <div className="flex-col justify-between flex h-[100px] w-[120px] text-right">
                                    <p className="text-base text-gray-300">{`$${(Number(i.products[0].item[0].variants[i.numb].price.centAmount) / 100 * i.quantity).toFixed(2)}`}</p>
                                    <button onClick={() => dispatch(removeFromCart(i.products[0].item[0].variants[i.numb].slug))} className='text-[12px] self-end mb-[8px] text-zinc-600 hover:text-yellow-300 transition hover:duration-180 hover:scale-[1.01] ease-in'>REMOVE</button>
                                </div>
                            </div>
                            <div className="w-[100%] bg-zinc-700 h-[0.2px] last:h-[0px]"></div>
                        </div>
                    ))}
                </div> : <h2 className="text-3xl leading-10 text-zinc-600 -tracking-wider lg:text-4xl justify-center flex pt-[50%] mt-[10vh] h-[68vh] lg:h-[74%] sm:h-[75%]">Your cart is empty.</h2>}
                <div className=" flex-col border-t-[1px] border-zinc-700 px-6">
                    <div className="flex text-3xl justify-end text-zinc-600 -tracking-wider lg:text-4xl py-6">${Number(total / 100).toFixed(2)}</div>
                    <button disabled={cart.length < 1} className="bg-yellow-400 py-4 w-[100%] rounded-[6px] mb-[20px] cursor-pointer hover:bg-yellow-300 transition hover:duration-180 ease-in">Checkout</button>
                    <button onClick={() => setIsOpen(false)} className="text-base leading-6 flex mx-[auto] text-gray-50 items-center hover:text-yellow-300 transition hover:duration-180 ease-in">Continue Shopping</button>
                </div>
            </div>
            <nav className="flex gap-5 justify-between m-6 text-sm leading-[normal] items-center font-normal">
                <Link href="/"><Image src="/logo.svg" alt="Bangs Olufsen" width={20} height={20} /></Link>
                <ul className="list-none flex gap-8 text-zinc-600">{menuItemsData.map((nav) => <li key={nav.title}><Link href={nav.url}>{nav.title}</Link></li>)}</ul>
                <div onClick={() => setIsOpen(true)} className="bg-neutral-800 font-light rounded-full text-gray-200 flex justify-center items-center self-stretch size-7 cursor-pointer my-auto">{cart.length ? cart.length : "0"}</div>
            </nav>
        </>
    )
}

export default Nav