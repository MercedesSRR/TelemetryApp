<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script lang="ts">

    import { defineComponent, h } from 'vue';

    import { GChart } from 'vue-google-charts';

    export const type = 'ComboChart';

    export const data = [
        [
        'Month',
        'Bolivia',
        'Ecuador',
        'Colombia',
        'Mexico',
        'Rwanda',
        'Average',
        ],
        ['04/05', 165, 938, 522, 998, 450, 614.6],
        ['05/06', 135, 1120, 599, 1268, 288, 682],
        ['06/07', 157, 1167, 587, 807, 397, 623],
        ['07/08', 139, 1110, 615, 968, 215, 609.4],
        ['08/09', 136, 691, 629, 1026, 366, 569.6],
    ];

    export const options = {
        title: 'Monthly Coffee Production by Country',
        chartArea: { width: '50%' },
        vAxis: { title: 'Cups' },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        series: { 5: { type: 'line' } },
        colors: ['#111691', '#299111', '#f70cd0', '#f7280c', '#075e6e', '#f79d0c'],
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