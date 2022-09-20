<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="onClickAnswerQuestions">开始答题训练</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '没尾巴的跳跳虎'
			}
		},
		onLoad() {

		},
		methods: {
			onClickAnswerQuestions() {
				uni.navigateTo({
					url: '/pages/answer-questions/answer-questions'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		.logo {
			height: 200rpx;
			width: 200rpx;
			border-radius: 50%;
			margin-top: 200rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
		}
		
		.text-area {
			display: flex;
			justify-content: center;
			
			.title {
				font-size: 36rpx;
				color: #8f8f94;
				margin-bottom: 100rpx;
			}
		}
	}
</style>
