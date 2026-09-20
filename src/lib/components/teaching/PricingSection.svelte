<script lang="ts">
    import BookingButton from '$lib/components/booking/BookingButton.svelte';
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';
    import { booking } from '$lib/config/booking';

    interface Lesson {
        duration: string;
        price: string;
    }

    interface Block {
        amount: string;
        prices: Lesson[];
    }

    interface Props {
        yearlyPlans: Lesson[];
        lessonBlocks: Block[];
        singleLessons: Lesson[];
    }

    let {
        yearlyPlans,
        lessonBlocks,
        singleLessons
    }: Props = $props();

    const duration = {
        '30 min': 30,
        '45 min': 45,
        '60 min': 60
    } as const;
</script>

<section class="prices">
    <div class="page-container">
        <div class="prices-heading">
            <div>
                <Eyebrow>Unterrichtsmodelle</Eyebrow>

                <h2>
                    Flexibel
                    <span>Klavier lernen.</span>
                </h2>
            </div>

            <p class="prices-intro">
                Je nachdem, wie regelmäßig oder flexibel du Unterricht
                nehmen möchtest, stehen verschiedene Unterrichtsmodelle
                zur Verfügung.
            </p>
        </div>

        <div class="price-grid">
            <article class="price-card">
                <div class="card-heading">
                    <p class="card-number">01</p>

                    <div>
                        <h3>Jahresvertrag</h3>
                        <p>36 Unterrichtseinheiten pro Jahr</p>
                    </div>
                </div>

                <p class="card-description">
                    Drei Unterrichtseinheiten pro Monat mit einem
                    fixen monatlichen Betrag.
                </p>

                <div class="price-list">
                    {#each yearlyPlans as plan}
                        <div class="price-row">
                            <strong>{plan.duration}</strong>
                            <span>{plan.price} / Monat</span>
                        </div>
                    {/each}
                </div>

                <a href="/contact" class="card-action contact-action">
                    <div>
                        <strong>Jahresvertrag anfragen</strong>
                        <span>Weiter zum Kontakt</span>
                    </div>

                    <span aria-hidden="true">↗</span>
                </a>
            </article>

            <article class="price-card">
                <div class="booking-badge">Online buchbar</div>

                <div class="card-heading">
                    <p class="card-number">02</p>

                    <div>
                        <h3>Stundenblock</h3>
                        <p>Mehr Flexibilität</p>
                    </div>
                </div>

                <p class="card-description">
                    Fünf oder zehn Unterrichtseinheiten,
                    flexibel einlösbar und zwei Jahre gültig.
                </p>

                {#each lessonBlocks as block}
                    <div class="block-group">
                        <strong>{block.amount}</strong>

                        {#each block.prices as lesson}
                            <div class="price-row">
                                <span>{lesson.duration}</span>
                                <span>{lesson.price}</span>
                            </div>
                        {/each}
                    </div>
                {/each}

                <div class="booking-options">
                    <p>Termin auswählen</p>

                    {#each ['30 min', '45 min', '60 min'] as label}
                        {@const minutes = duration[label as keyof typeof duration]}

                        <BookingButton
                                booking={booking.block[minutes]}
                                class="duration-booking"
                        >
                            <span>{label}</span>
                            <span aria-hidden="true">↗</span>
                        </BookingButton>
                    {/each}
                </div>
            </article>

            <article class="price-card">
                <div class="booking-badge">Direkt buchbar</div>

                <div class="card-heading">
                    <p class="card-number">03</p>

                    <div>
                        <h3>Einzelstunde</h3>
                        <p>Maximale Flexibilität</p>
                    </div>
                </div>

                <p class="card-description">
                    Einzelne Unterrichtseinheiten ohne längerfristige
                    Bindung. Termin einfach online auswählen und
                    direkt buchen.
                </p>

                <div class="single-options">
                    {#each singleLessons as lesson}
                        {@const minutes = duration[lesson.duration as keyof typeof duration]}

                        <div class="single-row">
                            <div>
                                <strong>{lesson.duration}</strong>
                                <span>{lesson.price}</span>
                            </div>

                            <BookingButton
                                    booking={booking.single[minutes]}
                                    class="row-booking"
                            >
                                <span>Buchen</span>
                                <span aria-hidden="true">↗</span>
                            </BookingButton>
                        </div>
                    {/each}
                </div>
            </article>
        </div>
    </div>
</section>

<style>
    .prices {
        padding-block: clamp(6rem, 10vw, 10rem);
        background: var(--color-cream);
    }

    .prices-heading {
        display: grid;
        grid-template-columns: 1fr 0.7fr;

        align-items: end;
        gap: 4rem;

        margin-bottom: clamp(4rem, 7vw, 7rem);
    }

    .prices-heading h2 {
        margin: 0;
        color: var(--color-sage-700);
    }

    .prices-heading h2 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
    }

    .prices-intro {
        max-width: 480px;

        color: var(--color-text-soft);
        line-height: 1.8;
    }

    .price-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        border-top: 1px solid var(--border-soft);
        border-bottom: 1px solid var(--border-soft);
    }

    .price-card {
        position: relative;

        display: flex;
        flex-direction: column;

        padding: clamp(2rem, 4vw, 3.5rem);

        border-right: 1px solid var(--border-soft);
    }

    .price-card:first-child {
        padding-left: 0;
    }

    .price-card:last-child {
        border-right: 0;
    }

    .card-heading {
        display: flex;
        gap: 1.5rem;

        margin-bottom: 2rem;
    }

    .card-number {
        color: var(--color-sage-300);
        font-size: 0.65rem;
    }

    .card-heading h3 {
        margin-bottom: 0.3rem;
        color: var(--color-sage-700);
    }

    .card-heading p {
        margin: 0;

        color: var(--color-text-soft);
        font-size: 0.8rem;
    }

    .card-description {
        min-height: 75px;

        color: var(--color-text-soft);

        font-size: 0.9rem;
        line-height: 1.7;
    }

    .price-list,
    .block-group {
        margin-top: 2rem;
    }

    .block-group + .block-group {
        margin-top: 2.5rem;
    }

    .price-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 1rem;
        padding: 0.9rem 0;

        border-bottom: 1px solid var(--border-soft);

        font-size: 0.88rem;
    }

    .booking-badge {
        align-self: flex-start;

        margin-bottom: 1.5rem;
        padding: 0.45rem 0.7rem;

        border: 1px solid var(--color-sage-300);
        border-radius: 999px;

        color: var(--color-sage-700);

        font-size: 0.63rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .card-action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;

        width: 100%;

        margin-top: auto;
        padding: 1rem 1.2rem;

        background: var(--color-sage-700);
        color: var(--color-cream);

        transition:
                transform var(--transition-fast),
                background var(--transition-fast);
    }

    .card-action:hover {
        transform: translateY(-2px);
    }

    .card-action > div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    .card-action strong {
        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.06em;
    }

    .card-action div span {
        color: var(--color-sage-100);

        font-size: 0.62rem;
        letter-spacing: 0.05em;
    }

    .booking-options {
        margin-top: auto;
        padding-top: 2.5rem;
    }

    .booking-options > p {
        margin-bottom: 1rem;

        color: var(--color-text-soft);

        font-size: 0.68rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    :global(.duration-booking) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        margin-top: 0.65rem;
        padding: 0.9rem 1rem;

        background: var(--color-sage-700);
        color: var(--color-cream);

        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.05em;

        transition:
                transform var(--transition-fast),
                background var(--transition-fast);
    }

    :global(.duration-booking:hover) {
        transform: translateY(-2px);
    }

    .single-options {
        margin-top: 2rem;
    }

    .single-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 1rem;
        padding: 0.9rem 0;

        border-bottom: 1px solid var(--border-soft);
    }

    .single-row > div {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }

    .single-row > div span {
        color: var(--color-text-soft);
        font-size: 0.78rem;
    }

    :global(.row-booking) {
        display: inline-flex;
        align-items: center;
        gap: 1rem;

        padding: 0.55rem 0.75rem;

        background: var(--color-sage-700);
        color: var(--color-cream);

        font-size: 0.7rem;
        letter-spacing: 0.06em;

        transition: transform var(--transition-fast);
    }

    :global(.row-booking:hover) {
        transform: translateY(-2px);
    }

    @media (max-width: 800px) {
        .prices-heading,
        .price-grid {
            grid-template-columns: 1fr;
        }

        .price-card,
        .price-card:first-child {
            padding: 2.5rem 0;

            border-right: 0;
            border-bottom: 1px solid var(--border-soft);
        }

        .price-card:last-child {
            border-bottom: 0;
        }

        .card-description {
            min-height: auto;
        }
    }
</style>