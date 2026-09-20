<script lang="ts">
    import ResponsiveImage from '$lib/components/media/ResponsiveImage.svelte';
    import type { SiteImage } from '$lib/types';

    interface Props {
        title: string;
        date: string;
        time?: string;
        location?: string;
        description?: string;
        image?: SiteImage | null;
        ticketUrl?: string;
    }

    let {
        title,
        date,
        time,
        location,
        description,
        image,
        ticketUrl
    }: Props = $props();
</script>

<article class="concert-card">
    {#if image}
        <div class="concert-image">
            <ResponsiveImage
                    {image}
                    sizes="(max-width: 800px) 100vw, 50vw"
                    fallback="/fallbacks/landscape.webp"
            />
        </div>
    {/if}

    <div class="concert-content">
        <div class="concert-meta">
            <p>{date}</p>

            {#if time}
                <p>{time}</p>
            {/if}
        </div>

        <h3>{title}</h3>

        {#if location}
            <p class="location">{location}</p>
        {/if}

        {#if description}
            <p class="description">{description}</p>
        {/if}

        {#if ticketUrl}
            <a
                    class="ticket-link"
                    href={ticketUrl}
                    target="_blank"
                    rel="noreferrer"
            >
                <span>Tickets</span>
                <span aria-hidden="true">↗</span>
            </a>
        {/if}
    </div>
</article>

<style>
    .concert-card {
        display: grid;
        grid-template-columns:
			minmax(0, 0.95fr)
			minmax(0, 1.05fr);

        background: var(--color-cream);

        border-top: 1px solid var(--border-soft);
        border-bottom: 1px solid var(--border-soft);
    }

    .concert-image {
        overflow: hidden;
    }

    .concert-image :global(img) {
        width: 100%;
        height: 100%;
        min-height: 420px;

        object-fit: cover;

        transition: transform 800ms ease;
    }

    .concert-card:hover .concert-image :global(img) {
        transform: scale(1.03);
    }

    .concert-content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: clamp(2.5rem, 5vw, 5rem);
    }

    .concert-meta {
        display: flex;
        gap: 1.5rem;

        margin-bottom: 1.5rem;

        color: var(--color-sage-300);

        font-size: 0.68rem;
        letter-spacing: 0.13em;
        text-transform: uppercase;
    }

    .concert-meta p {
        margin: 0;
    }

    h3 {
        margin-bottom: 1rem;

        color: var(--color-sage-700);

        font-size: clamp(2rem, 4vw, 4rem);
    }

    .location {
        margin-bottom: 1.5rem;

        color: var(--color-text);
    }

    .description {
        max-width: 520px;

        color: var(--color-text-soft);

        line-height: 1.8;
    }

    .ticket-link {
        display: inline-flex;
        align-items: center;
        gap: 2rem;

        width: fit-content;

        margin-top: 2.5rem;
        padding-bottom: 0.5rem;

        border-bottom: 1px solid var(--color-sage-700);

        color: var(--color-sage-700);

        font-size: 0.78rem;
        letter-spacing: 0.08em;

        transition: gap var(--transition-fast);
    }

    .ticket-link:hover {
        gap: 2.5rem;
    }

    @media (max-width: 800px) {
        .concert-card {
            grid-template-columns: 1fr;
        }

        .concert-image :global(img) {
            min-height: 300px;
            aspect-ratio: 4 / 3;
        }

        .concert-content {
            padding:
                    3rem
                    var(--page-padding);
        }
    }
</style>