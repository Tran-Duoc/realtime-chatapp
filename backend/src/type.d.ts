interface User {
  name: string
  email: string
  password: string
  avatar?: string
  accountId?: string
  provider?: string
}

interface Error {
  name: string
  message: string
  stack?: string
}
