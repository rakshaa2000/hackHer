import title from "../img/Software engineer-cuate.png";
import CardRes from "./cardres";
import { useState } from "react";
export default function WebDev() {
  const resources = [
    {title: "Web Dev Roadmap", name: "Roadmap.sh", link:"https://roadmap.sh/" },
    {title: "Web Dev Collection", name: "GeeksforGeeks", link:"https://www.geeksforgeeks.org/web-development/" },
    {title: "Web Dev Courses", name: "freeCodeCamp", link:"https://www.freecodecamp.org/learn/" },
    {title: "JavaScript Course", name: "Codecademy", link:"https://www.codecademy.com/learn/introduction-to-javascript" },
    {title: "Eloquent JavaScript", name: "Marijn Haverbeke", link:"https://eloquentjavascript.net/" },
    {title: "Web Dev Courses", name: "W3 Schools", link:"https://www.w3schools.com/" },
  ];
  const [search, setSearch]= useState('');
  return (
    <>
      <div
        className="App"
        id="head"
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            fontFamily: "Poppins",
            width: "100%",
            alignContent: "center",
            margin: "1%"
          }}
        >
          <h1>Web Dev Resources</h1>
          <img src={title} alt="title" width="200px" />
          <input type="text" placeholder="Search a resource" onChange={event=>{setSearch(event.target.value)}} style={{width:"70%", height:"40px", padding:"2%", borderRadius:"20px", border:"none", background:"#FFE8F4", margin:"1%"}}/>
          <div className="list">
            {resources.filter((val)=>{
              if(search==""){
                return val;
              }
              else if (val.title.toLowerCase().includes(search.toLowerCase())){
                return val;
              }
              else if (val.name.toLowerCase().includes(search.toLowerCase())){
                return val;
              }  
            }).map(CardRes)}
          </div>
        </div>
      </div>
    </>
  );
}
