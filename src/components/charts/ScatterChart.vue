<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script>
    import { defineComponent, h } from 'vue';

    import { GChart } from 'vue-google-charts';

    export const type = 'ScatterChart';

    export const data = [
        ['y', 'x'],
        [1000, 400],
        [1170, 460],
        [660, 1120],
        [1030, 540],
        [1000, 400],
        [1170, 460],
        [660, 1120],
        [1030, 540],
    ];

    export const options = {
        curveType: 'function',
        colors: ['#db520d', '#0d4bdb'],
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