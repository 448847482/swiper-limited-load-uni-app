<template>
	<view v-if="displayMask" class="mask-container" :style="{zIndex: zIndex}" :class="{'display-mask': displayMask}" @tap="onClickMask"></view>
</template>

<script>
	export default {
		name: "mask-layer",
		props: {
			display: {
				type: Boolean,
				default: false
			},
			zIndex: {
				type: Number,
				default: -1
			}
		},
		
		watch: {
			display: {
				handler(isDisplay) {
					this.displayMask = isDisplay
				}
			}
		},

		data() {
			return {
				displayMask: this.display
			};
		},

		methods: {
			onClickMask() {
				this.$emit('tapMask')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mask-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .6);
		opacity: 0;
		transition: all .2s;
	}

	.display-mask {
		opacity: 100;
	}
</style>
