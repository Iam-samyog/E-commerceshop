import React from 'react'

const products = [
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/image 8.png',
      title: 'Sleeve striped T-shirt',
      rating: 4.0,
      price: 180,
      oldPrice: 200,
      discount: 10,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/image 9.png',
      title: 'Checked Shirt',
      rating: 3.9,
      price: 140,
      oldPrice: 160,
      discount: 12,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/Frame 33.png',
      title: 'Funky T-shirt',
      rating: 4.5,
      price: 190,
      oldPrice: 220,
      discount: 14,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/image 10.png',
      title: 'striped T-shirt',
      rating: 4.7,
      price: 160,
      oldPrice: 200,
      discount: 20,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/Frame 32.png',
      title: 'Checked Green T-shirt',
      rating: 4.2,
      price: 150,
      // No old price or discount (natural price)
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/Frame 34.png',
      title: 'Jockey T-shirt',
      rating: 4.8,
      price: 170,
      oldPrice: 190,
      discount: 10,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/Frame 38.png',
      title: 'White Sleeve striped T-shirt',
      rating: 4.6,
      price: 155,
      oldPrice: 180,
      discount: 14,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/image 1.png',
      title: 'Lnfe T-shirt',
      rating: 4.9,
      price: 160,
      // No old price or discount
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/image 5.png',
      title: 'Relay T-shirt',
      rating: 5.0,
      price: 195,
      oldPrice: 220,
      discount: 11,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/bermudashorts.png',
      title: 'Bermuda Shorts',
      rating: 4.3,
      price: 145,
      oldPrice: 170,
      discount: 15,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/fadedjeans.png',
      title: 'Faded jeans',
      rating: 4.1,
      price: 165,
      oldPrice: 190,
      discount: 13,
    },
    {
      id: crypto.randomUUID(),
      image: 'img/clothes/image 7.png',
      title: 'Blue Jockey T-shirt',
      rating: 3.8,
      price: 130,
      // No old price or discount
    },
  ];
const ShowcaseSectionAnother = ({ products }) => {


  

  return (
    <section className="new-arrivals my-4 md:my-6 lg:my-[10px] border-b border-gray-200 pb-8">
      <div className=" px-4 sm:px-3 md:px-4">
       
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-10 lg:mt-[55px] px-2 sm:px-4 md:px-6 lg:px-[50px] transition-all duration-[0.6s] ease-in-out 
          `}
         
        >
         
          {products.map((product)=>(<> <ProductAnother key={product.id} {...product} /></>))}
        </div>
      
      </div>
    </section>
  );
};
const ProductAnother = ({ image, title, rating, price, oldPrice, discount }) => (
    <div className="product secondary-font mx-auto sm:mx-0 w-full max-w-420px]">
      <div className="product-image-container bg-[#F0EEED] text-center w-full rounded-[20px] overflow-hidden">
        <img src={image} alt="Product Image" className="w-full rounded-xl object-cover h-[300px]" />
      </div>
      <div className="pl-2 mt-3">
        <h3 className="product-title font-bold text-lg md:text-[20px] capitalize">{title}</h3>
        <div className="rating flex gap-2 md:gap-4 items-center mt-1">
          <h3 className="rating-stars text-yellow-400 font-bold text-base md:text-[20px]">
            {'★ '.repeat(Math.floor(rating))}
          </h3>
          <h3 className="rating-value text-sm md:text-base">
            {rating}/ <span className="text-light text-gray-500">5</span>
          </h3>
        </div>
        <div className="price-container flex gap-2 md:gap-4 items-center font-bold text-xl md:text-[24px] mt-1">
          <h2 className="current-price">${price}</h2>
  
          {oldPrice  && (<h2 className="old-price text-gray-400 line-through text-base md:text-xl">
            ${oldPrice} </h2>)}
          
          {discount && (<h2 className="discount text-green-600 text-sm md:text-base">
            -{discount}% </h2>)}
          
        </div>
      </div>
    </div>
  );
const ProductCard = () => {
   
  return (
    <>
        <h2 className='primary-font font-bold text-center text-[40px] md:text-[40px] capitalize'>Branded Clothes</h2>
            <ShowcaseSectionAnother products={products} />
    </>
  )
}

export default ProductCard

