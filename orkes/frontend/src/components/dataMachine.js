import { Machine, assign } from 'xstate';

const dataMachine = Machine({
    id: 'dataMachine',
    initial: 'idle',
    context: {
        data: [],
        currentPage: 1
    },
    states: {
        idle: {
            on: {
                ADD_DATA: {
                    actions: assign({
                        data: (context, event) => [...context.data, ...event.value]
                    }),
                },
                CHANGE_PAGE: {
                    actions: assign({
                        currentPage: (context) => context.currentPage + 1
                    }),
                }
            },
        },
    },
});

export { dataMachine }