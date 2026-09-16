<script lang="ts">
    import Eyebrow from '$lib/components/ui/Eyebrow.svelte';

    interface Props {
        eyebrow: string;
        title: string;
        italicTitle?: string;
    }

    let {
        eyebrow,
        title,
        italicTitle
    }: Props = $props();
</script>

<header>
    <Eyebrow>{eyebrow}</Eyebrow>

    <h2>
        {title}

        {#if italicTitle}
            <span>{italicTitle}</span>
        {/if}
    </h2>
</header>

<style>
    header {
        max-width: 750px;
        margin-bottom: clamp(4rem, 7vw, 7rem);
    }

    h2 {
        color: var(--color-sage-700);
    }

    h2 span {
        display: block;

        color: var(--color-text);
        font-style: italic;
    }
</style>