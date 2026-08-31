<script lang="ts">
    import ConcertCard from '$lib/components/ConcertCard.svelte';
    import PhotoGallery from '$lib/components/PhotoGallery.svelte';
    import type { Concert } from '$lib/types';

    const upcomingConcerts: Concert[] = [
        /*
        {
            title: 'Schülerkonzert 2026',
            date: '15. November 2026',
            time: '18:00 Uhr',
            location: 'Wien',
            description:
                'Ein gemeinsamer Konzertabend mit Schülerinnen und Schülern verschiedener Altersgruppen.',
            image: '/images/concerts/concert-2026.jpg',
            ticketUrl: 'https://www.oeticket.com/...'
        }
        */
    ];


    const galleryImages = [
        {
            src: '/images/concerts/gallery-01.jpg',
            alt: 'Schülerkonzert von Nanami Shiraki'
        },
        {
            src: '/images/concerts/gallery-02.jpg',
            alt: 'Klavierschülerinnen und Klavierschüler bei einem Konzert'
        },
        {
            src: '/images/concerts/gallery-03.jpg',
            alt: 'Konzertabend in Wien'
        },
        {
            src: '/images/concerts/gallery-04.jpg',
            alt: 'Klavier auf der Konzertbühne'
        },
        {
            src: '/images/concerts/gallery-05.jpg',
            alt: 'Impression eines Schülerkonzerts'
        }
    ];
</script>

<svelte:head>
    <title>Konzerte | Nanami Shiraki</title>
    <meta
            name="description"
            content="Konzerte und Schülerkonzerte von Nanami Shiraki in Wien."
    />
</svelte:head>

<main class="concert-page">
    <section class="intro">
        <div class="page-container intro-inner">
            <p class="eyebrow">Konzerte</p>

            <h1>
                Musik gemeinsam
                <span>auf die Bühne bringen.</span>
            </h1>

            <p class="lead">
                Regelmäßig organisiere ich Konzerte, bei denen meine
                Schülerinnen und Schüler die Möglichkeit bekommen,
                ihre Musik vor Publikum zu präsentieren und wertvolle
                Bühnenerfahrung zu sammeln.
            </p>
        </div>
    </section>

    <section class="upcoming">
        <div class="page-container">
            <div class="section-heading">
                <p class="eyebrow">Aktuelle Termine</p>

                <h2>
                    Als Nächstes
                    <span>auf der Bühne.</span>
                </h2>
            </div>

            {#if upcomingConcerts.length > 0}
                <div class="concert-list">
                    {#each upcomingConcerts as concert}
                        <ConcertCard {...concert} />
                    {/each}
                </div>
            {:else}
                <div class="empty-state">
                    <p class="empty-number">♪</p>

                    <h3>Derzeit keine Termine angekündigt</h3>

                    <p>
                        Neue Konzerttermine findest du hier,
                        sobald sie feststehen.
                    </p>
                </div>
            {/if}
        </div>
    </section>

    <section class="student-concerts section-soft">
        <div class="page-container student-grid">
            <div class="section-number">
                <p>01</p>
                <span>Schülerkonzerte</span>
            </div>

            <div class="student-copy">
                <h2>
                    Mehr als nur
                    <span>Unterricht.</span>
                </h2>

                <p>
                    Ein Konzert ist für Schülerinnen und Schüler eine
                    ganz besondere Erfahrung. Es bietet die Möglichkeit,
                    das Gelernte zu teilen, neue Sicherheit zu gewinnen
                    und Musik gemeinsam zu erleben.
                </p>

                <p>
                    Bei ausreichender Teilnehmerzahl organisiere ich
                    Schülerkonzerte in einem Konzertsaal, sodass jede und
                    jeder die Gelegenheit bekommt, auf einer echten Bühne
                    zu spielen.
                </p>
            </div>
        </div>
    </section>

    <section class="gallery-section">
        <div class="page-container">
            <div class="gallery-heading">
                <div>
                    <p class="eyebrow">Impressionen</p>

                    <h2>
                        Momente,
                        <span>die bleiben.</span>
                    </h2>
                </div>

                <p>
                    Einblicke in vergangene Schülerkonzerte,
                    gemeinsame musikalische Momente und Auftritte.
                </p>
            </div>

            <PhotoGallery images={galleryImages} />
        </div>
    </section>
</main>

<style>
    .concert-page {
        overflow: hidden;
    }

    .eyebrow {
        margin-bottom: 1.5rem;

        color: var(--color-sage-300);

        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    h1 span,
    h2 span {
        display: block;

        color: var(--color-text);

        font-style: italic;
    }

    .intro {
        padding:
                clamp(5rem, 8vw, 8rem)
                0
                clamp(6rem, 10vw, 10rem);

        background: var(--color-cream);
    }

    .intro-inner {
        max-width: 950px;
    }

    h1 {
        margin-bottom: 2.5rem;

        color: var(--color-sage-700);
    }

    .lead {
        max-width: 680px;

        color: var(--color-text-soft);

        font-size: clamp(1.1rem, 1.5vw, 1.3rem);
        line-height: 1.8;
    }

    .upcoming {
        padding-bottom: clamp(7rem, 11vw, 11rem);
    }

    .section-heading {
        max-width: 700px;

        margin-bottom: 4rem;
    }

    .section-heading h2,
    .gallery-heading h2,
    .student-copy h2 {
        color: var(--color-sage-700);
    }

    .concert-list {
        display: flex;
        flex-direction: column;

        gap: 3rem;
    }

    .empty-state {
        padding:
                clamp(4rem, 8vw, 7rem)
                2rem;

        border-top: 1px solid var(--border-soft);
        border-bottom: 1px solid var(--border-soft);

        text-align: center;
    }

    .empty-number {
        margin-bottom: 1.5rem;

        color: var(--color-sage-300);

        font-family: var(--font-serif);
        font-size: 2.5rem;
    }

    .empty-state h3 {
        color: var(--color-sage-700);
    }

    .empty-state p:last-child {
        margin: 1rem 0 0;

        color: var(--color-text-soft);
    }

    .student-concerts {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .student-grid {
        display: grid;
        grid-template-columns: 160px 1fr;

        gap: clamp(3rem, 7vw, 8rem);
    }

    .section-number {
        color: var(--color-sage-300);
    }

    .section-number p {
        margin-bottom: 0.4rem;

        font-family: var(--font-serif);
        font-size: 2rem;
    }

    .section-number span {
        font-size: 0.7rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
    }

    .student-copy {
        max-width: 760px;
    }

    .student-copy h2 {
        margin-bottom: 2.5rem;
    }

    .student-copy p {
        max-width: 680px;

        color: var(--color-text-soft);

        line-height: 1.85;
    }

    .gallery-section {
        padding-block: clamp(6rem, 10vw, 10rem);

        background: var(--color-cream);
    }

    .gallery-heading {
        display: grid;
        grid-template-columns: 1fr 0.7fr;

        align-items: end;

        gap: 4rem;

        margin-bottom: 4rem;
    }

    .gallery-heading p:last-child {
        max-width: 450px;

        color: var(--color-text-soft);

        line-height: 1.8;
    }

    @media (max-width: 800px) {
        .intro {
            padding-top: 5rem;
        }

        .student-grid,
        .gallery-heading {
            grid-template-columns: 1fr;
        }

        .student-grid {
            gap: 2.5rem;
        }

        .section-number {
            display: flex;
            align-items: center;

            gap: 1rem;
        }

        .section-number p {
            margin: 0;
        }

        .gallery-heading {
            gap: 1.5rem;
        }
    }
</style>