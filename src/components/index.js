
import imageView from './imageView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin={
  install(app){
   app.component('imageView',imageView)
   app.component('XtxSku',XtxSku)
  }
}