import {
	config
} from '@/config.js'

// /**
//  * 获取训练题目初始数据方法
//  */
// const getTrainTopicInitData = () => {
// 	return new Promise((resolve, reject) => uni.request({
// 		url: `${config.api_base_url}/api/trainTopic`,
// 		success: res => {
// 			if (res.data.code !== 0) return reject(res)
// 			resolve(res)
// 		}
// 	}))
// }

// 临时演示数据
const questionBank = [
  {
    "tid": "1",
    "questionCategory": 1,
    "content": "1、关于计算机网络,以下说法哪个正确()。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "网络就是计算机的集合",
        "state": false
      },
      {
        "title": "网络可提供远程用户共享网络资源,但可靠性很差",
        "state": false
      },
      {
        "title": "网络是通信、计算机和微电子技术相结合的产物",
        "state": true
      },
      {
        "title": "当今世界规模最大的网络是因特网",
        "state": true
      }
    ],
    "analysis": "计算机网络是通信技术与计算机技术结合的产物，也就是说计算机网络就是为了解决计算机与计算机之间通讯的问题。什么是通讯的问题，就是数据交换的问题，也是信息交换的问题。在现实世界中，我们用信息来形容交换的内容，在计算机世界里，我们用「数据」这个词来代替。这些词都是对内容的抽象概括，因为现实世界需要交换的内容太复杂了，一段文字称之为信息，一张图片也叫信息。所以这些词都是对这些内容的抽象概括，其实完全没有那么高大上，意会了就好。继续讲，我们知道，与计算机网络相关的东西有哪些，大家可以列举出很多，比如网线，网卡，路由器，计算机中的 IP 地址。专业一点的人知道 TCP UDP，HTTP ，FTP。这些东西分别对应着计算机网络中不同的层次。层次有不同的分法， OSI（网络）模型将计算机网络分成了七层（搜索关键词 OSI 七层模型），因为分的太多太细，跟现实生活中操作有一些不匹配，被我们称为理论上的成果，市场上的失败，但却是我们学习计算机网络的好工具。在市场上成功的方式是将计算机网络分成五层或者四层。我喜欢按五层来分。刚刚列举出关于计算机网络的内容中，网线属于物理层，网卡属于数据链路层，路由器属于网络层，对应的协议有 IP ，ICMP等。最后一个字母 P 代表 Protocol 协议的意思，因为狗血的语言不合的问题，我们还时不时的称之为 IP 协议，HTTP 协议等，重在理解，叫什么就无所谓了。还有计算机网络拥有的是一个体系结构，分成那么多层是因为计算机网络体系太复杂了，还涉及到各种各样的组成部分，一次性规范这么多内容不太现实，所以我们按不同设备按照功能划分成不同的层次。这样做的好处是每一层对其他层来说都是透明的，更利于标准化。某一层变化了，不影响其他层的工作。分层思想在计算机领域应用的还是比较多的。分层带来的好处就是透明，更容易制定标准。如何理解透明这一概念，透明的含义就是我不需要知道你是怎么工作的，我想要什么你能给什么就行。最简单的例子，我玩手机不需要知道手机是怎么工作的，我只要会点屏幕就行，我能处理你给我展现的内容就行。屏幕显示的内容就是手机提供给我们的内容。但是内部电池如何供电，供多大的电流，我们不需要考虑。这就是透明的含义。在计算机网络中也是如此，不需要理解上层和下层是怎么工作的，我只需要接受下层给我的数据，并且我能看懂，经过我这层之后，我按照上层在一开始规范好的数据格式，提交给上一层，上一层就会能正确的接收我提交的数据。分层之后，某一层的修改不会影响其他层。怎么理解呢，IPv4 和 IPv6 都处于网络层，属于不同版本的协议，但是从 IPv4 切换到 IPv6 对于应用层的 HTTP 来讲是没有区别的，HTTP 不需要管你用的是 IPv4 还是 IPv6，你按照我这 HTTP 的格式传上来数据就行。就是这个意思。"
  },
  {
    "tid": "2",
    "questionCategory": 0,
    "content": "2、在程序执行过程中，高速缓存(Cache) 与主存间的地址映射由（  ）。",
    "isCollect": false,
    "isMark": true,
    "options": [
      {
        "title": "操作系统进行管理",
        "state": false
      },
      {
        "title": "程序员自行安排",
        "state": false
      },
      {
        "title": "硬件自动完成",
        "state": true
      },
      {
        "title": "用户软件",
        "state": false
      }
    ],
    "analysis": "cache是辅助cpu的，不是操作系统层面的东西"
  },
  {
    "tid": "3",
    "questionCategory": 0,
    "content": "3、计算机中提供指令地址的程序计数器PC在（ ）中。",
    "isCollect": true,
    "isMark": false,
    "options": [
      {
        "title": "控制器",
        "state": true
      },
      {
        "title": "运算器",
        "state": false
      },
      {
        "title": "存储器",
        "state": false
      },
      {
        "title": "I/O设备",
        "state": false
      }
    ],
    "analysis": ""
  },
  {
    "tid": "4",
    "questionCategory": 0,
    "content": "4、在程序运行过程中，CPU需要将指令从内存中取出并加以分析和执行。CPU依据（）来区分在内存中以二进制编码形式存放的指令和数据。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "指令周期的不同阶段",
        "state": true
      },
      {
        "title": "指令和数据的寻址方式",
        "state": false
      },
      {
        "title": "指令操作码的译码结果",
        "state": false
      },
      {
        "title": "指令和数据所在的存储单元",
        "state": false
      }
    ],
    "analysis": "指令周期是执行一条指令所需要的时间，一般由若干个机器周期组成，是从取指令、分析指令到执行完所需的全部时间。CPU执行指令的过程中，根据时序部件发出的时钟信号按部就班进行操作。在取指令阶段读取到的是指令，在分析指令和执行指令时，需要操作数时再去读操作数。"
  },
  {
    "tid": "5",
    "questionCategory": 0,
    "content": "5、某Python程序中定义了X=[1, 2]，那么X*2的值为(  )。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "[1, 2, 1, 2]",
        "state": true
      },
      {
        "title": "[1, 1, 2, 2]",
        "state": false
      },
      {
        "title": "[2, 4]",
        "state": false
      },
      {
        "title": "出错",
        "state": false
      }
    ],
    "analysis": "X=[1,2]表示List结构，*2表示重复2次，运算结果为[1,2,1,2]。"
  },
  {
    "tid": "6",
    "questionCategory": 0,
    "content": "6、以下信息交换情形中，采用异步传输方式的是()。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "CPU与内存储器之间交换信息",
        "state": false
      },
      {
        "title": "CPU与PCI总线交换信息",
        "state": false
      },
      {
        "title": "CPU与l/O接口交换信息",
        "state": true
      },
      {
        "title": "I/O接口与打印设备间交换",
        "state": false
      }
    ],
    "analysis": "同步传输方式中发送方和接收方的时钟是统一的、字符与字符间的传输是同步无间隔的。异步传输方式并不要求发送方和接收方的时钟完全一样，字符与字符间的传输是异步的。"
  },
  {
    "tid": "7",
    "questionCategory": 1,
    "content": "7、请注意用电安全",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "好的",
        "state": true
      },
      {
        "title": "遵守",
        "state": true
      },
      {
        "title": "不管不问",
        "state": false
      },
      {
        "title": "不受",
        "state": false
      }
    ],
    "analysis": ""
  },
  {
    "tid": "8",
    "questionCategory": 2,
    "content": "8、永恒之蓝属于计算机病毒的是计算机病毒吗？",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "是的",
        "state": true
      },
      {
        "title": "不是",
        "state": false
      }
    ],
    "analysis": "永恒之蓝是指2017年4月14日晚，黑客团体Shadow Brokers公布一大批网络攻击工具，其中包含“永恒之蓝”工具，“永恒之蓝”利用Windows系统的SMB漏洞可以获取系统最高权限并扫描开放445文件共享端口的Windows机器，无需用户任何操作，只要开机上网，不法分子就能在电脑和服务器中植入勒索软件、远程控制木马、虚拟货币挖矿机等恶意程序。"
  },
  {
    "tid": "9",
    "questionCategory": 0,
    "content": "9、下列协议中，可以用于文件安全传输的是（）。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "FTP",
        "state": false
      },
      {
        "title": "SFTP",
        "state": true
      },
      {
        "title": "TFTP",
        "state": false
      },
      {
        "title": "ICMP",
        "state": false
      }
    ],
    "analysis": "SFTP (SSH File Transfer Protocol,安全文件传送协议)，是一种基于 SSH (安全外壳)的安全的文件传输协议，在文件传输过程中提供一种安全的加密算法,从而保证数据的安全传输。"
  },
  {
    "tid": "10",
    "questionCategory": 0,
    "content": "10、SQL注入是常见的Web攻击，以下不能够有效防御SQL注入的手段是( )。",
    "isCollect": false,
    "isMark": true,
    "options": [
      {
        "title": "对用户输入做关键字过滤",
        "state": false
      },
      {
        "title": "部署Web应用防火墙进行防护",
        "state": false
      },
      {
        "title": "部署入侵检测系统阻断攻击",
        "state": true
      },
      {
        "title": "定期扫描系统漏洞并及时修复",
        "state": false
      }
    ],
    "analysis": "部署入侵检测系统可以发现攻击并进行告警，但无法阻断攻击"
  },
  {
    "tid": "11",
    "questionCategory": 0,
    "content": "11、以下关于杀毒软件的描述中，错误的是( )。",
    "isCollect": true,
    "isMark": false,
    "options": [
      {
        "title": "应当为计算机安装杀毒软件并及时更新病毒库",
        "state": false
      },
      {
        "title": "安装杀毒软件可以有效防止蠕虫病毒",
        "state": false
      },
      {
        "title": "安装杀毒软件可以有效防止网站信息被篡改",
        "state": true
      },
      {
        "title": "服务器操作系统也需要安装杀毒软件",
        "state": false
      }
    ],
    "analysis": ""
  },
  {
    "tid": "12",
    "questionCategory": 0,
    "content": "12、通过在出口防火墙上配置( )功能，可以阻止外部未授权用户访问内部网络。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "ACL",
        "state": true
      },
      {
        "title": "SNAT",
        "state": false
      },
      {
        "title": "入侵检测",
        "state": false
      },
      {
        "title": "防病毒",
        "state": false
      }
    ],
    "analysis": "指令周期是执行一条指令所需要的时间，一般由若干个机器周期组成，是从取指令、分析指令到执行完所需的全部时间。CPU执行指令的过程中，根据时序部件发出的时钟信号按部就班进行操作。在取指令阶段读取到的是指令，在分析指令和执行指令时，需要操作数时再去读操作数。"
  },
  {
    "tid": "13",
    "questionCategory": 0,
    "content": "13、甲乙丙三人分别就相同内容的计算机程序的发明创造，先后向国务院专利行政部门]提出申请，( )可以获得专利申请权。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "甲乙丙均",
        "state": false
      },
      {
        "title": "先申请者",
        "state": true
      },
      {
        "title": "先使用者",
        "state": false
      },
      {
        "title": "先发明者",
        "state": false
      }
    ],
    "analysis": "一份专利申请文件只能就一项发明创造提出专利申请。一项发明只授予一项专利，同样的发明申请专利，则按照申请时间的先后决定授予给谁。两个以上的申请人在同一日分别就同样的发明创造申请专利的，应当在收到国务院专利行政部门的通知后自行协商确定申请人。"
  },
  {
    "tid": "14",
    "questionCategory": 0,
    "content": "14、( )的保护期限是可以延长的。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "著作权",
        "state": false
      },
      {
        "title": "专利权",
        "state": false
      },
      {
        "title": "商标权",
        "state": true
      },
      {
        "title": "商业秘密权",
        "state": false
      }
    ],
    "analysis": "注册商标的有效期限为10年，自核准注册之日起计算。1、注册商标有效期满，需要继续使用的，应当在期满前6个月内申请续展注册；2、在此期间未能提出申请的，可以给予6个月的宽展期；3、宽展期满仍未提出申请的，注销其注册商标；4、每次续展注册的有效期为10年。"
  },
  {
    "tid": "15",
    "questionCategory": 0,
    "content": "15、针对月收入小于等于3500元免征个人所得税的需求，现分别输入3499、3500和3501进行测试，则采用的测试方法( )。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "判定覆盖",
        "state": false
      },
      {
        "title": "边界值分析",
        "state": true
      },
      {
        "title": "路径覆盖",
        "state": false
      },
      {
        "title": "因果图",
        "state": false
      }
    ],
    "analysis": "3499、3500、3501 都是条件 x <= 3500 的临界值"
  },
  {
    "tid": "16",
    "questionCategory": 2,
    "content": "16、以下关于软件维护的叙述中，正确的是( )。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "工作量相对于软件开发而言要小很多",
        "state": false
      },
      {
        "title": "成本相对于软件开发而言要更低",
        "state": false
      },
      {
        "title": "时间相对于软件开发而言通常更长",
        "state": true
      },
      {
        "title": "只对软件代码进行修改的行为",
        "state": false
      }
    ],
    "analysis": "软件开发一般是定长的，软件维护是在程序使用一直到程序消亡的整个过程，是整个软件生命周期中用时最长，工作量和成本最大的过程。如果维护期很长那么成本也相对较高。软件维护不仅仅是对于代码层面的，还有配套的文档，比如测试文档、测试用例。"
  },
  {
    "tid": "17",
    "questionCategory": 0,
    "content": "17、在运行时将函数调用和响应调用所需执行的代码加以结合的机制是( )。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "强类型",
        "state": false
      },
      {
        "title": "弱类型",
        "state": false
      },
      {
        "title": "静态绑定",
        "state": false
      },
      {
        "title": "动态绑定",
        "state": true
      }
    ],
    "analysis": "动态绑定在运行时将函数调用和响应调用所需执行的代码加以结合，静态绑定在编译时将函数调用和响应调用所需执行的代码加以结合。"
  },
  {
    "tid": "18",
    "questionCategory": 0,
    "content": "18、进行面向对象系统设计时，在包的依赖关系图中不允许存在环，这属于( )原则。",
    "isCollect": false,
    "isMark": true,
    "options": [
      {
        "title": "单一责任",
        "state": false
      },
      {
        "title": "无环依赖",
        "state": true
      },
      {
        "title": "依赖倒置",
        "state": false
      },
      {
        "title": "里氏替换",
        "state": false
      }
    ],
    "analysis": ""
  },
  {
    "tid": "19",
    "questionCategory": 0,
    "content": "19、面向对象分析的第一项活动是( );面向对象程序设计语言为面向对象( )。",
    "isCollect": true,
    "isMark": false,
    "options": [
      {
        "title": "组织对象、用例设计",
        "state": false
      },
      {
        "title": "描述对象间的相互作用、分析",
        "state": false
      },
      {
        "title": "认定对象、实现",
        "state": true
      },
      {
        "title": "确定对象的操作、需求分析",
        "state": false
      }
    ],
    "analysis": "面向对象分析包含5个活动:认定对象、组织对象、描述对象间的相互作用、确定对象的操作、定义对象的内部信息。面向对象（OO）分为三部分：1、OOA 面向对象分析；2、OOD 面向对象设计；3、OOP 面向对象编程（实现）"
  },
  {
    "tid": "20",
    "questionCategory": 0,
    "content": "20、用 pip 安装 Numpy 模块的命令为( )。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "pip numpy",
        "state": false
      },
      {
        "title": "pip install numpy",
        "state": true
      },
      {
        "title": "install numpy",
        "state": false
      },
      {
        "title": "import num",
        "state": false
      }
    ],
    "analysis": "pip安装模块方法：方法一：使用 pip install + 要安装的模块名称(pip install numpy)、方法二：提前下载相应模块，手动安装"
  },
  {
    "tid": "21",
    "questionCategory": 0,
    "content": "21、22.在Python语言中，( )是一种不可变的、有序的序列结构，其中元素可以重复。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "tuple(元组)",
        "state": true
      },
      {
        "title": "dict(字典)",
        "state": false
      },
      {
        "title": "List(列表)",
        "state": false
      },
      {
        "title": "set(集合)",
        "state": false
      }
    ],
    "analysis": "不可变数据(3个): Number(数字)、String(字符串)、Tuple(元组)。可变数据(3个): List(列表)、Dictionary(字典)、Set(集合)；1、tuple(元组)， 类似于 List 列表，元组用 () 标识。内部元素用逗号隔开。但是元组不能二次赋值，相当于只读列表；2、list(列表)， 可以完成大多数集合类的数据结构实现。它支持字符、数字、字符串甚至可以包含列表(即嵌套或叫多维列表，用来表示多维数组)。列表用 [] 标识，是 Python 最通用的复合数据类型；3、dict(字典)， 是除列表以外 python 之 中最灵活的内置数据结构类型，列表是有序的对象集合，字典是无序的对象集合，字典用 {} 标识，字典由索引 key 和它对应的值 value 组成；4、set(集合)，集合中的元素是无序和唯一 的，它主要用于进行关系测试和消除重复元素,可以使用大括号 {} 或者 set() 函数创建集合。"
  },
  {
    "tid": "22",
    "questionCategory": 0,
    "content": "22、数据库中的视图是一个虚拟表，若设计师为user表创建一个use1视图，那么数据字典中保存的是( )。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "user1 查询语句",
        "state": false
      },
      {
        "title": "user1 视图定义",
        "state": true
      },
      {
        "title": "user1 查询结果",
        "state": false
      },
      {
        "title": "所引用的基本表",
        "state": false
      }
    ],
    "analysis": "他是一个虚拟表，并不是一个物理存储表，他是在引用视图的时候生成的，那么数据字典中保存的就是视图的定义"
  },
  {
    "tid": "23",
    "questionCategory": 0,
    "content": "23、以下关于散列表(哈希表)及其查找特点的叙述中，正确的是( )。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "在散列表中进行查找时，只需要与待查找关键字及其同义词进行比较",
        "state": false
      },
      {
        "title": "只要散列表的装填因子不大于1/2，就能避免冲突",
        "state": false
      },
      {
        "title": "用线性探测法解决冲突容易产生聚集问题",
        "state": true
      },
      {
        "title": "用链地址法解决冲突可确保平均查找长度为1",
        "state": false
      }
    ],
    "analysis": ""
  },
  {
    "tid": "24",
    "questionCategory": 0,
    "content": "24、对长度为n的有序顺序表进行折半查找(即二分查找)的过程，可用一棵判定树表示，该判定树的形态符合( )的特点。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "最优二叉树(即哈夫曼树)",
        "state": false
      },
      {
        "title": "平衡二叉树",
        "state": true
      },
      {
        "title": "完全二叉树",
        "state": false
      },
      {
        "title": "最小生成数",
        "state": false
      }
    ],
    "analysis": ""
  },
  {
    "tid": "25",
    "questionCategory": 0,
    "content": "25、已知树T的度为4，且度为4的结点数为7个、度为3的结点数5个、度为2的结点数为8个、度为1的结点数为10个，那么T的叶子结点个数为( )。(注: 树中节点个数称为结点的度，结点的度中的最大值称为树的度)",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "30",
        "state": false
      },
      {
        "title": "35,但可靠性很差",
        "state": false
      },
      {
        "title": "40",
        "state": true
      },
      {
        "title": "49",
        "state": false
      }
    ],
    "analysis": ""
  },
  {
    "tid": "26",
    "questionCategory": 0,
    "content": "26、排序算法的稳定性是指将待排序列排序后，能确保排序码中的相对位置保持不变。( )是稳定的排序算法。",
    "isCollect": false,
    "isMark": true,
    "options": [
      {
        "title": "冒泡排序",
        "state": true
      },
      {
        "title": "快速排序",
        "state": false
      },
      {
        "title": "堆排序",
        "state": false
      },
      {
        "title": "简单选择排序",
        "state": false
      }
    ],
    "analysis": "直接插入、冒泡排序、归并排序、基数排序是稳定的"
  },
  {
    "tid": "27",
    "questionCategory": 0,
    "content": "27、某图G的邻接表中共有奇数个表示边的表结点，则图G( )。",
    "isCollect": true,
    "isMark": false,
    "options": [
      {
        "title": "有奇数个顶点",
        "state": false
      },
      {
        "title": "有偶数个顶点",
        "state": false
      },
      {
        "title": "是无向图",
        "state": false
      },
      {
        "title": "是有向图",
        "state": true
      }
    ],
    "analysis": ""
  },
  {
    "tid": "28",
    "questionCategory": 0,
    "content": "28、在OSI参考模型中，( )在物理线路上提供可靠的数据传输服务。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "物理层",
        "state": false
      },
      {
        "title": "数据链路层",
        "state": false
      },
      {
        "title": "网络层",
        "state": false
      },
      {
        "title": "传输层",
        "state": true
      }
    ],
    "analysis": ""
  },
  {
    "tid": "29",
    "questionCategory": 0,
    "content": "29、在TCP/IP协议栈中，远程登录采用的协议为( )。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "HTTP",
        "state": false
      },
      {
        "title": "TELNET",
        "state": true
      },
      {
        "title": "SMTP",
        "state": false
      },
      {
        "title": "FTP",
        "state": false
      }
    ],
    "analysis": ""
  },
  {
    "tid": "30",
    "questionCategory": 0,
    "content": "30、浏览器开启无痕浏览模式时，( )仍然会被保存到。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "浏览历史",
        "state": false
      },
      {
        "title": "搜索历史",
        "state": false
      },
      {
        "title": "下载的文件",
        "state": true
      },
      {
        "title": "临时文件",
        "state": false
      }
    ],
    "analysis": "无痕浏览指的是不保存：浏览历史、搜索历史、表单历史、Cookie 历史、internal 临时文件"
  },
  {
    "tid": "31",
    "questionCategory": 0,
    "content": "31、.下列不属于电子邮件收发协议的是( )。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "SMTP",
        "state": false
      },
      {
        "title": "POP3",
        "state": false
      },
      {
        "title": "IMAP",
        "state": false
      },
      {
        "title": "FTP",
        "state": true
      }
    ],
    "analysis": "SMTP：发邮件协议，端口 25，POP3：收邮件协议，端口 110，IMAP：收邮件协议，端口 143。POP3 在客户端对邮件的操作不会返回到服务器上，IMAP 在客户端对邮件的操作会返回到服务器上。"
  },
  {
    "tid": "32",
    "questionCategory": 0,
    "content": "32、在程序执行过程中，高速缓存(Cache) 与主存间的地址映射由（  ）。",
    "isCollect": false,
    "isMark": true,
    "options": [
      {
        "title": "操作系统进行管理",
        "state": false
      },
      {
        "title": "程序员自行安排",
        "state": false
      },
      {
        "title": "硬件自动完成",
        "state": true
      },
      {
        "title": "用户软件",
        "state": false
      }
    ],
    "answer": {
      "1": "B"
    },
    "analysis": "cache是辅助cpu的，不是操作系统层面的东西"
  },
  {
    "tid": "33",
    "questionCategory": 0,
    "content": "33、计算机中提供指令地址的程序计数器PC在（ ）中。",
    "isCollect": true,
    "isMark": false,
    "options": [
      {
        "title": "控制器",
        "state": true
      },
      {
        "title": "运算器",
        "state": false
      },
      {
        "title": "存储器",
        "state": false
      },
      {
        "title": "I/O设备",
        "state": false
      }
    ],
    "answer": {
      "1": "B"
    },
    "analysis": ""
  },
  {
    "tid": "34",
    "questionCategory": 0,
    "content": "34、在程序运行过程中，CPU需要将指令从内存中取出并加以分析和执行。CPU依据（）来区分在内存中以二进制编码形式存放的指令和数据。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "指令周期的不同阶段",
        "state": true
      },
      {
        "title": "指令和数据的寻址方式",
        "state": false
      },
      {
        "title": "指令操作码的译码结果",
        "state": false
      },
      {
        "title": "指令和数据所在的存储单元",
        "state": false
      }
    ],
    "answer": {
      "2": "C"
    },
    "analysis": "指令周期是执行一条指令所需要的时间，一般由若干个机器周期组成，是从取指令、分析指令到执行完所需的全部时间。CPU执行指令的过程中，根据时序部件发出的时钟信号按部就班进行操作。在取指令阶段读取到的是指令，在分析指令和执行指令时，需要操作数时再去读操作数。"
  },
  {
    "tid": "35",
    "questionCategory": 0,
    "content": "35、某Python程序中定义了X=[1, 2]，那么X*2的值为(  )。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "[1, 2, 1, 2]",
        "state": true
      },
      {
        "title": "[1, 1, 2, 2]",
        "state": false
      },
      {
        "title": "[2, 4]",
        "state": false
      },
      {
        "title": "出错",
        "state": false
      }
    ],
    "answer": {
      "0": "A"
    },
    "analysis": "X=[1,2]表示List结构，*2表示重复2次，运算结果为[1,2,1,2]。"
  },
  {
    "tid": "36",
    "questionCategory": 0,
    "content": "36、以下信息交换情形中，采用异步传输方式的是()。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "CPU与内存储器之间交换信息",
        "state": false
      },
      {
        "title": "CPU与PCI总线交换信息",
        "state": false
      },
      {
        "title": "CPU与l/O接口交换信息",
        "state": true
      },
      {
        "title": "I/O接口与打印设备间交换",
        "state": false
      }
    ],
    "answer": {
      "0": "A"
    },
    "analysis": "同步传输方式中发送方和接收方的时钟是统一的、字符与字符间的传输是同步无间隔的。异步传输方式并不要求发送方和接收方的时钟完全一样，字符与字符间的传输是异步的。"
  },
  {
    "tid": "37",
    "questionCategory": 1,
    "content": "37、请注意用电安全",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "好的",
        "state": true
      },
      {
        "title": "遵守",
        "state": true
      },
      {
        "title": "不管不问",
        "state": false
      },
      {
        "title": "不受",
        "state": false
      }
    ],
    "answer": {
      "0": "A",
      "1": "B"
    },
    "analysis": ""
  },
  {
    "tid": "38",
    "questionCategory": 2,
    "content": "38、永恒之蓝属于计算机病毒的是计算机病毒吗？",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "是的",
        "state": false
      },
      {
        "title": "不是",
        "state": true
      }
    ],
    "answer": {
      "0": "A"
    },
    "analysis": "永恒之蓝是指2017年4月14日晚，黑客团体Shadow Brokers公布一大批网络攻击工具，其中包含“永恒之蓝”工具，“永恒之蓝”利用Windows系统的SMB漏洞可以获取系统最高权限并扫描开放445文件共享端口的Windows机器，无需用户任何操作，只要开机上网，不法分子就能在电脑和服务器中植入勒索软件、远程控制木马、虚拟货币挖矿机等恶意程序。"
  },
  {
    "tid": "39",
    "questionCategory": 1,
    "content": "39、关于计算机网络,以下说法哪个正确()。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "网络就是计算机的集合",
        "state": false
      },
      {
        "title": "网络可提供远程用户共享网络资源,但可靠性很差",
        "state": false
      },
      {
        "title": "网络是通信、计算机和微电子技术相结合的产物",
        "state": true
      },
      {
        "title": "当今世界规模最大的网络是因特网",
        "state": true
      }
    ],
    "answer": {
      "0": "C",
      "1": "D"
    },
    "analysis": "计算机网络是通信技术与计算机技术结合的产物，也就是说计算机网络就是为了解决计算机与计算机之间通讯的问题。什么是通讯的问题，就是数据交换的问题，也是信息交换的问题。在现实世界中，我们用信息来形容交换的内容，在计算机世界里，我们用「数据」这个词来代替。这些词都是对内容的抽象概括，因为现实世界需要交换的内容太复杂了，一段文字称之为信息，一张图片也叫信息。所以这些词都是对这些内容的抽象概括，其实完全没有那么高大上，意会了就好。继续讲，我们知道，与计算机网络相关的东西有哪些，大家可以列举出很多，比如网线，网卡，路由器，计算机中的 IP 地址。专业一点的人知道 TCP UDP，HTTP ，FTP。这些东西分别对应着计算机网络中不同的层次。层次有不同的分法， OSI（网络）模型将计算机网络分成了七层（搜索关键词 OSI 七层模型），因为分的太多太细，跟现实生活中操作有一些不匹配，被我们称为理论上的成果，市场上的失败，但却是我们学习计算机网络的好工具。在市场上成功的方式是将计算机网络分成五层或者四层。我喜欢按五层来分。刚刚列举出关于计算机网络的内容中，网线属于物理层，网卡属于数据链路层，路由器属于网络层，对应的协议有 IP ，ICMP等。最后一个字母 P 代表 Protocol 协议的意思，因为狗血的语言不合的问题，我们还时不时的称之为 IP 协议，HTTP 协议等，重在理解，叫什么就无所谓了。还有计算机网络拥有的是一个体系结构，分成那么多层是因为计算机网络体系太复杂了，还涉及到各种各样的组成部分，一次性规范这么多内容不太现实，所以我们按不同设备按照功能划分成不同的层次。这样做的好处是每一层对其他层来说都是透明的，更利于标准化。某一层变化了，不影响其他层的工作。分层思想在计算机领域应用的还是比较多的。分层带来的好处就是透明，更容易制定标准。如何理解透明这一概念，透明的含义就是我不需要知道你是怎么工作的，我想要什么你能给什么就行。最简单的例子，我玩手机不需要知道手机是怎么工作的，我只要会点屏幕就行，我能处理你给我展现的内容就行。屏幕显示的内容就是手机提供给我们的内容。但是内部电池如何供电，供多大的电流，我们不需要考虑。这就是透明的含义。在计算机网络中也是如此，不需要理解上层和下层是怎么工作的，我只需要接受下层给我的数据，并且我能看懂，经过我这层之后，我按照上层在一开始规范好的数据格式，提交给上一层，上一层就会能正确的接收我提交的数据。分层之后，某一层的修改不会影响其他层。怎么理解呢，IPv4 和 IPv6 都处于网络层，属于不同版本的协议，但是从 IPv4 切换到 IPv6 对于应用层的 HTTP 来讲是没有区别的，HTTP 不需要管你用的是 IPv4 还是 IPv6，你按照我这 HTTP 的格式传上来数据就行。就是这个意思。"
  },
  {
    "tid": "40",
    "questionCategory": 0,
    "content": "40、在程序执行过程中，高速缓存(Cache) 与主存间的地址映射由（  ）。",
    "isCollect": false,
    "isMark": true,
    "options": [
      {
        "title": "操作系统进行管理",
        "state": false
      },
      {
        "title": "程序员自行安排",
        "state": false
      },
      {
        "title": "硬件自动完成",
        "state": true
      },
      {
        "title": "用户软件",
        "state": false
      }
    ],
    "answer": {
      "1": "B"
    },
    "analysis": "cache是辅助cpu的，不是操作系统层面的东西"
  },
  {
    "tid": "41",
    "questionCategory": 0,
    "content": "41、计算机中提供指令地址的程序计数器PC在（ ）中。",
    "isCollect": true,
    "isMark": false,
    "options": [
      {
        "title": "控制器",
        "state": true
      },
      {
        "title": "运算器",
        "state": false
      },
      {
        "title": "存储器",
        "state": false
      },
      {
        "title": "I/O设备",
        "state": false
      }
    ],
    "answer": {
      "1": "B"
    },
    "analysis": ""
  },
  {
    "tid": "42",
    "questionCategory": 0,
    "content": "42、在程序运行过程中，CPU需要将指令从内存中取出并加以分析和执行。CPU依据（）来区分在内存中以二进制编码形式存放的指令和数据。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "指令周期的不同阶段",
        "state": true
      },
      {
        "title": "指令和数据的寻址方式",
        "state": false
      },
      {
        "title": "指令操作码的译码结果",
        "state": false
      },
      {
        "title": "指令和数据所在的存储单元",
        "state": false
      }
    ],
    "answer": {
      "2": "C"
    },
    "analysis": "指令周期是执行一条指令所需要的时间，一般由若干个机器周期组成，是从取指令、分析指令到执行完所需的全部时间。CPU执行指令的过程中，根据时序部件发出的时钟信号按部就班进行操作。在取指令阶段读取到的是指令，在分析指令和执行指令时，需要操作数时再去读操作数。"
  },
  {
    "tid": "43",
    "questionCategory": 0,
    "content": "43、某Python程序中定义了X=[1, 2]，那么X*2的值为(  )。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "[1, 2, 1, 2]",
        "state": true
      },
      {
        "title": "[1, 1, 2, 2]",
        "state": false
      },
      {
        "title": "[2, 4]",
        "state": false
      },
      {
        "title": "出错",
        "state": false
      }
    ],
    "answer": {
      "0": "A"
    },
    "analysis": "X=[1,2]表示List结构，*2表示重复2次，运算结果为[1,2,1,2]。"
  },
  {
    "tid": "44",
    "questionCategory": 0,
    "content": "44、以下信息交换情形中，采用异步传输方式的是()。",
    "isCollect": true,
    "isMark": true,
    "options": [
      {
        "title": "CPU与内存储器之间交换信息",
        "state": false
      },
      {
        "title": "CPU与PCI总线交换信息",
        "state": false
      },
      {
        "title": "CPU与l/O接口交换信息",
        "state": true
      },
      {
        "title": "I/O接口与打印设备间交换",
        "state": false
      }
    ],
    "answer": {
      "0": "A"
    },
    "analysis": "同步传输方式中发送方和接收方的时钟是统一的、字符与字符间的传输是同步无间隔的。异步传输方式并不要求发送方和接收方的时钟完全一样，字符与字符间的传输是异步的。"
  },
  {
    "tid": "45",
    "questionCategory": 1,
    "content": "45、请注意用电安全",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "好的",
        "state": true
      },
      {
        "title": "遵守",
        "state": true
      },
      {
        "title": "不管不问",
        "state": false
      },
      {
        "title": "不受",
        "state": false
      }
    ],
    "answer": {
      "0": "A",
      "1": "B"
    },
    "analysis": ""
  },
  {
    "tid": "46",
    "questionCategory": 2,
    "content": "46、永恒之蓝属于计算机病毒的是计算机病毒吗？",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "是的",
        "state": false
      },
      {
        "title": "不是",
        "state": true
      }
    ],
    "answer": {
      "0": "A"
    },
    "analysis": "永恒之蓝是指2017年4月14日晚，黑客团体Shadow Brokers公布一大批网络攻击工具，其中包含“永恒之蓝”工具，“永恒之蓝”利用Windows系统的SMB漏洞可以获取系统最高权限并扫描开放445文件共享端口的Windows机器，无需用户任何操作，只要开机上网，不法分子就能在电脑和服务器中植入勒索软件、远程控制木马、虚拟货币挖矿机等恶意程序。"
  },
  {
    "tid": "47",
    "questionCategory": 1,
    "content": "47、关于计算机网络,以下说法哪个正确()。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "网络就是计算机的集合",
        "state": false
      },
      {
        "title": "网络可提供远程用户共享网络资源,但可靠性很差",
        "state": false
      },
      {
        "title": "网络是通信、计算机和微电子技术相结合的产物",
        "state": true
      },
      {
        "title": "当今世界规模最大的网络是因特网",
        "state": true
      }
    ],
    "answer": {
      "0": "C",
      "1": "D"
    },
    "analysis": "计算机网络是通信技术与计算机技术结合的产物，也就是说计算机网络就是为了解决计算机与计算机之间通讯的问题。什么是通讯的问题，就是数据交换的问题，也是信息交换的问题。在现实世界中，我们用信息来形容交换的内容，在计算机世界里，我们用「数据」这个词来代替。这些词都是对内容的抽象概括，因为现实世界需要交换的内容太复杂了，一段文字称之为信息，一张图片也叫信息。所以这些词都是对这些内容的抽象概括，其实完全没有那么高大上，意会了就好。继续讲，我们知道，与计算机网络相关的东西有哪些，大家可以列举出很多，比如网线，网卡，路由器，计算机中的 IP 地址。专业一点的人知道 TCP UDP，HTTP ，FTP。这些东西分别对应着计算机网络中不同的层次。层次有不同的分法， OSI（网络）模型将计算机网络分成了七层（搜索关键词 OSI 七层模型），因为分的太多太细，跟现实生活中操作有一些不匹配，被我们称为理论上的成果，市场上的失败，但却是我们学习计算机网络的好工具。在市场上成功的方式是将计算机网络分成五层或者四层。我喜欢按五层来分。刚刚列举出关于计算机网络的内容中，网线属于物理层，网卡属于数据链路层，路由器属于网络层，对应的协议有 IP ，ICMP等。最后一个字母 P 代表 Protocol 协议的意思，因为狗血的语言不合的问题，我们还时不时的称之为 IP 协议，HTTP 协议等，重在理解，叫什么就无所谓了。还有计算机网络拥有的是一个体系结构，分成那么多层是因为计算机网络体系太复杂了，还涉及到各种各样的组成部分，一次性规范这么多内容不太现实，所以我们按不同设备按照功能划分成不同的层次。这样做的好处是每一层对其他层来说都是透明的，更利于标准化。某一层变化了，不影响其他层的工作。分层思想在计算机领域应用的还是比较多的。分层带来的好处就是透明，更容易制定标准。如何理解透明这一概念，透明的含义就是我不需要知道你是怎么工作的，我想要什么你能给什么就行。最简单的例子，我玩手机不需要知道手机是怎么工作的，我只要会点屏幕就行，我能处理你给我展现的内容就行。屏幕显示的内容就是手机提供给我们的内容。但是内部电池如何供电，供多大的电流，我们不需要考虑。这就是透明的含义。在计算机网络中也是如此，不需要理解上层和下层是怎么工作的，我只需要接受下层给我的数据，并且我能看懂，经过我这层之后，我按照上层在一开始规范好的数据格式，提交给上一层，上一层就会能正确的接收我提交的数据。分层之后，某一层的修改不会影响其他层。怎么理解呢，IPv4 和 IPv6 都处于网络层，属于不同版本的协议，但是从 IPv4 切换到 IPv6 对于应用层的 HTTP 来讲是没有区别的，HTTP 不需要管你用的是 IPv4 还是 IPv6，你按照我这 HTTP 的格式传上来数据就行。就是这个意思。"
  },
  {
    "tid": "48",
    "questionCategory": 0,
    "content": "48、在程序执行过程中，高速缓存(Cache) 与主存间的地址映射由（  ）。",
    "isCollect": false,
    "isMark": true,
    "options": [
      {
        "title": "操作系统进行管理",
        "state": false
      },
      {
        "title": "程序员自行安排",
        "state": false
      },
      {
        "title": "硬件自动完成",
        "state": true
      },
      {
        "title": "用户软件",
        "state": false
      }
    ],
    "answer": {
      "1": "B"
    },
    "analysis": "cache是辅助cpu的，不是操作系统层面的东西"
  },
  {
    "tid": "49",
    "questionCategory": 0,
    "content": "49、计算机中提供指令地址的程序计数器PC在（ ）中。",
    "isCollect": true,
    "isMark": false,
    "options": [
      {
        "title": "控制器",
        "state": true
      },
      {
        "title": "运算器",
        "state": false
      },
      {
        "title": "存储器",
        "state": false
      },
      {
        "title": "I/O设备",
        "state": false
      }
    ],
    "answer": {
      "1": "B"
    },
    "analysis": ""
  },
  {
    "tid": "50",
    "questionCategory": 0,
    "content": "50、在程序运行过程中，CPU需要将指令从内存中取出并加以分析和执行。CPU依据（）来区分在内存中以二进制编码形式存放的指令和数据。",
    "isCollect": false,
    "isMark": false,
    "options": [
      {
        "title": "指令周期的不同阶段",
        "state": true
      },
      {
        "title": "指令和数据的寻址方式",
        "state": false
      },
      {
        "title": "指令操作码的译码结果",
        "state": false
      },
      {
        "title": "指令和数据所在的存储单元",
        "state": false
      }
    ],
    "answer": {
      "2": "C"
    },
    "analysis": "指令周期是执行一条指令所需要的时间，一般由若干个机器周期组成，是从取指令、分析指令到执行完所需的全部时间。CPU执行指令的过程中，根据时序部件发出的时钟信号按部就班进行操作。在取指令阶段读取到的是指令，在分析指令和执行指令时，需要操作数时再去读操作数。"
  }
]

// 模拟请求结果
const res = {
		data: {
			data: questionBank
		}
	}

/**
 * 获取训练题目初始数据方法
 */
const getTrainTopicInitData = () => {
	return new Promise((resolve, reject) => resolve(res))
}

module.exports = {
	getTrainTopicInitData
}
