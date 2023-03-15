<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script lang="ts">

    import { defineComponent, h } from 'vue';

    import { GChart } from 'vue-google-charts';

    export const type = 'LineChart';

    export const data = [
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540],
    ];

    export const options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: {position: 'bottom'},
        width: 400,
        height: 200, 
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