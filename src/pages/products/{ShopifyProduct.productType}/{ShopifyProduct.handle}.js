import { graphql,Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import background from "./background.png";
import  Client  from "shopify-buy";
import { container,botoncitoAtras } from "./product.module.css";
import { Footer } from "../../../components/footer/footer";
import { Header } from "../../../components/header/header";
import useStore from "../../../context/StoreContext";
import useInput from "../../../utils/useInput";
import { Wsp } from "../../../components/wsp/wspbutton";

export const query = graphql`
	query($id: String = "") {
		shopifyProduct(id: { eq: $id }) {
			id
			title
			description			
			images {
				gatsbyImageData
			}
			variants {
				shopifyId
				price
			}
		}
	}
`;

const Product = ({ data }) => {
	
	const { addVariantToCart } = useStore()
	const bind = useInput(1)

	async function checkout () {
		// build a client
		const client = Client.buildClient({
		  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN,
		  domain: 'biowayuproducts.myshopify.com'
		});
	
		// create a checkout
		const checkout = await client.checkout.create()
		
		// create an array of line items		
		const variandIdPrueba = data.shopifyProduct.variants[0].shopifyId		
		const lineItemsToAdd = [{ variantId: variandIdPrueba, quantity: 1 }]
	
		// add line items to the checkout
		const checkoutId = checkout.id
		
		const newCheckout = await client.checkout.addLineItems(
		  checkoutId,
		  lineItemsToAdd
		)
		
		// finish the checkout by visiting webUrl
		
		window.open(checkout.webUrl)
		
	  }
	return (
		<main 
            style={{ backgroundImage: `url(${background})`,     
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',       
            }}
        >
            <Header/>
            <Link to="/catalogo/catalogo">
            <button className={botoncitoAtras}>Atras</button>
            </Link>            
            <div className={container}>
			<GatsbyImage image={data.shopifyProduct.images[0].gatsbyImageData} />
				<div>
					<h2 className="font-parrafos uppercase"> {data.shopifyProduct.title}</h2>
					<div>{data.shopifyProduct.description}</div>
					<button onClick={checkout}>Buy</button>
					<form className="grid grid-cols-2 gap-2">
						<h2><label htmlFor="qty">Cantidad:</label></h2>
						<input className="rounded border-black border-solid border-2 text-xs py-2 px-5 w-20" placeholder="1" id="qty" type="number" {...bind}/>
					</form>
					<button className="rounded border-black border-solid border-2 text-xs py-2 px-5 w-20 bg-blue" onClick={() => addVariantToCart(data.shopifyProduct, bind.value)}><p>ADD TO CART</p></button>
				</div>
            </div>
            <Footer/>
			<Wsp/>
			
		</main>
	);
};

export default Product;