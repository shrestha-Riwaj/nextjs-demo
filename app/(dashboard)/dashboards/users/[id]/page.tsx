export default async function UserDetails ({
    params,
}:{
    params:{id:string}}){

    const {id} = await params;
    return(
        <>
        <h1>User details of user #{id}</h1>
        </>
    )
}

