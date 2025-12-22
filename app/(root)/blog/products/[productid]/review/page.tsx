export default async function Review(
  {params}:{
    params:Promise<{productid: string}>
  } 
){
    const productid = (await params).productid;
    return(
        <>
        <ul>
            <li>Review of product {productid}</li>
        </ul>
        </>
    )
}

