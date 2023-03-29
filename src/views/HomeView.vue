<!-- Copyright (c) 2023. Mercedes Senties, All Rights Reserved -->

<script>

    import Controller from '../../plugins/controller'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                formData: {
                    textData:"",
                    numberData:42,
                }
            }
        }
    }

    export default new HomeController('HomeView');

</script>

<template>
  <div class="welcome">
    <h1>Welcome to the Telemetry App</h1>
    <body>In this app you'll be able to see the automatic measurement and wireless transmission of data from remote sources. Specifically from our VFS games</body>
    <div class="flexitem dialog">
            <form class="sample-form">
                <label for="s1">Variable 1:
                    <input name="s1" v-model="formData.textData">
                </label><br/>
                <label for="s2">Number variable:
                    <input name="s2" v-model="formData.numberData">
                </label><br/>
                <button value="Submit" class="">SUBMIT</button>
            </form>
    </div>
  </div>
</template>

<style>
.welcome {
  text-align: center;
  align-content: center;
  padding: 200px;
}

.sample-form {
  border: 2px solid #333;
  margin: 1em;
  padding: 2em;
}

select, input, button {
  font-size: 1.2em;
  font-weight: 700;
  height: 1.4em;
}

button {
  padding: .5em;
  margin: .25em;
  padding-bottom: 1.5em;
}
</style>

