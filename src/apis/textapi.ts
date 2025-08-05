import instance from "@/utils/https";

export function getcategory() {
  return instance.get('home/category/head')
}