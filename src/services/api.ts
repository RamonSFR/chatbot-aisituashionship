const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions'
const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const systemMessage = {
  role: 'system',
  content: 'You are a helpful, concise assistant.',
}

export async function sendMessageToDeepSeek(messages: ChatMessage[]) {
  if (!DEEPSEEK_API_KEY) {
    throw new Error('Missing VITE_DEEPSEEK_API_KEY in your .env file.')
  }

  const response = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [systemMessage, ...messages],
      stream: false,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'Failed to contact DeepSeek API.')
  }

  const data = await response.json()
  return data?.choices?.[0]?.message?.content?.trim() ?? ''
}