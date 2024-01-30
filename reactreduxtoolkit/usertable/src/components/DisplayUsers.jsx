import { UseSelector, useSelector } from "react-redux";
import styled  from "styled-components";

const DisplayUsers = ()=>{
    const data =useSelector((state)=>{
        return state.users;
    })
    console.log(data)
    return<wrapper>
        {
          data.map((user,id)=>{
            return<li key={id}>
                {user}
            </li>
          }) 
            
        }
    </wrapper>

  
}
const wrapper =styled.section

export default DisplayUsers;