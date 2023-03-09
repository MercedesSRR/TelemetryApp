<script>

    //class BarChart {

        const chart = new JSC.Chart("chart", {
            type: "column",
            series: [
            {
                name:  "Teams",
                points: [{ x: "A", y: 10 }, { x: "B", y: 5 }]
            }
            ],
            debug:true
        });

        //chart.render()
        
    //} 

    //export default new BarChart("BarChart", {chart});

</script>

<template>
    <h3 style="width:50%">My chart</h3>
    <div id="chart" style="max-width: 100%;height: 100%;margin: 0px auto;"></div>
</template>