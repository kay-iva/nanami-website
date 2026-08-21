<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    type ContactValues = {
        name: string;
        email: string;
        interest: string;
        message: string;
    };

    let { form }: { form: ActionData } = $props();

    let submitting = $state(false);

    const emptyValues: ContactValues = {
        name: '',
        email: '',
        interest: '',
        message: ''
    };

    let values = $derived<ContactValues>(
        form && 'values' in form
            ? (form.values as ContactValues)
            : emptyValues
    );

    const socials = [
        {
            number: '01',
            name: 'Instagram',
            description: 'Einblicke in Musik, Unterricht und meinen Alltag.',
            href: '#'
        },
        {
            number: '02',
            name: 'YouTube',
            description: 'Musik, Konzerte und Auftritte.',
            href: '#'
        },
        {
            number: '03',
            name: 'Facebook',
            description: 'Neuigkeiten, Veranstaltungen und Termine.',
            href: '#'
        }
    ];
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
            <p class="eyebrow">Kontakt</p>

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

            <!-- FORM -->

            <div class="form-wrapper">
                {#if form?.success}
                    <div class="success-message">
                        <p class="success-number">✓</p>

                        <h2>Vielen Dank!</h2>

                        <p>
                            Deine Nachricht ist bei mir angekommen.
                            Ich melde mich so bald wie möglich persönlich bei dir.
                        </p>
                    </div>
                {:else}
                    <form
                            method="POST"
                            use:enhance={() => {
				submitting = true;

				return async ({ update }) => {
					await update();
					submitting = false;
				};
			}}
                    >
                        <!-- Honeypot -->
                        <div class="honeypot" aria-hidden="true">
                            <label for="website">Website</label>

                            <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    tabindex="-1"
                                    autocomplete="off"
                            />
                        </div>

                        <div class="form-row">
                            <div class="field">
                                <label for="name">
                                    Name
                                    <span>*</span>
                                </label>

                                <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autocomplete="name"
                                        value={values.name}
                                        placeholder="Dein Name"
                                        required
                                />
                            </div>

                            <div class="field">
                                <label for="email">
                                    E-Mail
                                    <span>*</span>
                                </label>

                                <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        value={values.email}
                                        placeholder="name@beispiel.at"
                                        required
                                />
                            </div>
                        </div>

                        <div class="field">
                            <label for="interest">
                                Ich interessiere mich für
                            </label>

                            <div class="select-wrapper">
                                <select
                                        id="interest"
                                        name="interest"
                                        value={values.interest}
                                >
                                    <option value="">
                                        Bitte auswählen
                                    </option>

                                    <option value="Klavierunterricht">
                                        Klavierunterricht
                                    </option>

                                    <option value="Kostenlose Probestunde">
                                        Kostenlose Probestunde
                                    </option>

                                    <option value="Prüfungsvorbereitung">
                                        Prüfungsvorbereitung
                                    </option>

                                    <option value="Konzert / Begleitung">
                                        Konzert / Begleitung
                                    </option>

                                    <option value="Sonstiges">
                                        Sonstiges
                                    </option>
                                </select>

                                <span>⌄</span>
                            </div>
                        </div>

                        <div class="field">
                            <label for="message">
                                Nachricht
                                <span>*</span>
                            </label>

                            <textarea
                                    id="message"
                                    name="message"
                                    rows="7"
                                    maxlength="3000"
                                    placeholder="Erzähl mir ein bisschen, worum es geht..."
                                    required
                            >{values.message}</textarea>
                        </div>

                        {#if form && 'error' in form && form.error}
                            <p class="form-error">
                                {form.error}
                            </p>
                        {/if}

                        <button
                                class="submit-button"
                                type="submit"
                                disabled={submitting}
                        >
				<span>
					{submitting
                        ? 'Wird gesendet...'
                        : 'Nachricht senden'}
				</span>

                            <span class="arrow">↗</span>
                        </button>
                    </form>
                {/if}
            </div>

            <!-- CONTACT INFO -->

            <aside class="contact-info">

                <div class="info-block">
                    <p class="info-label">Unterricht</p>

                    <h3>Wien</h3>

                    <p>
                        Klavierunterricht für Kinder,
                        Jugendliche und Erwachsene.
                    </p>
                </div>


                <div class="info-block">
                    <p class="info-label">E-Mail</p>

                    <a href="mailto:kokoivanov7@gmail.com">
                        kokoivanov7@gmail.com
                        <span>↗</span>
                    </a>
                </div>


                <div class="social-section">
                    <p class="info-label">Follow along</p>

                    <div class="social-links">
                        {#each socials as social}
                            <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                            >
								<span class="social-number">
									{social.number}
								</span>

                                <div class="social-copy">
                                    <strong>{social.name}</strong>
                                    <p>{social.description}</p>
                                </div>

                                <span class="social-arrow">
									↗
								</span>
                            </a>
                        {/each}
                    </div>
                </div>

            </aside>

        </div>
    </section>

</main>


<style>
    .contact-page {
        min-height: 100vh;

        background: var(--color-cream);
    }

    /* --------------------------------
       Intro
    -------------------------------- */

    .intro {
        padding:
                clamp(5rem, 8vw, 8rem)
                0
                clamp(4rem, 7vw, 7rem);
    }

    .intro-inner {
        max-width: var(--content-width);
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


    /* --------------------------------
       Layout
    -------------------------------- */

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


    /* --------------------------------
       Form
    -------------------------------- */

    .form-wrapper {
        padding: clamp(2rem, 5vw, 4.5rem);

        background: var(--color-sage-100);
    }

    form {
        display: flex;
        flex-direction: column;

        gap: 2rem;
    }

    .form-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 2rem;
    }

    .field {
        display: flex;
        flex-direction: column;

        gap: 0.7rem;
    }

    label {
        color: var(--color-sage-700);

        font-size: 0.68rem;
        font-weight: 500;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    label span {
        color: var(--color-peach);
    }

    input,
    textarea,
    select {
        width: 100%;

        padding: 1rem 0;

        border: 0;
        border-bottom: 1px solid rgba(74, 90, 79, 0.25);
        border-radius: 0;

        outline: none;

        background: transparent;

        color: var(--color-text);

        font-family: var(--font-sans);
        font-size: 1rem;

        transition:
                border-color var(--transition-fast);
    }

    input::placeholder,
    textarea::placeholder {
        color: rgba(74, 90, 79, 0.45);
    }

    input:focus,
    textarea:focus,
    select:focus {
        border-color: var(--color-sage-700);
    }

    textarea {
        resize: vertical;

        line-height: 1.7;
    }

    .select-wrapper {
        position: relative;
    }

    .select-wrapper select {
        appearance: none;

        padding-right: 2rem;

        cursor: pointer;
    }

    .select-wrapper > span {
        position: absolute;
        top: 50%;
        right: 0;

        pointer-events: none;

        transform: translateY(-50%);

        color: var(--color-sage-700);
    }

    .submit-button {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        margin-top: 1rem;
        padding: 1.25rem 1.5rem;

        background: var(--color-sage-700);
        color: var(--color-cream);

        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.08em;

        transition:
                background var(--transition-fast),
                transform var(--transition-fast);
    }

    .submit-button:hover:not(:disabled) {
        background: var(--color-text);

        transform: translateY(-2px);
    }

    .submit-button:disabled {
        opacity: 0.6;

        cursor: wait;
    }

    .arrow {
        font-size: 1rem;
    }

    .form-error {
        margin: 0;

        color: #8a4b4b;

        font-size: 0.85rem;
    }

    .honeypot {
        position: absolute;
        left: -10000px;

        width: 1px;
        height: 1px;

        overflow: hidden;
    }


    /* --------------------------------
       Success
    -------------------------------- */

    .success-message {
        display: flex;
        flex-direction: column;
        justify-content: center;

        min-height: 480px;

        text-align: center;
    }

    .success-number {
        margin-bottom: 2rem;

        color: var(--color-sage-300);

        font-family: var(--font-serif);
        font-size: 3rem;
    }

    .success-message h2 {
        margin-bottom: 1.5rem;

        color: var(--color-sage-700);
    }

    .success-message p:last-child {
        max-width: 450px;

        margin-inline: auto;

        color: var(--color-text-soft);

        line-height: 1.8;
    }


    /* --------------------------------
       Contact info
    -------------------------------- */

    .contact-info {
        position: sticky;
        top: calc(var(--navbar-height) + 3rem);
    }

    .info-block {
        padding: 0 0 2.5rem;

        border-bottom: 1px solid var(--border-soft);
    }

    .info-block + .info-block {
        padding-top: 2.5rem;
    }

    .info-label {
        margin-bottom: 1rem;

        color: var(--color-sage-300);

        font-size: 0.65rem;
        font-weight: 500;
        letter-spacing: 0.16em;
        text-transform: uppercase;
    }

    .info-block h3 {
        margin-bottom: 0.75rem;

        color: var(--color-sage-700);
    }

    .info-block > p:last-child {
        max-width: 300px;

        margin: 0;

        color: var(--color-text-soft);

        font-size: 0.9rem;
        line-height: 1.7;
    }

    .info-block a {
        display: flex;
        justify-content: space-between;

        gap: 1rem;

        color: var(--color-sage-700);

        font-family: var(--font-serif);
        font-size: clamp(1.1rem, 1.7vw, 1.4rem);
    }


    /* --------------------------------
       Socials
    -------------------------------- */

    .social-section {
        padding-top: 3rem;
    }

    .social-links {
        border-top: 1px solid var(--border-soft);
    }

    .social-links a {
        display: grid;
        grid-template-columns: 35px 1fr auto;

        align-items: center;

        gap: 1rem;

        padding: 1.5rem 0;

        border-bottom: 1px solid var(--border-soft);

        transition:
                padding-left var(--transition-fast);
    }

    .social-links a:hover {
        padding-left: 0.5rem;
    }

    .social-number {
        color: var(--color-sage-300);

        font-size: 0.6rem;
    }

    .social-copy strong {
        color: var(--color-sage-700);

        font-family: var(--font-serif);
        font-size: 1.2rem;
        font-weight: 400;
    }

    .social-copy p {
        margin: 0.3rem 0 0;

        color: var(--color-text-soft);

        font-size: 0.75rem;
        line-height: 1.5;
    }

    .social-arrow {
        color: var(--color-sage-700);
    }


    /* --------------------------------
       Mobile
    -------------------------------- */

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

        .form-wrapper {
            margin-inline:
                    calc(var(--page-padding) * -1);

            padding:
                    3.5rem
                    var(--page-padding);
        }

        .form-row {
            grid-template-columns: 1fr;
        }

        .contact-info {
            position: static;
        }

        .social-links a:hover {
            padding-left: 0;
        }
    }
</style>