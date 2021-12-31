import { graphql, Link } from "gatsby";
import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { botoncito } from "../index.module.css";
import background from "./background.png";
import { Footer } from "../../components/footer/footer.js";
import { Header } from "../../components/header/header.js";
import estrella from "./estrella.png"
import pesito from "./pesos2.png"
import { Wsp } from "../../components/wsp/wspbutton";
import "../styles/global.css";



export const query = graphql`
query MyQuery {
  allShopifyProduct {
    edges {
      node {
        title
        description
        priceRangeV2 {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        images {
          gatsbyImageData
        }
        slug: gatsbyPath(
          filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
        )
      }
    }
  }
}
`

const Catalogo = ({ data }) => {    
  return (
    <main style={{ backgroundImage: `url(${background})`,     
     backgroundRepeat: 'repeat',
     backgroundPosition: 'center',       
   }}
     >
    <Header/>
    <div className="flex items-center justify-center">       
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl gap-6 items-center">               
        {
            data.allShopifyProduct.edges.map(({node:product}) => (          
            
            <Link to={product.slug}>            
                <div className="w-96 flex items-center justify-center content-center lg:w-full">
                    <GatsbyImage 
                        image={product.images[0].gatsbyImageData} 
                        alt={product.title}
                    />
                </div>
                <button className={botoncito}>+ Add</button>                                                                                                                 
                <div className="grid grid-cols-3 justify-evenly px-8 transform -translate-y-6">
                <div className="text-left font-bold"><h2>{product.title}</h2></div>
                <div className="transform translate-y-1"><img alt="estrella" src={estrella}/><div className="text-left transform -translate-y-4 translate-x-5 ">4.5</div></div>
                <div className="text-right font-bold">
                {product.priceRangeV2.maxVariantPrice.amount}               
                {product.priceRangeV2.maxVariantPrice.currencyCode}
                </div>                                                                   
                </div>  
                <div className="flex transform -translate-y-8 translate-x-7 w-80" ><img alt="pesito" src={pesito}/></div>                       
            </Link>
            ))
        }     
        </div>
    </div> 
    <Footer/> 
    <Wsp/>      
  </main>
    
  );
};

export default Catalogo;