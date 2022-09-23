<template>
	<!-- 判断传入的题目对象是否存在，不存在这不进行渲染 -->
	<view v-if="!!topicInfoObj" class="topic-info-container">
		
		<!-- 题目区域 -->
		<view class="topic-container">
			<text>
				<em class="topic-icon">{{topicInfoObj.questionCategory | topicType}}</em>
				{{topicInfoObj.content}}
			</text>
		</view>
		
		<!-- 选项区域 -->
		<view class="options-container">
			<button class="options-item" :class="optionItem.style"
				v-for="(optionItem, optionIndex) in topicInfoObj.options" :key="optionItem.title"
				:disabled="!!optionItem.disable" :data-oid="optionIndex" @tap="onClickOption">
				<i class="options-icon"
					:class="topicInfoObj.questionCategory | settingMultipleChoice">{{optionsMarkList[optionIndex]}}</i>
				<text class="options-content">{{optionItem.title}}</text>
			</button>
		</view>
		
		<!-- 多选题点击确认区域，判断答题模式、题目类型、是否已经点击确认，满足则显示确认按钮 -->
		<button v-if="topicInfoObj.questionCategory === 1 && !topicInfoObj.confirm" class="confirm-btn"
			type="primary" @click="onClickConfirm">确认</button>
		
		<!-- 结果区域 -->
		<view class="result-container" v-if="topicInfoObj.confirm">
			<view class="result-item-container">
				<text class="result-item-title">你的答案</text>
				<text class="result-item-option"
					:class="topicInfoObj.state | myAnswerStyle">{{topicInfoObj.myAnswer || '未选'}}</text>
			</view>
			<view class="result-item-container">
				<text class="result-item-title">正确答案</text>
				<text class="result-item-option">{{topicInfoObj.correctAnswer}}</text>
			</view>
		</view>
		
		<!-- 解析区域 -->
		<view class="parse-contaienr" v-if="topicInfoObj.confirm">
			<text>
				<em class="parse-icon">解析</em>
				{{topicInfoObj.analysis | nullHandling}}
			</text>
		</view>
	</view>
</template>

<script>
	// 导入答题处理模块
	import { AnsweringQuestions } from '../../utils/answering-questions.js'
	const answeringQuestions = new AnsweringQuestions()
	
	export default {
		name: "topic-info",

		props: {
			topicInfo: {
				type: Object,
				default: {}
			},
		},

		data() {
			return {
				topicInfoObj: this.topicInfo,
				// 生成 26 个字母
				optionsMarkList: [...Array(26).keys()].map(i => String.fromCharCode(i + 65)),
			};
		},

		watch: {
			/**
			 * 侦听传入的 topicInfo 的改变
			 * @param {Object} topicObj 传入指定的 topicObj 题目对象
			 * @description 在重新填充题目数据时，重新赋值给题目列表
			 */
			'topicInfo': {
				handler(topicObj) {
					this.topicInfoObj = topicObj
				}
			},
		},

		filters: {
			/**
			 * 设置题型内容方法
			 * @param {String} type 传入类型
			 * @return {String} 返回指定内容
			 */
			topicType: (type) => {
				return ['单选题', '多选题', '判断题'][type]
			},

			/**
			 * 设置多选选项左边图标形状方法
			 * @param {String} type 传入类型
			 * @return {String} 返回指定样式
			 */
			settingMultipleChoice: (type) => {
				return type === 1 ? 'multiple-icon' : ''
			},

			/**
			 * 设置我的答案样式方法
			 * @param {String} topicState 传入题的状态（对与错）
			 * @return {String} 返回指定样式
			 */
			myAnswerStyle: (topicState) => {
				return !topicState || topicState === 'wrong' ? 'result-item-option-wrong' : ''
			},

			/**
			 * 解析处空值处理方法
			 * @param {String} value 传入需要处理的值
			 * @return {String} 返回空值时处理好的数据
			 */
			nullHandling: (value) => {
				return value || '抱歉，暂无解析';
			},

		},

		methods: {
			/**
			 * 点击选项方法
			 * @param {Object} e 点击选项产生的事件对象
			 */
			onClickOption(e) {
				const { topicInfoObj, optionsMarkList } = this
				const currentOptionIndex = e.currentTarget.dataset.oid
				const { questionCategory: topicCategory, options: optionsList } = topicInfoObj
							
				// 调用选项处理方法，用于注入选项属性与选中样式
				const options = answeringQuestions.optionHandle({
					topicInfoObj,
					topicCategory,
					optionsList,
					currentOptionIndex,
					optionsMarkList
				})
				
				// 更新题对象中的选项属性，以至于重新渲染页面
				this.$set(this.topicInfoObj, 'options', options)
				
				// 是单选题时直接调用多选题点击确认方法，显示正确答案信息
				if (topicCategory !== 1) return this.onClickConfirm()
			},
			
			/**
			 * 多选题点击确认方法
			 */
			onClickConfirm() {
				const { topicInfoObj, optionsMarkList } = this
				const optionsList = topicInfoObj.options
							
				// 将当前 this 赋值给 that 用于在确认答案后的回调函数中，调用自定义事件
				const that = this
				
				// 调用答案结果处理方法，显示正确答案信息
				answeringQuestions.answerResultHandle({
					topicInfoObj,
					optionsList,
					optionsMarkList,
					callback: state => that.$emit('selected', state)
				})
			},
		},

	}
</script>

<style lang="scss" scoped>
	.topic-info-container {
		display: flex;
		flex-direction: column;
		width: 100%;

		/* 题目区域样式 */
		.topic-container {
			margin: 40rpx;
			font-size: 32rpx;
			line-height: 42rpx;
			letter-spacing: 2px;

			.topic-icon {
				padding: 4rpx 10rpx;
				margin-right: 10rpx;
				background-color: #2ecc71;
				font-size: 28rpx;
				font-style: normal;
				color: #fff;
				border-radius: 10rpx;
			}
		}

		/* 选项区域样式 */
		.options-container {
			display: flex;
			flex-direction: column;

			.options-item {
				display: flex;
				align-items: center;
				padding: 20rpx;
				margin: 20rpx 40rpx;
				background-color: transparent;
				font-size: 32rpx;
				line-height: 32rpx;

				// 取消按钮默认样式
				&::after {
					border: none;
				}

				.options-icon {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-shrink: 0;
					width: 40rpx;
					height: 40rpx;
					border: 1px solid #ced6e0;
					border-radius: 40rpx;
					margin-right: 10rpx;
					font-size: 32rpx;
					font-style: normal;
					line-height: 32rpx;
				}

				.multiple-icon {
					border-radius: 10rpx;
				}

				.options-content {
					text-align: start;
				}
			}
		}

		/* 多选题点击确认区域样式 */
		.confirm-btn {
			width: 50%;
			padding: 20rpx 0;
			margin: 40rpx auto;
			font-size: 32rpx;
			line-height: 32rpx;
		}

		/* 结果区域样式 */
		.result-container {
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 20rpx 40rpx;
			margin: 40rpx;
			font-size: 32rpx;
			font-weight: 700;
			box-shadow: 10rpx 10rpx 20rpx 0 rgba(206, 206, 206, 0.3);
			border-radius: 20rpx;

			.result-item-container {
				display: flex;
				flex-direction: column;
				align-items: center;

				.result-item-title {
					font-size: 28rpx;
					color: #bdc3c7;
				}

				.result-item-option {
					line-height: 48rpx;
					color: #2ecc71;
				}

				.result-item-option-wrong {
					color: #e74c3c;
				}
			}
		}

		/* 解析区域样式 */
		.parse-contaienr {
			display: flex;
			flex-direction: column;
			margin: 40rpx;
			font-size: 32rpx;

			.parse-icon {
				padding: 4rpx 10rpx;
				margin-right: 10rpx;
				background-color: #00a0ff;
				font-size: 28rpx;
				font-style: normal;
				color: #fff;
				border-radius: 10rpx;
			}
		}

	}
</style>
