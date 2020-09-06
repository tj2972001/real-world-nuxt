export { default as EventCard } from '../../components/EventCard.vue'
export { default as NavBar } from '../../components/NavBar.vue'

export const LazyEventCard = import('../../components/EventCard.vue' /* webpackChunkName: "components/EventCard" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/NavBar" */).then(c => c.default || c)
