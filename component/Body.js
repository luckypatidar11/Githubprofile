import { useEffect, useState } from "react";

function Body(){

const [Profile, setprofile]=useState([]);
const [ numberofpro, setnumberofpro]=useState("")

async function generateprofile(count){
    const ren = Math.floor(1+Math.random()*10000);
    const resp=  await fetch(`https://api.github.com/users?since=${ren}&per_page=${count}`);
    const data = await resp.json();

    setprofile(data)
}

useEffect(()=>{
    generateprofile()
},[])



return(

    
    <div className="but">
        
    <input className="inpu" type="text" placeholder="search here" value={numberofpro} onChange={(e)=>setnumberofpro(e.target.value) }></input>
    <button onClick={()=>generateprofile(Number(numberofpro))}> Search profile </button>

    <div className="profile">
    {
        Profile.map((value)=>{
          return(  <div key={value.id} className="cards">
            <img src={value.avatar_url}/>
              <h2> {value.login}</h2>
              <a href={value.html_url} target="_blank">Profile</a>
            </div>)
        })
    }


    </div>
    </div>
)

}

export default Body;