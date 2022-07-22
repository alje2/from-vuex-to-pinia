import EventService from '../../services/EventService';
export default {
  createEvent(event) {
    return EventService.postEvent(event)
      .then(() => {
        this.events.push(event);
      })
      .catch((error) => {
        throw error;
      });
  },
  fetchEvents() {
    return EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
  fetchEvent(id) {
    const existingEvent = this.events.find((event) => event.id === id);
    if (existingEvent) {
      this.event = existingEvent;
      return Promise.resolve();
    } else {
      return EventService.getEvent(id)
        .then((response) => {
          this.event = response.data;
        })
        .catch((error) => {
          throw error;
        });
    }
  },
  deleteEvent(id) {
    return EventService.deleteEvent(id)
      .then((/* response */) => {
        this.fetchEvents();
      })
      .catch((error) => {
        throw error;
      });
  },
};
