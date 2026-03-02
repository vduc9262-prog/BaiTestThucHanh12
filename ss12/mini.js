
let products = [
    {id: "P01", name: "laptop macBOOk Pro m3", price: 2000, category: "Laptop ", instock: true },
    {id: "P02", name: "chuột ko dây logitech ", price: 45, category: "phụ kiện", instock: true },
    {id: "P03", name: "bàn phím cơ ", price: 95, category: "phụ kiện", instock: false },
    {id: "P04", name: "Màn hình dell ", price: 450, category: "Màn hình  ", instock: true },
    {id: "P05", name: "tai nghe sony ", price: 350, category: "phụ kiện", instock: true },
];

const filterProducByinstock = (arr) =>{
   let listproducts = arr.filter(p => p.instock == true);
    
     if (listproducts === 0 ){
        console.log("ko có sản phẩm nào đúg ");
        return;
     } 

     console.log(listproducts);
     
   
};

filterProducByinstock(products);

const filterProducCategoty = () =>{
    let listproducts_v2 = products.filter(s => s.category == "phụ kiện");


    if (listproducts_v2.length === 0 ){
        console.log("ko có sản phẩm nào đúg ");
        return;
     } 
    console.log(listproducts_v2);
    
};

filterProducCategoty(products)


const SumproductsPrice = () => {
   let listproductsPrice = products.reduce((sum , s) => {
      return sum+s.price
   },0);

   console.log(`tổng tiền là ${listproductsPrice} `);
   
};

SumproductsPrice(products);