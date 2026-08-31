<script lang="ts">
    import { onMount } from 'svelte';

    const calLink =
        'kaloyan-ivanov-d8shly/klavier-einzelstunde-30-min';

    onMount(() => {
        const script = document.createElement('script');

        script.src = 'https://app.cal.com/embed/embed.js';
        script.async = true;

        script.onload = () => {
            const Cal = window.Cal;

            if (!Cal) {
                console.error('Cal.com embed could not be loaded.');
                return;
            }

            Cal('init', 'booking', {
                origin: 'https://cal.com'
            });

            Cal('inline', {
                elementOrSelector: '#cal-booking',
                calLink,
                config: {
                    layout: 'month_view'
                }
            });

            Cal('ui', {
                styles: {
                    branding: {
                        brandColor: '#66756a'
                    }
                },
                hideEventTypeDetails: false,
                layout: 'month_view'
            });
        };

        document.head.appendChild(script);

        return () => {
            script.remove();
        };
    });
</script>

<div class="booking-calendar">
    <div id="cal-booking"></div>
</div>

<style>
    .booking-calendar {
        width: 100%;
        min-height: 700px;
    }

    #cal-booking {
        width: 100%;
        min-height: 700px;
    }
</style>