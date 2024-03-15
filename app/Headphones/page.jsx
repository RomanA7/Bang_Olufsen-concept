'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import headphones from '../../app/products'
import Link from 'next/link';


function Headphones() {


  useEffect(() => {

  }, []);


  return (
    <div className="grid lg:grid-cols-3 gap-5 mx-6 md:grid-cols-2 sm:grid-cols-1 mb-[20px]">
      {headphones.toReversed().map((i) => (
        <Link key={i.item[0].productDetail.slug} href={`/Headphones/${i.item[0].productDetail.slug}`} className="bg-gray-200 row-span-1 grid rounded-xl px-6 py-6 flex-col hover:bg-gray-100 transition-all">
          <h2 className="text-3xl leading-10 text-center pt-[70px] pb-[0.5rem] align-middle text-zinc-600 -tracking-wider lg:text-3xl">{i.item[0].productDetail.productName}</h2>
          <p className=" text-base text-center leading-6 text-gray-400">{i.item[0].productDetail.shortDescription}</p>
          <img src={i.item[0].variants[0].mediaItems[0].media.defaultAssetUrl} />
          <div className="flex justify-between pt-[50px] items-center">
            <h3 className="text-2xl leading-10 align-middle item text-gray-400 -tracking-wider lg:text-2xl">{`$${(Number(i.item[0].variants[0].price.centAmount) / 100).toFixed(2)}`}</h3>
            <div className="flex gap-2">
              {i.item[0].variants.map( (color) => (
              <div style={{backgroundColor:color.variantAttributes.colorCode}} key={color.variantAttributes.colorCode} className={`w-[23px] h-[23px] rounded-full`} ></div>))}
            </div>
          </div>
        </Link>
      ))}
    </div>

  )
}

export default Headphones;
