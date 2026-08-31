<svelte:head>
    <title>Klavierunterricht | Nanami Shiraki</title>
    <meta
            name="description"
            content="Klavierunterricht für Kinder und Erwachsene in Wien Hietzing – für Anfänger, Fortgeschrittene und Wiedereinsteiger."
    />
</svelte:head>

<script lang="ts">
    /*
     * Preise vor Veröffentlichung unbedingt mit Nanami abklären.
     */

    const yearlyPlans = [
        {
            duration: '30 min',
            price: '80 €'
        },
        {
            duration: '45 min',
            price: '120 €'
        },
        {
            duration: '60 min',
            price: '160 €'
        }
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

<main class="teaching-page">

    <!-- INTRO -->

    <section class="intro">
        <div class="page-container intro-grid">

            <div class="intro-copy">
                <p class="eyebrow">Klavierunterricht</p>

                <h1>
                    Musik entdecken.
                    <span>Im eigenen Tempo.</span>
                </h1>

                <p class="lead">
                    Ich biete Klavierunterricht für Anfänger,
                    Fortgeschrittene und Wiedereinsteiger aller
                    Altersgruppen – individuell abgestimmt auf
                    persönliche Ziele, Interessen und Erfahrungen.
                </p>

                <div class="intro-actions">
                    <a href="#kennenlernen" class="text-link">
                        <span>Kostenlose Probestunde</span>
                        <span>↘</span>
                    </a>

                    <a href="/booking" class="text-link secondary-link">
                        <span>Einzelstunde buchen</span>
                        <span>↗</span>
                    </a>
                </div>
            </div>

            <div class="intro-image">
                <img
                        src="/images/teaching.jpg"
                        alt="Klavierunterricht bei Nanami Shiraki"
                />

                <div class="image-accent"></div>
            </div>

        </div>
    </section>


    <!-- PHILOSOPHY -->

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


    <!-- STUDIO -->

    <section class="studio section-soft">
        <div class="page-container studio-grid">

            <div class="studio-image">
                <img
                        src="/images/piano-studio.jpg"
                        alt="Unterrichtsstudio in Wien Hietzing"
                />
            </div>

            <div class="studio-copy">
                <p class="eyebrow">Das Studio</p>

                <h2>
                    Ein Ort für
                    <span>Musik & Konzentration.</span>
                </h2>

                <p>
                    Der Unterricht findet in meinem gemütlichen
                    Unterrichtsstudio in Wien Hietzing statt.
                </p>

                <p>
                    Das Studio ist mit einem Yamaha-Flügel GB1
                    aus dem Jahr 2017 ausgestattet und bietet einen
                    ruhigen Rahmen, um sich ganz auf die Musik
                    konzentrieren zu können.
                </p>

                <div class="studio-detail">
                    <span>Instrument</span>

                    <div>
                        <strong>Yamaha GB1</strong>
                        <p>Flügel · Baujahr 2017</p>
                    </div>
                </div>

                <div class="studio-detail">
                    <span>Standort</span>

                    <div>
                        <strong>Wien Hietzing</strong>
                        <p>13. Bezirk</p>
                    </div>
                </div>
            </div>

        </div>
    </section>


    <!-- TRIAL -->

    <section class="trial" id="kennenlernen">
        <div class="page-container trial-inner">

            <p class="eyebrow">Kennenlernen</p>

            <h2>
                30 Minuten.
                <span>Ganz unverbindlich.</span>
            </h2>

            <p>
                Damit wir uns kennenlernen können und du einen
                ersten Eindruck von meinem Unterricht bekommst,
                biete ich potenziellen Schülerinnen und Schülern
                eine kostenfreie 30-minütige Probestunde an.
            </p>

            <a href="/contact" class="trial-button">
                <span>Probestunde anfragen</span>
                <span>↗</span>
            </a>

        </div>
    </section>


    <!-- PRICES -->

    <section class="prices">
        <div class="page-container">

            <div class="prices-heading">
                <div>
                    <p class="eyebrow">Unterrichtsmodelle</p>

                    <h2>
                        Flexibel
                        <span>Klavier lernen.</span>
                    </h2>
                </div>

                <p class="prices-intro">
                    Je nachdem, wie regelmäßig oder flexibel du
                    Unterricht nehmen möchtest, stehen verschiedene
                    Unterrichtsmodelle zur Verfügung.
                </p>
            </div>


            <div class="price-grid">

                <!-- YEARLY -->

                <article class="price-card featured">
                    <div class="card-heading">
                        <p class="card-number">01</p>

                        <div>
                            <h3>Jahresvertrag</h3>
                            <p>36 Unterrichtseinheiten pro Jahr</p>
                        </div>
                    </div>

                    <p class="card-description">
                        Drei Unterrichtseinheiten pro Monat mit
                        einem fixen monatlichen Betrag.
                    </p>

                    <div class="price-list">
                        {#each yearlyPlans as plan}
                            <div class="price-row">
                                <div>
                                    <strong>{plan.duration}</strong>
                                </div>

                                <span>{plan.price} / Monat</span>
                            </div>
                        {/each}
                    </div>

                    <a href="/contact" class="card-action subtle">
                        <span>Jahresvertrag anfragen</span>
                        <span>↗</span>
                    </a>
                </article>


                <!-- BLOCK -->

                <article class="price-card">
                    <div class="card-heading">
                        <p class="card-number">02</p>

                        <div>
                            <h3>Stundenblock</h3>
                            <p>Mehr Flexibilität</p>
                        </div>
                    </div>

                    <p class="card-description">
                        Fünf oder zehn Unterrichtseinheiten,
                        flexibel einlösbar und zwei Jahre gültig.
                    </p>

                    {#each lessonBlocks as block}
                        <div class="block-group">
                            <strong>{block.amount}</strong>

                            {#each block.prices as lesson}
                                <div class="price-row">
                                    <span>{lesson.duration}</span>
                                    <span>{lesson.price}</span>
                                </div>
                            {/each}
                        </div>
                    {/each}

                    <a href="/contact" class="card-action subtle">
                        <span>Stundenblock anfragen</span>
                        <span>↗</span>
                    </a>
                </article>


                <!-- SINGLE -->

                <article class="price-card single-card">

                    <div class="booking-badge">
                        Direkt buchbar
                    </div>

                    <div class="card-heading">
                        <p class="card-number">03</p>

                        <div>
                            <h3>Einzelstunde</h3>
                            <p>Maximale Flexibilität</p>
                        </div>
                    </div>

                    <p class="card-description">
                        Einzelne Unterrichtseinheiten ohne
                        längerfristige Bindung. Termin einfach
                        online auswählen und direkt buchen.
                    </p>

                    <div class="price-list">
                        {#each singleLessons as lesson}
                            <div class="price-row">
                                <span>{lesson.duration}</span>
                                <span>{lesson.price}</span>
                            </div>
                        {/each}
                    </div>

                    <a href="/booking" class="booking-button">
                        <div>
                            <small>Online-Terminbuchung</small>
                            <span>Einzelstunde buchen</span>
                        </div>

                        <span class="booking-arrow">↗</span>
                    </a>

                </article>

            </div>

        </div>
    </section>


    <!-- MORE THAN LESSONS -->

    <section class="more section-peach">
        <div class="page-container more-grid">

            <div>
                <p class="eyebrow">Mehr als Unterricht</p>

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


    <!-- CTA -->

    <section class="contact-cta">
        <div class="page-container contact-inner">

            <p>Bereit für die erste Stunde?</p>

            <h2>
                Dein Weg am Klavier
                <span>beginnt hier.</span>
            </h2>

            <p class="cta-description">
                Lerne meinen Unterricht zuerst unverbindlich kennen
                oder buche direkt eine einzelne Unterrichtseinheit.
            </p>

            <div class="cta-actions">
                <a href="/contact" class="cta-link">
                    <span>Probestunde anfragen</span>
                    <span>↗</span>
                </a>

                <a href="/booking" class="cta-booking">
                    <span>Einzelstunde buchen</span>
                    <span>↗</span>
                </a>
            </div>

        </div>
    </section>

</main>


<style>
    .teaching-page {
        overflow: hidden;
    }


    /* --------------------------------
       Shared
    -------------------------------- */

    .eyebrow {
        margin-bottom: 1.5rem;

        color: var(--color-cream);

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


    /* --------------------------------
       Intro
    -------------------------------- */

    .intro {
        padding:
                clamp(5rem, 8vw, 8rem)
                0
                clamp(7rem, 11vw, 11rem);

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

    h1 {
        margin-bottom: 2.5rem;

        color: var(--color-sage-700);
    }

    .lead {
        max-width: 650px;

        color: var(--color-text-soft);

        font-size: clamp(1.1rem, 1.5vw, 1.35rem);
        line-height: 1.8;
    }

    .intro-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem 2.5rem;

        margin-top: 2rem;
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

        background: var(--color-peach);
    }

    .text-link {
        display: inline-flex;
        align-items: center;
        gap: 2rem;

        padding-bottom: 0.5rem;

        border-bottom: 1px solid var(--color-sage-700);

        color: var(--color-sage-700);

        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.07em;

        transition:
                gap var(--transition-fast),
                opacity var(--transition-fast);
    }

    .text-link:hover {
        gap: 2.5rem;
    }

    .secondary-link {
        color: var(--color-text-soft);
        border-color: var(--border-soft);
    }

    .secondary-link:hover {
        color: var(--color-sage-700);
        border-color: var(--color-sage-700);
    }


    /* --------------------------------
       Philosophy
    -------------------------------- */

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


    /* --------------------------------
       Studio
    -------------------------------- */

    .studio {
        padding-block: clamp(6rem, 10vw, 10rem);
    }

    .studio-grid {
        display: grid;
        grid-template-columns:
			minmax(0, 1fr)
			minmax(0, 0.9fr);

        align-items: center;
        gap: clamp(4rem, 8vw, 9rem);
    }

    .studio-image img {
        width: 100%;
        aspect-ratio: 4 / 3;

        object-fit: cover;
    }

    .studio-copy h2 {
        margin-bottom: 2.5rem;

        color: var(--color-sage-700);
    }

    .studio-copy > p {
        color: var(--color-text-soft);

        line-height: 1.8;
    }

    .studio-detail {
        display: grid;
        grid-template-columns: 100px 1fr;

        gap: 1.5rem;
        padding: 1.5rem 0;

        border-top: 1px solid var(--border-soft);
    }

    .studio-detail:first-of-type {
        margin-top: 2.5rem;
    }

    .studio-detail > span {
        color: var(--color-sage-300);

        font-size: 0.68rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .studio-detail strong {
        font-family: var(--font-serif);
        font-size: 1.15rem;
        font-weight: 400;
    }

    .studio-detail p {
        margin: 0.25rem 0 0;

        color: var(--color-text-soft);

        font-size: 0.85rem;
    }


    /* --------------------------------
       Trial
    -------------------------------- */

    .trial {
        padding-block: clamp(7rem, 13vw, 13rem);

        background: var(--color-sage-700);
    }

    .trial-inner {
        max-width: 900px;

        text-align: center;
    }

    .trial .eyebrow {
        color: var(--color-sage-300);
    }

    .trial h2 {
        color: var(--color-cream);
    }

    .trial h2 span {
        color: var(--color-sage-100);
    }

    .trial p:not(.eyebrow) {
        max-width: 620px;

        margin: 2.5rem auto;

        color: var(--color-sage-100);

        font-size: 1.05rem;
        line-height: 1.8;
    }

    .trial-button {
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

    .trial-button:hover {
        gap: 3rem;

        background: var(--color-cream);
        color: var(--color-sage-700);
    }


    /* --------------------------------
       Prices
    -------------------------------- */

    .prices {
        padding-block: clamp(6rem, 10vw, 10rem);

        background: var(--color-cream);
    }

    .prices-heading {
        display: grid;
        grid-template-columns: 1fr 0.7fr;

        align-items: end;
        gap: 4rem;

        margin-bottom: clamp(4rem, 7vw, 7rem);
    }

    .prices-heading h2 {
        margin: 0;

        color: var(--color-sage-700);
    }

    .prices-intro {
        max-width: 480px;

        color: var(--color-text-soft);

        line-height: 1.8;
    }

    .price-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        border-top: 1px solid var(--border-soft);
        border-bottom: 1px solid var(--border-soft);
    }

    .price-card {
        position: relative;

        display: flex;
        flex-direction: column;

        padding: clamp(2rem, 4vw, 3.5rem);

        border-right: 1px solid var(--border-soft);
    }

    .price-card:first-child {
        padding-left: 0;
    }

    .price-card:last-child {
        border-right: 0;
    }

    .card-heading {
        display: flex;
        gap: 1.5rem;

        margin-bottom: 2rem;
    }

    .card-number {
        color: var(--color-sage-300);

        font-size: 0.65rem;
    }

    .card-heading h3 {
        margin-bottom: 0.3rem;

        color: var(--color-sage-700);
    }

    .card-heading p {
        margin: 0;

        color: var(--color-text-soft);

        font-size: 0.8rem;
    }

    .card-description {
        min-height: 75px;

        color: var(--color-text-soft);

        font-size: 0.9rem;
        line-height: 1.7;
    }

    .price-list,
    .block-group {
        margin-top: 2rem;
    }

    .block-group + .block-group {
        margin-top: 2.5rem;
    }

    .price-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 1rem;

        padding: 0.9rem 0;

        border-bottom: 1px solid var(--border-soft);

        font-size: 0.88rem;
    }

    .price-row div {
        display: flex;
        flex-direction: column;
    }

    .price-row small {
        margin-top: 0.2rem;

        color: var(--color-text-soft);

        font-size: 0.65rem;
    }

    .booking-badge {
        align-self: flex-start;

        margin-bottom: 1.5rem;
        padding: 0.45rem 0.7rem;

        border: 1px solid var(--color-sage-300);
        border-radius: 999px;

        color: var(--color-sage-700);

        font-size: 0.63rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .card-action {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        margin-top: auto;
        padding-top: 2.5rem;

        color: var(--color-sage-700);

        font-size: 0.72rem;
        letter-spacing: 0.06em;
    }

    .card-action.subtle {
        opacity: 0.72;
    }

    .card-action:hover {
        opacity: 1;
    }

    .booking-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;

        margin-top: 3rem;
        padding: 1.25rem 1.35rem;

        background: var(--color-sage-700);
        color: var(--color-cream);

        transition:
                transform var(--transition-fast),
                background var(--transition-fast);
    }

    .booking-button div {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .booking-button small {
        color: var(--color-sage-100);

        font-size: 0.62rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .booking-button > div > span {
        font-family: var(--font-serif);
        font-size: 1.15rem;
    }

    .booking-arrow {
        font-size: 1.2rem;

        transition: transform var(--transition-fast);
    }

    .booking-button:hover {
        transform: translateY(-2px);
    }

    .booking-button:hover .booking-arrow {
        transform: translate(3px, -3px);
    }


    /* --------------------------------
       More
    -------------------------------- */

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


    /* --------------------------------
       Contact CTA
    -------------------------------- */

    .contact-cta {
        padding-block: clamp(7rem, 12vw, 12rem);

        background: var(--color-cream);
    }

    .contact-inner {
        max-width: 900px;

        text-align: center;
    }

    .contact-inner > p:first-child {
        margin-bottom: 1.5rem;

        color: var(--color-sage-300);

        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.16em;
        text-transform: uppercase;
    }

    .contact-inner h2 {
        margin: 0 auto;

        color: var(--color-sage-700);
    }

    .contact-inner h2 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
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

    .cta-link {
        display: inline-flex;
        align-items: center;
        gap: 2.5rem;

        padding-bottom: 0.6rem;

        border-bottom: 1px solid var(--color-sage-700);

        color: var(--color-sage-700);

        font-size: 0.8rem;
        letter-spacing: 0.08em;

        transition: gap var(--transition-fast);
    }

    .cta-link:hover {
        gap: 3rem;
    }

    .cta-booking {
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

    .cta-booking:hover {
        gap: 3rem;
        transform: translateY(-2px);
    }


    /* --------------------------------
       Mobile
    -------------------------------- */

    @media (max-width: 800px) {
        .intro {
            padding-top: 4rem;
        }

        .intro-grid,
        .studio-grid,
        .prices-heading,
        .more-grid {
            grid-template-columns: 1fr;
        }

        .intro-actions {
            flex-direction: column;
            align-items: flex-start;

            gap: 1.5rem;
        }

        .intro-image {
            width: min(88%, 460px);
            margin-inline: auto;
        }

        .image-accent {
            right: -1rem;
            bottom: -1rem;
        }

        .philosophy-grid {
            grid-template-columns: 1fr;
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

        .text-columns {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .features {
            grid-template-columns: 1fr;
        }

        .features article,
        .features article:first-child {
            padding: 2rem 0;

            border-right: 0;
            border-bottom: 1px solid var(--border-soft);
        }

        .price-grid {
            grid-template-columns: 1fr;
        }

        .price-card,
        .price-card:first-child {
            padding: 2.5rem 0;

            border-right: 0;
            border-bottom: 1px solid var(--border-soft);
        }

        .price-card:last-child {
            border-bottom: 0;
        }

        .card-description {
            min-height: auto;
        }

        .booking-button {
            margin-top: 2.5rem;
        }

        .more-items {
            margin-top: 1rem;
        }

        .cta-actions {
            flex-direction: column;
        }

        .cta-link,
        .cta-booking {
            width: min(100%, 320px);
            justify-content: space-between;
        }
    }
</style>