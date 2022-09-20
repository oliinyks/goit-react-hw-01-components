import styled from "@emotion/styled";

export const TransactionContainer = styled.table`
margin: 0 auto 20px;
width: 80%;
overflow: hidden;
border:${props => `1px solid ${props.theme.colors.black}`};
border-radius: 20px;
`

export const TableSignature = styled.thead`
font-weight: 500;
background-color: ${props => `${props.theme.colors.extraAccent}`};
`

export const TableItems = styled.tbody`
text-align: center;
`

export const TableItem = styled.tr`
:nth-of-type(2n){
	background-color:beige
}
`
