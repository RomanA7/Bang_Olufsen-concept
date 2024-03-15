'use client'
import { useEffect, useState } from 'react';
import headphones from '../../../app/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function ProductPage(slug) {
  const products = headphones.filter((product) => product.item[0].productDetail.slug === slug.params.id);
  let [quantity, setQuantity] = useState(1);
  let [numb, setNumb] = useState(0)
  const [setOpen, setIsOpen] = useState(true)


  const dispatch = useDispatch();


  let id = slug.params.id
  let colorVariant = products[0].item[0].variants[numb].slug

  return (
    <div className='rounded-xl mx-6 bg-gray-200 grid lg:grid-cols-2 overflow-hidden mb-[20px]'>{
      <Swiper className="w-[100%] lg:mt-[10px] h-[auto] sm:h-[700px] md:h-[1000px] md:mt-[10px] lg:h-[90%] lg:w-[90%] lg:my-[0px] grid-1 transition-all"
        slidesPerView={1}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
      >
        {products[0].item[0].variants[numb].mediaItems.map((image) =>
        (<SwiperSlide
          key={image.media.defaultAssetUrl}>{<img src={image.media.defaultAssetUrl}></img>}
        </SwiperSlide>))}
      </Swiper>
    }
      <div className='w-[80%] lg:w-[70%] mx-auto lg:h-[1000px] h-[550px]'>
        <div className='mt-[30px] lg:mt-[120px] grid-1 '>
          <div className='w-auto'>
            <h2 className="text-3xl leading-10 text-zinc-600 -tracking-wider lg:text-4xl">{products[0].item[0].productDetail.productName}</h2>
            <p className=" text-[12px] leading-6 text-zinc-600 pt-[16px] uppercase">{products[0].item[0].productDetail.shortDescription}</p>
            <p className=" text-base leading-6 text-gray-400">{products[0].item[0].productDetail.tags[0].seo.description}</p>
          </div>
          <div className='flex items-baseline justify-between mt-[70px] lg:mt-[400px] mb-10'>
            <div>{products[0].item[0].variants.map((color, index) => (
              <button onClick={() => setNumb(index)} style={{ backgroundColor: color.variantAttributes.colorCode }} key={color.variantAttributes.colorCode} className={`w-[23px] h-[23px] rounded-full mr-2 flex-row ${index === numb ? " ring-2 !ring-zinc-400 transition-all duration-100" : ""}`} ></button>))}
            </div>
            <h3 className="text-3xl leading-10 align-middle text-zinc-600 -tracking-wider lg:text-3xl">{`$${(Number(products[0].item[0].variants[0].price.centAmount) / 100).toFixed(2)}`}</h3>
          </div>
          <div className='flex justify-between'>
            <button onClick={() => dispatch(addToCart( {products, quantity, id, numb, colorVariant} ))} className='rounded-[6px] bg-yellow-400 w-[60%] lg:w-[70%] h-[70px] hover:bg-yellow-300 transition hover:duration-140 ease-in'>Add To Cart</button>
            <div className='flex w-[25%] lg:w-[20%] border-solid border-2 border-gray-300 rounded-[6px] items-center justify-center text-gray-400 bg-transparent'>
              <button disabled={quantity === 1} className='text-2xl px-0.5 hover:text-yellow-300 transition hover:duration-140 ease-in' onClick={() => setQuantity(quantity - 1)}>-</button>
              <p className='text-base lg:px-4 sm:px-6 px-2'>{quantity}</p>
              <button className='text-2xl mb-[2px] hover:text-yellow-300 transition hover:duration-140 ease-in' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage


