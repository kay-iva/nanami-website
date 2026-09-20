<script lang="ts">
    import PhotoGallery from '$lib/components/PhotoGallery.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
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
                <Eyebrow>{eyebrow}</Eyebrow>

                <h2>
                    {title}
                    <span>{italicTitle}</span>
                </h2>

                <p class="description">
                    {description}
                </p>
            </div>

            <PhotoGallery {images} />
        </div>
    </section>
{/if}

<style>
    .gallery-section {
        padding-block: clamp(5.5rem, 9vw, 9rem);

        background: var(--color-sage-100);
    }

    .gallery-heading {
        max-width: 760px;

        margin-bottom: clamp(3rem, 5vw, 4.5rem);
    }

    h2 {
        margin: 0;

        color: var(--color-text);
    }

    h2 span {
        display: block;

        color: var(--color-sage-700);
        font-style: italic;
    }

    .description {
        max-width: 520px;

        margin: 2rem 0 0;

        color: var(--color-text-soft);

        font-size: 1rem;
        line-height: 1.8;
    }

    @media (max-width: 768px) {
        .gallery-section {
            padding-block: 5.5rem;
        }

        .gallery-heading {
            margin-bottom: 3rem;
        }
    }
</style>