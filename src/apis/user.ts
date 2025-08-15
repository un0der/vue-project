import instance from "@/utils/https";
interface LoginParams {
  account: any;
  password: any;
}
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