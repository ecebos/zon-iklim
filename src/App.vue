<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import logo from './assets/img/zon-iklim-logo.png'

const menuOpen = ref(false)
const servicesMenuOpen = ref(false)
const route = useRoute()
let revealObserver

const revealTargets = [
  '.hero',
  '.intro-strip',
  '.section-heading',
  '.home-links',
  '.about-image',
  '.about-copy',
  '.service-row',
  '.service-detail-top',
  '.service-gallery',
  '.service-detail-content',
  '.service-switcher',
  '.projects-heading',
  '.project-card',
  '.partners-title',
  '.partner-card',
  '.contact-heading',
  '.contact-card',
  '.not-found > *',
].join(', ')

const observeRevealTargets = () => {
  if (!revealObserver) return

  const targets = document.querySelectorAll(`main ${revealTargets}`)
  targets.forEach((target) => {
    target.classList.remove('is-revealed')
    target.classList.add('scroll-reveal')
    revealObserver.observe(target)
  })
}

const closeMenu = () => {
  menuOpen.value = false
  servicesMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  if (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return
  }

  document.documentElement.classList.add('has-scroll-reveal')
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('is-revealed')
        revealObserver.unobserve(entry.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
  )

  observeRevealTargets()
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    observeRevealTargets()
  },
)

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  document.documentElement.classList.remove('has-scroll-reveal')
})
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="wordmark" to="/" aria-label="Zon İklimlendirme ana sayfa" @click="closeMenu">
        <img class="wordmark-logo" :src="logo" alt="Zon İklimlendirme" />
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Menüyü aç veya kapat"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span>
      </button>

      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Ana menü">
        <div
          class="services-nav-item"
          :class="{
            'is-active': route.path.startsWith('/hizmetler'),
            'is-open': servicesMenuOpen,
          }"
        >
          <div class="services-nav-heading">
            <RouterLink to="/hizmetler" @click="closeMenu">Hizmetler</RouterLink>
            <button
              class="services-menu-toggle"
              type="button"
              :aria-expanded="servicesMenuOpen"
              aria-label="Hizmetler menüsünü aç veya kapat"
              @click="servicesMenuOpen = !servicesMenuOpen"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
            </button>
          </div>
          <div class="services-dropdown" :class="{ 'is-open': servicesMenuOpen }">
            <RouterLink to="/hizmetler/isitma-sogutma" @click="closeMenu">Isıtma – soğutma</RouterLink>
            <RouterLink to="/hizmetler/yangin-tesisati" @click="closeMenu">Yangın tesisatı</RouterLink>
            <RouterLink to="/hizmetler/bakim-onarim" @click="closeMenu">Bakım – onarım</RouterLink>
            <RouterLink to="/hizmetler/temiz-su-tesisati" @click="closeMenu">Temiz su tesisatı</RouterLink>
          </div>
        </div>
        <RouterLink to="/projeler" @click="closeMenu">Projeler</RouterLink>
        <RouterLink to="/referanslar" @click="closeMenu">Referanslarımız</RouterLink>
        <RouterLink to="/hakkimizda" @click="closeMenu">Hakkımızda</RouterLink>
        <RouterLink class="nav-contact" to="/iletisim" @click="closeMenu">
          İletişime geçin
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <RouterLink class="wordmark footer-wordmark" to="/" aria-label="Zon İklimlendirme ana sayfa">
        <img class="wordmark-logo" :src="logo" alt="Zon İklimlendirme" />
      </RouterLink>
      <span class="footer-copy">© 2026 ZON İKLİMLENDİRME. TÜM HAKLARI SAKLIDIR.</span>
      <a class="back-top" href="#" @click.prevent="scrollToTop">
        BAŞA DÖN <span>↑</span>
      </a>
    </footer>
  </div>
</template>
