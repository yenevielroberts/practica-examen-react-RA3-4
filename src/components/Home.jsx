import { useEffect, useState } from "react"

export function Home(){
    const [users, setUsers]=useState([]);

  useEffect(()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    .then (res=> res.json())
    .then(data=>setUsers(data.meals))
  }, []);

    return(
        <>
            <div>
                <h1>Hola, inicio</h1>
                <p>Ejemplo useEffect Conectandose a una API</p>
                <div className="api-img">
                    {users.map(user=>(
                          <img src={user.strMealThumb}/>
                    ))}
                </div>
            </div>
        </>
    )
}