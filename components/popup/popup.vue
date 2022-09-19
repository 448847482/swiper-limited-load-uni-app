<template>
	<view class="popup-container" :style="{zIndex: zIndex}">
		<view class="popup-content-container" :class="{'display-popup': displayPopup}">
			<slot></slot>
		</view>
		<mask-layer v-if="displayMask" :display="displayPopup" @tapMask="onClickMask"></mask-layer>
	</view>
</template>

<script>
	import mask from '../../components/mask-layer/mask-layer.vue'

	export default {
		name: "popup",
		props: {
			display: {
				type: Boolean,
				default: false
			},
			displayMask: {
				type: Boolean,
				default: true
			},
			zIndex: {
				type: Number,
				default: 9999
			}
		},
		
		watch: {
			display: {
				handler(isDisplay) {
					this.displayPopup = isDisplay
				}
			}
		},

		data() {
			return {
				displayPopup: this.display
			};
		},
		
		methods: {
			/**
			 * 点击弹出层遮罩方法
			 */
			onClickMask() {
				this.$emit('tapMask')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popup-container {
		display: flex;
		flex-direction: column;
		width: 100%;

		.popup-content-container {
			position: fixed;
			bottom: -70%;
			width: 100%;
			background-color: #fff;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			transition: all .2s;
		}
		
		.display-popup {
			bottom: 0;
		}

	}
</style>
