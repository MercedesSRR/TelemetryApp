<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script>
    import { defineComponent, h } from 'vue';

    import { GChart } from 'vue-google-charts';

    export const type = 'ScatterChart';

    export const data = [
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2008', 1030, 540],
        ['2009', 1000, 400],
        ['2010', 1170, 460],
        ['2011', 660, 1120],
        ['2012', 1030, 540],
    ];

    export const options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: ['#db520d', '#0d4bdb'],
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