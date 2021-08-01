import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Table(props) {

    const {data}=props;
    const history = useHistory();

    return (
        <div>
            <table>
                <tr>
                <th>Name:</th>
                <th>Profession:</th>
                <th>Years of Experience:</th>
                </tr>
                {
                    Object.keys(data).map((item,i)=>{
                        return <tr key={i}>
                            <td>{item}</td>
                            <td>{data[item].profession}</td>
                            <td>{data[item].totalYearsOfExp}</td>
                            <td><a href="#/" onClick={()=>history.push(`/${item}`)}>View Skills</a></td>
                        </tr> 
                    })   
                }

            </table>
        </div>
    )
}
