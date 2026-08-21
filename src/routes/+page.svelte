<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte'
    import Teaching from '$lib/components/Teaching.svelte'
</script>

<svelte:head>
    <title>Nanami Shiraki | Pianistin & Klavierpädagogin</title>
    <meta
            name="description"
            content="Nanami Shiraki – Pianistin und Klavierpädagogin in Wien."
    />
</svelte:head>

<main>
    <Hero />
    <About />
    <Teaching />
</main>