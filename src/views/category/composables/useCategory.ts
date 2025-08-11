import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  const route = useRoute();
  const categorydata = ref({});
  const category = async (id = route.params.id) => {
    const res = await getCategoryAPI(id) as any;
    categorydata.value = res.result;
  };
  onMounted(() => {
    category();
  });
  onBeforeRouteUpdate((to) => {
    category(to.params.id);
  });
  return { categorydata }
}