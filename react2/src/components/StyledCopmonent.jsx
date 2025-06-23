import styled from 'styled-components'


const Div=styled.div`
border:1px solid black ; 
padding:10px;
 margin:20px;
`;
function StyledComponent({children}) {
    return (
         <Div>
{children}
    </Div> );
}

export default StyledComponent;