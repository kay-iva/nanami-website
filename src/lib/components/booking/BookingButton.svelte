<script lang="ts">
    import { onMount } from 'svelte';
    import type { Snippet } from 'svelte';
    import type { BookingLink } from '$lib/config/booking';

    interface Props {
        booking: BookingLink;
        children: Snippet;
        class?: string;
    }

    let { booking, children, class: className = '' }: Props = $props();

    onMount(() => {
        (function (C: any, A: string, L: string) {
            const p = (a: any, ar: any) => {
                a.q.push(ar);
            };

            const d = C.document;
            C.Cal =
                C.Cal ||
                function (...args: any[]) {
                    const cal = C.Cal;
                    const ar = args;

                    if (!cal.loaded) {
                        cal.ns = {};
                        cal.q = cal.q || [];
                        d.head.appendChild(d.createElement('script')).src = A;
                        cal.loaded = true;
                    }

                    if (ar[0] === L) {
                        const api: any = function (...apiArgs: any[]) {
                            p(api, apiArgs);
                        };

                        const namespace = ar[1];
                        api.q = api.q || [];

                        if (typeof namespace === 'string') {
                            cal.ns[namespace] = cal.ns[namespace] || api;
                            p(cal.ns[namespace], ar);
                            p(cal, ['initNamespace', namespace]);
                        } else {
                            p(cal, ar);
                        }

                        return;
                    }

                    p(cal, ar);
                };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');

        const Cal: any = window.Cal;

        Cal('init', booking.namespace, {
            origin: 'https://app.cal.com'
        });

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