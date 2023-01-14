import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  MainContainer,
  HeadingPicContainer,
  Heading,
  Image,
  MainInputContainer,
  ButtonContainer,
  ButtonList,
  Button1,
  Button2,
  Button3,
  TextAreaContainer,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {
    userInput: '',
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  changeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {
      userInput,
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
    } = this.state

    return (
      <BgContainer>
        <MainContainer>
          <HeadingPicContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingPicContainer>
          <MainInputContainer>
            <ButtonContainer>
              <ButtonList>
                <Button1
                  onClick={this.onClickBold}
                  type="button"
                  isBoldActive={isBoldActive}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button1>
              </ButtonList>
              <ButtonList>
                <Button2
                  onClick={this.onClickItalic}
                  type="button"
                  isItalicActive={isItalicActive}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Button2>
              </ButtonList>
              <ButtonList>
                <Button3
                  onClick={this.onClickUnderline}
                  type="button"
                  isUnderlineActive={isUnderlineActive}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </ButtonList>
            </ButtonContainer>
            <TextAreaContainer>
              <TextArea
                type="text"
                value={userInput}
                isItalicActive={isItalicActive}
                isUnderlineActive={isUnderlineActive}
                isBoldActive={isBoldActive}
                rows="30"
                cols="68"
                onChange={this.changeInput}
              />
            </TextAreaContainer>
          </MainInputContainer>
        </MainContainer>
      </BgContainer>
    )
  }
}

export default Home
