<script lang="ts">
    type GalleryImage = {
        src: string;
        alt: string;
    };

    let { images }: { images: GalleryImage[] } = $props();

    let selectedImage = $state<GalleryImage | null>(null);

    function openImage(image: GalleryImage) {
        selectedImage = image;
    }

    function closeImage() {
        selectedImage = null;
    }
</script>

<div class="gallery">
    {#each images as image}
        <button
                class="gallery-item"
                type="button"
                onclick={() => openImage(image)}
        >
            <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
            />
        </button>
    {/each}
</div>

{#if selectedImage}
    <div class="lightbox" role="presentation" onclick={closeImage}>
        <button
                class="close"
                type="button"
                aria-label="Bild schließen"
                onclick={closeImage}
        >
            ×
        </button>

        <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                onclick={(event) => event.stopPropagation()}
        />
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

        background: transparent;
    }

    .gallery-item:nth-child(5n + 1) {
        grid-column: span 5;
    }

    .gallery-item:nth-child(5n + 2) {
        grid-column: span 7;
    }

    .gallery-item:nth-child(5n + 4) {
        grid-column: span 7;
    }

    .gallery-item:nth-child(5n + 5) {
        grid-column: span 5;
    }

    .gallery-item img {
        width: 100%;
        aspect-ratio: 4 / 3;

        object-fit: cover;

        transition:
                transform 700ms ease,
                opacity var(--transition-fast);
    }

    .gallery-item:hover img {
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

        display: flex;
        align-items: center;
        justify-content: center;

        width: 48px;
        height: 48px;

        border-radius: 50%;

        background: var(--color-cream);
        color: var(--color-sage-700);

        font-size: 1.5rem;
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
    }
</style>