<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Teaching from '$lib/components/Teaching.svelte';
    import GallerySection from '$lib/components/GallerySection.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Nanami Shiraki | Pianistin & Klavierpädagogin</title>
    <meta name="description" content="Nanami Shiraki – Pianistin und Klavierpädagogin in Wien." />
</svelte:head>

<Hero video={data.heroVideo} />
<About />
<Teaching />

{#if data.galleryImages.length}
    <GallerySection
            images={data.galleryImages}
            eyebrow="Impressionen"
            title="Momente, die"
            italicTitle="in Erinnerung bleiben."
            description="Einblicke in vergangene Konzerte, Auftritte und gemeinsame musikalische Momente."
    />
{/if}