import { Button } from "antd"
import {Slider} from "./Slider"
import "./Home.css"
import { useNavigate } from "react-router-dom"
export const Home=()=>{
  const navigate=useNavigate()
    const trendingdata=[ {
        "id": 9,
         "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/bifold_natural_2015_thumb_01_ad8f5886-5713-4322-a77b-7979818fe9d2_720x.jpg?v=1595467603",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Tanneer-Goods-Utility-Bifold-Natural-Lifestyle-01_720x.jpg?v=1595468032",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Tanneer-Goods-Utility-Bifold-Natural-Lifestyle-02_720x.jpg?v=1595468032",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/bifold_natural_2015_04_720x.jpeg?v=1595468032"],
        "title":"Utility Bifold - Natural",
        "price":"125.00",
        "colors":["Natural"],
        "COMPANY":"TANNER GOODS",  
        "Quantity":10,
        "Description":{
          "Para":"Constructed from 3.5oz. Natural tooling leather, our Utility Bifold features four card-slot pockets, two hidden pockets, and one lengthwise pocket for bills. Each wallet is burnished, dyed, waxed, and stamped with our signature maker's mark.",
          "List":["Bifold dimensions closed: 4.25 inch x 3.25",
            "3.5oz leather",
            "4 Card pockets",
         "2 Hidden pockets",
          "Bill pocket",
          "Burnished and waxed",
          "Made in USA"]
        },
         
         
        "Returns & Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.",
          "If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
      },{
        "id": 1,
         "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Front_720x.jpg?v=1648152491",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Monogram-Placement_9eb0bb67-a124-4d5b-b804-ae9b53a86153_720x.jpg?v=1648152491",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Top_720x.jpg?v=1648152491",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Bottom_720x.jpg?v=1648152491"],
        "title":"Standard Belt - Cognac",
        "price":"120.00",
        "colors":["Stainless","Brass","Black","Copper","Cast Brass"],
        "COMPANY":"TANNER GOODS",
        "Sizes":[28,30,32,34,36,38,40],
        "Quantity":10,
        "Description":{
          "Para":"The Standard Belt emphasizes utilitarian styling and is built to last and improve with age. Featuring a matching leather keep and metal hardware, the edges are dyed, burnished, waxed, and each belt is stamped with our signature makers mark.",
          "List":["Standard belt measures 1.5 inch wide","10-11oz English Bridle leather",
         "Nickel plated roller bar buckle",
          "Hand stamped TG logo mark",
          "Hand-cast solid brass buckle optional (+$55)",
          "Made in USA"]
        },
        "Sizing Info":"Our belts are designed to be worn using the middle hole on the tail. The space between each hole is 1” so you can adjust as needed. It's always best to measure your waist where your pants sit but we have a free and easy exchange program so you can order with confidence if you're not 100% certain of your size.",
        "image":"https://cdn.shopify.com/s/files/1/0044/9802/files/Screen_Shot_2022-03-16_at_9.29.14_PM.png?v=1647491384",
        "Returns & Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.","If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
      },{
        "id": 3,
         "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Crater-Lake-Mug-Sandstone_360x.jpg?v=1650000939",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Crater-Lake-Mug-Rosado_721769d3-3bcc-4f07-ad5a-e8a6464c399b_360x.jpg?v=1650000939",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Crater-Lake-Mug-Gabbro-Thumb_360x.jpg?v=1650000939",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/MZ-Lifestyle-CraterLake-Onyx-5_360x.jpg?v=1650400848"],
        "title":"Crater Lake Mug",
        "price":38.00,
        "colors":["Sandstone","Rosado","Black","Gabro"],
        "COMPANY":"MAZAMA",
        "Quantity":10,
        "Description":{
          "Para":"The Small Mug was designed with the espresso drinker in mind, bringing the rich feel of hand-crafted ceramics to your table. Crafted so the handle and body provide a comfortable grip when in use and a tapered, unglazed foot that allows sets to nest together neatly when stored.",
          "List":["Capacity: 8oz","Food-safe, Dishwasher and Microwave Safe",
         "Slip cast vitrified stoneware",
          "Dimensions – 2 ⅞” W (4 ⅛” from lip to handle) x 3 ⅜” T",
          "Designed in Portland, Oregon",
          "Made in Dolores Hidalgo, Mexico"],
          "info":"Mazama ceramics are handmade and some variation is to be expected. Mazama ceramics can be washed safely in the dishwasher, however, we recommend hand washing for the longest lifespan. For further information about how to care for your ceramics, please see our ceramic care page."
        },
         
        
        "Returns & Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.","If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
      },{
        "id": 19,
         "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/journeyman_natural_2020_thumb_01_cd11fa34-61ce-4b05-91a5-adb690f2fd77_360x.jpg?v=1638303744",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Wallets-Journeyman-Golden-Harness-3_360x.jpg?v=1638303744",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Wallets-Journeyman-Golden-Harness-2_360x.jpg?v=1638303744",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Wallets-Journeyman-Golden-Harness-Monogram_1_360x.jpg?v=1638303744"],
        "title":"Journeyman - Golden",
        "price":85,
        "colors":["Golden"],
        "COMPANY":"TANNER GOODS",
        "Quantity":10,
        "Description":{
          "Para":"Constructed from 3.5oz. Natural tooling leather, our Utility Bifold features four card-slot pockets, two hidden pockets, and one lengthwise pocket for bills. Each wallet is burnished, dyed, waxed, and stamped with our signature maker's mark.",
          "List":["Bifold dimensions closed: 4.25 inch x 3.25",
            "English Bridle leather",
            "4 Card pockets",
          
          "Central pocket",
          
          "Made in USA"]
        },
        "Returns & Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.",
          "If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
      }, {
        "id": 8,
         "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Decanter-Pure-Thumb_d85728cf-7616-41e2-8ee0-1260f9ab2685_360x.jpg?v=1617084881",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Decanter-Honey-Thumb_41e15724-bbe1-4468-8d93-90ce1804c005_360x.jpg?v=1617084865",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Decanter-Emerald-Thumb_a7bd5fad-a0d9-4b17-be8e-cd4691a3c00c_360x.jpg?v=1617084849",
          "https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Decanter-Smoke_360x.jpg?v=1617084849"],
        "title":"Decanter",
        "price":165.00,
        "colors":["Emerald","Azure","Amethyst","smoke"],
        "COMPANY":"MAZAMA",
        "Quantity":10,
        "Description":{
          "Para":"Our hand blown decanter makes for one amazing centerpiece for your next dinner party. Sturdy and durable, it will last you a lifetime of wine tasting.",
          "List":["Hand blown soda-lime glass",
         "Holds 750mL",
          "11inch H x 27inch D",
          "Dishwasher safe, or hand wash mild soap","Handmade in Portland"],
          "info":"All Mazama glassware is handcrafted making every piece special and unique. Small bubbles and natural variations in color, shape and size are expected and unique to the glassblowing process."
        },
         
        
        "Returns & Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.","If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
      }]

      const BestSellers=[
        {
          "id": 7,
           "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/Limited-Bifold-Blue-Front_360x.jpg?v=1638513400",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Limited-Bifold-Blue-Interior_360x.jpg?v=1638513400",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Limited-Bifold-Blue-Front_360x.jpg?v=1638513400",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Limited-Bifold-Blue-Interior_360x.jpg?v=1638513400"],
          "title":"Utility Bifold - Cobalt",
          "price":"125.00",
          "colors":["Cobalt"],
          
          "Quantity":10,
          "Description":{
            "Para":"Constructed from 3.5oz. Natural tooling leather, our Utility Bifold features four card-slot pockets, two hidden pockets, and one lengthwise pocket for bills. Each wallet is burnished, dyed, waxed, and stamped with our signature maker's mark.",
            "List":["Bifold dimensions closed: 4.25 inch x 3.25",
              "3.5oz leather",
              "4 Card pockets",
           "2 Hidden pockets",
            "Bill pocket",
            "Burnished and waxed",
            "Made in USA"]
          },
          "Returns_Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.",
            "If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
        }, 
        {
          "id": 1,
           "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Front_720x.jpg?v=1648152491",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Monogram-Placement_9eb0bb67-a124-4d5b-b804-ae9b53a86153_720x.jpg?v=1648152491",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Top_720x.jpg?v=1648152491",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Cognac-Bottom_720x.jpg?v=1648152491"],
          "title":"Standard Belt - Cognac",
          "price":"120.00",
          "colors":["Stainless","Brass","Black","Copper","Cast Brass"],
          "Sizes":[28,30,32,34,36,38,40],
          "Quantity":10,
          "Description":{
            "Para":"The Standard Belt emphasizes utilitarian styling and is built to last and improve with age. Featuring a matching leather keep and metal hardware, the edges are dyed, burnished, waxed, and each belt is stamped with our signature makers mark.",
            "List":["Standard belt measures 1.5 inch wide","10-11oz English Bridle leather",
           "Nickel plated roller bar buckle",
            "Hand stamped TG logo mark",
            "Hand-cast solid brass buckle optional (+$55)",
            "Made in USA"]
          },
          "Sizing_Info":"Our belts are designed to be worn using the middle hole on the tail. The space between each hole is 1” so you can adjust as needed. It's always best to measure your waist where your pants sit but we have a free and easy exchange program so you can order with confidence if you're not 100% certain of your size.",
          "image":"https://cdn.shopify.com/s/files/1/0044/9802/files/Screen_Shot_2022-03-16_at_9.29.14_PM.png?v=1647491384",
          "Returns_Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.","If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
        },
        {
          "id": 23,
           "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Crater-Lake-Mug-Sandstone_360x.jpg?v=1650000939",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Crater-Lake-Mug-Rosado_721769d3-3bcc-4f07-ad5a-e8a6464c399b_360x.jpg?v=1650000939",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Crater-Lake-Mug-Gabbro-Thumb_360x.jpg?v=1650000939",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/MZ-Lifestyle-CraterLake-Onyx-5_360x.jpg?v=1650400848"],
          "title":"Crater Lake Mug",
          "price":38.00,
          "colors":["Sandstone","Rosado","Black","Gabro"],
          
          "Quantity":10,
          "Description":{
            "Para":"The Small Mug was designed with the espresso drinker in mind, bringing the rich feel of hand-crafted ceramics to your table. Crafted so the handle and body provide a comfortable grip when in use and a tapered, unglazed foot that allows sets to nest together neatly when stored.",
            "List":["Capacity: 8oz","Food-safe, Dishwasher and Microwave Safe",
           "Slip cast vitrified stoneware",
            "Dimensions – 2 ⅞” W (4 ⅛” from lip to handle) x 3 ⅜” T",
            "Designed in Portland, Oregon",
            "Made in Dolores Hidalgo, Mexico"],
            "info":"Mazama ceramics are handmade and some variation is to be expected. Mazama ceramics can be washed safely in the dishwasher, however, we recommend hand washing for the longest lifespan. For further information about how to care for your ceramics, please see our ceramic care page."
          },
           
          
          "Returns_Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.","If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
        },
        {
          "id": 5,
           "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Wallets-Bifold-Golden-Harness-Thumb_1800x1800_8ffd1d51-8b63-4682-917d-c774cf9098a0_360x.jpg?v=1647890832",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Lifestyle-Father_sDay-GH_360x.jpg?v=1647890832",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Wallets-Bifold-Golden-Harness-3_360x.jpg?v=1647890832",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Wallets-Bifold-Golden-Harness-2_360x.jpg?v=1647890832"],
          "title":"Utility Bifold - Golden",
          "price":"125.00",
          "colors":["Golden"],
          
          "Quantity":10,
          "Description":{
            "Para":"Constructed from 3.5oz. Natural tooling leather, our Utility Bifold features four card-slot pockets, two hidden pockets, and one lengthwise pocket for bills. Each wallet is burnished, dyed, waxed, and stamped with our signature maker's mark.",
            "List":["Bifold dimensions closed: 4.25 inch x 3.25",
              "3.5oz leather",
              "4 Card pockets",
           "2 Hidden pockets",
            "Bill pocket",
            "Burnished and waxed",
            "Made in USA"]
          },
          "Returns_Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.",
            "If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
        },
        {
          "id": 2,
           "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Black-Front_720x.jpg?v=1648152389",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Monogram-Placement_2a37eef0-f266-4bf3-9881-72961fed6c90_720x.jpg?v=1648152389",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Black-Top_720x.jpg?v=1648152389",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Black-Bottom_720x.jpg?v=1648152389"],
          "title":"Standard Belt - Black",
          "price":"120.00",
          "colors":["Stainless","Brass","Black","Copper","Cast Brass"],
          "Sizes":[28,30,32,34,36,38,40],
          "Quantity":10,
          "Description":{
            "Para":"The Standard Belt emphasizes utilitarian styling and is built to last and improve with age. Featuring a matching leather keep and metal hardware, the edges are dyed, burnished, waxed, and each belt is stamped with our signature makers mark.",
            "List":["Standard belt measures 1.5 inch wide","10-11oz English Bridle leather",
           "Nickel plated roller bar buckle",
            "Hand stamped TG logo mark",
            "Hand-cast solid brass buckle optional (+$55)",
            "Made in USA"]
          },
          "Sizing_Info":"Our belts are designed to be worn using the middle hole on the tail. The space between each hole is 1” so you can adjust as needed. It's always best to measure your waist where your pants sit but we have a free and easy exchange program so you can order with confidence if you're not 100% certain of your size.",
          "image":"https://cdn.shopify.com/s/files/1/0044/9802/files/Screen_Shot_2022-03-16_at_9.29.14_PM.png?v=1647491384",
          "Returns_Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.","If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
        },
        {
          "id": 3,
           "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Natural-Front_720x.jpg?v=1648152678",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Monogram-Placement_9a2e2efb-c398-4e29-a4af-de247ee104ba_720x.jpg?v=1648152678",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Natural-Top_720x.jpg?v=1648152678",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Standard-Belt-Natural-Bottom_720x.jpg?v=1648152678"],
          "title":"Standard Belt - Natural",
          "price":"120.00",
          "colors":["Stainless","Brass","Black","Copper","Cast Brass"],
          "Sizes":[28,30,32,34,36,38,40],
          "Quantity":10,
          "Description":{
            "Para":"The Standard Belt emphasizes utilitarian styling and is built to last and improve with age. Featuring a matching leather keep and metal hardware, the edges are dyed, burnished, waxed, and each belt is stamped with our signature makers mark.",
            "List":["Standard belt measures 1.5 inch wide","10-11oz English Bridle leather",
           "Nickel plated roller bar buckle",
            "Hand stamped TG logo mark",
            "Hand-cast solid brass buckle optional (+$55)",
            "Made in USA"]
          },
          "Sizing_Info":"Our belts are designed to be worn using the middle hole on the tail. The space between each hole is 1” so you can adjust as needed. It's always best to measure your waist where your pants sit but we have a free and easy exchange program so you can order with confidence if you're not 100% certain of your size.",
          "image":"https://cdn.shopify.com/s/files/1/0044/9802/files/Screen_Shot_2022-03-16_at_9.29.14_PM.png?v=1647491384",
          "Returns_Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.","If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
        },
        
        {
          "id": 6,
           "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Utility-Bifold-Olive-Thumb_360x.jpg?v=1638511993",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Utility-Bifold-Olive-Open_360x.jpg?v=1638511993",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Wallets-Bifold-Safari_Olive-2017-MONOGRAM_360x.jpg?v=1646076720",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/TG-Utility-Bifold-Olive-Thumb_360x.jpg?v=1638511993"],
          "title":"Utility Bifold - Olive",
          "price":"125.00",
          "colors":["Olive"],
          
          "Quantity":10,
          "Description":{
            "Para":"Constructed from 3.5oz. Natural tooling leather, our Utility Bifold features four card-slot pockets, two hidden pockets, and one lengthwise pocket for bills. Each wallet is burnished, dyed, waxed, and stamped with our signature maker's mark.",
            "List":["Bifold dimensions closed: 4.25 inch x 3.25",
              "3.5oz leather",
              "4 Card pockets",
           "2 Hidden pockets",
            "Bill pocket",
            "Burnished and waxed",
            "Made in USA"]
          },
          "Returns_Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.",
            "If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
        },
           
        {
          "id": 24,
           "images":["https://cdn.shopify.com/s/files/1/0044/9802/products/MZ-Small-Plate-Thumb_360x.jpg?v=1617085417",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Side-Plate-Rosado_360x.jpg?v=1634329128",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Mazama-Dinner-Plate-Edit_360x.gif?v=1634329917",
            "https://cdn.shopify.com/s/files/1/0044/9802/products/Rosado-Tableware-Collection-Social_360x.jpg?v=1634329106"],
          "title":"Side Plate",
          "price":42.00,
          "colors":["Sandstone","Rosado","Black"],
          
          "Quantity":10,
          "Description":{
            "Para":"Our Side Plate compliments the design found in all Mazama pieces; the iconic beveled base, the timeless, angular lines and specially formulated clay. Designed to stack beautifully in open shelving and layer with our ceramic collection to create a striking table top scene for your next occasion, even if it's just take out. Each plate is ram pressed and hand finished so natural variation is to be expected.",
            "List":["Dimensions – 7” diameter x ~⅜”  T at lip",
           "Food safe, Dishwasher and Microwave Safe",
            "Designed in Portland, Oregon",
            "Made in Dolores Hidalgo, Mexico"],
            "info":"Mazama Wares are handmade and some variation in the consistency of the product is to be expected. "
          },
           
          
          "Returns_Exchange":["Tanner Goods | Mazama gladly accepts returns for refund, exchange, or store credit on unused, qualifying items within 30 days of receiving your purchase. Monogrammed items, final sale, and sample sale goods will not be eligible for returns and exchanges.","If you'd like to make a return, just head over to our Returns Center and have your order number or email address handy."]
        }
      ]
    return(
        <div style={{justifyContent:"center"}}>
            <Slider style={{cursor:"pointer"}}/>
            <div  style={{margin:"auto",width:"80%",justifyContent:"space-between"}}>
              <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem",width:"80%"}}>
                  <h2 style={{fonSize:"32.3px"}}>Trending Right Now</h2>
                  <Button >VIEW ALL</Button>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"center" }}>
                {trendingdata.map((el)=>(
                    <div key={el.id}style={{margin:".5rem", textAlign:"center" ,cursor:"pointer"}}>
                        <img style={{width:"260px"}}src={el.images} alt={el.title} />
                        <div>
                          <p>{el.COMPANY}</p>
                          <h3>{el.title}</h3>
                          <p>from ${el.price}</p>
                        </div>
                       
                    </div>
                ))}
            </div>
            <hr style={{margin:"5rem 0 5rem 0", }}/>
            <div style={{justifyContent:"center", margin:"auto" ,width:"50%", fontSize:"21px",}}>
                  <h1 style={{textAlign:"center",fontSize:"32.3px"}}>We Created Products Worth Holding Onto</h1>
                  <p style={{textAlign:"center", width:"100%", fontSize:"21px"}}>The products we use on a daily basis say something about the people we are. We believe many things in life get better with time; it is that spirit we try to infuse in everything we create. In a world where we are overwhelmed by products made to break down or go out style, we aim to go against that grain.</p>
            </div>
            {/* <hr style={{margin:"5rem 0 5rem 0",color:"gray" }}/> */}
            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10rem"}}>
              <div style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Ads-Native-600-600-02_540x.jpg?v=1637739952")`,width:"606.594px",height:"460px",backgroundSize:"cover",backgroundRepeat:"no-repeat", border:"1px solid white",cursor:"pointer"}}>
                <div style={{margin:"2rem 10rem 2rem 2rem", bottom:0}}>
                  <h1 style={{color:"white", fontSize:"40px"}}>Belts</h1>
                  <Button onClick={()=>navigate("/belts")} className="btn" style={{backgroundColor:"black", color:"white", border:"none"}}>SHOP NOW</Button>
                </div>     
              </div>
              <div style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Wallet-Studio-Lifestyle-02_540x.jpg?v=1637739996")`,width:"606.594px",height:"460px",backgroundRepeat:"no-repeat" ,backgroundSize:"cover", border:"1px solid white",cursor:"pointer"}}>
               <div style={{margin:"2rem 10rem 2rem 2rem", bottom:0}}>
                <h1 style={{color:"white", fontSize:"40px"}}>Wallets</h1>
                <Button onClick={()=>navigate("/wallets")} className="btn" style={{backgroundColor:"black", color:"white", border:"none"}}>SHOP NOW</Button>
               </div>
              </div>
              <div style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Collection-Mazama-Tableware_5c9a75d2-907e-4bc0-ad6f-f3a3179cd975_720x.jpg?v=1637736288")`,width:"606.594px",height:"460px",backgroundRepeat:"no-repeat" ,backgroundSize:"cover", backgroundPositionY:"-10rem", border:"1px solid white",cursor:"pointer"}}>
                <div style={{margin:"2rem 10rem 2rem 2rem", bottom:0}}>
                  <h1 style={{color:"white", fontSize:"40px"}}>Tablewear</h1>
                 <Button onClick={()=>navigate("/tablewear")} className="btn" style={{backgroundColor:"black", color:"white", border:"none"}}>SHOP NOW</Button>
                </div>
                
                
              </div>
              
            </div>
            <div  style={{margin:"auto",width:"80%",justifyContent:"space-between"}}>
              <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem",width:"80%"}}>
                  <h2 style={{fontSize:"32.3px"}}>Best Sellers</h2>
                  
              </div>
            </div>
            <div >
               <div className="BestSellers"> 
                 {BestSellers.map((el)=>(
                    <div key={el.id}style={{margin:".5rem", textAlign:"center"}}>
                        <img style={{width:"360px"}}src={el.images} alt={el.title} />
                        <div>
                          <p>{el.COMPANY}</p>
                          <h3>{el.title}</h3>
                          <p>from ${el.price}</p>
                        </div>
                       
                    </div>
                ))}
                </div>
                <div style={{marginLeft:"50%", marginBottom:"2rem"}}> <Button className="btn" style={{backgroundColor:"black", color:"white", border:"none",}}>VIEW ALL</Button></div>
            </div>
            {/* <div style={{margin:"auto", justifyContent:"center"}}> */}
              
            {/* </div> */}
           <div style={{backgroundImage:`url("https://cdn.shopify.com/s/files/1/0044/9802/files/TG-Layover-Duffel-Field-Tan-Lifestyle-Hero_0c6d719d-5872-443f-98ed-c2385c913e4f_1944x.jpg?v=1635796299")`,height:"500px",backgroundSize:"cover" , textAlign:"center", margin:"auto",cursor:"pointer"}}>
                  <div style={{}}>
                  <h1 style={{color:"white", fontSize:"50px"}}> <b> Free US Shipping</b>

                 </h1>
                 <p style={{fontSize:"24px", color:"white"}}>Domestic orders over $199 ship for free.</p>
                  </div>

                  
           </div>
        </div>
    )
}