<script lang="ts">
    import BookingButton from '$lib/components/booking/BookingButton.svelte';
    import { booking } from '$lib/config/booking';
</script>

<svelte:head>
    <title>Buchungstest | Nanami Shiraki</title>
</svelte:head>

<main class="page-container">
    <h1>Booking Test</h1>

    <BookingButton booking={booking.trial} class="booking-button">
        Probestunde buchen
    </BookingButton>
</main>

<style>
    main {
        padding-block: 8rem;
    }

    h1 {
        margin-bottom: 3rem;
        font-family: var(--font-serif);
        font-size: 4rem;
        font-weight: 400;
    }

    :global(.booking-button) {
        padding: 1rem 1.5rem;
        background: var(--color-sage-700);
        color: var(--color-cream);
        font: 500 0.85rem var(--font-sans);
        cursor: pointer;
    }
</style>