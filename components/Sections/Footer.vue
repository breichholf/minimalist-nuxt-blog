<template>
  <footer class="footer">
    <div>
      <span class="text-indigo-100 font-thin">
        © {{ year }} Brian Reichholf, all rights reserved
      </span>
      <!-- <a href="#top" class="text-blue-400 hover:text-blue-600 hover:underline">
        Return to top
      </a> -->
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
/* .footer {
	&__info {
		background-color: #030303; // $secondary;
		padding: 1.5em 0;
  }

  &__info-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    @media (min-width: 750px){
      flex-direction: row;
    }
  }
	&__copyright {
		text-align: center;
		@media (min-width: 750px) {
			text-align: inherit;
		}
	}
	&__top-page {
		color: white;
		display: block;
		text-align: center;
		line-height: 1;
		-webkit-transition: 1s;
		-moz-transition: 1s;
    transition: 1s;

		@media (min-width: 750px){
			text-align: right;
		}
	}
} */
</style>
