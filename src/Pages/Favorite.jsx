import { useEffect } from "react";

export default function Favorite({arrayLocalStorage}) {


        {if(arrayLocalStorage.length === 0){
            return (
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-4xl">No Favorite</h1>
                </div>
            )
        }}
        return(
            <ul>
                {arrayLocalStorage.map((id) => (
                    <li>{id}</li>
                ))}
            </ul>
        )
    ;
}