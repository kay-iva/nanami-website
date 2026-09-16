<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        href: string;
        children: Snippet;
        class?: string;
    }

    let {
        href,
        children,
        class: className = ''
    }: Props = $props();
</script>

<a {href} class={className}>
    <span>{@render children()}</span>
    <span aria-hidden="true">↗</span>
</a>

<style>
    a {
        display: inline-flex;
        align-items: center;
        gap: 2rem;

        margin-top: 2.5rem;
        padding-bottom: 0.5rem;

        border-bottom: 1px solid var(--color-sage-700);

        color: var(--color-sage-700);

        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.07em;

        transition: gap var(--transition-fast);
    }

    a:hover {
        gap: 2.5rem;
    }
</style>