<template>
    <div class="card" style="text-align: center; width: 30vw;">
        <div class="card-header has-background-grey">
            <div class="has-text-white card-header-title">Set a new run</div>
        </div>
        <div class="card-content">
            <p>Input the name of the sample in the current run</p>
        </div>
        <div class="card-footer">
            <form v-on:submit.prevent="submit(fileName)" style="display: flex; margin: 2% auto;" action="/" method="post">
                <input v-model="fileName" class="input is-success" type="text" name="fileName" placeholder="run name" value=""/>
                <input class="button is-success" type="submit" value="submit"/>
            </form>
        </div>
          <div v-if="response !== ''" style="margin: 1% auto;">
            <p
               :style="{color: response === 'error' ? 'red;' : 'green'}">
               {{response === 'error' ? 'There was an error setting the current run.' : 'Current run set successfully!'}}
            </p>
            </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      fileName: ''
    }
  },
  props: ['submit', 'response']
}
</script>
