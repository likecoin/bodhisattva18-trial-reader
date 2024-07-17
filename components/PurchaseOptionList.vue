<template>
  <ul class="flex flex-col gap-4">
    <li v-for="(edition, index) in editions" :key="edition.title">
      <UButton
        color="black"
        size="xl"
        :block="true"
        target="_blank"
        :to="edition.purchaseURL"
        @click="handleClickPurchaseButton(index)"
      >
        {{ edition.title }}
      </UButton>
    </li>
  </ul>
</template>

<script setup lang="ts">
const route = useRoute();

const props = defineProps({
  location: String,
});

function getPurchaseURL(priceIndex: number) {
  const qsPayload = new URLSearchParams();
  if (route.query.from && !Array.isArray(route.query.from)) qsPayload.append('from', route.query.from);
  if (priceIndex) qsPayload.append("price_index", `${priceIndex}`);
  return `https://api.like.co/likernft/book/purchase/likenft16jguhkfa6nnu224fwjke2zv5f99n8wl9m097h46zqxnyu33j7rgs7f0xg3/new?${qsPayload.toString()}`;
}

const editions = computed(() => (
  [
    'US $30 - 限量珍藏版',
    'US $16 - 普通版'
  ].map((title, index) => ({
    title,
    purchaseURL: getPurchaseURL(index),
  }))
));

function handleClickPurchaseButton(index: number) {
  useTrackEvent('purchase', {
    location: props.location,
    price_index: index,
  });
}
</script>
