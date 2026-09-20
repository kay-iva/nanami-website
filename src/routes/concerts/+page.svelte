<script lang="ts">
    import ConcertCard from '$lib/components/concerts/ConcertCard.svelte';
    import GallerySection from '$lib/components/GallerySection.svelte';
    import PageHero from '$lib/components/layout/PageHero.svelte';
    import SectionHeading from '$lib/components/layout/SectionHeading.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import TextLink from '$lib/components/ui/TextLink.svelte';
    import type { Concert } from '$lib/types';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    const upcomingConcerts: Concert[] = [
        /*
        {
            title: 'Klavierabend',
            date: '14. Dezember 2026',
            time: '18:00 Uhr',
            location: 'Wien',
            description:
                'Ein gemeinsamer Konzertabend mit Schülerinnen und Schülern.',
            ticketUrl: 'https://...'
        }
        */
    ];
</script>

<svelte:head>
    <title>Konzerte | Nanami Shiraki</title>

    <meta
            name="description"
            content="Konzerte, Schülerkonzerte und musikalische Impressionen von Nanami Shiraki in Wien."
    />
</svelte:head>

<main class="concerts-page">
    <PageHero
            eyebrow="Konzerte"
            title="Musik gemeinsam"
            italicTitle="auf die Bühne bringen."
            description="Regelmäßig entstehen besondere Konzertmomente – von Schülerkonzerten bis zu weiteren musikalischen Projekten."
            image={data.heroImage}
    />

    <section class="upcoming section-soft">
        <div class="page-container">
            <div class="heading-grid">
                <SectionHeading
                        eyebrow="Termine"
                        title="Kommende"
                        italicTitle="Konzerte"
                />

                <p class="section-description">
                    Hier findest du aktuelle Konzerttermine und
                    Informationen zu kommenden Veranstaltungen.
                </p>
            </div>

            {#if upcomingConcerts.length}
                <div class="concert-list">
                    {#each upcomingConcerts as concert}
                        <ConcertCard {...concert} />
                    {/each}
                </div>
            {:else}
                <div class="empty-state">
                    <div class="empty-symbol" aria-hidden="true">
                        ♪
                    </div>

                    <div class="empty-content">
                        <p class="empty-label">
                            Momentan keine Termine
                        </p>

                        <h3>
                            Neue Konzerte sind bereits in Planung.
                        </h3>

                        <p>
                            Sobald ein neuer Termin feststeht,
                            findest du hier alle Informationen dazu.
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    </section>

    <section class="student-concerts">
        <div class="page-container student-grid">
            <div class="student-heading">
                <Eyebrow>Schülerkonzerte</Eyebrow>

                <h2>
                    Gemeinsam
                    <span>Musik erleben.</span>
                </h2>
            </div>

            <div class="student-content">
                <p class="lead">
                    Ein wichtiger Teil meines Unterrichts ist es,
                    Musik nicht nur im Unterrichtsraum, sondern
                    auch auf der Bühne erleben zu können.
                </p>

                <p>
                    Deshalb organisiere ich regelmäßig
                    Schülerkonzerte, bei denen meine Schülerinnen
                    und Schüler die Möglichkeit haben, ihre Musik
                    mit Familie, Freunden und anderen
                    Musikbegeisterten zu teilen.
                </p>

                <p>
                    Wenn genügend Teilnehmerinnen und Teilnehmer
                    zusammenkommen, findet das Konzert in einem
                    angemieteten Konzertsaal statt. Dabei steht
                    nicht Perfektion im Vordergrund, sondern die
                    Freude daran, gemeinsam Musik zu machen und
                    Bühnenerfahrung zu sammeln.
                </p>

                <TextLink href="/teaching">
                    Mehr über den Unterricht erfahren
                </TextLink>
            </div>
        </div>
    </section>

    {#if data.galleryImages.length}
        <GallerySection
                images={data.galleryImages}
                eyebrow="Impressionen"
                title="Vergangene"
                italicTitle="Konzertmomente."
                description="Einblicke in Konzerte, Auftritte und gemeinsame musikalische Erlebnisse."
        />
    {/if}
</main>

<style>
    .concerts-page {
        overflow: hidden;
    }

    .upcoming,
    .student-concerts {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .heading-grid {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;

        align-items: end;
        gap: clamp(3rem, 7vw, 6rem);

        margin-bottom: clamp(4rem, 7vw, 7rem);
    }

    .heading-grid :global(header) {
        margin-bottom: 0;
    }

    .section-description {
        max-width: 430px;

        margin: 0 0 0.4rem;

        color: var(--color-text-soft);

        font-size: 1rem;
        line-height: 1.8;
    }

    .concert-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .empty-state {
        display: grid;
        grid-template-columns: auto 1fr;

        align-items: center;
        gap: 2rem;

        padding: 3rem;

        border: 1px solid var(--border-soft);

        background: var(--color-cream);
    }

    .empty-symbol {
        display: grid;
        place-items: center;

        width: 76px;
        height: 76px;

        border: 1px solid var(--color-sage-300);
        border-radius: 50%;

        color: var(--color-sage-700);

        font-family: var(--font-serif);
        font-size: 2rem;
    }

    .empty-label {
        margin: 0 0 0.5rem;

        color: var(--color-sage-700);

        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    }

    .empty-state h3 {
        margin: 0 0 0.75rem;

        color: var(--color-text);

        font-size: clamp(1.5rem, 2vw, 2rem);
    }

    .empty-content > p:last-child {
        max-width: 520px;

        margin: 0;

        color: var(--color-text-soft);

        line-height: 1.7;
    }

    .student-concerts {
        background: var(--color-cream);
    }

    .student-grid {
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;

        align-items: start;
        gap: clamp(4rem, 10vw, 10rem);
    }

    .student-heading {
        position: sticky;
        top: calc(var(--navbar-height) + 3rem);
    }

    .student-heading h2 {
        margin: 0;

        color: var(--color-sage-700);
    }

    .student-heading h2 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
    }

    .student-content {
        max-width: 600px;
    }

    .student-content p {
        margin: 0 0 1.5rem;

        color: var(--color-text-soft);

        font-size: 1rem;
        line-height: 1.85;
    }

    .student-content .lead {
        color: var(--color-text);

        font-family: var(--font-serif);
        font-size: clamp(1.45rem, 2.2vw, 2rem);
        line-height: 1.45;
    }

    @media (max-width: 950px) {
        .heading-grid,
        .student-grid {
            grid-template-columns: 1fr;
        }

        .heading-grid {
            gap: 2rem;
        }

        .student-grid {
            gap: 3.5rem;
        }

        .student-heading {
            position: static;
        }
    }

    @media (max-width: 768px) {
        .upcoming,
        .student-concerts {
            padding-block: 5.5rem;
        }

        .empty-state {
            grid-template-columns: 1fr;

            padding: 2rem;
        }

        .empty-symbol {
            width: 60px;
            height: 60px;

            font-size: 1.6rem;
        }
    }
</style>