<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { servicePhotoGroups } from '../assets/servicePhotos'

const route = useRoute()
const galleryTrack = ref(null)

const featureFirst = (photos, index) => [
  photos[index],
  ...photos.filter((_, photoIndex) => photoIndex !== index),
]

const services = [
  {
    slug: 'isitma-sogutma',
    number: '01',
    title: 'Isıtma – soğutma',
    shortTitle: 'Isıtma – soğutma',
    image: servicePhotoGroups['isitma-sogutma'][4].src,
    images: featureFirst(servicePhotoGroups['isitma-sogutma'], 4),
    description:
      'Fan coil ve ısı pompası tesisatından pompa ve genleşme tanklarına kadar ısıtma-soğutma sistemleri için kurulum, arıza ve parça desteği.',
    detail:
      'Isıtma ve soğutma tesisatlarında kurulum ve cihaz montajının yanı sıra arıza, parça değişimi ve tedarik ihtiyaçlarına destek veriyoruz. Servis kapsamı, mevcut sistem ve ihtiyaç doğrultusunda belirlenir.',
    features: [
      'Fan coil tesisatı ve cihaz montajı',
      'Fan coil cihaz arızası ve yedek parça',
      'Isı pompası tesisatı ve cihaz montajı',
      'Isı pompası arızası ve yedek parça',
      'Su sirkülasyon pompaları: değişim, arıza ve tedarik',
      'Genleşme tankları: değişim ve tedarik',
    ],
  },
  {
    slug: 'yangin-tesisati',
    number: '02',
    title: 'Yangın tesisatı',
    shortTitle: 'Yangın tesisatı',
    image: servicePhotoGroups['yangin-tesisati'][1].src,
    images: featureFirst(servicePhotoGroups['yangin-tesisati'], 1),
    description:
      'Binaların yangın güvenliği ihtiyaçlarına yönelik yangın tesisatı ve ilgili sistemlerin kurulumu.',
    detail:
      'Yangın tesisatı kapsamında sprinkler, yangın dolabı ve pompa grupları ile hidrant, basınçlandırma ve itfaiye bağlantısı uygulamalarını proje ihtiyaçlarına göre ele alıyoruz.',
    features: [
      'Sprinkler sistemleri',
      'Yangın dolabı sistemleri',
      'Yangın pompa grupları',
      'Hidrant tesisatı',
      'Basınçlandırma sistemleri',
      'İtfaiye bağlantısı',
    ],
  },
  {
    slug: 'bakim-onarim',
    number: '03',
    title: 'Bakım – onarım',
    shortTitle: 'Bakım – onarım',
    image: servicePhotoGroups['bakim-onarim'][1].src,
    images: featureFirst(servicePhotoGroups['bakim-onarim'], 1),
    description:
      'Isıtma, soğutma ve havalandırma cihazları için arıza tespiti, bakım ve onarım hizmetleri.',
    detail:
      'Endüstriyel tip cihazlardan fan coil ve ısı pompalarına, hijyenik klima sistemlerine kadar farklı ekipmanlarda arıza, bakım ve onarım ihtiyaçlarını değerlendiriyoruz.',
    features: [
      'Endüstriyel tip ısıtma cihazları: arıza, bakım ve onarım',
      'Endüstriyel tip soğutma ve havalandırma cihazları: arıza, bakım ve onarım',
      'Fan coil cihazları: arıza, bakım ve onarım',
      'Isı pompası cihazları: arıza, bakım ve onarım',
      'Hijyenik klima sistemleri: arıza, bakım ve onarım',
    ],
  },
  {
    slug: 'temiz-su-tesisati',
    number: '04',
    title: 'Temiz su tesisatı',
    shortTitle: 'Temiz su tesisatı',
    image: servicePhotoGroups['temiz-su-tesisati'][0].src,
    images: featureFirst(servicePhotoGroups['temiz-su-tesisati'], 0),
    description:
      'Hidrofor, su deposu ve sirkülasyon pompalarında kurulum, değişim, arıza ve tedarik desteği.',
    detail:
      'Temiz su tesisatında hidrofor sistemleri, su depoları ve sirkülasyon pompaları için kurulum, arıza ve onarım hizmetlerinin yanı sıra gerekli ürünlerin tedariğini sağlıyoruz.',
    features: [
      'Hidrofor sistemleri: kurulum, arıza ve onarım',
      'Su depoları: kurulum, değişim ve tedarik',
      'Sirkülasyon pompaları: değişim, arıza ve tedarik',
    ],
  },
]

const selectedService = computed(() =>
  services.find((service) => service.slug === route.params.serviceSlug),
)

const scrollGallery = (direction) => {
  const track = galleryTrack.value
  if (!track) return

  track.scrollBy({
    left: direction * track.clientWidth * 0.8,
    behavior: 'smooth',
  })
}

watch(
  () => selectedService.value?.slug,
  async () => {
    await nextTick()
    galleryTrack.value?.scrollTo({ left: 0 })
  },
)
</script>

<template>
  <section v-if="selectedService" class="service-detail page-content">
    <div class="service-detail-top">
      <div class="service-detail-heading">
        <nav class="breadcrumbs" aria-label="Sayfa yolu">
          <RouterLink to="/">Ana sayfa</RouterLink>
          <span aria-hidden="true">/</span>
          <RouterLink to="/hizmetler">Hizmetler</RouterLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{{ selectedService.shortTitle }}</span>
        </nav>
        <p class="eyebrow"><span></span> {{ selectedService.number }} / HİZMETLERİMİZ</p>
        <h1 class="page-title">{{ selectedService.title }}<br /><span>mekânınıza göre.</span></h1>
        <p class="service-detail-lead">{{ selectedService.description }}</p>
        <RouterLink class="button button-dark" to="/iletisim">
          Projenizi konuşalım
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
        </RouterLink>
      </div>

      <figure class="service-feature-photo">
        <img
          :src="selectedService.images[0].src"
          :alt="`${selectedService.title} uygulamasından öne çıkan fotoğraf`"
        />
        <figcaption>
          <span>{{ selectedService.title }}</span>
          <span>01 / {{ String(selectedService.images.length).padStart(2, '0') }}</span>
        </figcaption>
      </figure>
    </div>

    <section class="service-gallery" :aria-label="`${selectedService.title} fotoğraf galerisi`">
      <div class="service-gallery-heading">
        <p class="eyebrow"><span></span> SAHADAN GÖRÜNTÜLER</p>
        <div class="service-gallery-controls">
          <button type="button" aria-label="Önceki fotoğraflar" @click="scrollGallery(-1)">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13 8H3m5 5L3 8l5-5" /></svg>
          </button>
          <button type="button" aria-label="Sonraki fotoğraflar" @click="scrollGallery(1)">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
          </button>
        </div>
      </div>
      <div ref="galleryTrack" class="service-gallery-track">
        <figure
          v-for="(photo, index) in selectedService.images.slice(1)"
          :key="photo.filename"
          class="service-gallery-item"
        >
          <img
            :src="photo.src"
            :alt="`${selectedService.title} uygulamasından ${index + 2}. fotoğraf`"
            loading="lazy"
          />
          <figcaption>
            <span>{{ selectedService.title }}</span>
            <span>{{ String(index + 2).padStart(2, '0') }}</span>
          </figcaption>
        </figure>
      </div>
    </section>

    <div class="service-detail-content">
      <div class="service-detail-copy">
        <p class="eyebrow"><span></span> YAKLAŞIMIMIZ</p>
        <h2>Doğru çözüm,<br /><span>doğru planlamayla başlar.</span></h2>
        <p>{{ selectedService.detail }}</p>
      </div>
      <ul class="service-feature-list" aria-label="Hizmet kapsamı">
        <li v-for="(feature, index) in selectedService.features" :key="feature">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ feature }}</strong>
        </li>
      </ul>
    </div>

    <nav class="service-switcher" aria-label="Diğer hizmetler">
      <p class="eyebrow"><span></span> DİĞER HİZMETLER</p>
      <div>
        <RouterLink
          v-for="service in services"
          :key="service.slug"
          :to="`/hizmetler/${service.slug}`"
          :aria-current="service.slug === selectedService.slug ? 'page' : undefined"
        >
          {{ service.shortTitle }} <span aria-hidden="true">↗</span>
        </RouterLink>
      </div>
    </nav>
  </section>

  <section v-else class="services section-pad page-content">
    <div class="section-heading">
      <div>
        <p class="eyebrow"><span></span> NE YAPIYORUZ?</p>
        <h1 class="page-title">Konforun her<br /><span>adımında yanınızdayız.</span></h1>
      </div>
      <p class="section-aside">
        İhtiyacınızı anlıyor, mekânınıza ve kullanım alışkanlıklarınıza göre
        en doğru sistemi birlikte belirliyoruz.
      </p>
    </div>

    <div class="service-list">
      <RouterLink
        v-for="service in services"
        :key="service.slug"
        class="service-row"
        :to="`/hizmetler/${service.slug}`"
      >
        <img class="service-row-image" :src="service.image" alt="" loading="lazy" />
        <span class="service-number">{{ service.number }}</span>
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
        <span class="service-row-arrow" aria-hidden="true">
          <svg viewBox="0 0 16 16"><path d="M3 8h10M8 3l5 5-5 5" /></svg>
        </span>
      </RouterLink>
    </div>
    <RouterLink class="button button-dark page-cta" to="/iletisim">Projenizi konuşalım</RouterLink>
  </section>
</template>
