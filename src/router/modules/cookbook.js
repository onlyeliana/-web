//引入组件
import cookbook from '@/views/cookbook/cookbook.vue'




export default [
  {
    path: '/cookbook',
    component: cookbook
  },
  {
    name: 'cookbook',
    path: '/cookbook/:foodid',
    component: cookbook
  }
]