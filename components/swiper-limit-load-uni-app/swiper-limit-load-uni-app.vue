<template>
	<view class="swiper-limit-load-container">
		<!-- @touchmove.stop 解决滑动冲突问题 -->
		<swiper class="swiper-container" 
			circular :duration="duration" 
			:current="currentIndex" 
			@change="swiperChangeEvent" 
			@touchmove.stop
		>
			<swiper-item v-for="(item, index) in renderList" :key="index">
				<scroll-view style="height: 100%;" scroll-y>
					
					<!-- 定义作用域插槽，给使用插槽的组件进行数据传递 -->
					<slot name="content" :item="item"></slot>
					
				</scroll-view>
			</swiper-item>
			
		</swiper>
		<input type="text" v-show="false">
	</view>
</template>

<script>
	import { render } from "vue"
	
	// 基础配置信息
	const START = 0
	const END = 2
	const SWIPER_LENGTH = 3
	const NO_PREV_PAGE = -1
	const NO_NEXT_PAGE = -2

	export default {
		name: "swiper-limit-load-uni-app",
		props: {
			current: {
				type: Number,
				default: 0
			},
			duration: {
				type: Number,
				default: 250
			},
			total: {
				type: Number,
				default: 0
			},
		},
		
		data() {
			return {
				circular: true,
				currentIndex: 0,
				previousIndex: 0,
				allDataList: [],
				renderList: []
			};
		},
		
		watch: {
			/**
			 * 侦听 current 的改变
			 * @param {Number} index 传入指定的 currentIndex
			 * @description 主要针对于调用组件者手动更改 swiper-item 的位置
			 */
			'current': {
				handler(index) {
					this.currentIndex = index % SWIPER_LENGTH
				}
			},
		},

		methods: {
			/**
			 * 初始化 swiper 方法
			 * @param {Array} allDataList 传入全部数据列表
			 * @param {Number} contentIndex 传入指定内容索引
			 */
			init(allDataList, contentIndex) {
				this.allDataList = allDataList
				this.renderList = this.initSwiperList(allDataList, contentIndex)
			},

			/**
			 * 初始化 swiper 数据列表方法
			 * @param {Array} allDataList 传入全部数据列表
			 * @param {Number} contentIndex 传入指定内容索引
			 * @return {Array} 返回初始化的 renderList 渲染列表
			 */
			initSwiperList(allDataList, contentIndex) {
				const renderList = []
				
				// 使用 SWIPER_LENGTH 长度对 contentIndex 进行取余，获取当前可视索引（0~2）
				// 用于保证 swiper-item 能对应上 SWIPER_LENGTH 长度（因为设置了 SWIPER_LENGTH = 3）
				const visibleIndex = contentIndex % SWIPER_LENGTH

				// 设置当前可视区 swiper-item 显示为指定内容
				renderList[visibleIndex] = allDataList[contentIndex]
				
				// 设置剩余 swiper-item 的内容，保证其为指定内容方向上的相邻内容
				renderList[this.getLastVisibleIndex(visibleIndex)] = this.getLastRenderItem(allDataList, contentIndex)
				renderList[this.getNextVisibleIndex(visibleIndex)] = this.getNextRenderItem(allDataList, contentIndex)
				
				return renderList
			},

			/**
			 * 根据当前 visibleIndex 识别上一个的 index 值方法
			 * @param {Number} visibleIndex 传入可视索引
			 * @return {Number} 返回上一个可视索引
			 */
			getLastVisibleIndex(visibleIndex) {
				return visibleIndex > START ? visibleIndex - 1 : END
			},

			/**
			 * 获取当前 visibleIndex 识别下一个的 index 值方法
			 * @param {Number} visibleIndex 传入可视索引
			 * @return {Number} 返回下一个可视索引
			 */
			getNextVisibleIndex(visibleIndex) {
				return visibleIndex < END ? visibleIndex + 1 : START
			},

			/**
			 * 获取上一个要替换的 renderList 中的item
			 * @param {Array} allDataList 传入全部数据列表
			 * @param {Number} contentIndex 传入指定内容索引
			 * @return {Object} 返回内容数据
			 */
			getLastRenderItem(allDataList, contentIndex) {
				const lastContentIndex = contentIndex - 1
				return lastContentIndex === -1 ? null : allDataList[lastContentIndex]
			},

			/**
			 * 获取下一个要替换的 renderList 中的 item
			 * @param {Array} allDataList 传入全部数据列表
			 * @param {Number} contentIndex 传入指定内容索引
			 * @return {Object} 返回内容数据
			 */
			getNextRenderItem(allDataList, contentIndex) {
				const nextContentIndex = contentIndex + 1
				return nextContentIndex === this.total ? null : allDataList[nextContentIndex]
			},
			
			/**
			 * swiper 切换事件
			 * @param {Object} e swiper 改变产生的事件对象
			 */
			swiperChangeEvent(e, externalCall) {
				const { previousIndex, allDataList } = this
				const swiperCurrent = e.detail.current
				const currentItem = this.renderList[swiperCurrent]

				// 设置一个 eventInfo 对象，用于存放传递给父组件的数据
				const eventInfo = {}

				// 根据内容唯一 id 获取当前内容项在全部数据列表中的位置索引
				const contentIndex = allDataList.findIndex(item => item?.tid === currentItem?.tid)
 
				// 获取可视索引（因为设置了全局 SWIPER_LENGTH = 3，所以要保证内容数量在 0~2 范围内）
				const visibleIndex = contentIndex % SWIPER_LENGTH

				// swiper 切换时，重新设置 currentIndex，主要目的是使其与之后设置的值不相等
				// 防止之后动态改变，swiper 组件中 current 属性时，值相同时导致的 current 属性设置不生效问题
				this.currentIndex = visibleIndex
				
				// 是否正向相邻，他们差值为 1，true 证明是两个 swiper-item 相邻切换
				const isForwardAdjacent = swiperCurrent - previousIndex === 1
				
				// 判断 swiperCurrent 是否等于 START，且 previousIndex 是否等于 END
				// true，则代表最后一个 swiper-item（2） 转向第一个 swiper-item（0）
				const isLoopPositive = swiperCurrent === START && previousIndex === END
				if (isForwardAdjacent || isLoopPositive) {
					// 判断下一个 swiper-item 是否存在内容，不存在则弹回原先的 swiper-item
					if (!currentItem) {
						eventInfo.current = NO_NEXT_PAGE
						this.$emit("change", eventInfo)
						this.$nextTick(() => this.currentIndex = previousIndex)
						return
					}
					
					// 获取下一个要替换的 renderList 中的 item
					// 使用 vue 官方包装的 splice 方法进行数据的增加，从而实现对列表数据更新后，渲染页面
					this.renderList.splice(this.getNextVisibleIndex(visibleIndex), 1, this.getNextRenderItem(allDataList, contentIndex))
				}


				// 是否反向相邻，他们差值为 1，true 证明是两个 swiper-item 相邻切换
				const isReverseAdjacent = previousIndex - swiperCurrent === 1

				// 判断 swiperCurrent 是否等于 END，且 previousIndex 是否等于 START
				// true，则代表第一个 swiper-item（0） 转向最后一个 swiper-item（2）
				const isLoopNegative = swiperCurrent === END && previousIndex === START
				if (isReverseAdjacent || isLoopNegative) {
					// 判断前一个 swiper-item 是否存在内容，不存在则弹回原先的 swiper-item
					if (!currentItem) {
						eventInfo.current = NO_PREV_PAGE
						this.$emit("change", eventInfo)
						this.$nextTick(() => this.currentIndex = previousIndex)
						return
					}
					
					// 获取上一个要替换的 renderList 中的 item
					// 使用 vue 官方包装的 splice 方法进行数据的增加，从而实现对列表数据更新后，渲染页面
					this.renderList.splice(this.getLastVisibleIndex(visibleIndex), 1, this.getLastRenderItem(allDataList, contentIndex))
				}
				
				eventInfo.current = contentIndex
				this.$emit("change", eventInfo)
				this.previousIndex = swiperCurrent				
			},

		}
	}
</script>

<style lang="scss" scoped>
	.swiper-limit-load-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;

		.swiper-container {
			height: 100%;
		}
	}
</style>
