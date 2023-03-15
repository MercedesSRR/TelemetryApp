<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script>
    import { defineComponent, h } from 'vue';

    import { GChart } from 'vue-google-charts';

    export const type = 'Histogram';

    export const data = [
        ['Dinosaur', 'Length'],
        ['Acrocanthosaurus', 12.2],
        ['Albertosaurus', 9.1],
        ['Allosaurus', 12.2],
        ['Apatosaurus', 22.9],
        ['Archaeopteryx', 0.9],
        ['Argentinosaurus', 36.6],
        ['Baryonyx', 9.1],
        ['Brachiosaurus', 30.5],
        ['Ceratosaurus', 6.1],
        ['Coelophysis', 2.7],
        ['Compsognathus', 0.9],
        ['Deinonychus', 2.7],
        ['Diplodocus', 27.1],
        ['Seismosaurus', 45.7],
        ['Supersaurus', 30.5],
        ['Velociraptor', 1.8],
    ];

    export const options = {
        title: 'Lengths of Dinosaurs',
        legend: { position: 'none' },
        colors: ['#9342f5'],
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