import instance from "@/utils/https";
export function getCategoryAPI() {
  return instance.get('home/category/head')
}