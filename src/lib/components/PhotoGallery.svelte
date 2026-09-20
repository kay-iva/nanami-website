<script lang="ts">
    import { tick } from 'svelte';
    import ResponsiveImage from '$lib/components/media/ResponsiveImage.svelte';
    import type { GalleryImage } from '$lib/types';

    interface Props {
        images: GalleryImage[];
    }

    let { images }: Props = $props();

    let selected = $state<GalleryImage | null>(null);
    let closeButton = $state<HTMLButtonElement | null>(null);

    async function open(image: GalleryImage) {
        selected = image;
        await tick();
        closeButton?.focus();
    }

    function close() {
        selected = null;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && selected) {
            close();
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="gallery">
    {#each images as image}
        <button
                type="button"
                class="gallery-item"
                aria-label={`Bild vergrößern: ${image.alt}`}
                onclick={() => open(image)}
        >
            <ResponsiveImage
                    {image}
                    sizes="(max-width: 800px) 50vw, 33vw"
            />
        </button>
    {/each}
</div>

{#if selected}
    <div
            class="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Vergrößerte Bildansicht"
    >
        <button
                type="button"
                class="backdrop"
                aria-label="Bildansicht schließen"
                onclick={close}
        ></button>

        <div class="lightbox-content">
            <button
                    bind:this={closeButton}
                    class="close"
                    type="button"
                    aria-label="Bildansicht schließen"
                    onclick={close}
            >
                ×
            </button>

            <img
                    src={selected.full}
                    alt={selected.alt}
                    width={selected.width}
                    height={selected.height}
                    decoding="async"
            />
        </div>
    </div>
{/if}

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 1rem;
    }

    .gallery-item {
        grid-column: span 4;

        overflow: hidden;

        padding: 0;

        background: transparent;

        cursor: zoom-in;
    }

    .gallery-item:nth-child(5n + 1) {
        grid-column: span 5;
    }

    .gallery-item:nth-child(5n + 2),
    .gallery-item:nth-child(5n + 4) {
        grid-column: span 7;
    }

    .gallery-item:nth-child(5n + 5) {
        grid-column: span 5;
    }

    .gallery-item :global(img) {
        width: 100%;
        aspect-ratio: 4 / 3;

        object-fit: cover;

        transition:
                transform 700ms ease,
                opacity var(--transition-fast);
    }

    .gallery-item:hover :global(img) {
        transform: scale(1.035);
        opacity: 0.92;
    }

    .gallery-item:focus-visible {
        outline: 2px solid var(--color-sage-700);
        outline-offset: 4px;
    }

    .lightbox {
        position: fixed;
        inset: 0;
        z-index: 200;

        display: grid;
        place-items: center;

        padding: 2rem;
    }

    .backdrop {
        position: absolute;
        inset: 0;

        width: 100%;
        height: 100%;

        background: rgba(24, 29, 26, 0.92);

        cursor: zoom-out;
    }

    .lightbox-content {
        position: relative;
        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;

        max-width: min(1200px, 95vw);
        max-height: 90vh;
    }

    .lightbox-content img {
        display: block;

        width: auto;
        max-width: 100%;
        height: auto;
        max-height: 88vh;

        object-fit: contain;
    }

    .close {
        position: fixed;
        top: 1.5rem;
        right: 1.5rem;
        z-index: 2;

        display: grid;
        place-items: center;

        width: 48px;
        height: 48px;

        padding: 0;

        border-radius: 50%;

        background: var(--color-cream);
        color: var(--color-sage-700);

        font-size: 1.5rem;
        line-height: 1;

        transition:
                transform var(--transition-fast),
                background var(--transition-fast);
    }

    .close:hover {
        transform: scale(1.05);
    }

    .close:focus-visible {
        outline: 2px solid var(--color-cream);
        outline-offset: 4px;
    }

    @media (max-width: 800px) {
        .gallery {
            grid-template-columns: repeat(2, 1fr);
        }

        .gallery-item,
        .gallery-item:nth-child(n) {
            grid-column: span 1;
        }

        .gallery-item:nth-child(3n + 1) {
            grid-column: span 2;
        }

        .lightbox {
            padding: 1rem;
        }

        .close {
            top: 1rem;
            right: 1rem;
        }
    }

    @media (max-width: 480px) {
        .gallery {
            gap: 0.65rem;
        }
    }
</style>