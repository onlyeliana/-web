//引入组件
import userSpace from '@/views/user-space/user-space.vue'
import login from '@/views/user-space/login.vue'
import register from '@/views/user-space/register.vue'
import star from '@/views/user-space/star.vue'
import setting from '@/views/user-space/userSetting.vue'
export default [
  {
    path: '/userSpace',
    component: userSpace
  },
  {
    path: '/userSetting',
    component: setting
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/star',
    component: star
  }

]