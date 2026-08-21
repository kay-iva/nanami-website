<section class="hero">
    <img
            class="hero-image"
            src="/images/hero.jpg"
            alt="Nanami Shiraki am Klavier"
    />

    <div class="overlay"></div>

    <div class="hero-content">
        <p class="eyebrow">Pianistin · Klavierpädagogin</p>

        <h1>
            Nanami
            <span>Shiraki</span>
        </h1>

        <p class="intro">
            Musik entdecken, verstehen und mit Freude gestalten.
        </p>

        <a class="cta" href="/teaching">
            <span>Klavierunterricht</span>
            <span class="arrow">↗</span>
        </a>
    </div>

    <div class="scroll">
        <span>Entdecken</span>
        <div class="line"></div>
    </div>
</section>

<style>
    .hero {
        position: relative;

        width: 100%;
        height: min(900px, 100svh);
        min-height: 680px;

        overflow: hidden;
        background: #4a5a4f;
    }

    .hero-image {
        position: absolute;
        inset: 0;

        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;

        animation: heroZoom 28s ease-in-out infinite alternate;
    }

    @keyframes heroZoom {
        from {
            transform: scale(1);
        }

        to {
            transform: scale(1.08);
        }
    }

    .overlay {
        position: absolute;
        inset: 0;

        background:
                linear-gradient(
                        90deg,
                        rgba(20, 25, 21, 0.56) 0%,
                        rgba(20, 25, 21, 0.22) 50%,
                        rgba(20, 25, 21, 0.05) 100%
                );
    }

    .hero-content {
        position: absolute;
        z-index: 2;

        left: max(7vw, 40px);
        bottom: 12%;

        max-width: 750px;

        color: #f7f4ed;
    }

    .eyebrow {
        margin: 0 0 20px;

        font-family: Arial, sans-serif;
        font-size: 0.78rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
    }

    h1 {
        margin: 0;

        font-family: Georgia, 'Times New Roman', serif;
        font-size: clamp(4rem, 9vw, 8.5rem);
        font-weight: 400;
        line-height: 0.78;
        letter-spacing: -0.055em;
    }

    h1 span {
        display: block;
        margin-left: 0.7em;

        font-style: italic;
        font-weight: 400;
    }

    .intro {
        max-width: 460px;

        margin: 40px 0 30px;

        font-family: Arial, sans-serif;
        font-size: clamp(1rem, 1.3vw, 1.2rem);
        font-weight: 300;
        line-height: 1.6;
    }

    .cta {
        display: inline-flex;
        align-items: center;
        gap: 30px;

        padding: 15px 20px;

        border: 1px solid rgba(255, 255, 255, 0.6);

        color: inherit;
        font-family: Arial, sans-serif;
        font-size: 0.8rem;
        letter-spacing: 0.06em;
        text-decoration: none;

        transition:
                background 200ms ease,
                color 200ms ease;
    }

    .cta:hover {
        background: #f7f4ed;
        color: #4a5a4f;
    }

    .arrow {
        font-size: 1rem;
    }

    .scroll {
        position: absolute;
        right: 35px;
        bottom: 35px;
        z-index: 2;

        display: flex;
        align-items: center;
        gap: 15px;

        color: rgba(255, 255, 255, 0.75);

        font-family: Arial, sans-serif;
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;

        transform: rotate(90deg);
        transform-origin: bottom right;
    }

    .line {
        width: 60px;
        height: 1px;
        background: currentColor;
    }

    @media (max-width: 700px) {
        .hero {
            min-height: 650px;
        }

        .hero-content {
            left: 28px;
            right: 28px;
            bottom: 12%;
        }

        h1 {
            font-size: clamp(3.8rem, 18vw, 6rem);
        }

        h1 span {
            margin-left: 0.25em;
        }

        .scroll {
            display: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .hero-image {
            animation: none;
        }
    }
</style>