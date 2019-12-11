<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            BRC AutoRun
          </h1>
          <h2 class="subtitle">
            Management System
          </h2>
        </div>
      </div>
    </section>
    <div class="cards container is-flex">
      <RunInput :submit="submit" :response="response"/>
      <RunStats :error="error" :filename="filename" :processed="processed" />
    </div>
    <RunHistory />
  </div>
</template>

<script>
// @ is an alias to /src
import RunInput from '@/components/RunInput'
import RunStats from '@/components/RunStats'
import RunHistory from '@/components/RunHistory'

export default {
  name: 'home',
  components: { RunInput, RunStats, RunHistory },
  data () {
    return {
      processed: false,
      filename: 'loading...',
      error: false,
      response: '',
      interval: () => {}
    }
  },
  methods: {
    async getRunData () {
      try {
        const response = await this.axios.get('/api/currentRun')
        this.processed = response.data.processed
        this.filename = response.data.filename
        this.error = response.data.error
      } catch (error) {
        this.filename = 'unset'
      }
    },
    async submit (filename) {
      const form = new FormData()
      form.set('fileName', filename)
      const response = await this.axios({
        method: 'post',
        url: '/api/newRun',
        data: form,
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      this.response = response.status === 200 ? 'success' : 'error'
      await this.getRunData()
    }
  },
  mounted () {
    this.getRunData()
    self.interval = setInterval(this.getRunData, 6000)
  },
  beforeDestroy () {
    clearInterval(self.interval)
  }
}
</script>

<style scoped>
.cards > *{
  margin: 4% auto;
}
</style>
