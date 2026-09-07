<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Teaching from '$lib/components/Teaching.svelte';
    import GallerySection from '$lib/components/GallerySection.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<Hero video={data.heroVideo} />

<About />

<Teaching />

<GallerySection
        images={data.galleryImages}
        eyebrow="Impressionen"
        title="Momente, die"
        italicTitle="in Erinnerung bleiben."
        description="Einblicke in vergangene Konzerte, Auftritte und gemeinsame musikalische Momente."
/>