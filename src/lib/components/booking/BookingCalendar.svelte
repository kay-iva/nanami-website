<script lang="ts">
    import { onMount } from 'svelte';

    const calLink =
        'kaloyan-ivanov-d8shly/klavier-einzelstunde-30-min';

    onMount(() => {
        (function (C: Window, A: string, L: string) {
            const p = function (a: { q: unknown[] }, ar: IArguments) {
                a.q.push(ar);
            };

            const d = C.document;

            C.Cal =
                C.Cal ||
                function (...args: unknown[]) {
                    const cal = C.Cal as {
                        loaded?: boolean;
                        ns?: Record<string, unknown>;
                        q?: unknown[];
                    };

                    if (!cal.loaded) {
                        cal.ns = {};
                        cal.q = cal.q || [];

                        const script = d.createElement('script');
                        script.src = A;
                        d.head.appendChild(script);

                        cal.loaded = true;
                    }

                    if (args[0] === L) {
                        const api = function (...apiArgs: unknown[]) {
                            p(api as unknown as { q: unknown[] }, apiArgs as unknown as IArguments);
                        };

                        (api as unknown as { q: unknown[] }).q = [];

                        (cal.ns as Record<string, unknown>)[L] = api;

                        p(
                            api as unknown as { q: unknown[] },
                            args as unknown as IArguments
                        );
                    } else {
                        p(
                            cal as unknown as { q: unknown[] },
                            args as unknown as IArguments
                        );
                    }
                };
        })(window, 'https://app.cal.com/embed/embed.js', 'booking');

        const Cal = (
            window as Window & {
                Cal: (...args: unknown[]) => void;
            }
        ).Cal;

        Cal('init', 'booking', {
            origin: 'https://cal.com'
        });

        Cal.ns.booking('inline', {
            elementOrSelector: '#cal-booking',
            calLink,
            config: {
                layout: 'month_view'
            }
        });

        Cal.ns.booking('ui', {
            hideEventTypeDetails: false,
            layout: 'month_view'
        });
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