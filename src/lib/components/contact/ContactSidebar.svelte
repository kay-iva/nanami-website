<script lang="ts">
    const socials = [
        {
            number: '01',
            name: 'Instagram',
            description:
                'Einblicke in Musik, Unterricht und meinen Alltag.',
            href: '#'
        },
        {
            number: '02',
            name: 'YouTube',
            description:
                'Musik, Konzerte und Auftritte.',
            href: '#'
        },
        {
            number: '03',
            name: 'Facebook',
            description:
                'Neuigkeiten, Veranstaltungen und Termine.',
            href: '#'
        }
    ];
</script>

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
            <span>kokoivanov7@gmail.com</span>
            <span aria-hidden="true">↗</span>
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

                    <span
                            class="social-arrow"
                            aria-hidden="true"
                    >
						↗
					</span>
                </a>
            {/each}
        </div>
    </div>
</aside>

<style>
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

        transition: padding-left var(--transition-fast);
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

    @media (max-width: 800px) {
        .contact-info {
            position: static;
        }

        .social-links a:hover {
            padding-left: 0;
        }
    }
</style>