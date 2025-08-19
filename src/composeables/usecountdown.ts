import dayjs from "dayjs"
import { computed, onUnmounted, ref } from "vue"


export const useCountDown = () => {
  let timer
  const time = ref()
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const strat = (currentTime) => {
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000);
  }
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return { formatTime, strat }
}