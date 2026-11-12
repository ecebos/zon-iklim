import { createRouter, createWebHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import NotFoundView from './views/NotFoundView.vue'
import PartnersView from './views/PartnersView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ServicesView from './views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'İyi hissettiren mekânlar' } },
    { path: '/hizmetler', name: 'services', component: ServicesView, meta: { title: 'Hizmetlerimiz' } },
    { path: '/hizmetler/isitma-sistemleri', redirect: '/hizmetler/isitma-sogutma' },
    { path: '/hizmetler/sogutma-sistemleri', redirect: '/hizmetler/isitma-sogutma' },
    { path: '/hizmetler/havalandirma-sistemleri', redirect: '/hizmetler/bakim-onarim' },
    { path: '/hizmetler/projelendirme', redirect: '/hizmetler' },
    { path: '/hizmetler/bakim-servis', redirect: '/hizmetler/bakim-onarim' },
    {
      path: '/hizmetler/:serviceSlug(isitma-sogutma|yangin-tesisati|bakim-onarim|temiz-su-tesisati)',
      name: 'service-detail',
      component: ServicesView,
      meta: {
        title: (to) =>
          ({
            'isitma-sogutma': 'Isıtma – Soğutma',
            'yangin-tesisati': 'Yangın Tesisatı',
            'bakim-onarim': 'Bakım – Onarım',
            'temiz-su-tesisati': 'Temiz Su Tesisatı',
          })[to.params.serviceSlug] ?? 'Hizmetlerimiz',
      },
    },
    { path: '/projeler', name: 'projects', component: ProjectsView, meta: { title: 'Projelerimiz' } },
    { path: '/referanslar', name: 'partners', component: PartnersView, meta: { title: 'Referanslarımız' } },
    { path: '/hakkimizda', name: 'about', component: AboutView, meta: { title: 'Hakkımızda' } },
    { path: '/iletisim', name: 'contact', component: ContactView, meta: { title: 'İletişim' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, meta: { title: 'Sayfa bulunamadı' } },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'function' ? to.meta.title(to) : to.meta.title
  document.title = `${title} | Zon İklim`
})

export default router
