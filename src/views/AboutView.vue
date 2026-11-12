<script setup>
import { servicePhotoGroups } from '../assets/servicePhotos'

const aboutImage = servicePhotoGroups['yangin-tesisati'][1].src
</script>

<template>
  <div class="page-content">
    <section class="about">
      <div class="about-image">
        <img
          :src="aboutImage"
          alt="Yangın tesisatı uygulamasından bir görünüm"
        />
        <span class="about-image-caption">MEKÂNINIZA ÖZEL. İHTİYACINIZA GÖRE.</span>
      </div>
      <div class="about-copy">
        <p class="eyebrow"><span></span> HAKKIMIZDA</p>
        <h1 class="page-title">Teknik uzmanlık,<br /><span>insan odaklı yaklaşım.</span></h1>
        <p class="about-description">
          Zon İklim olarak iklimlendirmeyi yalnızca bir sistem değil, yaşam
          kalitesini belirleyen önemli bir unsur olarak görüyoruz. İhtiyacı
          doğru analiz ediyor, projelendirmeden uygulamaya kadar her aşamada
          özenle çalışıyoruz.
        </p>
        <RouterLink class="text-link" to="/iletisim">Bizi daha yakından tanıyın <span>↗</span></RouterLink>
        <div class="about-signature"><span class="signature-line"></span><span>ZON İKLİM — 01</span></div>
      </div>
    </section>

  </div>
</template>
