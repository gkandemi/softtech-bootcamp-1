<template>
  <div class="modal">
    <div class="overlay"></div>
    <div class="modal-content">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="content">
        <slot />
      </div>
      <div class="footer">
        <span>
          <slot name="footer" />
        </span>
        <button @click="$emit('hide-event')">Kapat</button>
      </div>
    </div>
  </div>
</template>
