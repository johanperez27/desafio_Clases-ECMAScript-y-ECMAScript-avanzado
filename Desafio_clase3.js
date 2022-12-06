class ProductManager{
   
  constructor(){
      this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock){
      if(title != "" && description != "" && price != null && thumbnail != "" && code != ""){
          let product = {title,description,price,thumbnail,code,stock};
          if (this.products.length === 0) {
              product['id'] = 1;
              this.products.push(product);
          }else{
              let codeValues = this.products.find(product => product['code'] === code);
              if(!codeValues){
                  product['id'] = this.products[this.products.length - 1]['id'] + 1;
                  this.products.push(product);
              }
              else{
                  console.log("repeated code");
              }
          }
      }
  };   

  getProducts(){
      return this.products;
  };

  getProductById(id){
      let product = this.products.find(product => product['id'] === id);
      if (product != null){
          return product;
      }else{
          console.log("Not found");
          return null;
      }
  };
};
