import styled from 'styled-components'
import { colors as c } from '../../styles/GlobalStyles'

export const Container = styled.div`
  padding: 32px 0 0 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 80%;
  background-color: rgba(4, 4, 29, 0.35);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.5);
  }
`

export const Title = styled.h1`
  margin-bottom: 16px;
  color: #fff;
  letter-spacing: 0.04em;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 70%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  p {
    white-space: pre-wrap;
    line-height: 1.5;
  }
`

export const UserMessage = styled(Message)`
  background-color: ${c.color2};
  align-self: flex-end;
  color: #03111a;
`

export const BotMessage = styled(Message)`
  background-color: ${c.color3};
  align-self: flex-start;
  color: #fff;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export const SendButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${c.color5};
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${c.color4};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const ErrorMessage = styled.p`
  width: 100%;
  margin: 0 0 8px;
  padding: 0 20px;
  color: #ffb4b4;
  font-size: 0.95rem;
`
