<script lang="ts">
    import GallerySection from '$lib/components/GallerySection.svelte';
    import PageHero from '$lib/components/layout/PageHero.svelte';
    import SectionHeading from '$lib/components/layout/SectionHeading.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import TextLink from '$lib/components/ui/TextLink.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    const education = [
        {
            year: '2010',
            title: 'Bachelor Konzertfach Klavier',
            description: 'Hochschule für Musik Tōkyō · Klavier-Solistenklasse'
        },
        {
            year: '2014',
            title: 'Master Konzertfach Klavier',
            description: 'Anton Bruckner Privatuniversität · Solistenausbildung'
        },
        {
            year: '2017',
            title: 'Instrumental- und Gesangspädagogik',
            description:
                'Schwerpunkte in Gruppenmusizieren, elementarer Musikpädagogik sowie Instrumental- und Vokalbegleitung'
        },
        {
            year: 'Seit 2017',
            title: 'Elementare Musikpädagogik',
            description:
                'Weiterführendes Studium an der Anton Bruckner Privatuniversität'
        }
    ];
</script>

<svelte:head>
    <title>Über mich | Nanami Shiraki</title>
    <meta
            name="description"
            content="Erfahre mehr über Nanami Shiraki, Pianistin und Klavierpädagogin mit Ausbildung in Japan und Österreich."
    />
</svelte:head>

<main class="about-page">
    <PageHero
            eyebrow="Über mich"
            title="Musik begleitet mich"
            italicTitle="seit meiner Kindheit."
            description="Ich bin Nanami Shiraki, Pianistin und Klavierpädagogin. Aufgewachsen in Japan und heute in Österreich tätig, verbinde ich meine klassische Ausbildung mit großer Freude an Musikvermittlung und pädagogischer Arbeit."
            image={data.heroImage}
    />

    <section class="story">
        <div class="page-container story-grid">
            <div class="number-label">
                <p>01</p>
                <span>Mein Weg</span>
            </div>

            <div class="story-copy">
                <h2>Von Japan nach Österreich</h2>

                <p>
                    Ich wurde in Japan geboren und begann bereits im Alter von
                    drei Jahren mit dem Klavierspiel. Musik war dadurch schon
                    früh ein fester Bestandteil meines Lebens.
                </p>

                <p>
                    Mein Konzertfachstudium absolvierte ich an der Hochschule
                    für Musik Tōkyō in der Klavier-Solistenklasse bei
                    Prof. Atsuko Okada und Prof. Makoto Nakanishi.
                </p>

                <p>
                    Nach meinem Bachelorabschluss führte mich mein musikalischer
                    Weg nach Österreich. An der Anton Bruckner Privatuniversität
                    absolvierte ich mein Masterstudium im Konzertfach Klavier bei
                    Prof. Gottfried Hemetsberger und Prof. Reinhold Puri-Jobi.
                </p>
            </div>
        </div>
    </section>

    <section class="education section-soft">
        <div class="page-container">
            <SectionHeading
                    eyebrow="Ausbildung"
                    title="Konzertfach,"
                    italicTitle="Pädagogik & Vermittlung"
            />

            <div class="timeline">
                {#each education as item}
                    <article class="timeline-item">
                        <p class="year">{item.year}</p>

                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </article>
                {/each}
            </div>
        </div>
    </section>

    <section class="experience">
        <div class="page-container experience-grid">
            <div class="experience-copy">
                <Eyebrow>Konzert & Erfahrung</Eyebrow>

                <h2>
                    Auf der Bühne
                    <span>und darüber hinaus.</span>
                </h2>

                <p>
                    Im Laufe meiner Ausbildung nahm ich an zahlreichen
                    Klaviermeisterkursen in Japan und Europa teil, darunter
                    auch an der „Summer School Klavier“ im Schloss Weinberg.
                </p>

                <p>
                    Seit jungen Jahren konnte ich mehrere Preise bei
                    Wettbewerben in Japan gewinnen. 2013 erhielt ich den
                    dritten Preis beim internationalen Klavierwettbewerb
                    „Città di Barletta“ in Italien.
                </p>

                <p>
                    In Wien bin ich außerdem im Bereich Vokalbegleitung und
                    Korrepetition tätig und konnte dabei unter anderem mit
                    Künstlerinnen und Künstlern aus dem Umfeld der Wiener
                    Staatsoper zusammenarbeiten.
                </p>
            </div>

            <div class="experience-card">
                <p class="card-number">03</p>

                <p class="card-quote">
                    „Musik bedeutet für mich nicht nur Präzision und Technik,
                    sondern vor allem Ausdruck, Neugier und Freude.“
                </p>
            </div>
        </div>
    </section>

    <section class="teaching">
        <div class="page-container teaching-grid">
            <div class="number-label">
                <p>04</p>
                <span>Unterrichten</span>
            </div>

            <div class="teaching-copy">
                <h2>
                    Musik weiterzugeben
                    <span>liegt mir besonders am Herzen.</span>
                </h2>

                <p>
                    Seit 2010 unterrichte ich Klavier für Kinder und Erwachsene.
                    Dabei möchte ich nicht nur Technik vermitteln, sondern einen
                    Raum schaffen, in dem Musik entdeckt, ausprobiert und
                    verstanden werden kann.
                </p>

                <p>
                    Seit 2016 arbeite ich außerdem in der elementaren
                    Musikpädagogik mit Kindern und bin auch im schulischen
                    Umfeld musikalisch tätig.
                </p>

                <TextLink href="/teaching">
                    Mehr über meinen Unterricht
                </TextLink>
            </div>
        </div>
    </section>

    {#if data.galleryImages.length}
        <GallerySection
                images={data.galleryImages}
                eyebrow="Impressionen"
                title="Einblicke in meine"
                italicTitle="musikalische Welt."
                description="Momente aus Musik, Unterricht und meinem musikalischen Weg."
        />
    {/if}
</main>

<style>
    .about-page {
        overflow: hidden;
    }

    .story,
    .experience,
    .teaching,
    .education {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .story-grid,
    .teaching-grid {
        display: grid;
        grid-template-columns: 160px minmax(0, 1fr);
        gap: clamp(3rem, 7vw, 8rem);
    }

    .number-label {
        color: var(--color-cream);
    }

    .number-label p {
        margin-bottom: 0.4rem;

        font-family: var(--font-serif);
        font-size: 2rem;
    }

    .number-label span {
        font-size: 0.7rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
    }

    .story-copy,
    .teaching-copy {
        max-width: 800px;
    }

    .story-copy h2,
    .teaching-copy h2,
    .experience-copy h2 {
        margin-bottom: 2.5rem;

        color: var(--color-sage-700);
    }

    .teaching-copy h2 span,
    .experience-copy h2 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
    }

    .story-copy p,
    .teaching-copy p,
    .experience-copy p {
        max-width: 700px;

        color: var(--color-text-soft);

        font-size: clamp(1rem, 1.15vw, 1.1rem);
        line-height: 1.85;
    }

    .timeline {
        border-top: 1px solid var(--border-soft);
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: 2rem;

        padding: 2.2rem 0;

        border-bottom: 1px solid var(--border-soft);
    }

    .timeline-item .year {
        margin: 0;

        color: var(--color-sage-300);

        font-family: var(--font-serif);
        font-size: 1.3rem;
    }

    .timeline-item h3 {
        margin-bottom: 0.5rem;

        color: var(--color-sage-700);
    }

    .timeline-item p {
        margin-bottom: 0;

        color: var(--color-text-soft);
    }

    .experience-grid {
        display: grid;
        grid-template-columns:
			minmax(0, 1.2fr)
			minmax(280px, 0.8fr);

        align-items: center;
        gap: clamp(4rem, 8vw, 9rem);
    }

    .experience-card {
        padding: clamp(2.5rem, 5vw, 4.5rem);

        background: var(--color-sage-100);
    }

    .card-number {
        margin-bottom: 4rem;

        color: var(--color-sage-300);

        font-family: var(--font-serif);
        font-size: 1.5rem;
    }

    .card-quote {
        margin: 0;

        color: var(--color-sage-700);

        font-family: var(--font-serif);
        font-size: clamp(1.6rem, 2.5vw, 2.6rem);
        font-style: italic;
        line-height: 1.35;
    }

    .teaching {
        background: var(--color-peach);
    }

    @media (max-width: 800px) {
        .experience-grid {
            grid-template-columns: 1fr;
        }

        .story-grid,
        .teaching-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
        }

        .number-label {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .number-label p {
            margin: 0;
        }

        .timeline-item {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        .experience-card {
            margin-top: 1rem;
        }
    }
</style>