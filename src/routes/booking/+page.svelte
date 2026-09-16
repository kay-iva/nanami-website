<script lang="ts">
    import BookingButton from '$lib/components/booking/BookingButton.svelte';
    import { booking } from '$lib/config/booking';
</script>

<svelte:head>
    <title>Booking Test | Nanami Shiraki</title>
</svelte:head>

<main class="page-container">
    <p class="eyebrow">Cal.com Integration</p>
    <h1>Booking Test</h1>
    <p class="intro">
        Each button should open its corresponding Cal booking link.
    </p>

    <section>
        <h2>Probestunde</h2>
        <div class="buttons">
            <BookingButton booking={booking.trial} class="booking-button">
                Probestunde · 30 Min.
            </BookingButton>
        </div>
    </section>

    <section>
        <h2>Einzelstunden</h2>
        <div class="buttons">
            <BookingButton booking={booking.single[30]} class="booking-button">
                30 Minuten
            </BookingButton>

            <BookingButton booking={booking.single[45]} class="booking-button">
                45 Minuten
            </BookingButton>

            <BookingButton booking={booking.single[60]} class="booking-button">
                60 Minuten
            </BookingButton>
        </div>
    </section>

    <section>
        <h2>Stundenblöcke</h2>
        <div class="buttons">
            <BookingButton booking={booking.block[30]} class="booking-button">
                30 Minuten
            </BookingButton>

            <BookingButton booking={booking.block[45]} class="booking-button">
                45 Minuten
            </BookingButton>

            <BookingButton booking={booking.block[60]} class="booking-button">
                60 Minuten
            </BookingButton>
        </div>
    </section>

    <section>
        <h2>Musikgruppe</h2>
        <div class="buttons">
            <BookingButton booking={booking.courses.rhythmik} class="booking-button">
                Rhythmik-SpielWiese
            </BookingButton>
        </div>
    </section>
</main>

<style>
    main {
        padding-block: 8rem;
    }

    .eyebrow {
        margin: 0 0 1rem;
        font: 600 0.72rem var(--font-sans);
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--color-sage-700);
    }

    h1 {
        margin: 0;
        font: 400 clamp(3rem, 6vw, 6rem) var(--font-serif);
        color: var(--color-text);
    }

    .intro {
        margin: 1rem 0 5rem;
        font: 1rem/1.7 var(--font-sans);
        color: var(--color-text-soft);
    }

    section {
        padding: 2.5rem 0;
        border-top: 1px solid var(--border-soft);
    }

    h2 {
        margin: 0 0 1.5rem;
        font: 400 1.8rem var(--font-serif);
        color: var(--color-text);
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    :global(.booking-button) {
        padding: 1rem 1.4rem;
        background: var(--color-sage-700);
        color: var(--color-cream);
        font: 500 0.82rem var(--font-sans);
        cursor: pointer;
        transition: opacity var(--transition-fast);
    }

    :global(.booking-button:hover) {
        opacity: 0.82;
    }
</style>