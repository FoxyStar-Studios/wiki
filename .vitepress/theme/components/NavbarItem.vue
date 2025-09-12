<script setup lang="ts">
const props = defineProps<{
    icon: string,
    imageSrc: string,
    text: string,
    link: string,
}>();
</script>


<template>
    <a :href="link" class="navbar-item" rel="noopener noreferrer">
        <span v-if="props.icon || props.imageSrc" class="icon">
            <span v-if="props.icon" v-html="icon"></span>
            <img v-else-if="props.imageSrc" :src="props.imageSrc" alt="{{ props.text }}" />
        </span>
        <span class="text">{{ props.text }}</span>
    </a>
</template>


<style scoped>
.navbar-item {
    display: flex;
    align-items: center;
    padding: 0 12px;
    line-height: 32px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    transition: color 0.25s;
    white-space: nowrap;
    border-radius: 6px;
}

.navbar-item:hover {
    color: var(--vp-c-brand-1);
    background-color: var(--vp-c-default-soft);
}

.icon {
    margin-right: 8px;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon :deep(svg) {
    width: 100%;
    height: 100%;
    stroke: currentColor;
}
.icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
