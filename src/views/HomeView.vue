<script setup>
import { servicePhotoGroups } from '../assets/servicePhotos'

const heroImage = servicePhotoGroups['isitma-sogutma'].at(-1).src
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> İKLİMLENDİRMEDE YENİ BİR DENGE</p>
        <h1>İyi hissettiren<br />mekânlar <span>tasarlıyoruz.</span></h1>
        <p class="hero-description">
          Her mevsim, her mekânda. Konforu ve verimliliği bir araya getiren
          iklimlendirme çözümleriyle yaşam alanlarınızı dönüştürüyoruz.
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-dark" to="/iletisim">
            Projenizi konuşalım
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
          </RouterLink>
          <RouterLink class="text-link" to="/projeler">Projeleri keşfedin <span>↓</span></RouterLink>
        </div>
        <div class="hero-footnote">
          <span class="footnote-line"></span>
          <span>DOĞRU İKLİM. DOĞRU HİS.</span>
        </div>
      </div>

      <div class="hero-visual">
        <img
          :src="heroImage"
          alt="Bir mekâna monte edilmiş tavan tipi iklimlendirme cihazı"
        />
        <div class="image-wash"></div>
        <div class="hero-image-label">
          <span class="label-dot"></span>
          <span>YAŞAM ALANLARINDA<br /><strong>DENGELİ KONFOR</strong></span>
        </div>
        <div class="hero-index"><span>01</span> / 03</div>
      </div>
      <div class="hero-side-note">KONFOR, DOĞRU DETAYLARDA SAKLI.</div>
    </section>

    <section class="intro-strip" aria-label="Zon İklim yaklaşımı">
      <p>Her mekânın kendine özgü bir <span>iklimi</span> vardır.</p>
      <span class="intro-mark" aria-hidden="true">Z.</span>
    </section>

    <section class="home-overview section-pad">
      <div class="section-heading">
        <div>
          <p class="eyebrow"><span></span> ZON İKLİM</p>
          <h2>İhtiyacınıza göre<br /><span>doğru iklimlendirme.</span></h2>
        </div>
        <p class="section-aside">
          Isıtma ve soğutmadan havalandırmaya, keşiften uygulamaya kadar
          projenizin her aşamasında yanınızdayız.
        </p>
      </div>
      <div class="home-links">
        <RouterLink to="/hizmetler">
          <span>Hizmetlerimizi inceleyin</span>
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
        </RouterLink>
        <RouterLink to="/hakkimizda">
          <span>Zon İklim'i tanıyın</span>
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
