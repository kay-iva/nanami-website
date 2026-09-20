<script lang="ts">
    import ResponsiveImage from '$lib/components/media/ResponsiveImage.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import TextLink from '$lib/components/ui/TextLink.svelte';
    import type { SiteImage } from '$lib/types';

    interface Props {
        image?: SiteImage | null;
    }

    let { image = null }: Props = $props();
</script>

<section class="about section">
    <div class="page-container about-inner">
        <div class="about-image">
            {#if image}
                <ResponsiveImage
                        {image}
                        sizes="(max-width: 800px) 85vw, 45vw"
                        fallback="/fallbacks/portrait.webp"
                />
            {:else}
                <img
                        src="/fallbacks/portrait.webp"
                        alt="Nanami Shiraki"
                />
            {/if}

            <div class="image-accent" aria-hidden="true"></div>
        </div>

        <div class="about-content">
            <Eyebrow>Über mich</Eyebrow>

            <h2>
                Von Japan
                <span>nach Wien</span>
            </h2>

            <div class="about-copy">
                <p>
                    Ich bin Nanami Shiraki, Pianistin und
                    Klavierpädagogin. Geboren und aufgewachsen
                    in Japan, begleitet mich das Klavier bereits
                    seit meinem dritten Lebensjahr. Nach meinem
                    Konzertfachstudium an der Hochschule für Musik
                    Tōkyō führte mich mein musikalischer Weg nach
                    Österreich, wo ich mein Masterstudium im
                    Konzertfach Klavier an der Anton Bruckner
                    Privatuniversität absolvierte.
                </p>

                <p>
                    Neben meiner Tätigkeit als Pianistin liegt mir
                    besonders die Musikpädagogik am Herzen. Seit
                    vielen Jahren begleite ich Kinder und Erwachsene
                    auf ihrem eigenen musikalischen Weg und möchte
                    dabei vor allem eines vermitteln: die Freude
                    daran, Musik zu entdecken, zu verstehen und
                    selbst zu gestalten.
                </p>
            </div>

            <TextLink href="/about">
                Mehr über mich
            </TextLink>
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

    .about-image :global(img) {
        position: relative;
        z-index: 2;

        width: 100%;
        height: auto;

        border-radius: 2px;
    }

    .image-accent {
        position: absolute;
        right: -2rem;
        bottom: -2rem;
        z-index: 1;

        width: 65%;
        height: 65%;

        background: var(--color-sage-100);
    }

    .about-content {
        max-width: 650px;
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