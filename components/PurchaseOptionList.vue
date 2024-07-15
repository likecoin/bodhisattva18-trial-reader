<template>
  <ul class="flex flex-col gap-4">
    <li v-for="edition in editions" :key="edition.title">
      <UButton color="black" size="xl" :block="true" :to="edition.purchaseURL">
        {{ edition.title }}
      </UButton>
    </li>
  </ul>
</template>

<script setup lang="ts">
const route = useRoute();

function getPurchaseURL(priceIndex: number) {
  const qsPayload = new URLSearchParams();
  if (route.query.from && !Array.isArray(route.query.from)) qsPayload.append('from', route.query.from);
  if (priceIndex) qsPayload.append("price_index", `${priceIndex}`);
  return `https://api.rinkeby.like.co/likernft/book/purchase/likenft10e4gsezx2xfujwkl89e0vv07j8x3ha4hreulc77p4wm4manag4rqk6zeq8/new?${qsPayload.toString()}`;
}

const editions = computed(() => (
  [
    'US$ 30 購買限量插畫印刷珍藏版',
    'US$ 16 購買普通版'
  ].map((title, index) => ({
    title,
    purchaseURL: getPurchaseURL(index),
  }))
));
</script>
