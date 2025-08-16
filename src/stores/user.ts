import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginAPI } from '@/apis/user';

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<UserInfo>({});
    const getUserInfo = async ({ account, password }: LoginParams) => {
      const res = (await LoginAPI({ account, password })) as any;
      userInfo.value = res.result;
    };
    return { userInfo, getUserInfo };
  },
  {
    persist: true,
  }
);