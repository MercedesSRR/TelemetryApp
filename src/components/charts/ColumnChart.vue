<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script lang="ts">

    import { defineComponent, h } from 'vue';
    import { GChart } from 'vue-google-charts';
    import { useTelemetryStore } from '../../stores/telemetryStore.js';

    const telemetryStore = useTelemetryStore();
    export const type = 'ColumnChart';

    let count = telemetryStore.recordCount;

    export const data = [
        ['Year', 'Billions'],
        ['2017', 2.33],
        ['2018', 2.49],
        ['2019', 2.64],
        ['2020', 2.81],
        ['2021', 2.96],
        ['2022', 3.09],
        ['2023', 3.22],
    ];

    export const options = {
        title: 'Number of Videogamers in the World',
        legend: 'none',
        hAxis: {
            title: 'Year',
        },
        vAxis: {
            title: 'Billions',
        },
        colors: ['#111691', '#299111'],
        width: 400,
        height: 200,
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