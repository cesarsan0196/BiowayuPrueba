import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function SlideShow(){

    const [index,setIndex]= useState(0)
    const data = useStaticQuery (
        graphql`
            query {
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
                            gatsbyImageData(height: 200, width: 300)
                            }
                            slug: gatsbyPath(
                            filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
                            )
                        }
                    }
                }
            }
        `
    )
    
    const length = data.allShopifyProduct.edges.length - 1
    const handleNext = () =>
        index === length ? setIndex(0) : setIndex(index + 1)
    const handlePrevious = () =>
        index === length ? setIndex(0) : setIndex(index - 1)   
    const {node} = data.allShopifyProduct.edges[index]
    return(

        <div className="flex flex-col md:flex-row items-center">
            <div className="">
                <button onClick={() => handlePrevious()}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg></button>
            </div>
            <div>
                <GatsbyImage
                    image={node.images[0].gatsbyImageData}
                    key={node.title}
                    alt={node.description}
                />
                <div className="flex flex-col">
                    <div className="font-parrafos text-2xl text-left uppercase pt-3 ">{node.title}</div>
                    <div className="font-body text-sm text-left w-80">{node.description}</div>              
                </div>
            </div>            
            <div className="">                
                <button onClick={() => handleNext()}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg></button>
            </div>
        </div>
    )   
}

export default SlideShow