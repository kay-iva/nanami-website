<script lang="ts">
    import CourseCard from '$lib/components/music-group/CourseCard.svelte';
    import GallerySection from '$lib/components/GallerySection.svelte';
    import SectionHeading from '$lib/components/layout/SectionHeading.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import { booking } from '$lib/config/booking';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Musikgruppen | Nanami Shiraki</title>

    <meta
            name="description"
            content="Musik, Bewegung und gemeinsames Erleben für Babys, Kinder und ihre Eltern in Wien."
    />
</svelte:head>

<main class="music-group-page">
    <section class="hero">
        <div class="page-container">
            <Eyebrow>Musikgruppen</Eyebrow>

            <h1>
                Gemeinsam Musik
                <span>entdecken.</span>
            </h1>

            <p class="lead">
                Musik, Bewegung, Nähe und gemeinsames Erleben –
                spielerische musikalische Erfahrungen für die
                Kleinsten und ihre Eltern.
            </p>
        </div>
    </section>

    <section class="courses">
        <div class="page-container">
            <SectionHeading
                    eyebrow="Aktuelle Kurse"
                    title="Unsere nächsten"
                    italicTitle="Musikmomente."
            />

            <div class="course-list">
                {#each data.courses as course}
                    <CourseCard
                            {course}
                            bookingLink={booking.courses.rhythmik}
                    />
                {/each}
            </div>
        </div>
    </section>

    <section class="about">
        <div class="page-container about-grid">
            <div>
                <Eyebrow>Von Anfang an</Eyebrow>

                <h2>
                    Musik mit allen
                    <span>Sinnen erleben.</span>
                </h2>
            </div>

            <div class="copy">
                <p>
                    Schon früh sammeln Babys Erfahrungen mit Musik
                    und Bewegung. Sie hören vertraute Stimmen,
                    Rhythmen und Klänge und erleben Musik gemeinsam
                    mit ihren Bezugspersonen.
                </p>

                <p>
                    In einer freundlichen Atmosphäre entdecken wir
                    Kinderlieder, Bewegungs- und Fingerspiele, neue
                    Melodien und gemeinsames rhythmisches Bewegen.
                </p>

                <p>
                    Dabei gibt es Raum für Wiegen, Kuscheln,
                    Ruhephasen, gemeinsames Aktivsein und den
                    Austausch zwischen Eltern.
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
    .music-group-page {
        overflow: hidden;
    }

    .hero {
        padding: 9rem 0 7rem;

        background: var(--color-cream);
    }

    .hero :global(.eyebrow) {
        color: var(--color-sage-700);
    }

    .hero h1 {
        max-width: 900px;

        margin: 0;

        color: var(--color-text);

        font-family: var(--font-serif);
        font-size: clamp(4rem, 8vw, 8rem);
        font-weight: 400;
        letter-spacing: -0.055em;
        line-height: 0.88;
    }

    .hero h1 span {
        display: block;

        color: var(--color-sage-700);
        font-style: italic;
    }

    .lead {
        max-width: 650px;

        margin: 2.5rem 0 0;

        color: var(--color-text-soft);

        font-size: 1.1rem;
        line-height: 1.8;
    }

    .courses {
        padding: 8rem 0;

        background: var(--color-white);
    }

    .courses :global(header) {
        max-width: 800px;

        margin-bottom: 4.5rem;
    }

    .course-list {
        border-top: 1px solid var(--border-soft);
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

    .about h2 {
        margin: 0;

        color: var(--color-text);
    }

    .about h2 span {
        display: block;

        color: var(--color-sage-700);
        font-style: italic;
    }

    .copy p {
        margin: 0 0 1.5rem;

        color: var(--color-text-soft);

        font-size: 1rem;
        line-height: 1.8;
    }

    @media (max-width: 800px) {
        .hero {
            padding: 6rem 0;
        }

        .courses,
        .about {
            padding: 6rem 0;
        }

        .about-grid {
            grid-template-columns: 1fr;

            gap: 3rem;
        }
    }

    @media (max-width: 550px) {
        .hero h1 {
            font-size: clamp(3.5rem, 17vw, 5rem);
        }
    }
</style>