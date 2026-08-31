<script lang="ts">
    import BookingCalendar from '$lib/components/booking/BookingCalendar.svelte';
</script>

<svelte:head>
    <title>Einzelstunde buchen | Nanami Shiraki</title>

    <meta
            name="description"
            content="Buche deine Klavier-Einzelstunde bei Nanami Shiraki in Wien."
    />
</svelte:head>

<main class="booking-page">
    <section class="booking-intro">
        <div class="page-container">
            <p class="eyebrow">
                Klavierunterricht
            </p>

            <h1>
                Deine Einzelstunde<br />
                buchen.
            </h1>

            <p class="intro-text">
                Wähle einen passenden Termin für deine
                Klavier-Einzelstunde.
            </p>
        </div>
    </section>

    <section class="calendar-section">
        <div class="page-container">
            <BookingCalendar />
        </div>
    </section>
</main>

<style>
    .booking-page {
        min-height: 100vh;
        background: var(--color-cream);
    }

    .booking-intro {
        padding:
                calc(var(--navbar-height) + 4rem)
                0
                2.5rem;
    }

    .eyebrow {
        margin: 0 0 1rem;

        font-family: var(--font-sans);
        font-size: 0.8rem;
        font-weight: 600;

        letter-spacing: 0.16em;
        text-transform: uppercase;

        color: var(--color-sage-700);
    }

    h1 {
        margin: 0;

        font-family: var(--font-serif);
        font-size: clamp(3rem, 7vw, 6rem);
        font-weight: 400;
        line-height: 0.95;

        color: var(--color-text);
    }

    .intro-text {
        max-width: 560px;
        margin: 2rem 0 0;

        font-family: var(--font-sans);
        font-size: 1.05rem;
        line-height: 1.8;

        color: var(--color-text-soft);
    }

    .calendar-section {
        padding: 0 0 7rem;
    }

    @media (max-width: 700px) {
        .booking-intro {
            padding:
                    calc(var(--navbar-height) + 3rem)
                    0
                    2rem;
        }

        h1 {
            font-size: clamp(3rem, 14vw, 4.5rem);
        }

        .intro-text {
            margin-top: 1.5rem;
            font-size: 1rem;
        }

        .calendar-section {
            padding-bottom: 5rem;
        }
    }
</style>