import instance from "@/utils/https";
export function LoginAPI({ account, password }: LoginParams) {
  return instance(
    {
      url: '/login',
      method: 'POST',
      data: {
        account,
        password
      }
    }
  )
}