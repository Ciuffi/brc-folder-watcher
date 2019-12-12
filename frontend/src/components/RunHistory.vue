<template>
    <div class="history card" style="text-align: center; width: 80vw;">
        <div class="card-header has-background-grey">
            <div style="width: 100%; display: inline;" class="has-text-white card-header-title">
                <p style="float: left;">Run History</p>
                <button @click="reload" style="float: right" class="button is-info">Reload</button>
                </div>
        </div>
        <div v-if="runs.length > 0" class="card-content">
            <div v-for="{pipeline_start, _id, name, error, processed, created, slims, finished, folder} in processedRuns" :key="_id" class="message" :class="{'is-success': processed && !pipeline_start, 'is-warning': !processed && !error && !pipeline_start, 'is-danger': error, 'is-info': !!pipeline_start}">
                  <div class="message-header">
                    Name: {{name}}
                    <p v-if="!error">processed: {{processed ? 'yes' : 'no'}}</p>
                    <p v-if="error"> Error!</p>
                </div>
                <div style="text-align: left;" class="message-body">
                    <p><b>SLIMS url: </b> {{slims ? slims : 'not set'}}</p>
                    <p><b>Started on:</b> {{new Date(created)}}</p>
                    <p><b>Run finished at: </b> {{finished ? new Date(finished) : 'unfinished'}}</p>
                    <p><b>Run folder: </b> {{folder ? folder : 'unfinished'}}</p>
                    <p><b>Pipeline started on: </b> {{pipeline_start ? new Date(pipeline_start) : 'unfinished'}}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <h1 style="padding: 5%">Currently no runs.</h1>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    runs: {
      type: Array,
      require: true
    },
    reload: {
      type: Function,
      require: true
    }
  },
  computed: {
    processedRuns () {
      const newRuns = this.runs.map(run => {
        run.error = this.isBool(run.error)
        run.processed = this.isBool(run.processed)
        return run
      })
      return newRuns
    }
  },
  methods: {
    isBool (str) {
      const booled = (str === 'false' || str === 'true')
      if (booled) {
        return str !== 'false'
      } else {
        return str
      }
    }
  }
}
</script>
<style>
.history {
    margin: auto;
}
</style>
