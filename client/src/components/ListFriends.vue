<template>
  <section class="list-friends">
    <div class="list-friends_head">
      <div class="list-friends_head-avatar"><i class="mdi mdi-face"></i></div>
      <div class="list-friends_head-info">
        <h4>Gravid Cristofer</h4>
        <p>Senior Developer</p>
      </div>
      <button class="list-friends_head-edit"><i class="mdi mdi-pencil"></i></button>
    </div>
    <div class="list-friends_search">
      <UISearch />
    </div>
    <div class="list-friends_people">
      <FriendItem />
    </div>
  </section>
</template>

<script>
import UISearch from '@/components/ui/UISearch';
import FriendItem from '@/components/FriendItem';

export default {
  name: 'ListFriends',
  components: { UISearch, FriendItem }
};
</script>

<style lang="scss" scoped>
  .list-friends {
    background-color: var(--accent-grey);
    z-index: 1;
    padding: 20px;

    &_head {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      &-avatar {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--accent-white);
        border-radius: 100%;
        border: 1px solid var(--accent-blue);
        margin-right: 15px;
        overflow: hidden;

        i {
          font-size: 2rem;
          color: var(--text-color--grey);
          margin-top: 2px;
        }
      }

      &-info {
        margin-right: auto;

        h4 {
          color: var(--accent-blue);
        }

        p {
          color: var(--text-color--dark);
        }
      }

      &-edit {
        padding: 5px;
        cursor: pointer;

        i {
          font-size: 1.375rem;
          color: var(--text-color--dark);
        }
      }
    }

    .ui-search {
      margin: 30px 0;
    }
  }
</style>
