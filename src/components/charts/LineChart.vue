<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script lang="ts">

    import { defineComponent, h } from 'vue';

    import { GChart } from 'vue-google-charts';

    export const type = 'LineChart';

    export const data = [
        ['Game moment', 'Slaps'],
        ['1', 20],
        ['2', 15],
        ['3', 60],
        ['4', 13],
    ];

    export const options = {
        title: 'Slaps during the game',
        curveType: 'function',
        legend: {position: 'right'},
        hAxis: {
            title: 'Game minute',
        },
        vAxis: {
            title: 'Amount',
        },
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