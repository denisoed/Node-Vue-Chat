<template>
  <section class="messages-window">
    <!-- <div class="messages-window_friend">
      <div class="messages-window_friend-avatar"></div>
      <div class="messages-window_friend-name"></div>
      <div class="messages-window_friend-status"></div>
      <div class="messages-window_friend-btns">
        <button>S</button>
        <button>F</button>
        <button>B</button>
      </div>
    </div> -->
    <div class="messages-window_history">
      <div class="messages-window_history-message">
        <div class="messages-window_history-message-avatar"></div>
        <div class="messages-window_history-message-data">Hello</div>
      </div>
      <div class="messages-window_history-message">
        <div class="messages-window_history-message-avatar"></div>
        <div class="messages-window_history-message-data">Hi, how are you?</div>
      </div>
    </div>
    <div class="messages-window_controls">
      <UIInputAction />
    </div>
  </section>
</template>

<script>
import UIInputAction from '@/components/ui/UIInputAction';

export default {
  name: 'MessagesWindow',
  components: { UIInputAction }
};
</script>

<style lang="scss" scoped>
  .messages-window {
    display: flex;
    flex-direction: column;
    background-color: var(--accent-white);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 2;

    &_history {
      height: 100%;
    }
  }
</style>
