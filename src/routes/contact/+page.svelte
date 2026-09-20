<script lang="ts">
    import ContactForm from '$lib/components/contact/ContactForm.svelte';
    import ContactSidebar from '$lib/components/contact/ContactSidebar.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
    <title>Kontakt | Nanami Shiraki</title>

    <meta
            name="description"
            content="Kontakt zu Nanami Shiraki für Klavierunterricht, Probestunden, Prüfungsvorbereitung und musikalische Anfragen in Wien."
    />
</svelte:head>

<main class="contact-page">
    <section class="intro">
        <div class="page-container intro-inner">
            <Eyebrow>Kontakt</Eyebrow>

            <h1>
                Lass uns
                <span>kennenlernen.</span>
            </h1>

            <p class="lead">
                Du interessierst dich für Klavierunterricht,
                eine Probestunde oder möchtest mich für ein
                musikalisches Projekt kontaktieren? Ich freue
                mich auf deine Nachricht.
            </p>
        </div>
    </section>

    <section class="contact-section">
        <div class="page-container contact-grid">
            <ContactForm {form} />
            <ContactSidebar />
        </div>
    </section>
</main>

<style>
    .contact-page {
        min-height: 100vh;
        background: var(--color-cream);
    }

    .intro {
        padding:
                clamp(5rem, 8vw, 8rem)
                0
                clamp(4rem, 7vw, 7rem);
    }

    .intro-inner {
        max-width: var(--content-width);
    }

    h1 {
        max-width: 950px;

        margin-bottom: 2.5rem;

        color: var(--color-sage-700);
    }

    h1 span {
        display: block;

        margin-left: clamp(1rem, 5vw, 5rem);

        color: var(--color-text);

        font-style: italic;
    }

    .lead {
        max-width: 650px;

        color: var(--color-text-soft);

        font-size: clamp(1.05rem, 1.4vw, 1.25rem);
        line-height: 1.8;
    }

    .contact-section {
        padding-bottom: clamp(6rem, 10vw, 10rem);
    }

    .contact-grid {
        display: grid;
        grid-template-columns:
			minmax(0, 1.35fr)
			minmax(300px, 0.65fr);

        align-items: start;

        gap: clamp(4rem, 8vw, 9rem);
    }

    @media (max-width: 800px) {
        .intro {
            padding-top: 5rem;
        }

        h1 span {
            margin-left: 0.5rem;
        }

        .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
        }
    }
</style>