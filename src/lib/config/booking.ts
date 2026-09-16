export interface BookingLink {
    calLink: string;
    namespace: string;
}

export const booking = {
    trial: {
        calLink: 'kaloyan-ivanov-d8shly/probestunde',
        namespace: 'probestunde'
    },

    single: {
        30: {
            calLink: 'kaloyan-ivanov-d8shly/klavier-einzelstunde-30-min',
            namespace: 'klavier-einzelstunde-30-min'
        },
        45: {
            calLink: 'kaloyan-ivanov-d8shly/klavier-einzelstunde-45-min',
            namespace: 'klavier-einzelstunde-45-min'
        },
        60: {
            calLink: 'kaloyan-ivanov-d8shly/klavier-einzelstunde-60-min',
            namespace: 'klavier-einzelstunde-60-min'
        }
    },

    block: {
        30: {
            calLink: 'kaloyan-ivanov-d8shly/stundenblock-30-min',
            namespace: 'stundenblock-30-min'
        },
        45: {
            calLink: 'kaloyan-ivanov-d8shly/stundenblock-45-min',
            namespace: 'stundenblock-45-min'
        },
        60: {
            calLink: 'kaloyan-ivanov-d8shly/stundenblock-60-min',
            namespace: 'stundenblock-60-min'
        }
    },

    courses: {
        rhythmik: {
            calLink: 'kaloyan-ivanov-d8shly/course',
            namespace: 'course'
        }
    }
} satisfies Record<string, BookingLink | Record<string | number, BookingLink>>;