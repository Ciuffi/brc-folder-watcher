<template>
    <div class="card" style="text-align: center; width: 30vw;">
        <div class="card-header has-background-grey">
            <div class="has-text-white card-header-title">Current Run Statistics</div>
        </div>
        <div class="card-content">
            <p> Current run name: {{ filename }}</p>
            <p v-if="processed" style="color: green;">This run has been processed! </p>
            <p v-else style="color: orange;">This file has not been processed</p>
            <p v-if="error" style="color: red;">Something went wrong.. Please check the stacktrace.</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['error', 'filename', 'processed']
}
</script>
