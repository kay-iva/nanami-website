<script lang="ts">

    const navItems = [
        { label: 'Klavier-Unterricht', href: '/teaching' },
        { label: 'Konzerte', href: '/concerts' },
        { label: 'Musik-Gruppe', href: '/music-group' },
        { label: 'Kontakt', href: '/contact' }
    ];

    const navLeft = navItems.slice(0, 2);
    const navRight = navItems.slice(2);

    let menuOpen = $state(false);

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        menuOpen = false;
    }
</script>

<header class="navbar">
    <div class="navbar-inner">
        <nav class="nav-side nav-left" aria-label="Hauptnavigation links">
            {#each navLeft as item}
                <a href={item.href}>
                    {item.label}
                </a>
            {/each}
        </nav>

        <a
                class="home"
                href="/"
                aria-label="Startseite"
                onclick={closeMenu}
        >
            <span>NS</span>
        </a>

        <nav class="nav-side nav-right" aria-label="Hauptnavigation rechts">
            {#each navRight as item}
                <a href={item.href}>
                    {item.label}
                </a>
            {/each}
        </nav>

        <button
                class="burger"
                class:open={menuOpen}
                type="button"
                aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onclick={toggleMenu}
        >
            <span></span>
            <span></span>
        </button>
    </div>
</header>

<button
        class="menu-backdrop"
        class:open={menuOpen}
        type="button"
        aria-label="Menü schließen"
        tabindex={menuOpen ? 0 : -1}
        onclick={closeMenu}
></button>

<aside
        id="mobile-navigation"
        class="mobile-menu"
        class:open={menuOpen}
        aria-hidden={!menuOpen}
>
    <div class="mobile-menu-content">
        <p class="mobile-label">
            Nanami Shiraki
        </p>

        <nav class="mobile-links" aria-label="Mobile Navigation">
            {#each navItems as item, index}
                <a
                        href={item.href}
                        onclick={closeMenu}
                >
					<span class="number">
						0{index + 1}
					</span>

                    <span>{item.label}</span>
                </a>
            {/each}
        </nav>

        <div class="mobile-decoration">
            <span></span>
            <p>Pianistin & Klavierpädagogin</p>
        </div>
    </div>
</aside>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 50;

        width: 100%;
        height: var(--navbar-height);

        background: var(--color-cream);
        border-bottom: 1px solid var(--border-soft);
    }

    .navbar-inner {
        position: relative;

        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;

        width: min(
                calc(100% - (var(--page-padding) * 2)),
                var(--content-width)
        );

        height: 100%;

        margin-inline: auto;
    }

    .nav-side {
        display: flex;
        align-items: center;
        gap: clamp(2rem, 4vw, 4rem);
    }

    .nav-left {
        justify-content: flex-start;
    }

    .nav-right {
        justify-content: flex-end;
    }

    .nav-side a {
        position: relative;

        color: var(--color-sage-700);

        font-size: 0.76rem;
        font-weight: 500;
        letter-spacing: 0.06em;
    }

    .nav-side a::after {
        content: '';

        position: absolute;
        left: 0;
        bottom: -7px;

        width: 100%;
        height: 1px;

        background: currentColor;

        transform: scaleX(0);
        transform-origin: right;

        transition: transform var(--transition-fast);
    }

    .nav-side a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    .home {
        position: relative;
        z-index: 55;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 78px;
        aspect-ratio: 1;

        margin-top: 28px;

        border-radius: 50%;

        background: var(--color-sage-100);
        color: var(--color-sage-700);

        border: 1px solid rgba(74, 90, 79, 0.12);

        box-shadow: var(--shadow-soft);

        transition:
                transform var(--transition-fast),
                background var(--transition-fast);
    }

    .home:hover {
        transform: translateY(2px) scale(1.04);

        background: var(--color-sage-200);
    }

    .home span {
        font-family: var(--font-serif);
        font-size: 1.2rem;
        letter-spacing: 0.06em;
    }

    .burger {
        display: none;
    }

    .mobile-menu,
    .menu-backdrop {
        display: none;
    }

    /* MOBILE */

    @media (max-width: 800px) {
        /* --------------------------------
           Navbar shell
           No visible navbar on mobile
        -------------------------------- */

        .navbar {
            width: 0;
            height: 0;

            background: transparent;
            border: 0;

            pointer-events: none;
        }

        .navbar-inner {
            width: 0;
            height: 0;
            margin: 0;
        }

        .nav-side,
        .home {
            display: none;
        }


        /* --------------------------------
           Floating burger button
        -------------------------------- */

        .burger {
            position: fixed;
            top: 1.25rem;
            right: 1.25rem;
            z-index: 60;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 7px;

            width: 48px;
            height: 48px;

            border-radius: 50%;

            background: var(--color-cream);
            box-shadow: var(--shadow-soft);

            pointer-events: auto;

            transition:
                    background var(--transition-fast),
                    transform var(--transition-fast);
        }

        .burger:hover {
            background: var(--color-sage-100);
        }

        .burger span {
            display: block;

            width: 25px;
            height: 1px;

            background: var(--color-sage-700);

            transition:
                    transform var(--transition-normal),
                    width var(--transition-normal);
        }

        .burger span:last-child {
            width: 17px;
        }

        /* Burger → X */

        .burger.open span:first-child {
            width: 25px;

            transform:
                    translateY(4px)
                    rotate(45deg);
        }

        .burger.open span:last-child {
            width: 25px;

            transform:
                    translateY(-4px)
                    rotate(-45deg);
        }


        /* --------------------------------
           Background overlay
        -------------------------------- */

        .menu-backdrop {
            position: fixed;
            inset: 0;
            z-index: 40;

            display: block;

            width: 100%;
            height: 100%;

            background: rgba(49, 57, 52, 0.2);

            opacity: 0;
            pointer-events: none;

            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);

            transition:
                    opacity var(--transition-normal);
        }

        .menu-backdrop.open {
            opacity: 1;
            pointer-events: auto;
        }


        /* --------------------------------
           Slide-in menu
        -------------------------------- */

        .mobile-menu {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 45;

            display: block;

            width: min(88vw, 420px);
            height: 100dvh;

            background: var(--color-cream);

            transform: translateX(100%);

            box-shadow:
                    -20px 0 60px
                    rgba(50, 62, 55, 0.08);

            transition:
                    transform 420ms
                    cubic-bezier(0.77, 0, 0.18, 1);
        }

        .mobile-menu.open {
            transform: translateX(0);
        }


        /* --------------------------------
           Menu content
        -------------------------------- */

        .mobile-menu-content {
            display: flex;
            flex-direction: column;

            height: 100%;

            padding:
                    7.5rem
                    2.2rem
                    2.5rem;
        }

        .mobile-label {
            margin-bottom: 3rem;

            color: var(--color-text-soft);

            font-size: 0.68rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
        }


        /* --------------------------------
           Navigation links
        -------------------------------- */

        .mobile-links {
            display: flex;
            flex-direction: column;
        }

        .mobile-links a {
            display: grid;
            grid-template-columns: 35px 1fr;
            align-items: baseline;

            padding: 1.35rem 0;

            border-bottom:
                    1px solid var(--border-soft);

            font-family: var(--font-serif);
            font-size: clamp(
                    1.55rem,
                    7vw,
                    2.2rem
            );
        }

        .number {
            color: var(--color-sage-300);

            font-family: var(--font-sans);
            font-size: 0.6rem;
            letter-spacing: 0.08em;
        }


        /* --------------------------------
           Bottom decoration
        -------------------------------- */

        .mobile-decoration {
            margin-top: auto;

            color: var(--color-text-soft);

            font-size: 0.7rem;
            letter-spacing: 0.08em;
        }

        .mobile-decoration span {
            display: block;

            width: 45px;
            height: 1px;

            margin-bottom: 1rem;

            background: var(--color-sage-300);
        }
    }
</style>