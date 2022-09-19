class AnsweringQuestions {
	/**
	 * 选项必要信息注入处理函数
	 * @param {Object} topicInfoObj 传入当前题对象
	 * @param {Number} topicCategory 传入当前题类型
	 * @param {Array} optionsList 传入当前题目选项对象
	 * @param {Number} currentOptionIndex 传入当前点击的选项索引
	 * @param {Array} optionsMarkList 传入选项标识数组
	 */
	optionHandle({
		topicInfoObj,
		topicCategory,
		optionsList,
		currentOptionIndex,
		optionsMarkList
	}) {
		// 设置我的答案和正确答案初始值为 Set 集合，阻止元素重复记录
		topicInfoObj.myAnswer = topicInfoObj?.myAnswer || new Set()
		topicInfoObj.correctAnswer = topicInfoObj?.correctAnswer || new Set()

		// 根据题类型，来匹配具体的属性注入策略
		switch (topicCategory) {
			case 1:

				// 多选题选项点击设置 checked 点击样式，再次自身点击取消 checked 点击样式
				if (topicInfoObj.myAnswer.has(optionsMarkList[currentOptionIndex])) {
					optionsList[currentOptionIndex].style = ''
					topicInfoObj.myAnswer.delete(optionsMarkList[currentOptionIndex])
				} else {
					optionsList[currentOptionIndex].style = 'checked'
					topicInfoObj.myAnswer.add(optionsMarkList[currentOptionIndex])
				}

				// 当选项都未选择则清除题状态样式，反之则设置选中样式
				topicInfoObj.myAnswer.size ? topicInfoObj.state = 'checked' : topicInfoObj.state = ''
				break;
			default:

				// 单题选项点击设置 checked 点击样式，点击其他选项并取消上一个选项的 checked 点击样式，点击自身不做操作
				if (topicInfoObj.myAnswer.size) {
					const oldIndex = optionsMarkList.indexOf([...topicInfoObj.myAnswer][0])
					optionsList[oldIndex].style = ''
					topicInfoObj.myAnswer.clear()
				}

				optionsList[currentOptionIndex].style = 'checked'
				topicInfoObj.myAnswer.add(optionsMarkList[currentOptionIndex])

				// 设置题状态为选中
				topicInfoObj.state = 'checked'
				break;
		}
	}

	/**
	 * 各类型答题后结果处理方法
	 * @param {Object} topicInfoObj 传入当前题对象
	 * @param {Array} optionsList 传入当前题选项对象
	 * @param {Array} optionsMarkList 传入选项标识数组
	 * @param {Boolean} isShowToast 传入是否显示提示信息
	 * @param {Function} callback 传入以题状态作为参数的回调函数
	 */
	answerResultHandle({
		topicInfoObj,
		optionsList,
		optionsMarkList,
		isShowToast = true,
		callback = (state) => {}
	}) {
		// 针对多选题，判断用户是否选择，未选择则提示用户进行选择
		if (isShowToast && !topicInfoObj?.myAnswer) return uni.showToast({
			title: '请先做出选择',
			icon: 'none'
		})
		
		// 判断我的答案和正确答案是否以存在记录，不存在则初始化一个空的集合
		topicInfoObj.myAnswer = topicInfoObj.myAnswer || new Set()
		topicInfoObj.correctAnswer = topicInfoObj.correctAnswer || new Set()

		// 多选题点击确认/单选题选中一个选项，后禁止其他选项点击，并显示正确答案
		optionsList.forEach((item, index) => {
			item.disable = true
			if (item.state) {
				item.style = 'correct'
				topicInfoObj.correctAnswer.add(optionsMarkList[index])
			}
		})

		// 设置当前题对错状态默认为正确
		topicInfoObj.state = 'correct'

		// 遍历我的答案，判断答案正确性，错误则设置错误样式，并将当前题对错状态改为错误
		topicInfoObj.myAnswer.forEach(key => {
			if (!topicInfoObj.correctAnswer.has(key)) {
				const currentOptionIndex = optionsMarkList.indexOf(key)
				optionsList[currentOptionIndex].style = 'wrong'
				topicInfoObj.state = 'wrong'
			}
		})

		// 调用将 Set 集合，转为 String 字符串方法
		topicInfoObj.myAnswer = this.setToString(topicInfoObj.myAnswer)
		topicInfoObj.correctAnswer = this.setToString(topicInfoObj.correctAnswer)

		// 设置用户已经点击了确认，用于显示正确答案和解析
		topicInfoObj.confirm = true

		// 调用统计方法
		callback(topicInfoObj.state)
	}

	/**
	 * Set 集合转字符串方法
	 * @param {Set} setObj 传入 Set 集合
	 * @return {String} 返回转换好的字符串
	 */
	setToString(setObj) {

		return [...setObj].join('')
	}
}


module.exports = {
	AnsweringQuestions
}
