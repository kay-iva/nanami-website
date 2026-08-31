<script lang="ts">
    import ConcertCard from '$lib/components/ConcertCard.svelte';
    import PhotoGallery from '$lib/components/PhotoGallery.svelte';
    import type { Concert, GalleryImage } from '$lib/types';

    /*
     * Add upcoming concerts here.
     *
     * ticketUrl is optional — if there is an Öticket page,
     * simply paste the URL there.
     */
    const upcomingConcerts: Concert[] = [
        /*
        {
            title: 'Klavierabend',
            date: '14. Dezember 2026',
            time: '18:00 Uhr',
            location: 'Wien',
            description:
                'Ein gemeinsamer Konzertabend mit Schülerinnen und Schülern.',
            image: '/images/concerts/concert-example.jpg',
            ticketUrl: 'https://...'
        }
        */
    ];

    const galleryImages: GalleryImage[] = [
        {
            src: '/images/concerts/gallery-01.jpg',
            alt: 'Impression eines Klavierkonzerts'
        },
        {
            src: '/images/concerts/gallery-02.jpg',
            alt: 'Klavier auf der Konzertbühne'
        },
        {
            src: '/images/concerts/gallery-03.jpg',
            alt: 'Impression eines Schülerkonzerts'
        },
        {
            src: '/images/concerts/gallery-04.jpg',
            alt: 'Konzertmoment am Klavier'
        },
        {
            src: '/images/concerts/gallery-05.jpg',
            alt: 'Auftritt bei einem Klavierkonzert'
        },
        {
            src: '/images/concerts/gallery-06.jpg',
            alt: 'Impression aus einem Konzertsaal'
        }
    ];
</script>

<svelte:head>
    <title>Konzerte | Nanami Shiraki</title>
    <meta
            name="description"
            content="Konzerte, Schülerkonzerte und musikalische Impressionen von Nanami Shiraki in Wien."
    />
</svelte:head>

<main>
    <!-- INTRO -->
    <section class="concert-header">
        <div class="page-container header-inner">
            <p class="eyebrow">Konzerte</p>

            <h1>
                Musik gemeinsam
                <span>auf die Bühne bringen.</span>
            </h1>

            <p class="intro">
                Regelmäßig entstehen besondere Konzertmomente –
                von Schülerkonzerten bis zu weiteren musikalischen Projekten.
            </p>
        </div>
    </section>

    <!-- LARGE CONCERT IMAGE -->
    <section class="concert-hero-image">
        <img
                src="/images/concerts.jpg"
                alt="Konzert von Nanami Shiraki"
        />
    </section>

    <!-- UPCOMING CONCERTS -->
    <section class="upcoming-section">
        <div class="page-container">
            <div class="section-heading">
                <div>
                    <p class="eyebrow">Termine</p>
                    <h2>
                        Kommende
                        <span>Konzerte</span>
                    </h2>
                </div>

                <p class="section-description">
                    Hier findest du aktuelle Konzerttermine und
                    Informationen zu kommenden Veranstaltungen.
                </p>
            </div>

            {#if upcomingConcerts.length > 0}
                <div class="concert-list">
                    {#each upcomingConcerts as concert}
                        <ConcertCard {...concert} />
                    {/each}
                </div>
            {:else}
                <div class="empty-state">
                    <div class="empty-symbol">♪</div>

                    <div>
                        <p class="empty-label">Momentan keine Termine</p>
                        <h3>Neue Konzerte sind bereits in Planung.</h3>
                        <p>
                            Sobald ein neuer Termin feststeht, findest du
                            hier alle Informationen dazu.
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    </section>

    <!-- STUDENT CONCERTS -->
    <section class="student-section">
        <div class="page-container student-grid">
            <div class="student-title">
                <p class="eyebrow">Schülerkonzerte</p>

                <h2>
                    Gemeinsam
                    <span>Musik erleben.</span>
                </h2>
            </div>

            <div class="student-content">
                <p class="lead">
                    Ein wichtiger Teil meines Unterrichts ist es,
                    Musik nicht nur im Unterrichtsraum, sondern auch
                    auf der Bühne erleben zu können.
                </p>

                <p>
                    Deshalb organisiere ich regelmäßig Schülerkonzerte,
                    bei denen meine Schülerinnen und Schüler die Möglichkeit
                    haben, ihre Musik mit Familie, Freunden und anderen
                    Musikbegeisterten zu teilen.
                </p>

                <p>
                    Wenn genügend Teilnehmerinnen und Teilnehmer zusammenkommen,
                    findet das Konzert in einem angemieteten Konzertsaal statt.
                    Dabei steht nicht Perfektion im Vordergrund, sondern die
                    Freude daran, gemeinsam Musik zu machen und Bühnenerfahrung
                    zu sammeln.
                </p>

                <a href="/contact" class="text-link">
                    <span>Mehr über den Unterricht erfahren</span>
                    <span aria-hidden="true">↗</span>
                </a>
            </div>
        </div>
    </section>

    <!-- GALLERY -->
    <section class="gallery-section">
        <div class="page-container">
            <div class="gallery-heading">
                <p class="eyebrow">Impressionen</p>

                <h2>
                    Momente, die
                    <span>in Erinnerung bleiben.</span>
                </h2>

                <p>
                    Einblicke in vergangene Konzerte,
                    Auftritte und gemeinsame musikalische Momente.
                </p>
            </div>

            <PhotoGallery images={galleryImages} />
        </div>
    </section>
</main>

<style>
    /* ================================
       HEADER
    ================================ */

    .concert-header {
        padding: calc(var(--navbar-height) + 7rem) 0 6rem;
        background: var(--color-cream);
    }

    .header-inner {
        max-width: 1050px;
    }

    .eyebrow {
        margin: 0 0 1.25rem;
        font-family: var(--font-sans);
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    h1,
    h2 {
        margin: 0;
        font-family: var(--font-serif);
        font-weight: 400;
        line-height: 0.98;
        color: var(--color-text);
    }

    h1 {
        max-width: 850px;
        font-size: clamp(3.4rem, 7vw, 7rem);
    }

    h1 span,
    h2 span {
        display: block;
        font-style: italic;
        color: var(--color-sage-700);
    }

    .intro {
        max-width: 610px;
        margin: 2.5rem 0 0;
        font-family: var(--font-sans);
        font-size: 1.08rem;
        line-height: 1.8;
        color: var(--color-text-soft);
    }


    /* ================================
       HERO IMAGE
    ================================ */

    .concert-hero-image {
        position: relative;
        width: 100%;
        height: clamp(360px, 52vw, 720px);
        overflow: hidden;
        background: var(--color-sage-100);
    }

    .concert-hero-image::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
                to bottom,
                transparent 65%,
                rgba(0, 0, 0, 0.12)
        );
        pointer-events: none;
    }

    .concert-hero-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: center;
        transition: transform 1.4s ease;
    }

    .concert-hero-image:hover img {
        transform: scale(1.015);
    }


    /* ================================
       UPCOMING CONCERTS
    ================================ */

    .upcoming-section {
        padding: 8rem 0;
        background: var(--color-cream);
    }

    .section-heading {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 5rem;
        align-items: end;
        margin-bottom: 4rem;
    }

    .section-heading h2,
    .student-title h2,
    .gallery-heading h2 {
        font-size: clamp(2.8rem, 5vw, 5rem);
    }

    .section-description {
        max-width: 430px;
        margin: 0 0 0.4rem;
        font-family: var(--font-sans);
        font-size: 1rem;
        line-height: 1.8;
        color: var(--color-text-soft);
    }

    .concert-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .empty-state {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 2rem;
        align-items: center;
        padding: 3rem;
        border: 1px solid var(--border-soft);
        background: var(--color-sage-100);
    }

    .empty-symbol {
        display: grid;
        place-items: center;
        width: 76px;
        height: 76px;
        border: 1px solid var(--color-sage-300);
        border-radius: 50%;
        font-family: var(--font-serif);
        font-size: 2rem;
        color: var(--color-sage-700);
    }

    .empty-label {
        margin: 0 0 0.5rem;
        font-family: var(--font-sans);
        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    .empty-state h3 {
        margin: 0 0 0.75rem;
        font-family: var(--font-serif);
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-weight: 400;
        color: var(--color-text);
    }

    .empty-state p:last-child {
        max-width: 520px;
        margin: 0;
        font-family: var(--font-sans);
        line-height: 1.7;
        color: var(--color-text-soft);
    }


    /* ================================
       STUDENT CONCERTS
    ================================ */

    .student-section {
        padding: 9rem 0;
        background: var(--color-sage-100);
    }

    .student-grid {
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap: clamp(4rem, 10vw, 10rem);
        align-items: start;
    }

    .student-title {
        position: sticky;
        top: calc(var(--navbar-height) + 3rem);
    }

    .student-content {
        max-width: 600px;
    }

    .student-content p {
        margin: 0 0 1.5rem;
        font-family: var(--font-sans);
        font-size: 1rem;
        line-height: 1.85;
        color: var(--color-text-soft);
    }

    .student-content .lead {
        font-family: var(--font-serif);
        font-size: clamp(1.45rem, 2.2vw, 2rem);
        line-height: 1.45;
        color: var(--color-text);
    }

    .text-link {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1.5rem;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid var(--color-sage-700);
        font-family: var(--font-sans);
        font-size: 0.82rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-decoration: none;
        color: var(--color-sage-700);
        transition:
                gap var(--transition-fast),
                opacity var(--transition-fast);
    }

    .text-link:hover {
        gap: 1.35rem;
        opacity: 0.7;
    }


    /* ================================
       GALLERY
    ================================ */

    .gallery-section {
        padding: 9rem 0;
        background: var(--color-cream);
    }

    .gallery-heading {
        max-width: 720px;
        margin-bottom: 4.5rem;
    }

    .gallery-heading p:last-child {
        max-width: 520px;
        margin: 2rem 0 0;
        font-family: var(--font-sans);
        font-size: 1rem;
        line-height: 1.8;
        color: var(--color-text-soft);
    }


    /* ================================
       TABLET
    ================================ */

    @media (max-width: 900px) {
        .section-heading {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .student-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
        }

        .student-title {
            position: static;
        }
    }


    /* ================================
       MOBILE
    ================================ */

    @media (max-width: 768px) {
        .concert-header {
            padding: 6.5rem 0 4rem;
        }

        h1 {
            font-size: clamp(3rem, 14vw, 4.6rem);
        }

        .intro {
            margin-top: 2rem;
            font-size: 1rem;
        }

        .concert-hero-image {
            height: 52vh;
            min-height: 320px;
            max-height: 500px;
        }

        .upcoming-section,
        .student-section,
        .gallery-section {
            padding: 5.5rem 0;
        }

        .section-heading {
            margin-bottom: 3rem;
        }

        .section-heading h2,
        .student-title h2,
        .gallery-heading h2 {
            font-size: clamp(2.7rem, 12vw, 4rem);
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

        .gallery-heading {
            margin-bottom: 3rem;
        }
    }
</style>