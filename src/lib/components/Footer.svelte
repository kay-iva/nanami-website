<script lang="ts">
    const navigation = [
        { label: 'Home', href: '/' },
        { label: 'Über mich', href: '/about' },
        { label: 'Klavierunterricht', href: '/teaching' },
        { label: 'Konzerte', href: '/concerts' },
        { label: 'Musik-Gruppe', href: '/music-group' },
        { label: 'Kontakt', href: '/contact' }
    ];

    const socials = [
        { label: 'Instagram', href: '#' },
        { label: 'YouTube', href: '#' },
        { label: 'Facebook', href: '#' }
    ];

    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="footer-main page-container">

        <!-- BIG CTA -->

        <div class="footer-intro">
            <p class="eyebrow">Lust auf Musik?</p>

            <a class="footer-cta" href="/contact">
                <span class="cta-line">Lass uns gemeinsam</span>

                <span class="cta-line italic">
					Musik machen.
					<span class="arrow">↗</span>
				</span>
            </a>
        </div>


        <!-- DIVIDER -->

        <div class="music-divider" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>


        <!-- INFO -->

        <div class="footer-grid">

            <div class="footer-identity">
                <p class="name">
                    Nanami
                    <span>Shiraki</span>
                </p>

                <p class="profession">
                    Pianistin &<br />
                    Klavierpädagogin
                </p>

                <p class="location">
                    Wien, Österreich
                </p>
            </div>


            <nav class="footer-nav" aria-label="Footer Navigation">
                <p class="footer-label">Navigation</p>

                {#each navigation as item, index}
                    <a href={item.href}>
						<span class="number">
							{String(index + 1).padStart(2, '0')}
						</span>

                        <span>{item.label}</span>
                    </a>
                {/each}
            </nav>


            <div class="footer-socials">
                <p class="footer-label">Follow along</p>

                {#each socials as social}
                    <a
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                    >
                        <span>{social.label}</span>
                        <span class="social-arrow">↗</span>
                    </a>
                {/each}
            </div>

        </div>


        <!-- BOTTOM -->

        <div class="footer-bottom">
            <p>© {currentYear} Nanami Shiraki</p>

            <div class="legal">
                <a href="/impressum">Impressum</a>
                <a href="/datenschutz">Datenschutz</a>
            </div>

            <a class="back-top" href="#top" aria-label="Zurück nach oben">
                <span>Nach oben</span>
                <span>↑</span>
            </a>
        </div>

    </div>


    <!-- GIANT SIGNATURE -->

    <div class="footer-signature" aria-hidden="true">
        Nanami Shiraki
    </div>
</footer>


<style>
    .footer {
        position: relative;

        overflow: hidden;

        background: var(--color-sage-700);
        color: var(--color-cream);
    }

    .footer-main {
        position: relative;
        z-index: 2;

        padding-top: clamp(6rem, 10vw, 10rem);
        padding-bottom: 2rem;
    }


    /* --------------------------------
       CTA
    -------------------------------- */

    .footer-intro {
        max-width: 1100px;

        margin-bottom: clamp(5rem, 9vw, 9rem);
    }

    .eyebrow {
        margin-bottom: 2rem;

        color: var(--color-sage-300);

        font-size: 0.68rem;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    .footer-cta {
        display: inline-block;

        color: var(--color-cream);
    }

    .cta-line {
        display: block;

        font-family: var(--font-serif);
        font-size: clamp(3rem, 7vw, 7rem);
        font-weight: 400;
        line-height: 0.98;
        letter-spacing: -0.035em;
    }

    .cta-line.italic {
        margin-left: clamp(1rem, 7vw, 7rem);

        color: var(--color-sage-100);
        font-style: italic;
    }

    .arrow {
        display: inline-block;

        margin-left: 0.25em;

        font-family: var(--font-sans);
        font-size: 0.45em;
        font-style: normal;

        transition:
                transform var(--transition-normal);
    }

    .footer-cta:hover .arrow {
        transform: translate(0.3rem, -0.3rem);
    }


    /* --------------------------------
       Piano-ish divider
    -------------------------------- */

    .music-divider {
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        height: 18px;

        margin-bottom: clamp(4rem, 7vw, 7rem);

        border-top:
                1px solid rgba(247, 244, 237, 0.2);
        border-bottom:
                1px solid rgba(247, 244, 237, 0.2);
    }

    .music-divider span {
        border-right:
                1px solid rgba(247, 244, 237, 0.15);
    }

    .music-divider span:last-child {
        border-right: 0;
    }

    .music-divider span:nth-child(2),
    .music-divider span:nth-child(4),
    .music-divider span:nth-child(7),
    .music-divider span:nth-child(9),
    .music-divider span:nth-child(11) {
        background:
                rgba(247, 244, 237, 0.08);
    }


    /* --------------------------------
       Main grid
    -------------------------------- */

    .footer-grid {
        display: grid;
        grid-template-columns:
			1.3fr
			0.8fr
			0.7fr;

        gap: clamp(3rem, 7vw, 8rem);

        padding-bottom: clamp(5rem, 8vw, 8rem);
    }

    .name {
        margin: 0 0 1.5rem;

        font-family: var(--font-serif);
        font-size: clamp(2rem, 3.5vw, 3.8rem);
        line-height: 1;
    }

    .name span {
        display: block;

        margin-left: 1.5rem;

        color: var(--color-sage-100);
        font-style: italic;
    }

    .profession {
        margin-bottom: 2rem;

        color: var(--color-sage-100);

        font-size: 0.9rem;
        line-height: 1.6;
    }

    .location {
        margin: 0;

        color: var(--color-sage-300);

        font-size: 0.7rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .footer-label {
        margin-bottom: 1.5rem;

        color: var(--color-sage-300);

        font-size: 0.62rem;
        font-weight: 500;
        letter-spacing: 0.16em;
        text-transform: uppercase;
    }


    /* --------------------------------
       Navigation
    -------------------------------- */

    .footer-nav {
        display: flex;
        flex-direction: column;
    }

    .footer-nav a {
        display: grid;
        grid-template-columns: 30px 1fr;

        align-items: baseline;

        padding: 0.65rem 0;

        color: var(--color-sage-100);

        font-family: var(--font-serif);
        font-size: 1.05rem;

        transition:
                color var(--transition-fast),
                transform var(--transition-fast);
    }

    .footer-nav a:hover {
        color: var(--color-cream);

        transform: translateX(0.3rem);
    }

    .number {
        color: var(--color-sage-300);

        font-family: var(--font-sans);
        font-size: 0.55rem;
    }


    /* --------------------------------
       Socials
    -------------------------------- */

    .footer-socials {
        display: flex;
        flex-direction: column;
    }

    .footer-socials a {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 2rem;

        padding: 0.75rem 0;

        border-bottom:
                1px solid rgba(247, 244, 237, 0.12);

        color: var(--color-sage-100);

        font-size: 0.8rem;

        transition:
                color var(--transition-fast),
                padding-left var(--transition-fast);
    }

    .footer-socials a:hover {
        padding-left: 0.3rem;

        color: var(--color-cream);
    }

    .social-arrow {
        font-size: 0.8rem;
    }


    /* --------------------------------
       Bottom
    -------------------------------- */

    .footer-bottom {
        display: grid;
        grid-template-columns: 1fr auto 1fr;

        align-items: center;
        gap: 2rem;

        padding-top: 2rem;

        border-top:
                1px solid rgba(247, 244, 237, 0.15);

        color: var(--color-sage-300);

        font-size: 0.65rem;
        letter-spacing: 0.05em;
    }

    .footer-bottom p {
        margin: 0;
    }

    .legal {
        display: flex;
        gap: 2rem;
    }

    .legal a,
    .back-top {
        color: inherit;

        transition:
                color var(--transition-fast);
    }

    .legal a:hover,
    .back-top:hover {
        color: var(--color-cream);
    }

    .back-top {
        display: flex;
        justify-content: flex-end;
        gap: 0.7rem;
    }


    /* --------------------------------
       Giant background signature
    -------------------------------- */

    .footer-signature {
        position: absolute;
        right: -0.03em;
        bottom: -0.19em;
        z-index: 1;

        white-space: nowrap;

        color: rgba(247, 244, 237, 0.035);

        font-family: var(--font-serif);
        font-size: clamp(8rem, 19vw, 22rem);
        font-style: italic;
        line-height: 1;

        pointer-events: none;
        user-select: none;
    }


    /* --------------------------------
       Mobile
    -------------------------------- */

    @media (max-width: 800px) {
        .footer-main {
            padding-top: 5rem;
        }

        .footer-intro {
            margin-bottom: 5rem;
        }

        .cta-line {
            font-size: clamp(2.8rem, 13vw, 5rem);
            line-height: 1.02;
        }

        .cta-line.italic {
            margin-top: 0.15em;
            margin-left: 0.5rem;
        }

        .music-divider {
            grid-template-columns: repeat(8, 1fr);

            margin-bottom: 4rem;
        }

        .music-divider span:nth-child(n + 9) {
            display: none;
        }

        .footer-grid {
            grid-template-columns: 1fr;
            gap: 4rem;

            padding-bottom: 5rem;
        }

        .footer-identity {
            padding-bottom: 1rem;
        }

        .name {
            font-size: 2.8rem;
        }

        .footer-nav a {
            padding: 0.9rem 0;

            border-bottom:
                    1px solid rgba(247, 244, 237, 0.1);

            font-size: 1.25rem;
        }

        .footer-socials a {
            padding: 1rem 0;
        }

        .footer-bottom {
            grid-template-columns: 1fr auto;

            row-gap: 1.5rem;
        }

        .legal {
            grid-column: 1 / -1;
            grid-row: 1;

            gap: 1.5rem;
        }

        .footer-bottom > p {
            grid-column: 1;
            grid-row: 2;
        }

        .back-top {
            grid-column: 2;
            grid-row: 2;
        }

        .footer-signature {
            bottom: -0.08em;

            font-size: 9rem;
        }
    }
</style>