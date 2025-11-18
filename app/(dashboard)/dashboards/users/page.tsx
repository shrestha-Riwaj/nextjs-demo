import Link from "next/link";

export default function User(){

    return(

        <>
        <h1 className=" text-blue-500">Dashboard Users</h1>
        <ul>
            <li className="m-2"> <Link href="/dashboards/users/1">User 1</Link></li>
            <li className="m-2"> <Link href="/dashboards/users/2">User 2</Link></li>
            <li className="m-2"> <Link href="/dashboards/users/3">User 3</Link></li>
            <li className="m-2"> <Link href="/dashboards/users/4">User 4</Link></li>
        </ul>
        </>
    )
}