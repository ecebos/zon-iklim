<script setup>
import { servicePhotoGroups } from '../assets/servicePhotos'

const projects = [
  {
    number: '01',
    category: 'ISITMA – SOĞUTMA',
    title: 'İklimlendirme uygulamaları',
    image: servicePhotoGroups['isitma-sogutma'][4].src,
    alt: 'Tavan tipi iklimlendirme cihazı uygulaması',
  },
  {
    number: '02',
    category: 'YANGIN TESİSATI',
    title: 'Yangın güvenliği sistemleri',
    image: servicePhotoGroups['yangin-tesisati'][1].src,
    alt: 'Yangın tesisatı ve yangın dolabı uygulaması',
  },
  {
    number: '03',
    category: 'BAKIM – ONARIM',
    title: 'Bakım ve teknik servis',
    image: servicePhotoGroups['bakim-onarim'][1].src,
    alt: 'İklimlendirme ekipmanlarında bakım ve servis çalışması',
  },
  {
    number: '04',
    category: 'TEMİZ SU TESİSATI',
    title: 'Pompa ve tesisat çözümleri',
    image: servicePhotoGroups['temiz-su-tesisati'][0].src,
    alt: 'Temiz su tesisatı ve pompa sistemi uygulaması',
  },
]
</script>

<template>
  <section class="projects section-pad page-content">
    <div class="section-heading projects-heading">
      <div>
        <p class="eyebrow"><span></span> SAHA ÇALIŞMALARIMIZ</p>
        <h1 class="page-title">Uygulamadan<br /><span>gerçek kareler.</span></h1>
      </div>
      <p class="section-aside">
        Isıtma-soğutma, yangın ve temiz su tesisatı ile bakım-onarım
        çalışmalarımızdan seçili görüntüler.
      </p>
    </div>

    <div class="project-grid">
      <article v-for="project in projects" :key="project.number" class="project-card">
        <RouterLink class="project-image" to="/iletisim" :aria-label="`${project.title} hakkında bilgi alın`">
          <img :src="project.image" :alt="project.alt" loading="lazy" />
          <span class="project-open" aria-hidden="true">
            <svg viewBox="0 0 16 16"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
          </span>
        </RouterLink>
        <div class="project-meta"><span>{{ project.category }}</span><span>{{ project.number }}</span></div>
        <h2>{{ project.title }}</h2>
      </article>
    </div>
  </section>
</template>
