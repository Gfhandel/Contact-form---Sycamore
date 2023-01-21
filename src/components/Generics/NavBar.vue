<template>
  <nav class="bg-white px-5 py-3 rounded-lg shadow-lg sticky top-0 mb-10">
    <div class="flex flex-wrap items-center justify-between mx-auto">
      <a href="#" class="flex items-center">
        <img
          src="https:/flowbite.com/docs/images/logo.svg"
          class="h-6 mr-3 sm:h-9"
          alt=""
        />
        <span
          class="
            self-center
            text-xl
            font-semibold
            whitespace
            nowrap
            text-green-500
          "
          >Lorem</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="nav-collapse-button"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="nav-links">
          <li>
            <a href="#" class="nav-link-active" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="nav-link">About</a>
          </li>
          <li>
            <a href="#" class="nav-link">Services</a>
          </li>
          <li>
            <a href="#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>
