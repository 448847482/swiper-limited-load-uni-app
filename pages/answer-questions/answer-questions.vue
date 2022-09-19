<template>
	<view class="test-container">
		<!-- 顶部导航区域 -->
		<nav-bar :title="navTitle" @back="onClickBack"></nav-bar>

		<!-- 主内容区域 -->
		<view class="content-container">
			<swiper-limit-load-uni-app
				ref="swiperRef"
				:current="initCurrentIndex"
				:duration="swiperDuration"
				:total="resultObj.total"
				@transition="swiperTransitionEvent"
				@change="swiperChangeEvent">
				
				<!-- 使用作用域插槽，并利用 scope 接收插槽传递的数据 -->
				<template #content="scope">
					<topic-info :topicInfo="scope.item" :topicCurrent="initCurrentIndex" :answerMode="1" :isAnalysis="false"></topic-info>
				</template>
				
			</swiper-limit-load-uni-app>
		</view>
		
		<view class="button-container">
			
			<!-- 如果当前到达第一题则禁用上一题按钮 -->
			<button :disabled="initCurrentIndex === 0" @tap="onClickPrevious">上一题</button>
			
			<button @tap="onClickAnswerSheet">答题卡</button>
			
			<!-- 如果当前到达最后一题则禁用下一题按钮 -->
			<button :disabled="initCurrentIndex === resultObj.total - 1" @tap="onClickNext">下一题</button>
		</view>

		<!-- 答题卡弹出层区域 -->
		<popup :display="displayPopup" @tapMask="onClickMask">
			<view class="answer-sheet-container">
				<text class="answer-sheet-title">答题卡</text>
				
				<!-- 题号列表区域 -->
				<scroll-view class="answer-sheet-scroll-view" scroll-y @touchmove.stop>
					<view class="scroll-view-container">
						<text class="scroll-view-item" v-for="(item, index) in questionList" :key="item.id"
							:data-tindex="index" @tap="onClickQuestionNumber">
							{{index + 1}}
						</text>
					</view>
				</scroll-view>
				
				<!-- 答题面板底部描述区域 -->
				<view class="answer-sheet-desc">
					<view class="answer-sheet-desc-item-container">
						<view class="answer-sheet-desc-item-mark correct"></view>
						<text>正确</text>
					</view>
				
					<view class="answer-sheet-desc-item-container">
						<view class="answer-sheet-desc-item-mark wrong"></view>
						<text>错误</text>
					</view>
				
					<view class="answer-sheet-desc-item-container">
						<view class="answer-sheet-desc-item-mark"></view>
						<text>未选</text>
					</view>
				
					<view class="answer-sheet-desc-item-container">
						<view class="answer-sheet-desc-item-mark current"></view>
						<text>当前</text>
					</view>
				
					<view class="answer-sheet-desc-item-container">
						<i class="iconfont icon-mark-icon iconfont-item mark"></i>
						<text>标记</text>
					</view>
				</view>
				
				<!-- 提交答案区域 -->
				<button class="submit-btn" type="primary" @click="onClickSubmit">提交答案</button>
				
			</view>
		</popup>

	</view>
</template>

<script>
	import navBar from '../../components/nav-bar/nav-bar.vue'
	import swiperLimitedLoadUniApp from '../../components/swiper-limit-load-uni-app/swiper-limit-load-uni-app.vue'
	import topicInfo from '../../components/topic-info/topic-info.vue'
	import popup from '../../components/popup/popup.vue'

	// 导入请求方法
	import {
		getTrainTopicInitData
	} from '../../api/train-topic.js'

	export default {
		data() {
			return {
				navTitle: '答题栏',
				displayPopup: false,
				questionList: [],
				initCurrentIndex: 0,
				swiperDuration: 250,
				resultObj: {
					score: 0,
					correct: 0,
					wrong: 0,
					time: '00:00:00',
					notDone: 0,
					total: 0
				}
			};
		},

		/**
		 * 初始化生命周期方法
		 * @param {Object} options 路由参数
		 */
		async onLoad(options) {
			const topic = await getTrainTopicInitData()
			this.questionList = topic.data.data
			this.resultObj.total = this.questionList.length

			// 通过 ref 调用 swiper 组件中的 init 方法，进行数据的初始化
			this.$refs.swiperRef.init(this.questionList, this.initCurrentIndex)
			this.navTitle = `${this.initCurrentIndex + 1}/${this.resultObj.total}`
		},

		methods: {
			/**
			 * 点击左上角返回图标方法
			 */
			onClickBack() {
				uni.showModal({
					content: "是否确定要退出训练",
					success: (res) => {
						if (res.cancel) return
						uni.redirectTo({
							url: '/pages/index/index'
						})
					}
				})
			},
			
			/**
			 * swiper 切换事件
			 * @param {Object} e swiper 切换时产生的事件对象
			 */
			swiperChangeEvent(e) {
				this.initCurrentIndex = e.current
				this.navTitle = `${this.initCurrentIndex + 1}/${this.resultObj.total}`
			},

			/**
			 * 点击上一题方法
			 */
			onClickPrevious() {
				this.initCurrentIndex = this.initCurrentIndex - 1
			},

			/**
			 * 点击答题卡方法
			 */
			onClickAnswerSheet() {
				this.displayPopup = true
			},

			/**
			 * 点击下一题方法
			 */
			onClickNext() {
				this.initCurrentIndex = this.initCurrentIndex + 1
			},

			/**
			 * 点击弹出层遮罩方法
			 */
			onClickMask() {
				this.displayPopup = false
			},

			/**
			 * 点击答题卡题号方法
			 * @param {Object} e 点击答题卡题号产生的事件对象
			 */
			onClickQuestionNumber(e) {
				// 获取用户点击的指定题目所在索引
				this.initCurrentIndex = e.currentTarget.dataset.tindex

				// 点击答题卡卡号跳转至题目时，将过渡时长设置为 0，避免部分差异性导致的体验怪异问题
				this.swiperDuration = 0
				this.$refs.swiperRef.init(this.questionList, this.initCurrentIndex)
				this.displayPopup = false

				// 在 DOM 更新循环后将 swiperDuration 过渡时长更改会原来的值
				this.$nextTick(() => this.swiperDuration = 250)
			},
			
			/**
			 * 点击提交答案方法
			 */
			onClickSubmit() {
				console.log(this.questionList);
			},

		},

	}
</script>

<style lang="scss" scoped>
	.test-container {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;

		.content-container {
			height: 100%;
		}

		.button-container {
			flex: 1;
			display: flex;
			align-items: center;
			height: 90rpx;

			button {
				width: 100%;
			}
		}

		/* 答题卡面板区域样式 */
		.answer-sheet-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			font-size: 28rpx;
			line-height: 28rpx;

			.answer-sheet-title {
				padding: 40rpx;
			}

			.scroll-view-container {
				box-sizing: border-box;
				display: flex;
				flex-wrap: wrap;
				align-content: flex-start;
				width: 100%;
				height: 600rpx;
				padding: 20rpx;

				.scroll-view-item {
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 64rpx;
					height: 64rpx;
					border: 1px solid #bdc3c7;
					margin: 0 11rpx 20rpx 11rpx;
					border-radius: 100%;

					.iconfont-item {
						position: absolute;
						top: -10rpx;
						right: -4rpx;
						font-size: 28rpx;
						color: #f1c40f;
					}
				}
			}

			/* 答题面板底部描述区域样式 */
			.answer-sheet-desc {
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 100%;
				height: 80rpx;
			
				.answer-sheet-desc-item-container {
					display: flex;
					align-items: center;
					font-size: 28rpx;
					line-height: 28rpx;
			
					.answer-sheet-desc-item-mark {
						width: 28rpx;
						height: 28rpx;
						border: 1px solid #bdc3c7;
						margin-right: 10rpx;
						border-radius: 100%;
					}
				}
			}
			
			/* 提交答案区域样式 */
			.submit-btn {
				width: 90%;
				padding: 20rpx 0;
				margin-bottom: 20rpx;
				font-size: 32rpx;
				line-height: 32rpx;
			}
			
		}
	}
</style>
