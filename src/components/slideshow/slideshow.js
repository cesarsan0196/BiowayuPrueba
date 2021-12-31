import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function SlideShow(){
    const [currentImageIdx,setCurrentImageIdx]= useState(0)
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
    const length = data.allShopifyProduct.edges.length
    const handleNext = () =>{
        const resetIndex = currentImageIdx === length - 1;
        const index = resetIndex ? 0 : currentImageIdx + 1;
        setCurrentImageIdx(index);
    }        
    const handlePrevious = () =>{
        const reset = currentImageIdx === 0;
        const index = reset ? length - 1 : currentImageIdx - 1;
        setCurrentImageIdx(index);
    }
    const activeImageSourcesFromState =  data.allShopifyProduct.edges.slice(
        currentImageIdx,
        currentImageIdx + 3
    );
    const imageSourcesToDisplay =
        activeImageSourcesFromState.length < 3       
        ?
            [
                ...activeImageSourcesFromState,
                ...data.allShopifyProduct.edges.slice(0,3 - activeImageSourcesFromState.length)
            ]
        : activeImageSourcesFromState;    
    return(
        <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="">
                <button onClick={() => handlePrevious()}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg></button>
            </div>
            {imageSourcesToDisplay.map(
                (image,index) =>{
                    return <div>
                        <Link to={image.node.slug}>
                            <GatsbyImage
                            image={image.node.images[0].gatsbyImageData}
                            key={image.node.title}
                            alt={image.node.description}
                            />
                        </Link>
                        <div className="flex flex-col">
                        <div className="font-parrafos text-2xl text-left uppercase pt-3 ">{image.node.title}</div>
                        <div className="font-body text-sm text-left xl:w-60 lg:w-32 md:w-32 md:text-xs ">{image.node.description} </div>                  
                        </div>                    
                    </div>;
                }
            )}
            <div className="">                
                <button onClick={() => handleNext()}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg></button>
            </div>
        </div>
    )   
}

export default SlideShow