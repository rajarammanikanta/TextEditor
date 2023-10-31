import {Component} from 'react'

import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from 'react-icons/ai'
import {
  BackgroundColor,
  TextEditorContainer,
  TextEditImage,
  ImageHeadingContainer,
  TextContainer,
  TextAreaContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
} from '../../styledComponents'

import './index.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBoldActive: true,
      isItalicActive: true,
      isUnderlineActive: true,
    }
  }

  handleBoldClick = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  handleItalicClick = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  handleUnderlineClick = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state

    return (
      <BackgroundColor>
        <TextEditorContainer>
          <ImageHeadingContainer>
            <h1>Text Editor</h1>
            <TextEditImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageHeadingContainer>
          <TextContainer>
            <ul>
              <li>
                <BoldButton
                  type="button"
                  outline={!isBoldActive}
                  onClick={this.handleBoldClick}
                  data-testid="bold"
                >
                  <AiOutlineBold />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  type="button"
                  outline={!isItalicActive}
                  onClick={this.handleItalicClick}
                  data-testid="italic"
                >
                  <AiOutlineItalic />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  type="button"
                  outline={!isUnderlineActive}
                  onClick={this.handleUnderlineClick}
                  data-testid="underline"
                >
                  <AiOutlineUnderline />
                </UnderlineButton>
              </li>
            </ul>
            <TextAreaContainer
              cols="34"
              rows="25"
              isBold={isBoldActive}
              isItalic={isItalicActive}
              isUnder={isUnderlineActive}
            />
          </TextContainer>
        </TextEditorContainer>
      </BackgroundColor>
    )
  }
}

export default Home
