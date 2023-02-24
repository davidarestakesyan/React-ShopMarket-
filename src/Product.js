
import {  useParams } from 'react-router-dom';

const productsData = [
    {
        id: 1,
        image: "nikebag1.jpeg",
        // image2: "hoodie.webp",
        // image3: "img1.webp",
        name: "nikebag1",
        price: "37500 ֏ ",
        places: "Whether it's going to the gym or just throwing the ball around with friends, the Nike Brasilia Duffel has enough space to store all the things you need. Carry it either by the adjustable shoulder strap or quickly grab the handles. Multiple easy-access points let you grab all of your stuff quickly, including a zippered side pocket for things you want to keep close."
        
    },
    {
        id: 2,
        image: "nikebag2.jpeg",
        name: "nikebag2",
        price: "28000֏",
        places: "What's it mean to be an all-star? To us, it's being your best and shining bright—from the classroom to your favorite sport or activity. Inspired by the star within everyone, the Nike Icon Fleece hoodie celebrates what you're great at. Big graphics bring extra star power to your oversized soft fleece hoodie."

    },
    {
        id: 3,
        image: "nikeshoes1.jpeg",
        name: "nikeshoes1",
        price: "47000֏",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    },
    {
        id: 4,
        image: "nikeshoes2.jpeg",
        name: "nikeshoes2",
        price: "53000֏",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    },
    {
        id: 5,
        image: "nikeshoes3.jpeg",
        name: "nikeshoes3",
        price: "32000֏",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    },
    {
        id: 6,
        image: "nikeshoes4.jpeg",
        name: "nikeshoes4",
        price: "46000֏",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    },
    {
        id: 7,
        image: "nikeshoes5.jpeg",
        name: "nikeshoes5",
        price: "63000֏",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    },
    {
        id: 8,
        image: "nikeshoes6.jpeg",
        name: "nikeshoes6",
        price: "42000֏",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    },
    {
        id: 9,
        image: "niketshirt1.jpeg",
        name: "niketshirt1",
        price: "25000֏",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    },
    {
        id: 10,
        image: "niketshirt2.jpeg",
        name: "niketshirt2",
        price: "29000֏",
        places: "Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey."

    }
]
const Product = () => {
    const { id } = useParams();
console.log(id);
    const product = productsData.find(el => el.id === +id)
    console.log(product)
    return (

        <div className='prod-items'>
            <div >

                <img src={"/" + product.image} alt="" className="images"  />
                 {/* <img src={"/" + product.image2} alt="" className="images"  />
                 <img src={"/" + product.image3} alt="" className="images"  /> */}
                <h2  className='prod-item'>{product.name}</h2>
                <p className='prod-item'>{product.price}</p>
                <p className='prod-item'>{product.places}</p>

            </div>
        </div>
    )
}
export {Product,productsData}