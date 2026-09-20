<script lang="ts">
    import BookingButton from '$lib/components/booking/BookingButton.svelte';
    import ResponsiveImage from '$lib/components/media/ResponsiveImage.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import TextLink from '$lib/components/ui/TextLink.svelte';
    import { booking } from '$lib/config/booking';
    import type { SiteImage } from '$lib/types';

    interface Props {
        image?: SiteImage | null;
    }

    let { image = null }: Props = $props();
</script>

<section class="teaching section">
    <div class="page-container teaching-inner">
        <div class="teaching-content">
            <Eyebrow>Klavierunterricht</Eyebrow>

            <h2>
                Musik entdecken.
                <span>Im eigenen Tempo.</span>
            </h2>

            <div class="teaching-copy">
                <p>
                    Ich unterrichte Kinder, Jugendliche und Erwachsene –
                    vom ersten Kontakt mit dem Klavier bis hin zu
                    Fortgeschrittenen und Wiedereinsteigern.
                </p>

                <p>
                    Dabei steht für mich nicht nur das Erlernen von
                    Technik im Mittelpunkt. Der Unterricht soll Raum
                    geben, Musik mit Neugier zu entdecken, eigene
                    Fortschritte zu erleben und langfristig Freude
                    am Musizieren zu entwickeln.
                </p>
            </div>

            <div class="teaching-details">
                <div>
                    <span class="number">01</span>

                    <p>
                        Kinder &<br />
                        Erwachsene
                    </p>
                </div>

                <div>
                    <span class="number">02</span>

                    <p>
                        Anfänger &<br />
                        Fortgeschrittene
                    </p>
                </div>

                <div>
                    <span class="number">03</span>
                    <p>Wien</p>
                </div>
            </div>

            <div class="teaching-actions">
                <BookingButton
                        booking={booking.trial}
                        class="trial-action"
                >
                    <span>Kostenlose Probestunde</span>
                    <span aria-hidden="true">↗</span>
                </BookingButton>

                <TextLink href="/teaching">
                    Mehr zum Unterricht
                </TextLink>
            </div>
        </div>

        <div class="teaching-image">
            <div class="image-accent" aria-hidden="true"></div>

            {#if image}
                <ResponsiveImage
                        {image}
                        sizes="(max-width: 800px) 85vw, 45vw"
                        fallback="/fallbacks/portrait.webp"
                />
            {:else}
                <img
                        src="/fallbacks/portrait.webp"
                        alt="Klavierunterricht bei Nanami Shiraki"
                />
            {/if}

            <div class="image-note">
                <span>30 min</span>
                <p>Kostenlose Probestunde</p>
            </div>
        </div>
    </div>
</section>

<style>
    .teaching {
        position: relative;
        overflow: hidden;

        background: var(--color-sage-100);
    }

    .teaching-inner {
        display: grid;
        grid-template-columns:
			minmax(0, 1.1fr)
			minmax(0, 0.9fr);

        align-items: center;
        gap: clamp(4rem, 8vw, 9rem);
    }

    .teaching-content {
        max-width: 680px;
    }

    h2 {
        margin-bottom: clamp(2rem, 4vw, 3rem);

        color: var(--color-sage-700);
    }

    h2 span {
        display: block;

        margin-left: clamp(1rem, 4vw, 4rem);

        color: var(--color-text);
        font-style: italic;
    }

    .teaching-copy {
        max-width: 570px;

        color: var(--color-text-soft);

        font-size: clamp(1rem, 1.2vw, 1.1rem);
        line-height: 1.8;
    }

    .teaching-copy p:last-child {
        margin-bottom: 0;
    }

    .teaching-details {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        max-width: 570px;

        margin-top: 3rem;

        border-top: 1px solid var(--border-soft);
        border-bottom: 1px solid var(--border-soft);
    }

    .teaching-details > div {
        padding: 1.25rem 1.25rem 1.25rem 0;

        border-right: 1px solid var(--border-soft);
    }

    .teaching-details > div:not(:first-child) {
        padding-left: 1.25rem;
    }

    .teaching-details > div:last-child {
        border-right: 0;
    }

    .number {
        display: block;

        margin-bottom: 0.65rem;

        color: var(--color-sage-300);

        font-size: 0.6rem;
        letter-spacing: 0.08em;
    }

    .teaching-details p {
        margin: 0;

        color: var(--color-sage-700);

        font-family: var(--font-serif);
        font-size: 0.95rem;
        line-height: 1.35;
    }

    .teaching-actions {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        gap: 1rem 2rem;

        margin-top: 2.5rem;
    }

    .teaching-actions :global(a) {
        margin-top: 0;
    }

    :global(.trial-action) {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;

        padding: 0.9rem 1.1rem;

        background: var(--color-sage-700);
        color: var(--color-cream);

        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.06em;

        transition:
                transform var(--transition-fast),
                gap var(--transition-fast);
    }

    :global(.trial-action:hover) {
        gap: 2.4rem;
        transform: translateY(-2px);
    }

    .teaching-image {
        position: relative;

        width: 100%;
        max-width: 540px;

        margin-inline: auto;
    }

    .teaching-image :global(img) {
        position: relative;
        z-index: 2;

        width: 100%;
        height: auto;
    }

    .image-accent {
        position: absolute;
        left: -2rem;
        bottom: -2rem;
        z-index: 1;

        width: 65%;
        height: 65%;

        background: var(--color-peach);
    }

    .image-note {
        position: absolute;
        right: -2rem;
        bottom: 3rem;
        z-index: 3;

        width: 170px;

        padding: 1.4rem;

        background: var(--color-cream);

        box-shadow: var(--shadow-soft);
    }

    .image-note span {
        display: block;

        margin-bottom: 0.5rem;

        color: var(--color-sage-300);

        font-family: var(--font-serif);
        font-size: 1.7rem;
    }

    .image-note p {
        margin: 0;

        color: var(--color-sage-700);

        font-size: 0.68rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        line-height: 1.5;
        text-transform: uppercase;
    }

    @media (max-width: 800px) {
        .teaching-inner {
            grid-template-columns: 1fr;
            gap: 4rem;
        }

        .teaching-content {
            max-width: none;
        }

        h2 span {
            margin-left: 0.5rem;
        }

        .teaching-details {
            max-width: none;
        }

        .teaching-image {
            width: min(85%, 430px);
        }

        .image-accent {
            left: -1rem;
            bottom: -1rem;
        }

        .image-note {
            right: -1rem;
        }
    }

    @media (max-width: 520px) {
        .teaching-details {
            grid-template-columns: 1fr;
        }

        .teaching-details > div,
        .teaching-details > div:not(:first-child) {
            padding: 1.2rem 0;

            border-right: 0;
            border-bottom: 1px solid var(--border-soft);
        }

        .teaching-details > div:last-child {
            border-bottom: 0;
        }

        .teaching-actions {
            flex-direction: column;
            align-items: flex-start;
        }

        .image-note {
            right: -0.5rem;
            bottom: 1.5rem;

            width: 145px;
        }
    }
</style>