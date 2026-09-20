<script lang="ts">
    import type { HeroVideo } from '$lib/types';

    interface Props {
        video?: HeroVideo | null;
    }

    let { video = null }: Props = $props();

    let videoFailed = $state(false);
</script>

<section class="hero">
    <img
            class="hero-media fallback-image"
            src={video?.poster ?? '/fallbacks/landscape.webp'}
            alt=""
            aria-hidden="true"
    />

    {#if video && !videoFailed}
        <video
                class="hero-media hero-video"
                poster={video.poster}
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                aria-hidden="true"
                onerror={() => (videoFailed = true)}
        >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
        </video>
    {/if}

    <div class="overlay"></div>

    <div class="hero-content">
        <p class="eyebrow">
            Pianistin · Klavierpädagogin
        </p>

        <h1>
            Nanami
            <span>Shiraki</span>
        </h1>

        <p class="intro">
            Musik entdecken, verstehen und mit Freude gestalten.
        </p>

        <a class="cta" href="/teaching">
            <span>Klavierunterricht</span>
            <span class="arrow" aria-hidden="true">↗</span>
        </a>
    </div>

    <div class="scroll" aria-hidden="true">
        <span>Entdecken</span>
        <div class="line"></div>
    </div>
</section>

<style>
    .hero {
        position: relative;

        width: 100%;
        height: calc(100svh - var(--navbar-height));
        min-height: 760px;

        overflow: hidden;

        background: var(--color-sage-700);
    }

    .hero-media {
        position: absolute;
        inset: 0;

        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
    }

    .fallback-image {
        z-index: 0;

        animation: heroZoom 28s ease-in-out infinite alternate;
    }

    .hero-video {
        z-index: 1;
    }

    @keyframes heroZoom {
        to {
            transform: scale(1.08);
        }
    }

    .overlay {
        position: absolute;
        inset: 0;
        z-index: 2;

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
        left: max(7vw, 40px);
        bottom: 12%;
        z-index: 3;

        max-width: 750px;

        color: var(--color-cream);
    }

    .eyebrow {
        margin: 0 0 20px;

        font-size: 0.78rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
    }

    h1 {
        margin: 0;

        font-family: var(--font-serif);
        font-size: clamp(4rem, 9vw, 8.5rem);
        font-weight: 400;
        letter-spacing: -0.055em;
        line-height: 0.78;
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

        font-size: 0.8rem;
        letter-spacing: 0.06em;

        transition:
                background var(--transition-fast),
                color var(--transition-fast);
    }

    .cta:hover {
        background: var(--color-cream);
        color: var(--color-sage-700);
    }

    .arrow {
        font-size: 1rem;
    }

    .scroll {
        position: absolute;
        right: 35px;
        bottom: 35px;
        z-index: 3;

        display: flex;
        align-items: center;
        gap: 15px;

        color: rgba(255, 255, 255, 0.75);

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
            height: 88svh;
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
        .hero-video {
            display: none;
        }

        .fallback-image {
            animation: none;
        }
    }
</style>