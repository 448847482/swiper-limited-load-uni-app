import {
	config
} from '@/config.js'

/**
 * 获取训练题目初始数据方法
 */
const getTrainTopicInitData = () => {
	return new Promise((resolve, reject) => uni.request({
		url: `${config.api_base_url}/api/trainTopic`,
		success: res => {
			if (res.data.code !== 0) return reject(res)
			resolve(res)
		}
	}))
}

module.exports = {
	getTrainTopicInitData
}
