import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import * as S from './styles'
import { sendMessageToDeepSeek } from '../../services/api'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

function Chat() {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! I am a virtual assistant. How can I help you today?'
    }
  ])
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async () => {
    const trimmedMessage = inputValue.trim()

    if (!trimmedMessage || isLoading) {
      return
    }

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: trimmedMessage }
    ]

    setMessages(nextMessages)
    setInputValue('')
    setError('')
    setIsLoading(true)

    try {
      const assistantReply = await sendMessageToDeepSeek(nextMessages)

      setMessages([
        ...nextMessages,
        {
          role: 'assistant',
          content: assistantReply || 'I could not generate a response just now.'
        }
      ])
    } catch (requestError) {
      const message =
        requestError instanceof Error ? requestError.message : 'Unknown error'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <S.Container>
      <S.Title>CHAT</S.Title>
      <S.MessageContainer>
        {messages.map((message, index) =>
          message.role === 'user' ? (
            <S.UserMessage key={`${message.role}-${index}`}>
              <p>{message.content}</p>
            </S.UserMessage>
          ) : (
            <S.BotMessage key={`${message.role}-${index}`}>
              <p>{message.content}</p>
            </S.BotMessage>
          )
        )}
        {isLoading && (
          <S.BotMessage>
            <p>Thinking...</p>
          </S.BotMessage>
        )}
        <div ref={messagesEndRef} />
      </S.MessageContainer>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.InputContainer>
        <S.Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <S.SendButton
          type="button"
          onClick={handleSendMessage}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </S.SendButton>
      </S.InputContainer>
    </S.Container>
  )
}

export default Chat
