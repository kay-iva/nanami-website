<section class="teaching section">
    <div class="page-container teaching-inner">
        <div class="teaching-content">
            <p class="eyebrow">Klavierunterricht</p>

            <h2>
                Musik entdecken.
                <span>Im eigenen Tempo.</span>
            </h2>

            <div class="teaching-copy">
                <p>
                    Ich unterrichte Kinder, Jugendliche und Erwachsene –
                    vom ersten Kontakt mit dem Klavier bis hin zu
                    Fortgeschrittenen und Wiedereinsteigern.
                </p>

                <p>
                    Dabei steht für mich nicht nur das Erlernen von Technik
                    im Mittelpunkt. Der Unterricht soll Raum geben, Musik
                    mit Neugier zu entdecken, eigene Fortschritte zu erleben
                    und langfristig Freude am Musizieren zu entwickeln.
                </p>
            </div>

            <div class="teaching-details">
                <div>
                    <span class="number">01</span>

                    <p>
                        Kinder &<br />
                        Erwachsene
                    </p>
                </div>

                <div>
                    <span class="number">02</span>

                    <p>
                        Anfänger &<br />
                        Fortgeschrittene
                    </p>
                </div>

                <div>
                    <span class="number">03</span>

                    <p>
                        Wien
                    </p>
                </div>
            </div>

            <a class="teaching-link" href="/teaching">
                <span>Mehr zum Unterricht</span>
                <span class="arrow">↗</span>
            </a>
        </div>

        <div class="teaching-image">
            <div class="image-accent"></div>

            <img
                    src="/images/teaching.jpg"
                    alt="Klavierunterricht bei Nanami Shiraki"
            />

            <div class="image-note">
                <span>30 min</span>
                <p>Kostenlose Probestunde</p>
            </div>
        </div>
    </div>
</section>

<style>
    .teaching {
        position: relative;

        overflow: hidden;

        background: var(--color-sage-100);
    }

    .teaching-inner {
        display: grid;
        grid-template-columns:
			minmax(0, 1.1fr)
			minmax(0, 0.9fr);

        align-items: center;

        gap: clamp(4rem, 8vw, 9rem);
    }


    /* --------------------------------
       Content
    -------------------------------- */

    .teaching-content {
        max-width: 680px;
    }

    .eyebrow {
        margin-bottom: 1.5rem;

        color: var(--color-sage-300);

        font-size: 0.72rem;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    h2 {
        margin-bottom: clamp(2rem, 4vw, 3rem);

        color: var(--color-sage-700);
    }

    h2 span {
        display: block;

        margin-left: clamp(1rem, 4vw, 4rem);

        color: var(--color-text);

        font-style: italic;
    }

    .teaching-copy {
        max-width: 570px;

        color: var(--color-text-soft);

        font-size: clamp(1rem, 1.2vw, 1.1rem);
        line-height: 1.8;
    }

    .teaching-copy p:last-child {
        margin-bottom: 0;
    }


    /* --------------------------------
       Little info row
    -------------------------------- */

    .teaching-details {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        max-width: 570px;

        margin-top: 3rem;

        border-top: 1px solid var(--border-soft);
        border-bottom: 1px solid var(--border-soft);
    }

    .teaching-details > div {
        padding: 1.25rem 1.25rem 1.25rem 0;

        border-right: 1px solid var(--border-soft);
    }

    .teaching-details > div:not(:first-child) {
        padding-left: 1.25rem;
    }

    .teaching-details > div:last-child {
        border-right: 0;
    }

    .number {
        display: block;

        margin-bottom: 0.65rem;

        color: var(--color-sage-300);

        font-size: 0.6rem;
        letter-spacing: 0.08em;
    }

    .teaching-details p {
        margin: 0;

        color: var(--color-sage-700);

        font-family: var(--font-serif);
        font-size: 0.95rem;
        line-height: 1.35;
    }


    /* --------------------------------
       Link
    -------------------------------- */

    .teaching-link {
        display: inline-flex;
        align-items: center;

        gap: 2rem;

        margin-top: 2.5rem;
        padding-bottom: 0.5rem;

        border-bottom: 1px solid var(--color-sage-300);

        color: var(--color-sage-700);

        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.08em;

        transition:
                gap var(--transition-fast),
                color var(--transition-fast);
    }

    .teaching-link:hover {
        gap: 2.5rem;

        color: var(--color-text);
    }

    .arrow {
        font-size: 1rem;
    }


    /* --------------------------------
       Image
    -------------------------------- */

    .teaching-image {
        position: relative;

        width: 100%;
        max-width: 540px;

        margin-inline: auto;
    }

    .teaching-image img {
        position: relative;
        z-index: 2;

        width: 100%;
        aspect-ratio: 4 / 5;

        object-fit: cover;
    }

    .image-accent {
        position: absolute;
        z-index: 1;

        left: -2rem;
        bottom: -2rem;

        width: 65%;
        height: 65%;

        background: var(--color-peach);
    }


    /* --------------------------------
       Floating trial card
    -------------------------------- */

    .image-note {
        position: absolute;
        right: -2rem;
        bottom: 3rem;
        z-index: 3;

        width: 170px;

        padding: 1.4rem;

        background: var(--color-cream);

        box-shadow: var(--shadow-soft);
    }

    .image-note span {
        display: block;

        margin-bottom: 0.5rem;

        color: var(--color-sage-300);

        font-family: var(--font-serif);
        font-size: 1.7rem;
    }

    .image-note p {
        margin: 0;

        color: var(--color-sage-700);

        font-size: 0.68rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        line-height: 1.5;
        text-transform: uppercase;
    }


    /* --------------------------------
       Mobile
    -------------------------------- */

    @media (max-width: 800px) {
        .teaching-inner {
            grid-template-columns: 1fr;

            gap: 4rem;
        }

        .teaching-content {
            max-width: none;
        }

        h2 span {
            margin-left: 0.5rem;
        }

        .teaching-details {
            max-width: none;
        }

        .teaching-image {
            width: min(85%, 430px);
        }

        .image-accent {
            left: -1rem;
            bottom: -1rem;
        }

        .image-note {
            right: -1.5rem;
            bottom: 2rem;

            width: 150px;

            padding: 1.2rem;
        }

        .image-note span {
            font-size: 1.45rem;
        }
    }

    @media (max-width: 500px) {
        .teaching-details {
            grid-template-columns: 1fr;
        }

        .teaching-details > div,
        .teaching-details > div:not(:first-child) {
            padding: 1rem 0;

            border-right: 0;
            border-bottom: 1px solid var(--border-soft);
        }

        .teaching-details > div:last-child {
            border-bottom: 0;
        }

        .teaching-image {
            width: calc(100% - 1.5rem);

            margin-left: 0;
        }

        .image-note {
            right: -1.5rem;
        }
    }
</style>