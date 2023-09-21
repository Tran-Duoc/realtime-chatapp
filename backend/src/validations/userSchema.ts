import * as yup from 'yup'

export const userSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not exceed 50 characters.')
    .required('Password is required')
})

export type UserSchemaType = yup.InferType<typeof userSchema>
