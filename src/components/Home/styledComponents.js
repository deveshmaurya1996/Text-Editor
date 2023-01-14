import styled from 'styled-components'

export const BgContainer = styled.div`
  padding: 40px;
  background-size: cover;
  background-color: #25262c;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContainer = styled.div`
  padding: 20px;
  background-color: #1b1c22;
  display: flex;
`
export const HeadingPicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  width: 45%;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #f8fafc;
  margin-bottom: 70px;
`

export const Image = styled.img`
  width: 70%;
`
export const MainInputContainer = styled.div`
  width: 55%;
`
export const ButtonContainer = styled.ul`
  background-color: #25262c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 100%;
  border: 0.2px solid #334155;
  border-bottom: 0px;
  border-radius: 8px 8px 0px 0px;
  list-style-type: none;
  margin: 0px;
`
export const ButtonList = styled.li``

export const Button1 = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  color: ${props => (props.isBoldActive ? '#faff00' : '#f1f5f9')};
`
export const Button2 = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  color: ${props => (props.isItalicActive ? '#faff00' : '#f1f5f9')};
`
export const Button3 = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
  color: ${props => (props.isUnderlineActive ? '#faff00' : '#f1f5f9')};
`

export const TextAreaContainer = styled.div`
  background-color: transparent;
  width: 100%;
`
export const TextArea = styled.textarea`
  background-color: #25262c;
  border: 0.2px solid #334155;
  border-radius: 0px 0px 8px 8px;
  color: #cbd5e1;
  outline: none;
  padding: 10px;
  width: 100%;
  font-size: 14px;
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
`
