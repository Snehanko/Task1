import { useContext,useState } from "react";
import { ListContext } from "../Context";


export const Details = (props) => {
  const [candidate]=useContext(ListContext);

  const name=props.match.params.details;
  const [skills]=useState(candidate[name].skills);
 

  return (
  <div>
    <h1>Details Page of {name}</h1>
    <table>
          <tr>
          <th>Skills</th>
          <th>Rating</th>
          </tr>
          {
            Object.keys(skills).map((item,i)=>{
              return <tr key={i}>
                <td>{item}</td>
                <td>{skills[item]}</td>
              </tr>}
            )}
    </table>
  </div>
  );
};
  