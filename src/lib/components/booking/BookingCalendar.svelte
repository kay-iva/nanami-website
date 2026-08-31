<script lang="ts">
    import { onMount } from 'svelte';

    const calLink =
        'kaloyan-ivanov-d8shly/klavier-einzelstunde-30-min';

    onMount(() => {
        const win = window as any;

        (function (C: any, A: string, L: string) {
            const p = (a: any, ar: any) => {
                a.q.push(ar);
            };

            const d = C.document;

            C.Cal =
                C.Cal ||
                function () {
                    const cal = C.Cal;
                    const args = arguments;

                    if (!cal.loaded) {
                        cal.ns = {};
                        cal.q = cal.q || [];

                        const script = d.createElement('script');
                        script.src = A;
                        d.head.appendChild(script);

                        cal.loaded = true;
                    }

                    if (args[0] === L) {
                        const api: any = function () {
                            p(api, arguments);
                        };

                        const namespace = args[1];

                        api.q = api.q || [];

                        if (typeof namespace === 'string') {
                            cal.ns[namespace] =
                                cal.ns[namespace] || api;

                            p(cal.ns[namespace], args);
                            p(cal, ['initNamespace', namespace]);

                            return;
                        }
                    }

                    p(cal, args);
                };
        })(
            win,
            'https://app.cal.com/embed/embed.js',
            'init'
        );

        win.Cal('init', 'booking', {
            origin: 'https://cal.com'
        });

        win.Cal.ns.booking('inline', {
            elementOrSelector: '#cal-booking',
            calLink,
            config: {
                layout: 'month_view'
            }
        });

        win.Cal.ns.booking('ui', {
            styles: {
                branding: {
                    brandColor: '#66756a'
                }
            },
            hideEventTypeDetails: false,
            layout: 'month_view',
            theme: 'light'
        });
    });
</script>

<div class="booking-calendar">
    <div id="cal-booking"></div>
</div>

<style>
    .booking-calendar {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
    }

    #cal-booking {
        width: 100%;
        min-height: 620px;
    }
</style>