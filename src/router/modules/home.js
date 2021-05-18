//引入组件
import home from '@/views/home/home.vue'
import hhome from '@/views/hhome/hhome.vue'
import recommend from '@/views/hhome/recommend.vue'
import follow from '@/views/hhome/follow.vue'
export default [
  {
    path: '/home',
    component: home
  },
  {
    path: '/hhome',
    component: hhome,
    redirect: '/hhome/follow',
    children: [
      {
        path: 'recommend',
        component: recommend
      },
      {
        path: 'follow',
        component: follow
      }
    ]
  },
  {
    path: '/hhome/**',
    component: hhome
  },
]