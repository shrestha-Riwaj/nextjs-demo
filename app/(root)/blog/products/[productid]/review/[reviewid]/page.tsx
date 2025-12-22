import { notFound } from "next/navigation";

export default async function ProductDetail(
    {params,}:{
        params: Promise<{productid: string; reviewid:string}>
    }
){
    const {productid, reviewid} =  (await params);
    if(parseInt(reviewid)>=1000){
        notFound()
    }
    return(
        <>
        <h1> Review {reviewid} of Product detail page. {productid}</h1>
        </>
    )
}

