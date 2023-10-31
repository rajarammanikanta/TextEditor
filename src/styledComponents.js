import styled from 'styled-components'

export const BackgroundColor = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  height: 60vh;
  width: 45%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
export const TextEditImage = styled.img`
  height: 320px;
  margin-top: 15px;
`
export const ImageHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
export const TextContainer = styled.div`
  background-color: #25262c;
  height: 58vh;
  width: 40%;
  padding: 5px;
`

export const TextAreaContainer = styled.textarea`
  background-color: #25262c;
  color: white;
  font-weight: ${props => (props.isBold ? 'normal' : 'bold')};
  text-decoration: ${props => (props.isUnder ? 'normal' : 'underline')};
  font-style: ${props => (props.isItalic ? 'normal' : 'italic')};
`
export const BoldButton = styled.button`
  background-color: transparent;
  color: ${props => (props.outline ? '#faff00 ' : '#f1f5f9')};

  border-width: 0px;
`
export const ItalicButton = styled.button`
  background-color: transparent;
  color: ${props => (props.outline ? '#faff00 ' : '#f1f5f9')};
  border-width: 0px;
`

export const UnderlineButton = styled.button`
  background-color: transparent;
  color: ${props => (props.outline ? '#faff00 ' : '#f1f5f9')};
  border-width: 0px;
`
