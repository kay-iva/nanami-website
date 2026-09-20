<script lang="ts">
    import { enhance } from '$app/forms';

    interface ContactValues {
        name: string;
        email: string;
        interest: string;
        message: string;
    }

    interface FormState {
        success?: boolean;
        error?: string;
        values?: ContactValues;
    }

    interface Props {
        form?: FormState | null;
    }

    let { form = null }: Props = $props();

    let submitting = $state(false);

    const emptyValues: ContactValues = {
        name: '',
        email: '',
        interest: '',
        message: ''
    };

    let values = $derived<ContactValues>(
        form?.values ?? emptyValues
    );
</script>

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

                    <span aria-hidden="true">⌄</span>
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

            {#if form?.error}
                <p class="form-error" role="alert">
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

                <span class="arrow" aria-hidden="true">↗</span>
            </button>
        </form>
    {/if}
</div>

<style>
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

        transition: border-color var(--transition-fast);
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

    @media (max-width: 800px) {
        .form-wrapper {
            margin-inline: calc(var(--page-padding) * -1);

            padding:
                    3.5rem
                    var(--page-padding);
        }

        .form-row {
            grid-template-columns: 1fr;
        }
    }
</style>