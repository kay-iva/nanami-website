<script lang="ts">
    import type { PageData } from './$types';

    import BookingButton from '$lib/components/booking/BookingButton.svelte';
    import GallerySection from '$lib/components/GallerySection.svelte';
    import PageHero from '$lib/components/layout/PageHero.svelte';
    import StudioSection from '$lib/components/teaching/StudioSection.svelte';
    import PricingSection from '$lib/components/teaching/PricingSection.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import TextLink from '$lib/components/ui/TextLink.svelte';
    import { booking } from '$lib/config/booking';

    let { data }: { data: PageData } = $props();

    const yearlyPlans = [
        { duration: '30 min', price: '80 €' },
        { duration: '45 min', price: '120 €' },
        { duration: '60 min', price: '160 €' }
    ];

    const lessonBlocks = [
        {
            amount: '5 Einheiten',
            prices: [
                { duration: '30 min', price: '175 €' },
                { duration: '45 min', price: '263 €' },
                { duration: '60 min', price: '350 €' }
            ]
        },
        {
            amount: '10 Einheiten',
            prices: [
                { duration: '30 min', price: '350 €' },
                { duration: '45 min', price: '525 €' },
                { duration: '60 min', price: '700 €' }
            ]
        }
    ];

    const singleLessons = [
        { duration: '30 min', price: '40 €' },
        { duration: '45 min', price: '60 €' },
        { duration: '60 min', price: '80 €' }
    ];
</script>

<svelte:head>
    <title>Klavierunterricht | Nanami Shiraki</title>
    <meta
            name="description"
            content="Klavierunterricht für Kinder und Erwachsene in Wien Hietzing – für Anfänger, Fortgeschrittene und Wiedereinsteiger."
    />
</svelte:head>

<main class="teaching-page">
    <PageHero
            eyebrow="Klavierunterricht"
            title="Musik entdecken."
            italicTitle="Im eigenen Tempo."
            description="Ich biete Klavierunterricht für Anfänger, Fortgeschrittene und Wiedereinsteiger aller Altersgruppen – individuell abgestimmt auf persönliche Ziele, Interessen und Erfahrungen."
            image={data.heroImage}
            accent="peach"
    >
        {#snippet actions()}
            <div class="hero-actions">
                <BookingButton
                        booking={booking.trial}
                        class="hero-trial"
                >
                    <span>Kostenlose Probestunde</span>
                    <span aria-hidden="true">↗</span>
                </BookingButton>

                <a href="#unterrichtsmodelle" class="hero-secondary">
                    <span>Unterrichtsmodelle</span>
                    <span aria-hidden="true">↓</span>
                </a>
            </div>
        {/snippet}
    </PageHero>

    <section class="philosophy">
        <div class="page-container philosophy-grid">
            <div class="section-label">
                <p>01</p>
                <span>Unterricht</span>
            </div>

            <div class="philosophy-content">
                <h2>
                    Ein Unterricht,
                    <span>der zu dir passt.</span>
                </h2>

                <div class="text-columns">
                    <p>
                        Jeder Mensch lernt Musik anders. Deshalb richte
                        ich meinen Unterricht individuell nach Alter,
                        Vorkenntnissen und persönlichen musikalischen
                        Zielen aus.
                    </p>

                    <p>
                        Neben dem regulären Klavierunterricht unterstütze
                        ich gerne bei der gezielten Vorbereitung auf
                        Prüfungen und musikalische Herausforderungen.
                    </p>
                </div>

                <div class="features">
                    <article>
                        <span>01</span>
                        <h3>Alle Altersgruppen</h3>
                        <p>
                            Unterricht für Kinder, Jugendliche
                            und Erwachsene.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <h3>Jedes Niveau</h3>
                        <p>
                            Für Anfänger, Fortgeschrittene
                            und Wiedereinsteiger.
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <h3>Prüfungsvorbereitung</h3>
                        <p>
                            Gezielte Unterstützung bei der
                            Vorbereitung auf Prüfungen.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <StudioSection image={data.studioImage} />

    <section class="trial" id="kennenlernen">
        <div class="page-container trial-inner">
            <Eyebrow>Kennenlernen</Eyebrow>

            <h2>
                30 Minuten.
                <span>Ganz unverbindlich.</span>
            </h2>

            <p>
                Damit wir uns kennenlernen können und du einen ersten
                Eindruck von meinem Unterricht bekommst, biete ich
                potenziellen Schülerinnen und Schülern eine kostenfreie
                30-minütige Probestunde an.
            </p>

            <BookingButton
                    booking={booking.trial}
                    class="trial-button"
            >
                <span>Probestunde buchen</span>
                <span aria-hidden="true">↗</span>
            </BookingButton>
        </div>
    </section>

    <div id="unterrichtsmodelle">
        <PricingSection
                {yearlyPlans}
                {lessonBlocks}
                {singleLessons}
        />
    </div>

    <section class="more section-peach">
        <div class="page-container more-grid">
            <div>
                <Eyebrow>Mehr als Unterricht</Eyebrow>

                <h2>
                    Musik gemeinsam
                    <span>erleben.</span>
                </h2>
            </div>

            <div class="more-items">
                <article>
                    <p class="number">01</p>

                    <div>
                        <h3>Schülerkonzerte</h3>

                        <p>
                            Regelmäßig organisiere ich Konzerte,
                            bei denen Schülerinnen und Schüler die
                            Möglichkeit bekommen, ihre Musik vor
                            Publikum zu präsentieren. Bei ausreichender
                            Teilnehmerzahl kann dafür ein Konzertsaal
                            gemietet werden.
                        </p>
                    </div>
                </article>

                <article>
                    <p class="number">02</p>

                    <div>
                        <h3>Instrumentenberatung</h3>

                        <p>
                            Wenn du darüber nachdenkst, ein eigenes
                            Klavier oder einen Flügel zu kaufen,
                            berate ich dich gerne bei der Auswahl
                            eines passenden Instruments.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section class="contact-cta">
        <div class="page-container contact-inner">
            <Eyebrow>Bereit für die erste Stunde?</Eyebrow>

            <h2>
                Dein Weg am Klavier
                <span>beginnt hier.</span>
            </h2>

            <p class="cta-description">
                Lerne meinen Unterricht zuerst unverbindlich kennen
                oder buche direkt eine einzelne Unterrichtseinheit.
            </p>

            <div class="cta-actions">
                <BookingButton
                        booking={booking.trial}
                        class="cta-trial"
                >
                    <span>Probestunde buchen</span>
                    <span aria-hidden="true">↗</span>
                </BookingButton>

                <TextLink href="#unterrichtsmodelle">
                    Einzelstunde wählen
                </TextLink>
            </div>
        </div>
    </section>

    {#if data.galleryImages.length}
        <GallerySection
                images={data.galleryImages}
                eyebrow="Unterricht"
                title="Musik gemeinsam"
                italicTitle="entdecken."
                description="Einblicke in den Klavierunterricht und gemeinsame musikalische Momente."
        />
    {/if}
</main>

<style>
    .teaching-page {
        overflow: hidden;
    }

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.5rem 2.5rem;
    }

    :global(.hero-trial),
    .hero-secondary {
        display: inline-flex;
        align-items: center;
        gap: 2rem;

        padding-bottom: 0.5rem;

        border-bottom: 1px solid var(--color-sage-700);

        color: var(--color-sage-700);

        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.07em;

        transition: gap var(--transition-fast);
    }

    :global(.hero-trial:hover),
    .hero-secondary:hover {
        gap: 2.5rem;
    }

    .hero-secondary {
        color: var(--color-text-soft);
        border-color: var(--border-soft);
    }

    .philosophy {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .philosophy-grid {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: clamp(3rem, 7vw, 8rem);
    }

    .section-label {
        color: var(--color-sage-300);
    }

    .section-label p {
        margin-bottom: 0.4rem;

        font-family: var(--font-serif);
        font-size: 2rem;
    }

    .section-label span {
        font-size: 0.7rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
    }

    .philosophy-content h2 {
        margin-bottom: 3rem;
        color: var(--color-sage-700);
    }

    .philosophy-content h2 span,
    .more h2 span,
    .trial h2 span,
    .contact-inner h2 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
    }

    .text-columns {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        max-width: 900px;

        gap: clamp(2rem, 5vw, 5rem);
    }

    .text-columns p {
        color: var(--color-text-soft);
        line-height: 1.85;
    }

    .features {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        margin-top: clamp(4rem, 7vw, 7rem);

        border-top: 1px solid var(--border-soft);
    }

    .features article {
        padding: 2rem;
        border-right: 1px solid var(--border-soft);
    }

    .features article:first-child {
        padding-left: 0;
    }

    .features article:last-child {
        border-right: 0;
    }

    .features article > span {
        color: var(--color-sage-300);
        font-size: 0.65rem;
    }

    .features h3 {
        margin: 1.5rem 0 1rem;
        color: var(--color-sage-700);
    }

    .features p {
        margin: 0;

        color: var(--color-text-soft);
        font-size: 0.9rem;
    }

    .trial {
        padding-block: clamp(7rem, 13vw, 13rem);
        background: var(--color-sage-700);
    }

    .trial-inner {
        max-width: 900px;
        text-align: center;
    }

    .trial :global(p:first-child) {
        color: var(--color-sage-300);
    }

    .trial h2 {
        color: var(--color-cream);
    }

    .trial h2 span {
        color: var(--color-sage-100);
    }

    .trial-inner > p {
        max-width: 620px;

        margin: 2.5rem auto;

        color: var(--color-sage-100);

        font-size: 1.05rem;
        line-height: 1.8;
    }

    :global(.trial-button) {
        display: inline-flex;
        align-items: center;
        gap: 2.5rem;

        padding: 1rem 1.4rem;

        border: 1px solid var(--color-sage-100);

        color: var(--color-cream);

        font-size: 0.78rem;
        letter-spacing: 0.08em;

        transition:
                background var(--transition-fast),
                color var(--transition-fast),
                gap var(--transition-fast);
    }

    :global(.trial-button:hover) {
        gap: 3rem;

        background: var(--color-cream);
        color: var(--color-sage-700);
    }

    .more {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .more-grid {
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;

        gap: clamp(4rem, 8vw, 9rem);
    }

    .more h2 {
        color: var(--color-sage-700);
    }

    .more-items article {
        display: grid;
        grid-template-columns: 50px 1fr;

        gap: 1rem;
        padding: 2.5rem 0;

        border-top: 1px solid rgba(74, 90, 79, 0.2);
    }

    .more-items article:last-child {
        border-bottom: 1px solid rgba(74, 90, 79, 0.2);
    }

    .more-items .number {
        color: var(--color-sage-700);
        font-size: 0.65rem;
    }

    .more-items h3 {
        color: var(--color-sage-700);
    }

    .more-items p {
        color: var(--color-text);
        line-height: 1.8;
    }

    .contact-cta {
        padding-block: clamp(7rem, 12vw, 12rem);
        background: var(--color-cream);
    }

    .contact-inner {
        max-width: 900px;
        text-align: center;
    }

    .contact-inner h2 {
        margin: 0 auto;
        color: var(--color-sage-700);
    }

    .cta-description {
        max-width: 540px;

        margin: 2.5rem auto 0;

        color: var(--color-text-soft);

        font-size: 1rem;
        line-height: 1.8;
    }

    .cta-actions {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        gap: 1.5rem 2.5rem;

        margin-top: 2.5rem;
    }

    :global(.cta-trial) {
        display: inline-flex;
        align-items: center;
        gap: 2.5rem;

        padding: 0.95rem 1.25rem;

        background: var(--color-sage-700);
        color: var(--color-cream);

        font-size: 0.8rem;
        letter-spacing: 0.08em;

        transition:
                gap var(--transition-fast),
                transform var(--transition-fast);
    }

    :global(.cta-trial:hover) {
        gap: 3rem;
        transform: translateY(-2px);
    }

    @media (max-width: 800px) {
        .hero-actions {
            flex-direction: column;
            align-items: flex-start;
        }

        .philosophy-grid,
        .more-grid {
            grid-template-columns: 1fr;
        }

        .philosophy-grid {
            gap: 2.5rem;
        }

        .section-label {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .section-label p {
            margin: 0;
        }

        .text-columns,
        .features {
            grid-template-columns: 1fr;
        }

        .text-columns {
            gap: 1rem;
        }

        .features article,
        .features article:first-child {
            padding: 2rem 0;

            border-right: 0;
            border-bottom: 1px solid var(--border-soft);
        }

        .more-items {
            margin-top: 1rem;
        }

        .cta-actions {
            flex-direction: column;
        }
    }
</style>