<script lang="ts">
    import GallerySection from '$lib/components/GallerySection.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    const registrationUrl = '#'; // TODO: Edoobox-Link einsetzen
</script>

<svelte:head>
    <title>Musikgruppe | Nanami Shiraki</title>
    <meta
            name="description"
            content="Musik, Bewegung und gemeinsames Erleben für Babys und ihre Eltern in Wien."
    />
</svelte:head>

<main>
    <section class="hero">
        <div class="page-container hero-grid">
            <div>
                <p class="eyebrow">Musikgruppe</p>
                <h1>Gemeinsam Musik <span>entdecken.</span></h1>
                <p class="lead">
                    Musik, Bewegung und Nähe – erste musikalische Erfahrungen für Babys gemeinsam mit Mama oder Papa.
                </p>
            </div>

            <div class="course-card">
                <p class="label">Aktueller Kurs</p>
                <h2>Rhythmik-SpielWiese</h2>
                <p class="age">für Babys ca. 4–7 Monate & Mama/Papa</p>

                <div class="facts">
                    <div><span>Tag</span><strong>Donnerstag</strong></div>
                    <div><span>Zeit</span><strong>09:10–10:00 Uhr</strong></div>
                    <div><span>Umfang</span><strong>10 Einheiten · 50 Min.</strong></div>
                    <div><span>Zeitraum</span><strong>24.09.–03.12.2026</strong></div>
                    <div><span>Ort</span><strong>RhythmikStudio, 1030 Wien</strong></div>
                    <div><span>Preis</span><strong>€ 215</strong></div>
                </div>

                <a class="cta" href={registrationUrl}>Jetzt anmelden <span>↗</span></a>
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
                    Schon im Mutterleib sammeln Babys erste Erfahrungen mit Musik und Bewegung. Sie spüren Bewegungen, hören den Herzschlag und die Stimme ihrer Mutter und erleben vertraute Klänge.
                </p>
                <p>
                    In einer freundlichen und wohlfühlenden Atmosphäre entdecken wir gemeinsam Klänge, Kinderlieder sowie Bewegungs- und Fingerspiele.
                </p>
                <p>
                    Wir lernen neue Melodien kennen und tanzen einfache Bewegungen, die uns sanft und rhythmisch miteinander in Kontakt bringen.
                </p>
            </div>
        </div>
    </section>

    <section class="experience">
        <div class="page-container">
            <div class="experience-heading">
                <p class="eyebrow">Gemeinsam erleben</p>
                <h2>Wiegen, Kuscheln, Ruhephasen <span>und gemeinsames Aktivsein.</span></h2>
            </div>

            <div class="cards">
                <article>
                    <span>01</span>
                    <h3>Klänge</h3>
                    <p>Gemeinsam hören, entdecken und erste musikalische Eindrücke sammeln.</p>
                </article>
                <article>
                    <span>02</span>
                    <h3>Bewegung</h3>
                    <p>Sanfte Bewegungen, Rhythmus und spielerischer Kontakt zwischen Eltern und Baby.</p>
                </article>
                <article>
                    <span>03</span>
                    <h3>Gemeinschaft</h3>
                    <p>Raum für Austausch unter Eltern über Schönes, Lustiges, Bewegendes und Alltägliches.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="signup">
        <div class="page-container signup-inner">
            <div>
                <p class="eyebrow">Rhythmik-SpielWiese</p>
                <h2>Lust auf gemeinsame <span>Musikzeit?</span></h2>
            </div>
            <a class="cta dark" href={registrationUrl}>Zum Kurs anmelden <span>↗</span></a>
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
        padding: 9rem 0 8rem;
        background: var(--color-cream);
    }

    .hero-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: clamp(4rem, 8vw, 9rem);
        align-items: center;
    }

    .eyebrow {
        margin: 0 0 1.5rem;
        font: 600 0.72rem var(--font-sans);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    h1, h2 {
        margin: 0;
        font-family: var(--font-serif);
        font-weight: 400;
        color: var(--color-text);
    }

    h1 {
        max-width: 760px;
        font-size: clamp(4rem, 7vw, 7.5rem);
        line-height: 0.9;
        letter-spacing: -0.05em;
    }

    h1 span, h2 span {
        display: block;
        font-style: italic;
        color: var(--color-sage-700);
    }

    .lead {
        max-width: 600px;
        margin: 2.5rem 0 0;
        font: 1.1rem/1.8 var(--font-sans);
        color: var(--color-text-soft);
    }

    .course-card {
        padding: clamp(2rem, 4vw, 3.5rem);
        background: var(--color-white);
        box-shadow: var(--shadow-soft);
    }

    .course-card .label {
        margin: 0 0 0.8rem;
        font: 600 0.7rem var(--font-sans);
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    .course-card h2 {
        font-size: clamp(2rem, 3vw, 3rem);
    }

    .age {
        margin: 0.5rem 0 2.5rem;
        font: 1rem/1.5 var(--font-sans);
        color: var(--color-text-soft);
    }

    .facts {
        border-top: 1px solid var(--border-soft);
    }

    .facts div {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        padding: 0.9rem 0;
        border-bottom: 1px solid var(--border-soft);
        font-family: var(--font-sans);
    }

    .facts span {
        color: var(--color-text-soft);
    }

    .facts strong {
        text-align: right;
        font-weight: 500;
        color: var(--color-text);
    }

    .cta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        padding: 1rem 1.2rem;
        background: var(--color-sage-700);
        color: var(--color-cream);
        font: 500 0.82rem var(--font-sans);
        letter-spacing: 0.05em;
        transition: opacity var(--transition-fast);
    }

    .cta:hover { opacity: 0.85; }

    .about {
        padding: 9rem 0;
        background: var(--color-sage-100);
    }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: clamp(4rem, 9vw, 10rem);
    }

    .about h2, .experience h2, .signup h2 {
        font-size: clamp(3rem, 5vw, 5.5rem);
        line-height: 0.95;
        letter-spacing: -0.04em;
    }

    .copy p {
        margin: 0 0 1.5rem;
        font: 1rem/1.85 var(--font-sans);
        color: var(--color-text-soft);
    }

    .experience {
        padding: 9rem 0;
        background: var(--color-white);
    }

    .experience-heading {
        max-width: 900px;
        margin-bottom: 5rem;
    }

    .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-top: 1px solid var(--border-soft);
    }

    .cards article {
        padding: 2.5rem;
        border-right: 1px solid var(--border-soft);
    }

    .cards article:last-child { border-right: 0; }

    .cards span {
        font: 0.72rem var(--font-sans);
        color: var(--color-sage-700);
    }

    .cards h3 {
        margin: 2.5rem 0 1rem;
        font: 400 2rem var(--font-serif);
        color: var(--color-text);
    }

    .cards p {
        margin: 0;
        font: 0.95rem/1.7 var(--font-sans);
        color: var(--color-text-soft);
    }

    .signup {
        padding: 7rem 0;
        background: var(--color-peach);
    }

    .signup-inner {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 4rem;
    }

    .signup h2 { max-width: 800px; }

    .dark {
        flex: 0 0 260px;
        margin: 0;
    }

    @media (max-width: 850px) {
        .hero { padding: 6rem 0; }

        .hero-grid, .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
        }

        .cards {
            grid-template-columns: 1fr;
        }

        .cards article {
            border-right: 0;
            border-bottom: 1px solid var(--border-soft);
        }

        .signup-inner {
            align-items: stretch;
            flex-direction: column;
        }

        .dark { flex: auto; }
    }

    @media (max-width: 550px) {
        .hero { padding: 4.5rem 0; }

        h1 { font-size: clamp(3.4rem, 17vw, 5rem); }

        .facts div {
            flex-direction: column;
            gap: 0.3rem;
        }

        .facts strong { text-align: left; }

        .about, .experience, .signup { padding: 5rem 0; }
        .cards article { padding: 2rem 0; }
    }
</style>