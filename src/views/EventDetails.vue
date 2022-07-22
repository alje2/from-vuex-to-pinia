<script>
import { useEventStore } from '../stores/Event';
export default {
  props: ['id'],
  setup() {
    const eventStore = useEventStore();
    return {
      eventStore,
    };
  },
  created() {
    this.eventStore.fetchEvent(this.id).catch((error) => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      });
    });
  },
  computed: {
    event() {
      return this.eventStore.event;
    },
  },
  methods: {
    deleteEvent() {
      this.eventStore
        .deleteEvent(this.id)
        .then(() => {
          this.$router.push({ name: 'EventList' });
        })
        .catch((error) => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error },
          });
        });
    },
  },
};
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <button @click="deleteEvent()">Delete</button>
</template>
