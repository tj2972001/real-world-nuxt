<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard,
  },
  asyncData(context) {
    return context.$axios
      .get('http://localhost:3001/events')
      .then((response) => {
        return {
          events: response.data,
        }
      })
      .catch((e) => {
        context.error({
          message: 'Unable to fetch Event ',
          statusCode: 503,
        })
      })
  },
}
</script>
