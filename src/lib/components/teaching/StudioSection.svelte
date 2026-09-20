<script lang="ts">
    import type { SiteImage } from '$lib/types';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import ResponsiveImage from '$lib/components/media/ResponsiveImage.svelte';

    interface Props {
        image: SiteImage | null;
    }

    let { image }: Props = $props();
</script>

<section class="studio section-soft">
    <div class="page-container studio-grid">
        {#if image}
            <div class="studio-image">
                <ResponsiveImage
                        {image}
                        sizes="(max-width: 800px) 100vw, 50vw"
                        fallback="/fallbacks/landscape.webp"
                />
            </div>
        {/if}

        <div class="studio-copy">
            <Eyebrow>Das Studio</Eyebrow>

            <h2>
                Ein Ort für
                <span>Musik & Konzentration.</span>
            </h2>

            <p>
                Der Unterricht findet in meinem gemütlichen
                Unterrichtsstudio in Wien Hietzing statt.
            </p>

            <p>
                Das Studio ist mit einem Yamaha-Flügel GB1
                aus dem Jahr 2017 ausgestattet und bietet einen
                ruhigen Rahmen, um sich ganz auf die Musik
                konzentrieren zu können.
            </p>

            <div class="studio-detail">
                <span>Instrument</span>

                <div>
                    <strong>Yamaha GB1</strong>
                    <p>Flügel · Baujahr 2017</p>
                </div>
            </div>

            <div class="studio-detail">
                <span>Standort</span>

                <div>
                    <strong>Wien Hietzing</strong>
                    <p>13. Bezirk</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .studio {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .studio-grid {
        display: grid;
        grid-template-columns:
			minmax(0, 1fr)
			minmax(0, 0.9fr);

        align-items: center;
        gap: clamp(4rem, 8vw, 9rem);
    }

    .studio-image :global(img) {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
    }

    .studio-copy h2 {
        margin-bottom: 2.5rem;

        color: var(--color-sage-700);
    }

    .studio-copy h2 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
    }

    .studio-copy > p {
        color: var(--color-text-soft);
        line-height: 1.8;
    }

    .studio-detail {
        display: grid;
        grid-template-columns: 100px 1fr;

        gap: 1.5rem;
        padding: 1.5rem 0;

        border-top: 1px solid var(--border-soft);
    }

    .studio-detail:first-of-type {
        margin-top: 2.5rem;
    }

    .studio-detail > span {
        color: var(--color-sage-300);

        font-size: 0.68rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .studio-detail strong {
        font-family: var(--font-serif);
        font-size: 1.15rem;
        font-weight: 400;
    }

    .studio-detail p {
        margin: 0.25rem 0 0;

        color: var(--color-text-soft);
        font-size: 0.85rem;
    }

    @media (max-width: 800px) {
        .studio-grid {
            grid-template-columns: 1fr;
        }
    }
</style>