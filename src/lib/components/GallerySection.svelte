<script lang="ts">
    import PhotoGallery from '$lib/components/PhotoGallery.svelte';
    import type { GalleryImage } from '$lib/types';

    interface Props {
        images: GalleryImage[];
        eyebrow?: string;
        title?: string;
        italicTitle?: string;
        description?: string;
        emptyText?: string;
    }

    let {
        images,
        eyebrow = 'Impressionen',
        title = 'Momente, die',
        italicTitle = 'in Erinnerung bleiben.',
        description = 'Einblicke in besondere musikalische Momente.',
        emptyText = 'Weitere Impressionen folgen bald.'
    }: Props = $props();
</script>

<section class="gallery-section">
    <div class="page-container">
        <div class="gallery-heading">
            <p class="eyebrow">{eyebrow}</p>

            <h2>
                {title}
                <span>{italicTitle}</span>
            </h2>

            <p class="description">{description}</p>
        </div>

        {#if images.length > 0}
            <PhotoGallery {images} />
        {:else}
            <p class="empty">{emptyText}</p>
        {/if}
    </div>
</section>

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
        font-family: var(--font-sans);
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    h2 {
        margin: 0;
        font-family: var(--font-serif);
        font-size: clamp(2.8rem, 5vw, 5rem);
        font-weight: 400;
        line-height: 0.98;
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
        font-family: var(--font-sans);
        font-size: 1rem;
        line-height: 1.8;
        color: var(--color-text-soft);
    }

    .empty {
        margin: 0;
        padding: 3rem 0;
        font-family: var(--font-sans);
        font-size: 1rem;
        line-height: 1.8;
        color: var(--color-text-soft);
    }

    @media (max-width: 768px) {
        .gallery-section {
            padding: 5.5rem 0;
        }

        .gallery-heading {
            margin-bottom: 3rem;
        }

        h2 {
            font-size: clamp(2.7rem, 12vw, 4rem);
        }
    }
</style>