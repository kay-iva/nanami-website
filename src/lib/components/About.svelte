<section class="about section">
    <div class="page-container about-inner">
        <div class="about-image">
            <img
                    src="/images/about.jpg"
                    alt="Nanami Shiraki"
            />

            <div class="image-accent"></div>
        </div>

        <div class="about-content">
            <p class="eyebrow">Über mich</p>

            <h2>
                Von Japan
                <span>nach Wien</span>
            </h2>

            <div class="about-copy">
                <p>
                    Ich bin Nanami Shiraki, Pianistin und Klavierpädagogin. Geboren und
                    aufgewachsen in Japan, begleitet mich das Klavier bereits seit meinem
                    dritten Lebensjahr. Nach meinem Konzertfachstudium an der Hochschule
                    für Musik Tōkyō führte mich mein musikalischer Weg nach Österreich,
                    wo ich mein Masterstudium im Konzertfach Klavier an der Anton Bruckner
                    Privatuniversität absolvierte.
                </p>

                <p>
                    Neben meiner Tätigkeit als Pianistin liegt mir besonders die
                    Musikpädagogik am Herzen. Seit vielen Jahren begleite ich Kinder und
                    Erwachsene auf ihrem eigenen musikalischen Weg und möchte dabei vor
                    allem eines vermitteln: die Freude daran, Musik zu entdecken, zu
                    verstehen und selbst zu gestalten.
                </p>
            </div>

            <a class="about-link" href="/about">
                <span>Mehr über mich</span>
                <span class="arrow">↗</span>
            </a>
        </div>
    </div>
</section>

<style>
    .about {
        position: relative;
        overflow: hidden;

        background: var(--color-cream);
    }

    .about-inner {
        display: grid;
        grid-template-columns:
			minmax(0, 0.9fr)
			minmax(0, 1.1fr);

        align-items: center;
        gap: clamp(4rem, 8vw, 9rem);
    }

    .about-image {
        position: relative;

        width: 100%;
        max-width: 520px;

        margin-inline: auto;
    }

    .about-image img {
        position: relative;
        z-index: 2;

        width: 100%;
        aspect-ratio: 4 / 5;

        object-fit: cover;

        border-radius: 2px;
    }

    .image-accent {
        position: absolute;
        z-index: 1;

        right: -2rem;
        bottom: -2rem;

        width: 65%;
        height: 65%;

        background: var(--color-sage-100);
    }

    .about-content {
        max-width: 650px;
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

    .about-copy {
        max-width: 560px;

        color: var(--color-text-soft);

        font-size: clamp(1rem, 1.2vw, 1.1rem);
        line-height: 1.8;
    }

    .about-copy p:last-child {
        margin-bottom: 0;
    }

    .about-link {
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

    .about-link:hover {
        gap: 2.5rem;
        color: var(--color-text);
    }

    .arrow {
        font-size: 1rem;
    }

    @media (max-width: 800px) {
        .about-inner {
            grid-template-columns: 1fr;
            gap: 4rem;
        }

        .about-image {
            width: min(85%, 420px);
        }

        .image-accent {
            right: -1rem;
            bottom: -1rem;
        }

        .about-content {
            max-width: none;
        }

        h2 span {
            margin-left: 0.5rem;
        }
    }
</style>