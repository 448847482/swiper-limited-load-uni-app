<script>
	export default {
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {}
	}
</script>

<style>
	/* 导入字体图标 */
	@import url('@/static/fonts/iconfont.css');
	
	/* 选项不同状态样式 */
	.correct {
		color: #fff !important;
		border-color: #2ecc71 !important;
		background-color: #2ecc71 !important;
	}
	
	.wrong {
		color: #fff !important;
		border-color: #e74c3c !important;
		background-color: #e74c3c !important;
	}
	
	.checked {
		color: #fff !important;
		border-color: #00a0ff !important;
		background-color: #00a0ff !important;
	}
	
	.current {
		border-radius: 10rpx !important;
		border-color: #8e44ad !important;
	}
	
	.mark {
		margin-right: 10rpx;
		color: #f1c40f !important;
	}
</style>
