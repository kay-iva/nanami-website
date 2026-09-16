<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Cloudinary Test</title>
</svelte:head>

<main>
    <h1>Cloudinary Test</h1>

    <section>
        <h2>Fixed image</h2>

        {#if data.aboutHero}
            <img
                    src={data.aboutHero.src}
                    srcset={data.aboutHero.srcset}
                    sizes="min(800px, 100vw)"
                    width={data.aboutHero.width}
                    height={data.aboutHero.height}
                    alt={data.aboutHero.alt}
            />

            <pre>{JSON.stringify(data.aboutHero, null, 2)}</pre>
        {:else}
            <p>site-about-hero not found.</p>
        {/if}
    </section>

    <section>
        <h2>About gallery ({data.aboutGallery.length})</h2>

        <div class="gallery">
            {#each data.aboutGallery as image}
                <img
                        src={image.src}
                        srcset={image.srcset}
                        sizes="300px"
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                />
            {/each}
        </div>

        <pre>{JSON.stringify(data.aboutGallery, null, 2)}</pre>
    </section>

    <section>
        <h2>Hero video</h2>

        {#if data.heroVideo}
            <video
                    controls
                    muted
                    poster={data.heroVideo.poster}
            >
                <source src={data.heroVideo.webm} type="video/webm" />
                <source src={data.heroVideo.mp4} type="video/mp4" />
            </video>

            <pre>{JSON.stringify(data.heroVideo, null, 2)}</pre>
        {:else}
            <p>site-home-hero not found.</p>
        {/if}
    </section>
</main>

<style>
    main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    section {
        margin-block: 4rem;
    }

    img,
    video {
        max-width: 800px;
        width: 100%;
        height: auto;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .gallery img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }

    pre {
        margin-top: 2rem;
        padding: 1rem;
        overflow-x: auto;
        background: #eee;
        font-size: 0.75rem;
    }
</style>