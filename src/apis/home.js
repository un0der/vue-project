import instance from "@/utils/https";
export function getBannerAPI() {
  return instance.get('home/banner')
}