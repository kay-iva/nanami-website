<script lang="ts">
    import About from '$lib/components/About.svelte';
    import GallerySection from '$lib/components/GallerySection.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Teaching from '$lib/components/Teaching.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Nanami Shiraki | Pianistin & Klavierpädagogin</title>

    <meta
            name="description"
            content="Nanami Shiraki – Pianistin und Klavierpädagogin in Wien. Klavierunterricht, Musikgruppen und musikalische Projekte."
    />
</svelte:head>

<main>
    <Hero video={data.heroVideo} />

    <About image={data.aboutImage} />

    <Teaching image={data.teachingImage} />

    {#if data.galleryImages.length}
        <GallerySection
                images={data.galleryImages}
                eyebrow="Impressionen"
                title="Momente, die"
                italicTitle="in Erinnerung bleiben."
                description="Einblicke in Unterricht, Konzerte, Auftritte und gemeinsame musikalische Momente."
        />
    {/if}
</main>