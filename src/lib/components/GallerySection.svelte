<script lang="ts">
    import PhotoGallery from '$lib/components/PhotoGallery.svelte';
    import type { GalleryImage } from '$lib/types';

    interface Props {
        images: GalleryImage[];
        eyebrow?: string;
        title?: string;
        italicTitle?: string;
        description?: string;
    }

    let {
        images,
        eyebrow = 'Impressionen',
        title = 'Momente, die',
        italicTitle = 'in Erinnerung bleiben.',
        description = 'Einblicke in besondere musikalische Momente.'
    }: Props = $props();
</script>

{#if images.length}
    <section class="gallery-section">
        <div class="page-container">
            <div class="gallery-heading">
                <p class="eyebrow">{eyebrow}</p>
                <h2>{title}<span>{italicTitle}</span></h2>
                <p class="description">{description}</p>
            </div>
            <PhotoGallery {images} />
        </div>
    </section>
{/if}

<style>
    .gallery-section {
        padding: 9rem 0;
        background: var(--color-sage-100);
    }

    .gallery-heading {
        max-width: 760px;
        margin-bottom: 4.5rem;
    }

    .eyebrow {
        margin: 0 0 1.4rem;
        font: 600 0.72rem var(--font-sans);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    h2 {
        margin: 0;
        font: 400 clamp(2.8rem, 5vw, 5rem)/0.98 var(--font-serif);
        color: var(--color-text);
    }

    h2 span {
        display: block;
        font-style: italic;
        color: var(--color-sage-700);
    }

    .description {
        max-width: 520px;
        margin: 2rem 0 0;
        font: 1rem/1.8 var(--font-sans);
        color: var(--color-text-soft);
    }

    @media (max-width: 768px) {
        .gallery-section { padding: 5.5rem 0; }
        .gallery-heading { margin-bottom: 3rem; }
        h2 { font-size: clamp(2.7rem, 12vw, 4rem); }
    }
</style>