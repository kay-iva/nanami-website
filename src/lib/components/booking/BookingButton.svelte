<script lang="ts">
    import { onMount } from 'svelte';
    import type { BookingLink } from '$lib/config/booking';

    interface Props {
        booking: BookingLink;
        children: import('svelte').Snippet;
        class?: string;
    }

    let { booking, children, class: className = '' }: Props = $props();

    onMount(() => {
        const Cal = window.Cal;
        if (!Cal) return;

        Cal('init', booking.namespace, { origin: 'https://app.cal.com' });

        Cal.ns[booking.namespace]('ui', {
            hideEventTypeDetails: false,
            layout: 'month_view'
        });
    });
</script>

<button
        type="button"
        class={className}
        data-cal-link={booking.calLink}
        data-cal-namespace={booking.namespace}
        data-cal-config={JSON.stringify({
		layout: 'month_view',
		useSlotsViewOnSmallScreen: 'true'
	})}
>
    {@render children()}
</button>