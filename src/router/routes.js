
const routes = [
  {
    path: '/',
    redirect: '/experience',
    component: () => import('layouts/ResumeLayout.vue'),
    children: [
      { path: 'education', component: () => import('pages/Education.vue') },
      { path: 'experience', component: () => import('pages/Experience.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
