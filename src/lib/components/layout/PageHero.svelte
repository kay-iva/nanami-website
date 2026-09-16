<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { SiteImage } from '$lib/types';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import ResponsiveImage from '$lib/components/media/ResponsiveImage.svelte';

    interface Props {
        eyebrow: string;
        title: string;
        italicTitle?: string;
        description: string;
        image?: SiteImage | null;
        fallback?: string;
        actions?: Snippet;
    }

    let {
        eyebrow,
        title,
        italicTitle,
        description,
        image,
        fallback = '/fallbacks/portrait.webp',
        actions
    }: Props = $props();
</script>

<section class="page-hero">
    <div class="page-container hero-grid" class:without-image={!image}>
        <div class="copy">
            <Eyebrow>{eyebrow}</Eyebrow>

            <h1>
                {title}

                {#if italicTitle}
                    <span>{italicTitle}</span>
                {/if}
            </h1>

            <p class="lead">{description}</p>

            {#if actions}
                <div class="actions">
                    {@render actions()}
                </div>
            {/if}
        </div>

        {#if image}
            <div class="media">
                <ResponsiveImage
                        {image}
                        sizes="(max-width: 800px) 88vw, 45vw"
                        loading="eager"
                        fetchpriority="high"
                        {fallback}
                />

                <div class="accent" aria-hidden="true"></div>
            </div>
        {/if}
    </div>
</section>

<style>
    .page-hero {
        padding:
                clamp(5rem, 8vw, 8rem)
                0
                clamp(6rem, 10vw, 10rem);

        background: var(--color-cream);
    }

    .hero-grid {
        display: grid;
        grid-template-columns:
			minmax(0, 1.05fr)
			minmax(320px, 0.95fr);

        align-items: center;
        gap: clamp(4rem, 8vw, 8rem);
    }

    .hero-grid.without-image {
        grid-template-columns: 1fr;
    }

    .copy {
        max-width: 760px;
    }

    h1 {
        margin-bottom: 2.5rem;

        color: var(--color-sage-700);
    }

    h1 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
    }

    .lead {
        max-width: 650px;

        margin-bottom: 0;

        color: var(--color-text-soft);

        font-size: clamp(1.1rem, 1.5vw, 1.35rem);
        line-height: 1.8;
    }

    .actions {
        margin-top: 2.5rem;
    }

    .media {
        position: relative;
    }

    .media :global(img) {
        position: relative;
        z-index: 2;

        width: 100%;
        aspect-ratio: 4 / 5;

        object-fit: cover;
    }

    .accent {
        position: absolute;
        right: -2rem;
        bottom: -2rem;
        z-index: 1;

        width: 60%;
        height: 60%;

        background: var(--color-sage-100);
    }

    @media (max-width: 800px) {
        .page-hero {
            padding-top: 4rem;
        }

        .hero-grid {
            grid-template-columns: 1fr;
        }

        .media {
            width: min(88%, 460px);
            margin-inline: auto;
        }

        .accent {
            right: -1rem;
            bottom: -1rem;
        }
    }
</style>