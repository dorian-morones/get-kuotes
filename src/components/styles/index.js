import styled from 'styled-components';
import bk from '../../img/bk.jpg';

export const QuoteContainer = styled.div`
width: 600px;
padding: 25px;
margin: 0 auto;
margin-top: 10%;
-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.19);
-moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.19);
box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.19);
/* background-image: url(${bk});
background-size: cover; */
`
export const Row = styled.div`
  margin-bottom: ${(props) => props.theme.margin ? props.theme.margin : '0'};
  display: flex;
  justify-content: ${(props) => props.theme.align ? props.theme.align : 'normal'};
`
export const Col = styled.div`
  flex: ${(props) => props.theme.width};
`

export const QuoteItem = styled.h1`
  font-size: 20px;
`

export const QuoteIcon = styled.a`
  display: block;
  margin: 10px 0;
  .fa-twitter{
    color: #00acee;
  }
`

export const QuoteAuthor = styled.p`
  margin: 10px 0;
  text-align: right;
`

export const QuotePhoto = styled.img`
width: 40px;
border-radius: 50%;
height: 40px;
float: right;
margin-right: 10px;
-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.19);
-moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.19);
box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.19);
`

export const QuoteButton = styled.button`
  width:100%;
  border: 0;
  padding: 10px;
  font-weight: bold;
`