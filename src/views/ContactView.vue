<script setup>
const address = 'Hürriyet Mahallesi, Flamingo Sokak No: 2, Dükkan: 2, Esenyurt, İstanbul'
const mapQuery = encodeURIComponent(address)

const phones = [
  { display: '0533 247 34 33', link: '+905332473433', whatsapp: '905332473433' },
  { display: '0542 218 89 76', link: '+905422188976', whatsapp: '905422188976' },
]

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&output=embed`
</script>

<template>
  <section class="contact-page page-content">
    <header class="contact-heading">
      <p class="eyebrow"><span></span> BİRLİKTE BAŞLAYALIM</p>
      <h1 class="page-title">Size nasıl yardımcı<br /><span>olabiliriz?</span></h1>
      <p>Projenizi konuşmak veya bizi ziyaret etmek için bize ulaşın.</p>
    </header>

    <div class="contact-grid">
      <div class="contact-details">
        <section class="contact-card contact-phones" aria-labelledby="contact-phone-heading">
          <p class="contact-card-label" id="contact-phone-heading">TELEFON</p>
          <div v-for="phone in phones" :key="phone.link" class="contact-phone">
            <a class="contact-number" :href="`tel:${phone.link}`">{{ phone.display }}</a>
            <a
              class="contact-action contact-whatsapp"
              :href="`https://wa.me/${phone.whatsapp}`"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${phone.display} numarasına WhatsApp'tan yazın`"
            >
              WhatsApp'tan yazın <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section class="contact-card contact-email" aria-labelledby="contact-email-heading">
          <p class="contact-card-label" id="contact-email-heading">E-POSTA</p>
          <a class="contact-email-link" href="mailto:info@zoniklimlendirme.com">
            info@zoniklimlendirme.com
          </a>
        </section>

        <section class="contact-card contact-address-card" aria-labelledby="contact-address-heading">
          <div class="contact-address-heading">
            <div>
              <p class="contact-card-label" id="contact-address-heading">ADRES</p>
              <address>{{ address }}</address>
            </div>
            <span class="contact-location-mark" aria-hidden="true">⌖</span>
          </div>
          <div class="contact-map-actions">
            <a :href="mapUrl" target="_blank" rel="noopener noreferrer">
              Haritada görüntüle <span aria-hidden="true">↗</span>
            </a>
            <a :href="directionsUrl" target="_blank" rel="noopener noreferrer">
              Yol tarifi al <span aria-hidden="true">↗</span>
            </a>
          </div>
          <iframe
            class="contact-map"
            :src="mapEmbedUrl"
            title="Zon İklim adres haritası"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  </section>
</template>
