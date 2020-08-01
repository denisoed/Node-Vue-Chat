<template>
  <div class="ui-search">
    <button><i class="mdi mdi-magnify"></i></button>
    <input type="text" placeholder="Search Friends">
  </div>
</template>

<script>
export default {
  name: 'UISearch'
};
</script>

<style lang="scss" scoped>
  .ui-search {
    height: 30px;
    display: flex;
    align-items: center;
    background-color: var(--accent-white);
    border-radius: 20px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;

    button {
      height: 100%;
      padding: 4px 10px 0;

      i {
        font-size: 1.175rem;
        color: var(--text-color--grey);
      }
    }

    input {
      border: 0;
      font-size: 0.875rem;

      &::placeholder {
        color: var(--text-color--grey);
      }
    }
  }
</style>
