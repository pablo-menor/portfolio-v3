<script>
export default {
  name: "MobileMenu",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleMenu() {
      this.$emit("click");
    },
  },
};
</script>

<template>
  <div class="mobile-menu-container">
    <label class="btn btn-circle swap swap-rotate mx-2 my-2" id="hamburguer">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" @click="toggleMenu()" />

      <!-- hamburger icon -->
      <svg
        class="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path
          d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
        />
      </svg>

      <!-- close icon -->
      <svg
        class="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon
          points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
        />
      </svg>
    </label>
    <ul v-show="isOpen" class="menu bg-base-100 rounded-box menu-mobile">
      <li class="mt-20">
        <a class="hover:bg-[#6419e6]">
          <div class="svg-container">
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg> -->
            [0]
          </div>
          Home
        </a>
      </li>
      <li>
        <a href="#skills" pl-0 class="hover:bg-[#6419e6]">
          <div class="svg-container">
            <!-- <svg
              width="20"
              height="13"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 10L23 17L21.59 15.59L27.17 10L21.59 4.41L23 3L30 10ZM0 10L7 3L8.41 4.41L2.83 10L8.41 15.59L7 17L0 10ZM11.42 19.484L16.64 0L18.572 0.517L13.352 20L11.42 19.484Z"
                fill="#bbbbbb"
              />
            </svg> -->
            [1]
          </div>

          Technologies
        </a>
      </li>
      <li>
        <a pl-0 class="hover:bg-[#6419e6]">
          <div class="svg-container">
            <!-- <svg
              width="20"
              height="13"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 10L23 17L21.59 15.59L27.17 10L21.59 4.41L23 3L30 10ZM0 10L7 3L8.41 4.41L2.83 10L8.41 15.59L7 17L0 10ZM11.42 19.484L16.64 0L18.572 0.517L13.352 20L11.42 19.484Z"
                fill="#bbbbbb"
              />
            </svg> -->
            [2]
          </div>

          Portfolio
        </a>
      </li>
      <li>
        <a class="hover:bg-[#6419e6]">
          <div class="svg-container">
            <svg
              width="20"
              height="20"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.80125 28.4112L10.1193 26.9705L10.897 27.3487C12.6969 28.2221 14.7539 28.6875 17 28.6875C24.429 28.6875 29.75 23.3793 29.75 17C29.75 10.5974 24.4672 5.3125 17 5.3125C9.53275 5.3125 4.25 10.5974 4.25 17C4.26256 19.4502 5.06932 21.8302 6.54925 23.783L7.2675 24.7393L5.80125 28.4091V28.4112ZM4.29888 31.1525C4.10658 31.2169 3.89986 31.225 3.70313 31.1757C3.50641 31.1264 3.32789 31.0219 3.18868 30.8744C3.04947 30.7269 2.95538 30.5427 2.91751 30.3434C2.87965 30.1442 2.8996 29.9383 2.975 29.75L4.85137 25.0601C3.09438 22.7392 2.13771 19.9109 2.125 17C2.125 9.95775 7.82425 3.1875 17 3.1875C26.1757 3.1875 31.875 9.95775 31.875 17C31.875 24.0422 26.1162 30.8125 17 30.8125C14.3544 30.8125 11.9914 30.243 9.9705 29.2613L4.29675 31.1525H4.29888Z"
                fill="#bbbbbb"
              />
            </svg>
          </div>
          Contact
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mobile-menu-container {
  background-color: aquamarine;
  /* width:70px */
}
#hamburguer,
.menu-mobile {
  position: fixed;
  right: 0;
  z-index: 12;
}

.menu-mobile {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  width: 100vw;
  z-index: 11;
  position: fixed;
}
.svg-container {
  width: 30px;
  font-family: "JetBrains Mono", monospace;
}
</style>