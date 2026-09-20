<script lang="ts">
    import BookingButton from '$lib/components/booking/BookingButton.svelte';
    import type { BookingLink } from '$lib/config/booking';
    import type { MusicCourse } from '$lib/types';

    interface Props {
        course: MusicCourse;
        bookingLink: BookingLink;
    }

    let { course, bookingLink }: Props = $props();

    let expanded = $state(false);
</script>

<article class="course">
    <div class="course-main">
        <div class="course-copy">
            <p class="course-age">{course.age}</p>

            <h3>{course.title}</h3>

            <p class="description">
                {course.description}
            </p>
        </div>

        <div class="course-summary">
            <div>
                <span>Einheiten</span>
                <strong>{course.dates.length}</strong>
            </div>

            <div>
                <span>Dauer</span>
                <strong>{course.duration} Min.</strong>
            </div>

            <div>
                <span>Zeit</span>
                <strong>{course.time}</strong>
            </div>

            <div>
                <span>Preis</span>
                <strong>€ {course.price}</strong>
            </div>
        </div>
    </div>

    <div class="actions">
        <button
                type="button"
                class="details"
                aria-expanded={expanded}
                onclick={() => (expanded = !expanded)}
        >
			<span>
				{expanded ? 'Termine schließen' : 'Alle Termine'}
			</span>

            <span aria-hidden="true">
				{expanded ? '−' : '+'}
			</span>
        </button>

        <BookingButton
                booking={bookingLink}
                class="book"
        >
            <span>Kurs buchen</span>
            <span aria-hidden="true">↗</span>
        </BookingButton>
    </div>

    {#if expanded}
        <div class="expanded">
            <div>
                <p class="small-title">Termine</p>

                <div class="dates">
                    {#each course.dates as date, i}
                        <div>
							<span>
								{String(i + 1).padStart(2, '0')}
							</span>

                            <strong>{date}</strong>
                        </div>
                    {/each}
                </div>
            </div>

            <div>
                <p class="small-title">Ort</p>

                <p class="location">
                    {course.location}
                </p>
            </div>
        </div>
    {/if}
</article>

<style>
    .course {
        padding: 3rem 0;

        border-bottom: 1px solid var(--border-soft);
    }

    .course-main {
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;

        gap: 5rem;
    }

    .course-age {
        margin: 0 0 0.7rem;

        color: var(--color-sage-700);

        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    h3 {
        margin: 0;

        color: var(--color-text);

        font-size: clamp(2.2rem, 4vw, 4rem);
    }

    .description,
    .location {
        color: var(--color-text-soft);

        font-size: 1rem;
        line-height: 1.8;
    }

    .description {
        margin: 1rem 0 0;
    }

    .course-summary {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .course-summary div {
        margin: 0 -1px -1px 0;
        padding: 1rem;

        border: 1px solid var(--border-soft);
    }

    .course-summary span,
    .small-title {
        display: block;

        margin-bottom: 0.35rem;

        color: var(--color-text-soft);

        font-size: 0.65rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .course-summary strong {
        color: var(--color-text);

        font-size: 0.9rem;
        font-weight: 500;
    }

    .actions {
        display: flex;
        justify-content: flex-end;

        gap: 1rem;
        margin-top: 2rem;
    }

    .details,
    :global(.book) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 2rem;

        min-width: 180px;

        padding: 0.95rem 1.1rem;

        font-size: 0.78rem;
        font-weight: 500;

        transition:
                transform var(--transition-fast),
                background var(--transition-fast),
                color var(--transition-fast);
    }

    .details {
        border: 1px solid var(--border-soft);

        background: transparent;
        color: var(--color-text);
    }

    .details:hover {
        border-color: var(--color-sage-300);
    }

    :global(.book) {
        background: var(--color-sage-700);
        color: var(--color-cream);
    }

    :global(.book:hover) {
        transform: translateY(-2px);
    }

    .expanded {
        display: grid;
        grid-template-columns: 1fr 1fr;

        gap: 5rem;

        margin-top: 3rem;
        padding: 3rem;

        background: var(--color-sage-100);
    }

    .dates {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 0.6rem;
    }

    .dates div {
        display: flex;

        gap: 1rem;

        font-family: var(--font-sans);
    }

    .dates span {
        color: var(--color-sage-700);
    }

    .location {
        margin: 0;
    }

    @media (max-width: 800px) {
        .course-main,
        .expanded {
            grid-template-columns: 1fr;

            gap: 3rem;
        }

        .actions {
            justify-content: stretch;
        }

        .details,
        :global(.book) {
            flex: 1;
        }
    }

    @media (max-width: 550px) {
        .course-summary,
        .dates {
            grid-template-columns: 1fr;
        }

        .actions {
            flex-direction: column;
        }

        .expanded {
            padding: 2rem;
        }
    }
</style>