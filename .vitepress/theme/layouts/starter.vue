<template>
  <div class="starter-container">
    <div class="vp-doc">
      <content />
    </div>
    <div :class="chooserUsage">
      <div class="chooser">
        <div class="chooser-header chooser-cell">
          <span>{{ frontmatter.caption }}</span>
        </div>
        <div class="chooser-select chooser-select-usage">
          <div class="chooser-select-item chooser-cell"
            v-for="(value, key) in frontmatter.choices" :key="key"
            :class="{ selected: chooserUsage === key }"
            @click="chooserUsage = key">
            <span class="hint"></span>{{ value.text }}
          </div>
        </div>
      </div>

      <transition>
        <div class="chooser" :key="chooserUsage">
          <div class="chooser-header chooser-cell">
            <span>{{ frontmatter.choices[chooserUsage].caption }}</span>
          </div>
          <div class="chooser-select" :class="'chooser-select-' + chooserUsage">
            <a class="chooser-select-item chooser-cell"
              v-for="({ text, link }, index) in frontmatter.choices[chooserUsage].children"
              :key="index"
              :href="withBase(link)">
              <span class="hint"></span>{{ text }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { withBase, useData } from 'vitepress'
const chooserUsage = ref('production')
const { frontmatter } = useData()

</script>

<style lang="scss" scoped>

.starter-container {
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  max-width: 840px;
  position: relative;
  margin: 0 auto;
  margin-top: calc(0px - var(--vp-nav-height));

  @media (max-width: 719px) {
    justify-content: flex-start;
    gap: 0;
    padding-top: calc(1rem + var(--vp-nav-height));
  }
}

.vp-doc {
  padding: 16px 24px;
}

.content {
  padding: 2rem 2.5rem;
  @media (max-width: 719px) {
    padding: 1rem 2rem;
  }
}

.chooser {
  &-cell {
    padding: 20px 36px;
    font-size: 1.125rem;

    @media (max-width: 719px) {
      padding: 16px 24px;
    }
  }

  &-header {
    background-color: var(--vp-c-bg-alt);
    // border-bottom: 1px solid var(--vp-c-divider-light);
  }

  &-select {
    display: grid;
    background-color: var(--vp-c-bg-alt);

    &-item {
      flex: 1;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover, &.selected {
        background-color: var(--vp-button-brand-bg);
        color: var(--vp-button-brand-text);
      }

      .hint {
        width: 1.75rem;
        height: 1rem;
        display: inline-block;

        &::before {
          content: '>';
          position: relative;
          transition: padding-left 0.3s ease;
        }
      }

      &.selected .hint::before {
        animation: chooser-hint-bounce 1s infinite 0.3s;
      }

      &:hover .hint::before {
        padding-left: 0.5rem;
      }

      @keyframes chooser-hint-bounce {
        0%, 100% {
          padding-left: 0.5rem;
          animation-timing-function: cubic-bezier(.6, 0, 1, 1);
        }

        50% {
          padding-left: 0;
          animation-timing-function: cubic-bezier(0, 0, .4, 1);
        }
      }
    }

    &-usage {
      grid-template-columns: repeat(2, 1fr);

      @media (max-width: 719px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    &-development {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);

      @media (max-width: 719px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }
    }

    &-production {
      grid-template-columns: repeat(3, 1fr);

      @media (max-width: 719px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  &:first-child {
    margin-bottom: 12rem;
  }

  &:not(:first-child) {
    margin-top: -12rem;
    position: absolute;
    width: 100%;

    &.v-enter-active,
    &.v-leave-active {
      transition: opacity 0.15s ease, transform 0.3s ease;
    }

    @mixin transform($distance) {
      .development &.v-enter-from,
      .production &.v-leave-to {
        opacity: 0;
        transform: translateX(#{$distance});
      }

      .development &.v-leave-to,
      .production &.v-enter-from {
        opacity: 0;
        transform: translateX(-#{$distance});
      }
    }

    @include transform(50%);

    @media (max-width: 719px) {
      @include transform(100%);
    }
  }
}

</style>
