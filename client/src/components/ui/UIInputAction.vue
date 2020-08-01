<template>
  <section class="ui-input-action">
    <button class="ui-input-action_voice"><i class="mdi mdi-microphone-outline"></i></button>
    <input type="text" placeholder="Write Something">
    <button class="ui-input-action_send">Send</button>
  </section>
</template>

<script>
export default {
  name: 'UIInputAction'
};
</script>

<style lang="scss" scoped>
  .ui-input-action {
    height: 40px;
    display: flex;
    background-color: var(--accent-grey);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

    &_voice {
      height: 100%;
      padding: 3px 15px 0;
      font-size: 1.375rem;
    }

    input {
      width: 100%;
      border: 0;
      font-size: 0.875rem;
      background-color: transparent;

      &::placeholder {
        color: var(--text-color--grey);
      }
    }

    &_send {
      background-color: var(--accent-blue);
      color: var(--text-color--white);
      padding: 0 15px;
    }
  }
</style>
