<svelte:head>
    <title>Über mich | Nanami Shiraki</title>
    <meta
            name="description"
            content="Erfahre mehr über Nanami Shiraki, Pianistin und Klavierpädagogin mit Ausbildung in Japan und Österreich."
    />
</svelte:head>

<main class="about-page">
    <section class="intro">
        <div class="page-container intro-grid">
            <div class="intro-copy">
                <p class="eyebrow">Über mich</p>

                <h1>
                    Musik begleitet mich
                    <span>seit meiner Kindheit.</span>
                </h1>

                <p class="lead">
                    Ich bin Nanami Shiraki, Pianistin und Klavierpädagogin.
                    Aufgewachsen in Japan und heute in Österreich tätig,
                    verbinde ich meine klassische Ausbildung mit großer Freude
                    an Musikvermittlung und pädagogischer Arbeit.
                </p>
            </div>

            <div class="intro-image">
                <img
                        src="/images/about.jpg"
                        alt="Nanami Shiraki"
                />

                <div class="image-accent"></div>
            </div>
        </div>
    </section>

    <section class="story">
        <div class="page-container story-grid">
            <div class="story-label">
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
            <div class="section-heading">
                <p class="eyebrow">Ausbildung</p>

                <h2>
                    Konzertfach,
                    <span>Pädagogik & Vermittlung</span>
                </h2>
            </div>

            <div class="timeline">
                <article class="timeline-item">
                    <p class="year">2010</p>

                    <div>
                        <h3>Bachelor Konzertfach Klavier</h3>

                        <p>
                            Hochschule für Musik Tōkyō ·
                            Klavier-Solistenklasse
                        </p>
                    </div>
                </article>

                <article class="timeline-item">
                    <p class="year">2014</p>

                    <div>
                        <h3>Master Konzertfach Klavier</h3>

                        <p>
                            Anton Bruckner Privatuniversität ·
                            Solistenausbildung
                        </p>
                    </div>
                </article>

                <article class="timeline-item">
                    <p class="year">2017</p>

                    <div>
                        <h3>Instrumental- und Gesangspädagogik</h3>

                        <p>
                            Schwerpunkte in Gruppenmusizieren,
                            elementarer Musikpädagogik sowie
                            Instrumental- und Vokalbegleitung
                        </p>
                    </div>
                </article>

                <article class="timeline-item">
                    <p class="year">Seit 2017</p>

                    <div>
                        <h3>Elementare Musikpädagogik</h3>

                        <p>
                            Weiterführendes Studium an der
                            Anton Bruckner Privatuniversität
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section class="experience">
        <div class="page-container experience-grid">
            <div class="experience-copy">
                <p class="eyebrow">Konzert & Erfahrung</p>

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

    <section class="teaching section-peach">
        <div class="page-container teaching-grid">
            <div class="teaching-label">
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

                <a href="/teaching" class="text-link">
                    <span>Mehr über meinen Unterricht</span>
                    <span>↗</span>
                </a>
            </div>
        </div>
    </section>
</main>

<style>
    .about-page {
        overflow: hidden;
    }

    .intro {
        padding:
                clamp(5rem, 8vw, 8rem)
                0
                clamp(6rem, 10vw, 10rem);

        background: var(--color-cream);
    }

    .intro-grid {
        display: grid;
        grid-template-columns:
			minmax(0, 1.05fr)
			minmax(320px, 0.95fr);

        align-items: center;
        gap: clamp(4rem, 8vw, 8rem);
    }

    .intro-copy {
        max-width: 760px;
    }

    .eyebrow {
        margin-bottom: 1.5rem;

        color: var(--color-sage-300);

        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    h1 {
        margin-bottom: 2.5rem;

        color: var(--color-sage-700);
    }

    h1 span,
    h2 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
    }

    .lead {
        max-width: 650px;

        color: var(--color-text-soft);

        font-size: clamp(1.1rem, 1.5vw, 1.35rem);
        line-height: 1.8;
    }

    .intro-image {
        position: relative;
    }

    .intro-image img {
        position: relative;
        z-index: 2;

        width: 100%;
        aspect-ratio: 4 / 5;

        object-fit: cover;
    }

    .image-accent {
        position: absolute;
        right: -2rem;
        bottom: -2rem;
        z-index: 1;

        width: 60%;
        height: 60%;

        background: var(--color-sage-100);
    }

    .story,
    .experience,
    .teaching {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .story-grid,
    .teaching-grid {
        display: grid;
        grid-template-columns: 160px minmax(0, 1fr);

        gap: clamp(3rem, 7vw, 8rem);
    }

    .story-label,
    .teaching-label {
        color: var(--color-cream);
    }

    .story-label p,
    .teaching-label p {
        margin-bottom: 0.4rem;

        font-family: var(--font-serif);
        font-size: 2rem;
    }

    .story-label span,
    .teaching-label span {
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

    .story-copy p,
    .teaching-copy p,
    .experience-copy p {
        max-width: 700px;

        color: var(--color-text-soft);

        font-size: clamp(1rem, 1.15vw, 1.1rem);
        line-height: 1.85;
    }

    .education {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .section-heading {
        max-width: 750px;
        margin-bottom: clamp(4rem, 7vw, 7rem);
    }

    .section-heading h2 {
        color: var(--color-sage-700);
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

    .text-link {
        display: inline-flex;
        align-items: center;
        gap: 2rem;

        margin-top: 2.5rem;
        padding-bottom: 0.5rem;

        border-bottom: 1px solid var(--color-sage-700);

        color: var(--color-sage-700);

        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.07em;

        transition: gap var(--transition-fast);
    }

    .text-link:hover {
        gap: 2.5rem;
    }

    @media (max-width: 800px) {
        .intro {
            padding-top: 4rem;
        }

        .intro-grid,
        .experience-grid {
            grid-template-columns: 1fr;
        }

        .intro-image {
            width: min(88%, 460px);
            margin-inline: auto;
        }

        .image-accent {
            right: -1rem;
            bottom: -1rem;
        }

        .story-grid,
        .teaching-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
        }

        .story-label,
        .teaching-label {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .story-label p,
        .teaching-label p {
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