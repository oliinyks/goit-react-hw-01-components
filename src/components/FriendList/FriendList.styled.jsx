import styled from "@emotion/styled";

export const ListItems = styled.ul`
list-style: none;
display: flex;
justify-content: center;
align-items: flex-end;
margin: -30px -3opx -40px -30px;
`
export const Item = styled.li`
margin: 30px;
`

export const Status = styled.span`
display: block;
	width: 5px;
	height: 5px;
	border-radius: 50%;

	background-color: ${status => {
		return status.status ? `${status.theme.colors.green}` : `${status.theme.colors.red}`;
	}};
	
`
export const Img = styled.img``

export const Name = styled.p`
margin-top: 5px;
text-align: center;
`
