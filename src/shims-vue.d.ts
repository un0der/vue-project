declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  import { DefineStore } from 'pinia'
  const useCategoryStore: DefineStore<'category', any, any, any>
  export default useCategoryStore
}