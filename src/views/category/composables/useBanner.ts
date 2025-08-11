import { ref, onMounted, onUpdated } from "vue";
import { getBannerAPI } from "@/apis/home";
export function useBanner() {
  const bannerlist = ref([]);
  const getbanner = async () => {
    const res = await getBannerAPI({ distributionSite: "2" }) as any;
    bannerlist.value = res.result;
  };
  onMounted(() => {
    getbanner();
  });
  return { bannerlist }
}
