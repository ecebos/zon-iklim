<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import logo from './assets/img/Güneş ve Kar Tanesi İklim Logosu.png'

const menuOpen = ref(false)
const servicesMenuOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  menuOpen.value = false
  servicesMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="wordmark" to="/" aria-label="Zon İklim ana sayfa" @click="closeMenu">
        <img class="wordmark-logo" :src="logo" alt="Zon İklim" />
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
      <RouterLink class="wordmark footer-wordmark" to="/" aria-label="Zon İklim ana sayfa">
        <img class="wordmark-logo" :src="logo" alt="Zon İklim" />
      </RouterLink>
      <span class="footer-copy">© 2026 ZON İKLİM. TÜM HAKLARI SAKLIDIR.</span>
      <a class="back-top" href="#" @click.prevent="scrollToTop">
        BAŞA DÖN <span>↑</span>
      </a>
    </footer>
  </div>
</template>
