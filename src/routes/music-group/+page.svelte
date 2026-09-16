<script lang="ts">
    import GallerySection from '$lib/components/GallerySection.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let expanded = $state<string | null>(null);
</script>

<svelte:head>
    <title>Musikgruppen | Nanami Shiraki</title>
    <meta
            name="description"
            content="Musik, Bewegung und gemeinsames Erleben für Babys, Kinder und ihre Eltern in Wien."
    />
</svelte:head>

<main>
    <section class="hero">
        <div class="page-container">
            <p class="eyebrow">Musikgruppen</p>
            <h1>Gemeinsam Musik <span>entdecken.</span></h1>
            <p class="lead">
                Musik, Bewegung, Nähe und gemeinsames Erleben – spielerische musikalische Erfahrungen für die Kleinsten und ihre Eltern.
            </p>
        </div>
    </section>

    <section class="courses">
        <div class="page-container">
            <div class="heading">
                <p class="eyebrow">Aktuelle Kurse</p>
                <h2>Unsere nächsten <span>Musikmomente.</span></h2>
            </div>

            <div class="course-list">
                {#each data.courses as course}
                    <article class="course">
                        <div class="course-main">
                            <div>
                                <p class="course-age">{course.age}</p>
                                <h3>{course.title}</h3>
                                <p class="description">{course.description}</p>
                            </div>

                            <div class="course-summary">
                                <div><span>Einheiten</span><strong>{course.dates.length}</strong></div>
                                <div><span>Dauer</span><strong>{course.duration} Min.</strong></div>
                                <div><span>Zeit</span><strong>{course.time}</strong></div>
                                <div><span>Preis</span><strong>€ {course.price}</strong></div>
                            </div>
                        </div>

                        <div class="actions">
                            <button
                                    type="button"
                                    class="details"
                                    onclick={() => (expanded = expanded === course.id ? null : course.id)}
                            >
                                {expanded === course.id ? 'Termine schließen' : 'Alle Termine'}
                                <span>{expanded === course.id ? '−' : '+'}</span>
                            </button>

                            <a class="book" href={`/music-group/book/${course.id}`}>
                                Kurs buchen <span>↗</span>
                            </a>
                        </div>

                        {#if expanded === course.id}
                            <div class="expanded">
                                <div>
                                    <p class="small-title">Termine</p>
                                    <div class="dates">
                                        {#each course.dates as date, i}
                                            <div><span>{String(i + 1).padStart(2, '0')}</span><strong>{date}</strong></div>
                                        {/each}
                                    </div>
                                </div>

                                <div>
                                    <p class="small-title">Ort</p>
                                    <p class="location">{course.location}</p>
                                </div>
                            </div>
                        {/if}
                    </article>
                {/each}
            </div>
        </div>
    </section>

    <section class="about">
        <div class="page-container about-grid">
            <div>
                <p class="eyebrow">Von Anfang an</p>
                <h2>Musik mit allen <span>Sinnen erleben.</span></h2>
            </div>

            <div class="copy">
                <p>
                    Schon früh sammeln Babys Erfahrungen mit Musik und Bewegung. Sie hören vertraute Stimmen, Rhythmen und Klänge und erleben Musik gemeinsam mit ihren Bezugspersonen.
                </p>
                <p>
                    In einer freundlichen Atmosphäre entdecken wir Kinderlieder, Bewegungs- und Fingerspiele, neue Melodien und gemeinsames rhythmisches Bewegen.
                </p>
                <p>
                    Dabei gibt es Raum für Wiegen, Kuscheln, Ruhephasen, gemeinsames Aktivsein und den Austausch zwischen Eltern.
                </p>
            </div>
        </div>
    </section>

    {#if data.galleryImages.length}
        <GallerySection
                images={data.galleryImages}
                eyebrow="Einblicke"
                title="Gemeinsam"
                italicTitle="Musik erleben."
                description="Momente aus unseren Musikgruppen und gemeinsamen musikalischen Begegnungen."
        />
    {/if}
</main>

<style>
    .hero {
        padding: 9rem 0 7rem;
        background: var(--color-cream);
    }

    .hero h1 {
        max-width: 900px;
        margin: 0;
        font: 400 clamp(4rem, 8vw, 8rem)/0.88 var(--font-serif);
        letter-spacing: -0.055em;
        color: var(--color-text);
    }

    .hero h1 span,
    h2 span {
        display: block;
        font-style: italic;
        color: var(--color-sage-700);
    }

    .eyebrow {
        margin: 0 0 1.5rem;
        font: 600 0.72rem var(--font-sans);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    .lead {
        max-width: 650px;
        margin: 2.5rem 0 0;
        font: 1.1rem/1.8 var(--font-sans);
        color: var(--color-text-soft);
    }

    .courses {
        padding: 8rem 0;
        background: var(--color-white);
    }

    .heading {
        max-width: 800px;
        margin-bottom: 4.5rem;
    }

    h2 {
        margin: 0;
        font: 400 clamp(3rem, 5vw, 5.5rem)/0.95 var(--font-serif);
        letter-spacing: -0.04em;
        color: var(--color-text);
    }

    .course-list {
        border-top: 1px solid var(--border-soft);
    }

    .course {
        padding: 3rem 0;
        border-bottom: 1px solid var(--border-soft);
    }

    .course-main {
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        gap: 5rem;
    }

    .course-age {
        margin: 0 0 0.7rem;
        font: 600 0.72rem var(--font-sans);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    h3 {
        margin: 0;
        font: 400 clamp(2.2rem, 4vw, 4rem) var(--font-serif);
        color: var(--color-text);
    }

    .description,
    .location,
    .copy p {
        font: 1rem/1.8 var(--font-sans);
        color: var(--color-text-soft);
    }

    .description {
        margin: 1rem 0 0;
    }

    .course-summary {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .course-summary div {
        padding: 1rem;
        border: 1px solid var(--border-soft);
        margin: 0 -1px -1px 0;
    }

    .course-summary span,
    .small-title {
        display: block;
        margin-bottom: 0.35rem;
        font: 600 0.65rem var(--font-sans);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-text-soft);
    }

    .course-summary strong {
        font: 500 0.9rem var(--font-sans);
        color: var(--color-text);
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 2rem;
    }

    .actions button,
    .actions a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        min-width: 180px;
        padding: 0.95rem 1.1rem;
        font: 500 0.78rem var(--font-sans);
    }

    .details {
        border: 1px solid var(--border-soft);
        background: transparent;
        color: var(--color-text);
    }

    .book {
        background: var(--color-sage-700);
        color: var(--color-cream);
    }

    .expanded {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        margin-top: 3rem;
        padding: 3rem;
        background: var(--color-sage-100);
    }

    .dates {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
    }

    .dates div {
        display: flex;
        gap: 1rem;
        font-family: var(--font-sans);
    }

    .dates span {
        color: var(--color-sage-700);
    }

    .about {
        padding: 9rem 0;
        background: var(--color-cream);
    }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: clamp(4rem, 9vw, 10rem);
    }

    .copy p {
        margin: 0 0 1.5rem;
    }

    @media (max-width: 800px) {
        .hero { padding: 6rem 0; }
        .courses, .about { padding: 6rem 0; }

        .course-main,
        .about-grid,
        .expanded {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .actions {
            justify-content: stretch;
        }

        .actions button,
        .actions a {
            flex: 1;
        }
    }

    @media (max-width: 550px) {
        .hero h1 { font-size: clamp(3.5rem, 17vw, 5rem); }

        .course-summary,
        .dates {
            grid-template-columns: 1fr;
        }

        .actions {
            flex-direction: column;
        }

        .expanded {
            padding: 2rem;
        }
    }
</style>