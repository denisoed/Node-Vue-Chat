<template>
  <div class="friend-item">
    <div class="friend-item_avatar"></div>
    <div class="friend-item_info">
      <h4>Friend name</h4>
      <p>Last message</p>
    </div>
    <div class="friend-item_date">
      <p>10:34 AM</p>
      <div class="counter-message">1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendItem'
};
</script>

<style lang="scss" scoped>
  .friend-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &_avatar {
      width: 40px;
      height: 40px;
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

    &_info {
      margin-right: auto;

      h4 {
        color: var(--accent-blue);
      }

      p {
        color: var(--text-color--dark);
      }
    }

    &_date {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p {
        color: var(--text-color--grey);
        font-size: 0.875rem;
      }

      .counter-message {
        width: 17px;
        height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        background-color: var(--accent-green);
        border-radius: 100%;
        font-size: 0.675rem;
        color: var(--text-color--white);
        font-weight: bold;
      }
    }
  }
</style>
