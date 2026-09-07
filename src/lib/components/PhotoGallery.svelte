<script lang="ts">
    import type { GalleryImage } from '$lib/types';

    let { images }: { images: GalleryImage[] } = $props();
    let selected = $state<GalleryImage | null>(null);
</script>

<div class="gallery">
    {#each images as image}
        <button type="button" onclick={() => (selected = image)}>
            <img src={image.src} alt={image.alt} loading="lazy" />
        </button>
    {/each}
</div>

{#if selected}
    <div class="lightbox" role="presentation" onclick={() => (selected = null)}>
        <button class="close" type="button" aria-label="Bild schließen" onclick={() => (selected = null)}>×</button>
        <img src={selected.src} alt={selected.alt} onclick={(e) => e.stopPropagation()} />
    </div>
{/if}

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 1rem;
    }

    .gallery button {
        grid-column: span 4;
        overflow: hidden;
        background: transparent;
    }

    .gallery button:nth-child(5n + 1) { grid-column: span 5; }
    .gallery button:nth-child(5n + 2),
    .gallery button:nth-child(5n + 4) { grid-column: span 7; }
    .gallery button:nth-child(5n + 5) { grid-column: span 5; }

    .gallery img {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        transition: transform 700ms ease, opacity var(--transition-fast);
    }

    .gallery button:hover img {
        transform: scale(1.035);
        opacity: 0.92;
    }

    .lightbox {
        position: fixed;
        inset: 0;
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background: rgba(24, 29, 26, 0.92);
        cursor: zoom-out;
    }

    .lightbox img {
        max-width: min(1100px, 95vw);
        max-height: 88vh;
        object-fit: contain;
        cursor: default;
    }

    .close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--color-cream);
        color: var(--color-sage-700);
        font-size: 1.5rem;
    }

    @media (max-width: 800px) {
        .gallery { grid-template-columns: repeat(2, 1fr); }
        .gallery button,
        .gallery button:nth-child(n) { grid-column: span 1; }
        .gallery button:nth-child(3n + 1) { grid-column: span 2; }
    }
</style>