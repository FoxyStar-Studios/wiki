<script setup>
const props = defineProps({
    images: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <section class="gallery">
        <div v-for="(img, i) in images" :key="i" class="gallery-item">
            <img :src="img.src" :alt="img.alt || 'Screenshot'" loading="lazy" />
            <figcaption v-if="img.caption">{{ img.caption }}</figcaption>
        </div>
    </section>
</template>

<style scoped>
.gallery {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.gallery-item {
    display: flex;
    align-items: stretch;
    max-width: 800px;
}

.gallery-item:nth-child(even) {
    flex-direction: row-reverse;
}

.gallery-item img {
    width: 60%;
    object-fit: cover;
    border-radius: .875rem 0 0 .875rem;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
}

.gallery-item:nth-child(even) img {
    border-radius: 0 .875rem .875rem 0;
}

.gallery-item figcaption {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: .9rem;
    line-height: 1.4;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
}

.gallery-item:nth-child(odd) figcaption {
    border-radius: 0 .875rem .875rem 0;
}

.gallery-item:nth-child(even) figcaption {
    border-radius: .875rem 0 0 .875rem;
}
</style>