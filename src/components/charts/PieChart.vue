<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script lang="ts">
    import { defineComponent, h } from 'vue';

    import { GChart } from 'vue-google-charts';

    export const type = 'PieChart';

    export const data = [
        ['Type of fish', 'Stolen fish'],
        ['Blue', 8],
        ['Red', 3],
        ['Yellow', 2],
    ];

    export const options = {
        title: 'Stolen fish',
        width: 500,
        height: 300,
    };

    export default defineComponent({
        name: 'GoogleChart',
        components: {
            GChart,
        },
        setup() {
            return () =>
            h(GChart, {
                data,
                options,
                type,
            });
        },
    });


</script>