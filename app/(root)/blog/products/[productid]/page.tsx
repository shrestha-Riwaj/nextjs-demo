export default async function ProductDetail(
    {params,}:{
        params: Promise<{productid: string}>
    }
){
    const productid =  (await params).productid;
    return(
        <>
        <h1>Product detail page. {productid} </h1>
        </>
    )
}

