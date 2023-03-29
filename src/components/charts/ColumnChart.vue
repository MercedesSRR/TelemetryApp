<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script lang="ts">

    import { defineComponent, h } from 'vue';
    import { GChart } from 'vue-google-charts';
    import { useTelemetryStore } from '../../stores/telemetryStore.js';

    const telemetryStore = useTelemetryStore();
    export const type = 'ColumnChart';

    let count = telemetryStore.recordCount;

    export const data = [
        ['Types of fish', 'Amount', { role: 'style' }],
        ['Red', 8, '#f71f1b'],
        ['Blue', 10, '#4287f5'],
        ['Yellow', 4, '#f7c41b'],
    ];

    export const options = {
        title: 'Kinds of fish fished',
        legend: 'none',
        hAxis: {
            title: 'Types of fish',
        },
        vAxis: {
            title: 'Amount',
        },
        width: 500,
        height: 300,
    };

    //telemetryStore.fetch()
        // .then( status => {
        //     //alert the user? go get the data from the store?
        //     //fill in a form?
        // })

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