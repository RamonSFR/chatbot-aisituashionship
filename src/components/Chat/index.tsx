import * as S from './styles'

const Chat = () => (
  <S.Container>
    <h1>CHAT</h1>
    <S.MessageContainer>
      <S.UserMessage>
        <p>Hi, How can we help you?</p>
      </S.UserMessage>
      <S.BotMessage>
        <p>Hello! I am a virtual assistant. How can I help you today?</p>
      </S.BotMessage>
    </S.MessageContainer>
    <S.InputContainer>
      <S.Input type="text" placeholder="Type your message..." />
      <S.SendButton>Send</S.SendButton>
    </S.InputContainer>
  </S.Container>
)

export default Chat
