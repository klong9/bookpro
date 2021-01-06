import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import cart from '@/components/cart'
import payment from '@/components/payment'
import products from '@/components/products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cart',
      component: cart
    },{
      path: '/payment',
      name: 'payment',
      component: payment
    },{
      path: '/products',
      name: 'products',
      component: products
    },
  ]
})
