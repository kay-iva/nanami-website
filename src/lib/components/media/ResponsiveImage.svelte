<script lang="ts">
    import type { SiteImage } from '$lib/types';

    interface Props {
        image: SiteImage;
        sizes?: string;
        class?: string;
        loading?: 'lazy' | 'eager';
        fetchpriority?: 'high' | 'low' | 'auto';
        fallback?: string;
    }

    let {
        image,
        sizes = '100vw',
        class: className = '',
        loading = 'lazy',
        fetchpriority = 'auto',
        fallback
    }: Props = $props();

    let failed = $state(false);
</script>

<img
        src={failed && fallback ? fallback : image.src}
        srcset={failed ? undefined : image.srcset}
        {sizes}
        alt={image.alt}
        width={image.width}
        height={image.height}
        {loading}
        {fetchpriority}
        decoding="async"
        class={className}
        onerror={() => (failed = true)}
/>