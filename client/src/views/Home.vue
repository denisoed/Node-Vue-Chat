<template>
  <section class="home">
    <ListFriends />
    <MessagesWindow />
    <UserDetail />
  </section>
</template>

<script>
import ListFriends from '@/components/ListFriends';
import MessagesWindow from '@/components/MessagesWindow';
import UserDetail from '@/components/UserDetail';

export default {
  name: 'Home',
  components: {
    ListFriends,
    MessagesWindow,
    UserDetail
  }
};
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr;
  }
</style>
