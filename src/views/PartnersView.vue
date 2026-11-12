<script setup>
import akpazLogo from '../assets/partners/akpaz.png'

const partners = [
  {
    name: 'İstanbul Kültür Üniversitesi',
    wordmark: 'İKÜ',
    className: 'partner-wordmark-iku',
  },
  {
    name: 'Würth Sanayi Ürünleri',
    wordmark: 'WÜRTH',
    className: 'partner-wordmark-wurth',
  },
  {
    name: 'AK-PAZ Catering',
    logo: akpazLogo,
    className: 'partner-wordmark-akpaz',
  },
  {
    name: 'Kültür Kolejleri',
    wordmark: 'KÜLTÜR',
    className: 'partner-wordmark-kultur',
  },
  {
    name: 'Beraber Gıda',
    wordmark: 'BERABER',
    className: 'partner-wordmark-beraber',
  },
]
</script>

<template>
  <section class="partners partners-page section-pad page-content">
    <div class="partners-title">
      <p class="eyebrow"><span></span> REFERANSLARIMIZ</p>
      <h1 class="page-title">Birlikte çalıştığımız<br /><span>kurumlar.</span></h1>
      <p class="partners-intro">
        Farklı ihtiyaçlara sahip kurumlarla, konforlu ve verimli mekânlar için
        birlikte çalışıyoruz.
      </p>
    </div>
    <ul class="partner-list" aria-label="Birlikte çalıştığımız kurumlar">
      <li v-for="(partner, index) in partners" :key="partner.name" class="partner-card">
        <span class="partner-index">{{ String(index + 1).padStart(2, '0') }}</span>
        <div class="partner-brand" :class="partner.className">
          <img v-if="partner.logo" :src="partner.logo" :alt="`${partner.name} logosu`" />
          <span v-else>{{ partner.wordmark }}</span>
        </div>
        <span class="partner-name">{{ partner.name }}</span>
        <span class="partner-mark" aria-hidden="true">↗</span>
      </li>
    </ul>
  </section>
</template>
