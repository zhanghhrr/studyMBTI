    const dimensionMeta = {
      IE: { title: "学习启动", left: "I 先想再动手", right: "E 先动手再想" },
      SN: { title: "抓题视角", left: "S 先看细节再判断", right: "N 先抓大致方向" },
      TF: { title: "反馈重心", left: "T 先校准逻辑线", right: "F 先照顾感受面" },
      JP: { title: "安排节奏", left: "J 先规划再行动", right: "P 先行动再调整" }
    };

    const questions = [
      {
        id: 1,
        dimension: "IE",
        prompt: "人太多的场合，孩子通常会怎么",
        note: "前 4 题先看日常个性。",
        art: "teamwork",
        options: [
          { key: "I", title: "先观察", desc: "先看清楚再慢慢加入。" },
          { key: "E", title: "先融入", desc: "很快就能和大家一起。" }
        ]
      },
      {
        id: 2,
        dimension: "SN",
        prompt: "逛商场买东西时，孩子最先注意什么？",
        note: "选那个平时更像的。",
        art: "spark",
        options: [
          { key: "S", title: "更多细节", desc: "颜色、路线、摆放变化。" },
          { key: "N", title: "整体感觉", desc: "这个空间能想到的新玩法。" }
        ]
      },
      {
        id: 3,
        dimension: "TF",
        prompt: "和别的小朋友闹别扭时，孩子更容易关注什么？",
        note: "面对小冲突的第一反应。",
        art: "helping",
        options: [
          { key: "T", title: "先讲道理", desc: "想弄清楚谁对谁错。" },
          { key: "F", title: "先顾感受", desc: "怕对方被伤得太深。" }
        ]
      },
      {
        id: 4,
        dimension: "JP",
        prompt: "周末任务开始前，孩子更容易哪种节奏？",
        note: "没有好坏，只有风格不同。",
        art: "calendar",
        options: [
          { key: "J", title: "先定计划", desc: "知道顺序更踏实。" },
          { key: "P", title: "边做边看", desc: "干起来一件件完成。" }
        ]
      },
      {
        id: 5,
        dimension: "IE",
        prompt: "刚开始写作业时，孩子更容易怎么进入状态？",
        note: "接下来 8 题看通用学习习惯。",
        art: "desk-think",
        options: [
          { key: "I", title: "先安静下来", desc: "想一下再开始写。" },
          { key: "E", title: "先说再做", desc: "说出来更容易找状态。" }
        ]
      },
      {
        id: 6,
        dimension: "SN",
        prompt: "老师刚讲完新内容，孩子记笔记更偏向哪种？",
        note: "都不是考试场景。",
        art: "story-book",
        options: [
          { key: "S", title: "记得很具体", desc: "例题和步骤都记上。" },
          { key: "N", title: "只抓关键点", desc: "重点和规律更重要。" }
        ]
      },
      {
        id: 7,
        dimension: "TF",
        prompt: "被指出作业问题时，孩子更容易接受哪种反馈？",
        note: "看家长反馈方式。",
        art: "check-rule",
        options: [
          { key: "T", title: "直接指出问题", desc: "越明确越好改。" },
          { key: "F", title: "先缓和气氛", desc: "心情顺了才愿听。" }
        ]
      },
      {
        id: 8,
        dimension: "JP",
        prompt: "开始写多科作业前，孩子通常怎么安排？",
        note: "看孩子内在秩序感。",
        art: "rocket",
        options: [
          { key: "J", title: "排出顺序", desc: "先看完再决定先后。" },
          { key: "P", title: "哪个顺手先来", desc: "挑自己喜欢的部分。" }
        ]
      },
      {
        id: 9,
        dimension: "IE",
        prompt: "碰到不会做的题，孩子更容易怎么做？",
        note: "看日常学习风格。",
        art: "home-review",
        options: [
          { key: "I", title: "自己琢磨", desc: "先琢磨一会儿再问。" },
          { key: "E", title: "先找人问", desc: "马上找人求助。" }
        ]
      },
      {
        id: 10,
        dimension: "SN",
        prompt: "用草稿纸时，孩子更偏向哪种风格？",
        note: "这是很真实的小行为。",
        art: "blocks",
        options: [
          { key: "S", title: "写得较整洁", desc: "回头看自己也能看懂。" },
          { key: "N", title: "只写关键数", desc: "很多步骤都在脑子里。" }
        ]
      },
      {
        id: 11,
        dimension: "TF",
        prompt: "看到批改的痕迹时，孩子更关心什么？",
        note: "看学习反馈偏好。",
        art: "medal",
        options: [
          { key: "T", title: "错在哪里", desc: "想求出正确结果。" },
          { key: "F", title: "老师怎么看", desc: "老师会觉得我行吗。" }
        ]
      },
      {
        id: 12,
        dimension: "JP",
        prompt: "面对收拾好的东西时，孩子更容易哪种状态？",
        note: "看平时小习惯。",
        art: "puzzle",
        options: [
          { key: "J", title: "分得很清楚", desc: "按规定位置放好才行。" },
          { key: "P", title: "看起来还行", desc: "自己找得到就好。" }
        ]
      },
      {
        id: 13,
        dimension: "IE",
        prompt: "上思维课时，孩子更容易呈现哪种状态？",
        note: "最后 8 题靠近思维训练场景。",
        art: "classroom",
        options: [
          { key: "I", title: "自己思考", desc: "想清楚了再发言。" },
          { key: "E", title: "边想边说", desc: "说出来思路更清晰。" }
        ]
      },
      {
        id: 14,
        dimension: "SN",
        prompt: "老师布置新题目，孩子更先抓什么？",
        note: "一个偏细节，一个偏概括。",
        art: "magnifier",
        options: [
          { key: "S", title: "数据和条件", desc: "先看怎么一步步算出来。" },
          { key: "N", title: "思路和规律", desc: "先猜这题大致要考什么。" }
        ]
      },
      {
        id: 15,
        dimension: "TF",
        prompt: "讨论题目时答案不同，孩子更容易哪种反应？",
        note: "看讨论风格。",
        art: "debate",
        options: [
          { key: "T", title: "用证据说服", desc: "逻辑站得住才行。" },
          { key: "F", title: "先关注感受", desc: "别把气氛弄僵。" }
        ]
      },
      {
        id: 16,
        dimension: "JP",
        prompt: "安排每日练习时，孩子更喜欢哪种节奏？",
        note: "看练习安排方式。",
        art: "target",
        options: [
          { key: "J", title: "提前做好计划", desc: "知道要干什么更安心。" },
          { key: "P", title: "跟着状态调整", desc: "看状态挑选题目。" }
        ]
      },
      {
        id: 17,
        dimension: "IE",
        prompt: "遇到一道特别有意思的题，孩子更容易怎么做？",
        note: "看深入探索的方式。",
        art: "spark",
        options: [
          { key: "I", title: "自己研究", desc: "先回味一会儿再说。" },
          { key: "E", title: "马上找人", desc: "拉人一起分享。" }
        ]
      },
      {
        id: 18,
        dimension: "SN",
        prompt: "看应用题时，孩子更先抓哪一头？",
        note: "解题起步差异很大。",
        art: "compass",
        options: [
          { key: "S", title: "把数量关系", desc: "先把信息理清楚。" },
          { key: "N", title: "猜整体模型", desc: "先猜这道题属于哪类。" }
        ]
      },
      {
        id: 19,
        dimension: "TF",
        prompt: "一道题讲了两遍还没通，孩子更关心什么？",
        note: "卡住时的关注点。",
        art: "bridge",
        options: [
          { key: "T", title: "逻辑缺了一块", desc: "需要把关键台阶补上。" },
          { key: "F", title: "讲法太没味道", desc: "换个方式也许就听进去了。" }
        ]
      },
      {
        id: 20,
        dimension: "JP",
        prompt: "练节奏时碰到卡点，孩子更容易怎么应对？",
        note: "最后一题看计划变化时的反应。",
        art: "maze",
        options: [
          { key: "J", title: "把计划调一下", desc: "先调完计划再继续。" },
          { key: "P", title: "换个方向先走", desc: "先绕过去再回头补。" }
        ]
      }
    ];

    const dimensionQuestionTotals = questions.reduce((totals, question) => {
      question.options.forEach((option) => {
        totals[option.key] = (totals[option.key] || 0) + 1;
      });
      return totals;
    }, {});

    const typeProfiles = {
      ISTJ: {
        title: "学习小规划师",
        sticker: "稳健推进型",
        summary: "做事认真有条理，先把信息理清楚，再一步一步推进。",
        spark: "孩子在学习里属于越练越熟的积累型。目标明确时输出最畅，节奏稳定时心里最踏实。学的内容不怕难，只怕乱——只要把结构顺了，稳定感就很强。",
        mathAdvice: [
          "多安排基础练习 + 同类巩固，让孩子按套路走更顺手。",
          "鼓励用草稿纸把步骤写清楚，头脑越清晰越容易发挥。",
          "考前冲刺时给一句先稳住再加速，比直接催速度更有效。",
        ],
        habitAdvice: [
          "固定每周练习时间段，形成\"做一遍→回看一遍→改对一遍\"的闭环。",
          "准备一份迷你任务清单，做完就勾一下，成就感会很强。",
          "训练把思路说出来，哪怕只是说给自己听，也能加深理解。"
        ],
        parentTips: [
          "陪读时用到点就收的节奏感，孩子很适合稳定节奏。",
          "夸奖尽量具体，比如这一步推得真清楚，比空泛夸奖管用。",
          "遇到卡住时给一个明确切口，先说一句我们先想一就有帮助。"
        ]
      },
      ISFJ: {
        title: "温暖小护理员",
        sticker: "细致守护型",
        summary: "做事仔细、善于观察，也很在意学习环境的安全感和被认可。",
        spark: "孩子通常能把细节看得很牢。老师的要求、家长的安排都记得挺牢。只要周围稳定、支持到位，他在学习上会非常踏实、可靠。看上去不抢眼，但实际默默发光。",
        mathAdvice: [
          "练习时先给一个熟悉的例子，再过渡到同类题型，效率更高。",
          "温和且具体的反馈提示，能帮孩子更快进入状态。",
          "用基础题 + 挑战题组合，避免难度跨度太大挫伤信心。",
        ],
        habitAdvice: [
          "建立固定的练习仪式，比如准备好草稿纸、写上日期+错题笔记。",
          "错题本除了写答案，也记录这次错在哪，自己当时的想法。",
          "适当练习把思路说出来，哪怕只是自言自语，有助于理清逻辑。",
        ],
        parentTips: [
          "先接纳感受再谈改进，孩子更容易放下防备投入学习。",
          "别说你怎么又错了，换成我们一起看看这一步效果更好。",
          "多给正向反馈和鼓励，这种力量会直接转化成学习动力。"
        ]
      },
      INFJ: {
        title: "灵感小观察员",
        sticker: "深层理解型",
        summary: "脑子里常有自己的内在路线，善于联想，可能会抓住深层规律。",
        spark: "孩子在学习里很容易进入沉浸式状态。安静思考比忙乱节奏更有效。对题目潜藏的脉络和关联比较敏锐，适合把知识点串成完整的故事。一旦理解和共鸣，后劲会很足。",
        mathAdvice: [
          "多用这题为什么值得想一想激发兴趣，而不仅仅问答案。",
          "鼓励把不同题型之间的关联画成思维小地图。",
          "适合精做深挖题目，给足反思和复述空间。",
        ],
        habitAdvice: [
          "每天留一点总结时间，把今天学到的一条和容易出错的一个点写下来。",
          "训练用简短语言把思路说清楚，便于日后回溯。",
          "保持固定节奏，别把学习排太满，留点发散思考的空间。",
        ],
        parentTips: [
          "别把沉默自动理解为没想法，很多时候孩子在深度消化。",
          "提问时不要连珠炮轰炸，留一段等待时间。",
          "改错时多谈思路的亮点，少谈再写三遍。"
        ]
      },
      INTJ: {
        title: "策略小架构师",
        sticker: "独立思考型",
        summary: "喜欢先看清框架和结构，解决问题的路径经常在脑海里提前规划好了。",
        spark: "孩子很适合把复杂的问题拆成模型比较和策略选择。面对挑战性题目，他并不是硬啃，而是先找最优路线。如果能给足思考空间，可能会给出很精辟的独立判断。",
        mathAdvice: [
          "多提供开放型题目，先建思维模型，再填具体数据。",
          "适合做同类对比和解法择优，策略感会更强。",
          "遇到卡点时给一句你的路线图是什么，帮孩子找到定位。",
        ],
        habitAdvice: [
          "鼓励养成先审题再审自己的习惯，不要在前期跳步骤。",
          "安排每周一次深度挑战题时间，满足探索欲。",
          "训练写出清晰的解题说明，而不仅仅是算对。",
        ],
        parentTips: [
          "尊重孩子的独立思考，别急着说这样不对。",
          "如果孩子对低效重复没耐心，可以减少机械练习，增加思维型题目。",
          "提问时多问你的思路是什么，少问会不会做。"
        ]
      },
      ISTP: {
        title: "动手小工程师",
        sticker: "实战探索型",
        summary: "偏好简洁、直接、有逻辑感，喜欢自己琢磨、自己找关键突破口。",
        spark: "孩子在解题时常有很强的现场应变能力，对逻辑结构和关键突破口很敏锐。讨厌冗长铺垫，更适合边看边拆、边试边改，属于那种用行动去理解的类型。",
        mathAdvice: [
          "多安排需要观察、动手、验证的题型，比如图形题、动手找规律的题目。",
          "反馈别太啰嗦，直接点到关键上反而更对胃口。",
          "允许孩子自己画图、列关键数，自主感对专注状态很重要。",
        ],
        habitAdvice: [
          "准备一页我今天找到的关键点小记录，强化归纳习惯。",
          "如果卡住了太久，提醒一下给 1 个提示就行，别全讲。",
          "练习完快速复盘，比长时间反复总结更有效。",
        ],
        parentTips: [
          "别一直盯着讲，留给孩子自己研究的空间。",
          "鼓励探索和试错，哪怕做法不标准，也肯定他发现的能力。",
          "多用你再找找哪个是关键数这样的引导语。",
        ]
      },
      ISFP: {
        title: "安静小艺术家",
        sticker: "感知体验型",
        summary: "学习节奏偏温和，对视觉美感、个人感受和人际氛围特别敏锐。",
        spark: "孩子不一定特别热爱刷题本身，却能在轻松友好的氛围里展现出自己的观察力和独到理解。在很多学习场景中，越是温和支持的、友好互动的学习方式，越容易激发他的潜能。",
        mathAdvice: [
          "把抽象题目内容转化成图示或者生活情境，理解速度会更快。",
          "适合短时段专注练习，一次内容不宜太多。",
          "先从孩子感兴趣的方向切入，再逐步拓展到关联内容。",
        ],
        habitAdvice: [
          "准备顺手好用的文具和舒服环境，学习时的心情直接影响状态。",
          "每天结束时写一句我今天学到了什么的小习惯。",
          "适当练习短时复盘，帮助节奏稳定不跑偏。",
        ],
        parentTips: [
          "别太急推，强行施压反而让学习节奏缩回去。",
          "先给情感上的建议，再补具体建议，孩子更容易听进去。",
          "可以在题材选择上给参考，比如哪些图形题更有画面感这类。"
        ]
      },
      INFP: {
        title: "梦想小领航员",
        sticker: "理想驱动型",
        summary: "内心想法多、转换快，一旦对题目产生兴趣，就能走出有个人风格的路。",
        spark: "孩子在学习里很容易被有趣的问题、优美的规律和原来如此的瞬间打动。不适合高压式训练，更适合通过兴趣、新奇感和成就感去激发持久动力。",
        mathAdvice: [
          "先从有趣的故事型、创意型题目入手，更容易点燃学习热情。",
          "鼓励孩子说出自己的理解思路，再一起筛选最优路径。",
          "把抽象内容编成有画面感的小故事，理解和记忆效果都更好。",
        ],
        habitAdvice: [
          "留意情绪的起伏对学习效率的影响，保持好的心情很重要。",
          "复盘错题时，不只写正确答案，也可以写我当时怎么想的。",
          "每天设一个可达小目标，积少成多，学习动力自然延续。",
        ],
        parentTips: [
          "多给肯定和鼓励，把天马行空的想法当成灵感种子。",
          "尊重孩子的节奏，偶尔慢一点也没关系，重要的是保持信心。",
          "允许孩子在学习中探索，比一直盯着监督更有效。"
        ]
      },
      INTP: {
        title: "逻辑小侦探",
        sticker: "逻辑探索型",
        summary: "喜欢研究为什么，解决问题时常去构建内在模型和规律，而不仅是动手去做。",
        spark: "孩子很适合在学习中发现需要深度分析、比较和推演的环节。对看似普通的题，也喜欢挖掘背后的原理。只要给足够安静的时间，他们会在独立思考中找到乐趣。",
        mathAdvice: [
          "多给模型归纳型的题目，举一反三特别有成就感。",
          "顺着追问为什么的方向展开，理解深度会远超表面。",
          "别让思考停留在分析阶段，鼓励推演完整解答。",
        ],
        habitAdvice: [
          "训练把想法写清晰、写完整，别让好思路只停留在脑子里。",
          "安排固定的回顾节点，比如每讲透 1 个题型就写简明笔记。",
          "加强时间意识，别因为深度沉迷而挤压了整体节奏。"
        ],
        parentTips: [
          "别用太简单来定义孩子的兴趣，有时他们享受的是建立模型的过程。",
          "如果孩子排斥重复练习，可以减少同质题，增加思维型题目。",
          "交流时多讨论你发现了什么规律，比直接说答案更有价值。",
        ]
      },
      ESTP: {
        title: "活力小闯将",
        sticker: "现场应变型",
        summary: "上手快、反应灵敏，靠现场感觉就能推进，节奏明快，临场应变常常出色。",
        spark: "孩子在学习里属于很能比划的那一类。题目不太容易卡住他，反应速度快，能从混乱中抓到线索。充分利用即时反馈和挑战感，学习效果会很出色。",
        mathAdvice: [
          "适合限时挑战、小闯关和计时竞赛形式的练习。",
          "先做再总结的模式，快速过一遍再回头挑关键技巧。",
          "注意速度有了但准确度也要保证，用即时反馈强化精度。",
        ],
        habitAdvice: [
          "规范解题步骤，避免因为太快而漏掉关键位置。",
          "每做一道难题，就即时记录我是靠什么突破的。",
          "偶尔放慢节奏做深度思考题，拓展思维宽度。"
        ],
        parentTips: [
          "先接住孩子的行动力，再把节奏收进结构里，一步一个坑地练。",
          "面对易错题型，重点不是多做题，而是把复盘变成固定习惯。",
          "用挑战激发动力，少说再写一次，多说看你能不能更快。",
        ]
      },
      ESFP: {
        title: "快乐小太阳",
        sticker: "互动感染型",
        summary: "气氛一起来学习动力就跟着来，看重人与人之间的互动和成就感分享。",
        spark: "孩子在学习中受回应和趣味驱动。游戏中学习、互动式学习最能激发热情。对他而言，学习不只是解题，更是一次次被看见的闪光体验。心态对了，投入度自然很高。",
        mathAdvice: [
          "把练习做成闯关式挑战，每过一关就获得即时反馈。",
          "先从成功率较高的题开始，再过渡到挑战题，建立信心。",
          "多用口头讲解、画图和互动问答，学习效率更高。",
        ],
        habitAdvice: [
          "设置可视的奖励机制，比如集章纸、点赞卡、鼓励语。",
          "训练中途停下来回顾，别一路冲刺到底。",
          "固定练习时间，保持节奏稳定同时留有弹性。"
        ],
        parentTips: [
          "氛围比内容更能调动孩子，随时制造被发现被肯定的瞬间。",
          "夸奖越即时越有效，越具体越好，别只说真棒。",
          "情绪波动时先笑一笑、换换角度，再回到题目本身。",
        ]
      },
      ENFP: {
        title: "灵感小火花",
        sticker: "创意迸发型",
        summary: "对什么都没有好奇心、想法跳跃、点子多，碰到有意思的题能一边说一边冒出很多创意。",
        spark: "孩子在学习里属于一台机器能出好几种解法的选手，而且很擅长突然冒出全新角度。只要不被单一训练磨掉兴趣，多试、多变、方式有趣就觉得非常有感觉。",
        mathAdvice: [
          "多用开放式提问，比如你还有别的想法吗，能激发潜能。",
          "适合互动式讨论，一起聊聊思路会收获更多。",
          "先放出想法，再帮孩子筛选，别一开始就限制思路方向。",
        ],
        habitAdvice: [
          "准备一个暂停区小纸条，灵感来了先记下，别走太远忘了主任务。",
          "练习前先定一个小目标，边做边看是否跑偏。",
          "训练及时回到题目核心，而不仅是我有很多想法。"
        ],
        parentTips: [
          "先倾听再说别想太多，很多好点子就在这些天马行空里。",
          "不要着急替孩子收拢思路，也别一味放纵或一味压制。",
          "营造轻松对话的氛围，孩子更容易保持投入。",
        ]
      },
      ENTP: {
        title: "脑洞小辩手",
        sticker: "创新开拓型",
        summary: "喜欢挑战和追问为什么，擅长从不同角度切入问题，对新的可能性兴趣满满。",
        spark: "孩子非常适合在学习中发现需要变通、比较和创新表达的环节。面对常规题不一定兴奋，反而对有机关、有反转、有空间的题目特别来劲。",
        mathAdvice: [
          "多提供开放型思维题，比如策略讨论、创意论证味道强的题目。",
          "鼓励孩子比较多几种解法，讨论哪个更妙。",
          "帮孩子把脑洞想法落地，打磨成可执行的解法。",
        ],
        habitAdvice: [
          "加强书写步骤的规范性，让好思路能落实在纸面上。",
          "用思路线的方式，帮孩子把探索过程整理成解题路径。",
          "每周做一次一题多解复盘，强化归纳意识。"
        ],
        parentTips: [
          "允许孩子提大胆的问题，但同时也约定动手试试。",
          "过滤题目素材时，尽量少给简单重复题，多给有思考空间的题。",
          "讨论时要逻辑闭环，不只是想法不错，更要写清楚。"
        ]
      },
      ESTJ: {
        title: "执行小队长",
        sticker: "执行导向型",
        summary: "目标感强、效率优先，清楚什么时候该推进，速度和执行力都很突出。",
        spark: "孩子在学习里很容易表现出很强的推进感。只要目标清晰，指令清楚直接，就能进入冲刺目标的状态。善于把握节奏和阶段冲刺，比很多孩子效率都高。",
        mathAdvice: [
          "把训练分解成明确模块，比如今天攻克 2 个题型。",
          "适合阶段性目标管理，完成感会反过来推高动力。",
          "在追求效率的同时，也留一些深度思考题，别只停留在对错。",
        ],
        habitAdvice: [
          "做一个简单计划表和复盘表，执行力和计划互促。",
          "练习中规范步骤、固定路径，避免因为追求速度而漏细节。",
          "每周安排一次拓展题训练，让思维宽度跟得上节奏。"
        ],
        parentTips: [
          "不只盯速度，也要跟踪方法和准确度。",
          "如果孩子对模糊指令特别烦，说明需要明确方向，可以把要求说清楚。",
          "偶尔提醒这步需要停下来想一想，快慢结合效果更好。"
        ]
      },
      ESFJ: {
        title: "温暖小组织者",
        sticker: "协作引领型",
        summary: "喜欢团队氛围，需要被肯定，只要关系顺了、节奏对了，学习状态自然就好。",
        spark: "孩子很适合在有人情味、有节奏、有反馈的环境中学习。融入团队氛围容易，愿意配合，也善于把要求落实到行动中。只要不施加过高压，他们的表现会很踏实稳定。",
        mathAdvice: [
          "开始时先说明目标和步骤，再给具体任务，孩子更容易进入状态。",
          "保持固定练习节奏，稳定感会直接提升完成度。",
          "做完一批后一起回顾，帮我把这道题再过一遍有助于形成循环。",
        ],
        habitAdvice: [
          "做一个简单打卡表，让努力被看见。",
          "练习完先独立反思 3 分钟再看建议，有助于增强独立性。",
          "把错题按原因归类，不只知道了错了，而是知道了怎么错的。"
        ],
        parentTips: [
          "孩子很在意关系氛围，硬压反而适得其反。",
          "先肯定配合度，再推进要求，孩子更容易持续努力。",
          "鼓励孩子在课堂上多说自己的思路，别总默默跟着走。"
        ]
      },
      ENFJ: {
        title: "成长小导师",
        sticker: "感染组织型",
        summary: "有感染力，也愿意把理解转成表达，属于自己学会了还要拉大家一把的类型。",
        spark: "孩子在学习中通过表达和影响他人，会激发强烈的内驱力。越能表达、越能帮到别人，越容易进入心流状态。在学习中赋予目标、方向和参与感，他们最容易全身心投入。",
        mathAdvice: [
          "让孩子做小老师给家长讲题，本身就是很好的深度学习。",
          "适合目标明确、过程有互动和激励的训练形式。",
          "在鼓励表达的同时，也要注意把表达落实为完整解答，保留关键细节。",
        ],
        habitAdvice: [
          "每周固定一次我来给你讲的小演练。",
          "使用任务卡和奖励图标，让目标更具可视性。",
          "训练讲题前先自己想片段，再开始讲，有助于平衡节奏。"
        ],
        parentTips: [
          "别只把孩子的热情当成话多，其实是在做学习联结。",
          "多问你要怎么给别人讲清楚，这会激活思路的整理。",
          "情绪高涨时顺便带着复盘一下，效果会很好。",
        ]
      },
      ENTJ: {
        title: "目标小指挥官",
        sticker: "战略规划型",
        summary: "目标感强、驱动力足、推进力突出，喜欢理顺框架，也愿意挑战较高难度。",
        spark: "孩子在学习中有很强的冲劲和掌控力。当目标明确、有难度、有挑战空间时，最容易进入高效状态。只要注意避免因为太想赢而忽视细节，很多孩子会有惊人潜力。",
        mathAdvice: [
          "适合阶段性挑战，比如这周攻克某类难题。",
          "多训练解法比较和策略选择，发挥其布局思维。",
          "考前冲刺时融入节奏练习，让孩子学会把大目标拆成小步骤。",
        ],
        habitAdvice: [
          "保持计划节奏，但是别排得太满，适当留白给思考。",
          "复盘时关注为什么因为太快而粗糙，以此提升精度。",
          "鼓励把解题策略转化自己的方法论，便于迁移应用。"
        ],
        parentTips: [
          "允许孩子不服输，但引导把不服变成持续的优化。",
          "鼓励挑战高阶题目，用目标拆解法提高训练密度。",
          "赢的时候不只是追求速度，也追求严谨和稳定。",
        ]
      }
    };

    const state = {
      studentName: "",
      currentQuestionIndex: 0,
      answers: [],
      scores: { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
      result: null
    };

    const introScreen = document.getElementById("introScreen");
    const quizScreen = document.getElementById("quizScreen");
    const resultScreen = document.getElementById("resultScreen");
    const studentNameInput = document.getElementById("studentName");
    const startBtn = document.getElementById("startBtn");
    const heroArt = document.getElementById("heroArt");
    const progressTitle = document.getElementById("progressTitle");
    const progressCount = document.getElementById("progressCount");
    const progressFill = document.getElementById("progressFill");
    const progressCopy = document.getElementById("progressCopy");
    const dimensionTag = document.getElementById("dimensionTag");
    const questionTitle = document.getElementById("questionTitle");
    const questionSub = document.getElementById("questionSub");
    const questionArt = document.getElementById("questionArt");
    const optionsWrap = document.getElementById("optionsWrap");
    const reportName = document.getElementById("reportName");
    const reportType = document.getElementById("reportType");
    const reportSummary = document.getElementById("reportSummary");
    const reportSpark = document.getElementById("reportSpark");
    const resultBadge = document.getElementById("resultBadge");
    const resultSticker = document.getElementById("resultSticker");
    const resultArt = document.getElementById("resultArt");
    const dimensionWrap = document.getElementById("dimensionWrap");
    const studentAdvice = document.getElementById("studentAdvice");
    const parentAdvice = document.getElementById("parentAdvice");
    const downloadBtn = document.getElementById("downloadBtn");
    const restartBtn = document.getElementById("restartBtn");
    const statusText = document.getElementById("statusText");
    const previewModal = document.getElementById("previewModal");
    const previewImage = document.getElementById("previewImage");
    const downloadLink = document.getElementById("downloadLink");
    const closePreviewBtn = document.getElementById("closePreviewBtn");
    const toast = document.getElementById("toast");

    const introSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220">
        <rect width="360" height="220" rx="28" fill="#fff9e6"/>
        <circle cx="66" cy="54" r="22" fill="#ffd76a"/>
        <circle cx="307" cy="44" r="18" fill="#8bd8c5"/>
        <rect x="38" y="72" width="284" height="102" rx="18" fill="#ffffff" stroke="#d8e6ff" stroke-width="4"/>
        <rect x="54" y="90" width="98" height="58" rx="14" fill="#8ebdff"/>
        <rect x="167" y="92" width="134" height="16" rx="8" fill="#ffe7a5"/>
        <rect x="167" y="118" width="112" height="12" rx="6" fill="#e4edff"/>
        <rect x="167" y="138" width="88" height="12" rx="6" fill="#e4edff"/>
        <path d="M90 147h26l8 20H82z" fill="#ef6b42"/>
        <circle cx="83" cy="122" r="15" fill="#ffe1c7"/>
        <path d="M71 123c0-9 6-18 18-18 11 0 18 9 18 18v6H71z" fill="#5f70a4"/>
        <rect x="222" y="149" width="68" height="18" rx="9" fill="#8f7cf0"/>
        <text x="38" y="200" fill="#31405f" font-size="18" font-family="Trebuchet MS, Microsoft YaHei, sans-serif" font-weight="700">奥数学习风格卡 · 家长版</text>
      </svg>
    `;

    function svgToDataUri(svg) {
      return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
    }

    function setScreen(screenName) {
      introScreen.classList.toggle("active", screenName === "intro");
      quizScreen.classList.toggle("active", screenName === "quiz");
      resultScreen.classList.toggle("active", screenName === "result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function resetScores() {
      state.scores = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    }

    function startTest() {
      const rawName = studentNameInput.value.trim();
      if (!rawName) {
        showToast("请填写学生名字再开始哦。");
        studentNameInput.focus();
        return;
      }
      state.studentName = rawName;
      state.currentQuestionIndex = 0;
      state.answers = [];
      state.result = null;
      resetScores();
      renderQuestion();
      setScreen("quiz");
    }

    function recordAnswer(letter) {
      const currentQuestion = questions[state.currentQuestionIndex];
      state.answers.push({ id: currentQuestion.id, dimension: currentQuestion.dimension, letter });
      state.scores[letter] += 1;

      if (state.currentQuestionIndex === questions.length - 1) {
        calculateResult();
        renderResult();
        setScreen("result");
        return;
      }

      state.currentQuestionIndex += 1;
      renderQuestion();
    }

    function calculatePair(left, right) {
      return state.scores[left] > state.scores[right] ? left : right;
    }

    function calculateResult() {
      const code = [
        calculatePair("I", "E"),
        calculatePair("S", "N"),
        calculatePair("T", "F"),
        calculatePair("J", "P")
      ].join("");

      state.result = {
        code,
        profile: typeProfiles[code],
        scores: { ...state.scores }
      };
    }

    function softenProfileText(text) {
      return String(text)
        .replace(/奥数学习/g, "学习训练")
        .replace(/奥数题/g, "日常练习题")
        .replace(/奥数课/g, "学习模块")
        .replace(/奥数训练/g, "学习训练")
        .replace(/课堂中的/g, "学习中的")
        .replace(/解题中/g, "学习中")
        .replace(/刷题中/g, "思维中")
        .replace(/数学小组/g, "学习小组")
        .replace(/对小孩来说不只是题目/g, "对孩子来说学习不只是题目")
        .replace(/奥数应用题/g, "应用题")
        .replace(/数学作业/g, "练习任务");
    }

    function adaptProfile(profile) {
      return {
        ...profile,
        sticker: "家长陪学建议版",
        summary: softenProfileText(profile.summary),
        spark: softenProfileText(profile.spark),
        mathAdvice: profile.mathAdvice.map(softenProfileText),
        habitAdvice: profile.habitAdvice.map(softenProfileText),
        parentTips: profile.parentTips.map(softenProfileText)
      };
    }

    function createCondensedAdvice(profile) {
      return {
        student: [
          profile.mathAdvice[0],
          profile.mathAdvice[1] || profile.habitAdvice[0],
          profile.habitAdvice[0]
        ].filter(Boolean).slice(0, 3),
        parent: [
          profile.parentTips[0],
          profile.parentTips[1] || profile.habitAdvice[1],
          profile.parentTips[2] || profile.habitAdvice[1]
        ].filter(Boolean).slice(0, 3)
      };
    }

    function createShareProfile(profile) {
      const adapted = adaptProfile(profile);
      const firstSentence = (text) => {
        const match = String(text).match(/^[^。！？!?]+[。！？!?]?/);
        return match ? match[0].trim() : String(text).trim();
      };
      return {
        ...adapted,
        shareSummary: firstSentence(adapted.summary),
        shareSpark: firstSentence(adapted.spark),
        posterCards: [
          { title: "学生维度", text: firstSentence((createCondensedAdvice(adapted).student.join(" ")) || "") },
          { title: "家长维度", text: firstSentence((createCondensedAdvice(adapted).parent.join(" ")) || "") }
        ]
      };
    }

    function getResultArtPath(code) {
      return "形象图/" + code + ".png";
    }

    function getResultArtFallback(code, title) {
      return svgToDataUri(buildResultSvg(code, title));
    }

    function applyResultArt(target, code, title) {
      const fallbackSrc = getResultArtFallback(code, title);
      let isFallback = false;
      target.onerror = function() {
        if (!isFallback) {
          isFallback = true;
          target.src = fallbackSrc;
          return;
        }
        target.onerror = null;
      };
      target.src = getResultArtPath(code);
    }

    function loadResultArtImage(code, title) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        const fallbackSrc = getResultArtFallback(code, title);
        let triedFallback = false;
        image.onload = () => resolve(image);
        image.onerror = () => {
          if (!triedFallback) {
            triedFallback = true;
            image.src = fallbackSrc;
            return;
          }
          reject(new Error("result-art-load-failed"));
        };
        image.src = getResultArtPath(code);
      });
    }

    function renderQuestion() {
      const question = questions[state.currentQuestionIndex];
      const progress = ((state.currentQuestionIndex) / questions.length) * 100;
      const meta = dimensionMeta[question.dimension];
      progressTitle.textContent = "闯关进行中";
      progressCount.textContent = (state.currentQuestionIndex + 1) + " / " + questions.length;
      progressFill.style.width = progress + "%";
      progressCopy.textContent = state.currentQuestionIndex < 4
        ? "前 4 题先看孩子日常个性，都是平时就能观察到的一面。"
        : state.currentQuestionIndex < 12
          ? "中间 8 题主要看通用学习习惯，更像日常陪读名场面。"
          : "最后 8 题靠拢思维训练场景，更聚焦而精准地观察孩子。";
      dimensionTag.textContent = "当前观察：" + meta.title;
      questionTitle.textContent = question.prompt;
      questionSub.textContent = question.note;
      questionArt.src = svgToDataUri(buildQuestionSvg(question.art, meta.title, question.id));

      optionsWrap.innerHTML = "";
      question.options.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option-btn";
        button.innerHTML = "<strong>" + escapeHtml(option.title) + "</strong><span>" + escapeHtml(option.desc) + "</span>";
        button.addEventListener("click", () => recordAnswer(option.key));
        optionsWrap.appendChild(button);
      });
    }

    function renderList(target, items) {
      target.innerHTML = items.map((item) => "<li>" + escapeHtml(item.trim()) + "</li>").join("");
    }

    function renderDimensions(scores) {
      const rows = [
        { pair: "IE", left: "I", right: "E" },
        { pair: "SN", left: "S", right: "N" },
        { pair: "TF", left: "T", right: "F" },
        { pair: "JP", left: "J", right: "P" }
      ];

      dimensionWrap.innerHTML = rows.map((row) => {
        const meta = dimensionMeta[row.pair];
        const leftScore = scores[row.left];
        const rightScore = scores[row.right];
        const total = dimensionQuestionTotals[row.left] || (leftScore + rightScore) || 1;
        const leftPercent = Math.max(8, (leftScore / total) * 100);
        const rightPercent = Math.max(8, (rightScore / total) * 100);
        return `
          <div class="dimension-row">
            <header>
              <strong>${escapeHtml(meta.title)}</strong>
              <span>${row.left} ${leftScore} : ${rightScore} ${row.right}</span>
            </header>
            <div class="dimension-meter">
              <div class="dimension-side left" style="width:${leftPercent}%"></div>
              <div class="dimension-divider"></div>
              <div class="dimension-side right" style="width:${rightPercent}%"></div>
            </div>
            <footer>
              <span>${escapeHtml(meta.left)}</span>
              <span>${escapeHtml(meta.right)}</span>
            </footer>
          </div>
        `;
      }).join("");
    }

    function renderResult() {
      const result = state.result;
      const profile = adaptProfile(result.profile);
      const condensed = createCondensedAdvice(profile);
      reportName.textContent = state.studentName + " 同学的学习风格报告";
      reportType.textContent = result.code + " · " + profile.title;
      reportSummary.textContent = profile.summary;
      reportSpark.textContent = profile.spark;
      resultBadge.textContent = "学习风格报告已生成：" + state.studentName;
      resultSticker.textContent = profile.sticker;
      applyResultArt(resultArt, result.code, profile.title);
      renderDimensions(result.scores);
      renderList(studentAdvice, condensed.student);
      renderList(parentAdvice, condensed.parent);
      statusText.textContent = "孩子的报告已生成，可直接保存为图片。";
    }

    function restartTest() {
      resetScores();
      state.answers = [];
      state.currentQuestionIndex = 0;
      state.result = null;
      setScreen("intro");
      showToast("已回到开头，随时可以再测一次。");
    }

    function buildQuestionSvg(scene, label, number) {
      const sceneMap = {
        "desk-think": {
          shape: '<rect x="46" y="132" width="120" height="16" rx="8" fill="#c9975d"/><rect x="76" y="84" width="62" height="52" rx="12" fill="#8ebdff"/><circle cx="94" cy="65" r="18" fill="#ffe1c7"/><path d="M77 66c0-11 7-18 18-18 13 0 20 9 20 18v6H77z" fill="#55689b"/><rect x="177" y="90" width="126" height="70" rx="16" fill="#ffffff" stroke="#d8e6ff" stroke-width="4"/><path d="M201 112h72" stroke="#8f7cf0" stroke-width="6" stroke-linecap="round"/><path d="M201 132h54" stroke="#8bd8c5" stroke-width="6" stroke-linecap="round"/><circle cx="286" cy="114" r="14" fill="#ffd76a"/>'
        },
        "magnifier": {
          shape: '<rect x="54" y="84" width="108" height="88" rx="18" fill="#ffffff" stroke="#dfe9ff" stroke-width="4"/><circle cx="235" cy="109" r="34" fill="#ffffff" stroke="#8ebdff" stroke-width="8"/><path d="M258 132l38 38" stroke="#5f70a4" stroke-width="10" stroke-linecap="round"/><path d="M80 114h56" stroke="#ffd76a" stroke-width="8" stroke-linecap="round"/><path d="M80 136h36" stroke="#8bd8c5" stroke-width="8" stroke-linecap="round"/><circle cx="235" cy="109" r="13" fill="#ffd76a"/><path d="M229 98l5 9 10 2-7 7 2 10-10-6-9 6 2-10-8-7 10-2z" fill="#ef6b42"/>'
        },
        "check-rule": {
          shape: '<rect x="52" y="74" width="112" height="120" rx="16" fill="#ffffff" stroke="#dbe6ff" stroke-width="4"/><rect x="72" y="98" width="72" height="12" rx="6" fill="#8bd8c5"/><rect x="72" y="122" width="56" height="12" rx="6" fill="#8ebdff"/><rect x="72" y="146" width="44" height="12" rx="6" fill="#ffd76a"/><circle cx="258" cy="98" r="22" fill="#ffdfcc"/><path d="M236 101c0-13 9-21 22-21 14 0 22 8 22 21v8h-44z" fill="#8f7cf0"/><path d="M230 164l17 17 36-42" stroke="#ef6b42" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
        },
        "calendar": {
          shape: '<rect x="46" y="68" width="126" height="118" rx="20" fill="#ffffff" stroke="#dbe6ff" stroke-width="4"/><rect x="46" y="68" width="126" height="34" rx="20" fill="#ff9b77"/><rect x="66" y="114" width="24" height="24" rx="8" fill="#8bd8c5"/><rect x="98" y="114" width="24" height="24" rx="8" fill="#ffe7a5"/><rect x="130" y="114" width="24" height="24" rx="8" fill="#8ebdff"/><path d="M210 152h92" stroke="#8f7cf0" stroke-width="8" stroke-linecap="round"/><path d="M210 128h72" stroke="#8bd8c5" stroke-width="8" stroke-linecap="round"/><circle cx="257" cy="88" r="24" fill="#ffd76a"/><path d="M257 72v18l12 8" stroke="#31405f" stroke-width="6" stroke-linecap="round"/>'
        },
        "classroom": {
          shape: '<rect x="38" y="62" width="284" height="102" rx="18" fill="#ffffff" stroke="#dbe6ff" stroke-width="4"/><rect x="58" y="82" width="116" height="62" rx="14" fill="#2f4c7d"/><path d="M198 108h82" stroke="#8ebdff" stroke-width="10" stroke-linecap="round"/><path d="M198 134h60" stroke="#8bd8c5" stroke-width="10" stroke-linecap="round"/><circle cx="92" cy="176" r="18" fill="#ffe1c7"/><circle cx="154" cy="176" r="18" fill="#ffe1c7"/><rect x="73" y="190" width="40" height="14" rx="7" fill="#ff9b77"/><rect x="135" y="190" width="40" height="14" rx="7" fill="#8f7cf0"/><path d="M167 73c23 0 42 18 42 40" stroke="#ffd76a" stroke-width="8" stroke-linecap="round"/>'
        },
        "stairs": {
          shape: '<path d="M54 176h54v-28h46v-28h46v-28h46v-28h52" fill="none" stroke="#8ebdff" stroke-width="18" stroke-linejoin="round"/><circle cx="113" cy="94" r="20" fill="#ffe1c7"/><path d="M93 98c0-12 8-20 20-20 12 0 20 8 20 20v8H93z" fill="#5f70a4"/><rect x="225" y="68" width="82" height="42" rx="16" fill="#ffd76a"/><text x="241" y="95" fill="#31405f" font-size="24" font-family="Trebuchet MS, Microsoft YaHei, sans-serif" font-weight="700">思路</text>'
        },
        "debate": {
          shape: '<rect x="50" y="72" width="108" height="70" rx="22" fill="#8ebdff"/><path d="M84 142l-8 24 28-18" fill="#8ebdff"/><rect x="202" y="84" width="108" height="70" rx="22" fill="#8bd8c5"/><path d="M236 154l-8 24 28-18" fill="#8bd8c5"/><circle cx="102" cy="174" r="18" fill="#ffe1c7"/><circle cx="258" cy="174" r="18" fill="#ffe1c7"/><rect x="82" y="190" width="40" height="14" rx="7" fill="#ff9b77"/><rect x="238" y="190" width="40" height="14" rx="7" fill="#8f7cf0"/>'
        },
        "maze": {
          shape: '<rect x="56" y="66" width="126" height="126" rx="18" fill="#ffffff" stroke="#dbe6ff" stroke-width="4"/><path d="M84 96h68v28h-36v26h58" fill="none" stroke="#8f7cf0" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="90" cy="96" r="10" fill="#8bd8c5"/><circle cx="174" cy="150" r="10" fill="#ef6b42"/><path d="M224 150l22-22 18 18 34-50" fill="none" stroke="#ffd76a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
        },
        "home-review": {
          shape: '<path d="M58 116l50-40 50 40v62H58z" fill="#8ebdff"/><rect x="86" y="138" width="18" height="40" rx="9" fill="#ffffff"/><rect x="190" y="84" width="116" height="88" rx="18" fill="#ffffff" stroke="#dbe6ff" stroke-width="4"/><path d="M214 114h68" stroke="#8bd8c5" stroke-width="8" stroke-linecap="round"/><path d="M214 138h50" stroke="#ffd76a" stroke-width="8" stroke-linecap="round"/><circle cx="270" cy="74" r="18" fill="#ffd76a"/>'
        },
        "blocks": {
          shape: '<rect x="64" y="122" width="58" height="58" rx="12" fill="#8bd8c5"/><rect x="120" y="92" width="58" height="88" rx="12" fill="#ffd76a"/><rect x="178" y="108" width="58" height="72" rx="12" fill="#8ebdff"/><rect x="236" y="76" width="58" height="104" rx="12" fill="#8f7cf0"/><circle cx="112" cy="80" r="22" fill="#ffe1c7"/><path d="M90 83c0-13 9-21 22-21 13 0 22 8 22 21v8H90z" fill="#ef6b42"/>'
        },
        "medal": {
          shape: '<circle cx="112" cy="106" r="42" fill="#ffd76a"/><circle cx="112" cy="106" r="22" fill="#fff5c3"/><path d="M94 148l-12 40 30-12 30 12-12-40" fill="#ef6b42"/><rect x="188" y="88" width="116" height="20" rx="10" fill="#8ebdff"/><rect x="188" y="120" width="88" height="20" rx="10" fill="#8bd8c5"/><rect x="188" y="152" width="66" height="20" rx="10" fill="#8f7cf0"/>'
        },
        "rocket": {
          shape: '<path d="M126 168c52-18 80-58 86-112-54 6-94 34-112 86z" fill="#8ebdff"/><circle cx="180" cy="112" r="18" fill="#ffffff"/><path d="M106 186l22-42 20 20z" fill="#ff9b77"/><path d="M206 70l38-20-20 38z" fill="#8bd8c5"/><path d="M250 156h46" stroke="#ffd76a" stroke-width="10" stroke-linecap="round"/><path d="M238 184h62" stroke="#8f7cf0" stroke-width="10" stroke-linecap="round"/>'
        },
        "teamwork": {
          shape: '<circle cx="96" cy="102" r="24" fill="#ffe1c7"/><circle cx="180" cy="82" r="24" fill="#ffe1c7"/><circle cx="264" cy="102" r="24" fill="#ffe1c7"/><rect x="70" y="128" width="52" height="50" rx="18" fill="#8ebdff"/><rect x="154" y="108" width="52" height="70" rx="18" fill="#8bd8c5"/><rect x="238" y="128" width="52" height="50" rx="18" fill="#ff9b77"/><path d="M120 154h120" stroke="#8f7cf0" stroke-width="10" stroke-linecap="round"/>'
        },
        "compass": {
          shape: '<circle cx="112" cy="114" r="48" fill="#ffffff" stroke="#dbe6ff" stroke-width="6"/><path d="M112 74v80M72 114h80" stroke="#8bd8c5" stroke-width="8" stroke-linecap="round"/><path d="M112 88l18 44-18-8-18 8z" fill="#ef6b42"/><path d="M204 96h94" stroke="#8ebdff" stroke-width="10" stroke-linecap="round"/><path d="M204 128h68" stroke="#ffd76a" stroke-width="10" stroke-linecap="round"/><path d="M204 160h52" stroke="#8f7cf0" stroke-width="10" stroke-linecap="round"/>'
        },
        "bridge": {
          shape: '<path d="M54 166c30-62 78-94 126-94s96 32 126 94" fill="none" stroke="#8ebdff" stroke-width="16" stroke-linecap="round"/><path d="M92 166v-46M132 166v-66M172 166v-82M212 166v-82M252 166v-66M292 166v-46" stroke="#ffd76a" stroke-width="8" stroke-linecap="round"/><circle cx="180" cy="56" r="22" fill="#8bd8c5"/>'
        },
        "target": {
          shape: '<circle cx="110" cy="114" r="54" fill="#ffffff" stroke="#dbe6ff" stroke-width="6"/><circle cx="110" cy="114" r="36" fill="#ffe7a5"/><circle cx="110" cy="114" r="18" fill="#ff9b77"/><path d="M188 96h112" stroke="#8ebdff" stroke-width="10" stroke-linecap="round"/><path d="M228 76l28 20-28 20" fill="none" stroke="#8f7cf0" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>'
        },
        "spark": {
          shape: '<circle cx="118" cy="114" r="48" fill="#fff5c3"/><path d="M118 70l12 24 26 4-18 18 4 26-24-12-24 12 4-26-18-18 26-4z" fill="#ffd76a"/><path d="M214 94h82" stroke="#8ebdff" stroke-width="10" stroke-linecap="round"/><path d="M214 126h60" stroke="#8bd8c5" stroke-width="10" stroke-linecap="round"/><path d="M214 158h42" stroke="#8f7cf0" stroke-width="10" stroke-linecap="round"/>'
        },
        "story-book": {
          shape: '<path d="M70 78h86c12 0 20 8 20 20v84H90c-12 0-20-8-20-20z" fill="#8ebdff"/><path d="M176 78h86c12 0 20 8 20 20v64c0 12-8 20-20 20h-86z" fill="#ffffff" stroke="#dbe6ff" stroke-width="4"/><path d="M100 110h44" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/><path d="M198 112h56" stroke="#8bd8c5" stroke-width="8" stroke-linecap="round"/><path d="M198 136h36" stroke="#ffd76a" stroke-width="8" stroke-linecap="round"/>'
        },
        "helping": {
          shape: '<circle cx="108" cy="94" r="22" fill="#ffe1c7"/><circle cx="242" cy="94" r="22" fill="#ffe1c7"/><rect x="82" y="118" width="52" height="58" rx="18" fill="#8ebdff"/><rect x="216" y="118" width="52" height="58" rx="18" fill="#8bd8c5"/><path d="M136 138c24-18 44-18 68 0" fill="none" stroke="#ff9b77" stroke-width="10" stroke-linecap="round"/><path d="M176 148l-18 18 18 18 18-18z" fill="#ffd76a"/>'
        },
        "puzzle": {
          shape: '<path d="M86 82h54c0 12 10 22 22 22s22-10 22-22h54v54c-12 0-22 10-22 22s10 22 22 22v20H86z" fill="#8bd8c5"/><path d="M238 82h46c0 12 10 22 22 22v78c-12 0-22 10-22 22h-46z" fill="#8f7cf0"/><circle cx="122" cy="180" r="16" fill="#ffd76a"/><circle cx="274" cy="138" r="14" fill="#ffe1c7"/>'
        }
      };

      const selected = sceneMap[scene] || sceneMap["desk-think"];
      return `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220">
          <rect width="360" height="220" rx="28" fill="#fffdf3"/>
          <circle cx="52" cy="44" r="20" fill="#ffd76a"/>
          <circle cx="312" cy="40" r="16" fill="#8bd8c5"/>
          <rect x="26" y="22" width="86" height="28" rx="14" fill="#ffffff" opacity="0.92"/>
          <text x="42" y="41" fill="#31405f" font-size="16" font-family="Trebuchet MS, Microsoft YaHei, sans-serif" font-weight="700">第 ${number} 题</text>
          ${selected.shape}
          <rect x="26" y="184" width="308" height="20" rx="10" fill="#ffffff" opacity="0.95"/>
          <text x="36" y="199" fill="#5e6989" font-size="14" font-family="Trebuchet MS, Microsoft YaHei, sans-serif" font-weight="700">${label}</text>
        </svg>
      `;
    }

    function buildResultSvg(code, title) {
      const accentMap = {
        I: "#8f7cf0",
        E: "#ff8a65",
        S: "#8bd8c5",
        N: "#8ebdff",
        T: "#ffd76a",
        F: "#ffb286",
        J: "#6f86ff",
        P: "#7fd7c2"
      };
      const colors = code.split("").map((letter) => accentMap[letter]);
      const roleMap = {
        ISTJ: { badge: "清单小队长", prop: "clipboard", hair: "#44506f", shirt: "#8ebdff", pose: "book" },
        ISFJ: { badge: "细节守护员", prop: "heart-book", hair: "#5f70a4", shirt: "#8bd8c5", pose: "book" },
        INFJ: { badge: "灵感观察员", prop: "star-map", hair: "#6d62c8", shirt: "#c9b8ff", pose: "think" },
        INTJ: { badge: "策略小架构师", prop: "telescope", hair: "#3f4a66", shirt: "#7f8fff", pose: "think" },
        ISTP: { badge: "动手工程师", prop: "gear", hair: "#596179", shirt: "#8bd8c5", pose: "action" },
        ISFP: { badge: "安静小画家", prop: "palette", hair: "#7c5fa8", shirt: "#ffb286", pose: "action" },
        INFP: { badge: "梦想小领航员", prop: "rocket", hair: "#7053cc", shirt: "#ffd76a", pose: "jump" },
        INTP: { badge: "逻辑小侦探", prop: "magnifier", hair: "#485473", shirt: "#8ebdff", pose: "think" },
        ESTP: { badge: "活力闯关王", prop: "flag", hair: "#5d4d42", shirt: "#ff8a65", pose: "action" },
        ESFP: { badge: "快乐小太阳", prop: "megaphone", hair: "#7d573f", shirt: "#ffd76a", pose: "jump" },
        ENFP: { badge: "灵感小火花", prop: "spark", hair: "#6b59d3", shirt: "#ffb286", pose: "jump" },
        ENTP: { badge: "脑洞小辩手", prop: "bulb", hair: "#4d5c88", shirt: "#8ebdff", pose: "action" },
        ESTJ: { badge: "执行小队长", prop: "medal", hair: "#47526c", shirt: "#7fd7c2", pose: "book" },
        ESFJ: { badge: "温暖小组长", prop: "ribbon", hair: "#6f5d95", shirt: "#ffb286", pose: "book" },
        ENFJ: { badge: "成长小导师", prop: "pointer", hair: "#5e6ad8", shirt: "#8bd8c5", pose: "action" },
        ENTJ: { badge: "目标指挥家", prop: "crown", hair: "#39425c", shirt: "#6f86ff", pose: "action" }
      };
      const role = roleMap[code] || roleMap.INTJ;
      const propMap = {
        clipboard: '<rect x="247" y="108" width="46" height="58" rx="10" fill="#ffffff" stroke="#8ebdff" stroke-width="4"/><rect x="258" y="98" width="24" height="12" rx="6" fill="#ffd76a"/><path d="M258 126h24M258 142h20" stroke="#8f7cf0" stroke-width="5" stroke-linecap="round"/>',
        "heart-book": '<path d="M248 116h52v38c0 8-6 14-14 14h-38z" fill="#ffffff" stroke="#8bd8c5" stroke-width="4"/><path d="M270 124c5-10 20-4 14 8-5 8-14 12-14 12s-9-4-14-12c-6-12 9-18 14-8z" fill="#ff8a65"/>',
        "star-map": '<rect x="244" y="104" width="56" height="50" rx="12" fill="#31405f"/><path d="M258 118l7 7 10-10 9 8 8-8" stroke="#ffd76a" stroke-width="4" fill="none"/><circle cx="256" cy="140" r="4" fill="#8bd8c5"/><circle cx="286" cy="132" r="4" fill="#8ebdff"/>',
        telescope: '<path d="M246 150l20-38 34 8-18 38z" fill="#8ebdff"/><circle cx="304" cy="118" r="10" fill="#ffd76a"/><path d="M272 148l-10 26M288 150l8 24" stroke="#5f70a4" stroke-width="5" stroke-linecap="round"/>',
        gear: '<circle cx="274" cy="132" r="18" fill="#8ebdff"/><circle cx="274" cy="132" r="8" fill="#fff"/><path d="M274 106v10M274 148v10M248 132h10M290 132h10M256 114l8 8M284 142l8 8M292 114l-8 8M264 142l-8 8" stroke="#31405f" stroke-width="4" stroke-linecap="round"/>',
        palette: '<path d="M270 110c20 0 32 12 32 28 0 14-10 28-30 28-18 0-36-10-36-28 0-18 14-28 34-28z" fill="#ffe7a5"/><circle cx="256" cy="126" r="6" fill="#ff8a65"/><circle cx="274" cy="120" r="6" fill="#8ebdff"/><circle cx="288" cy="136" r="6" fill="#8bd8c5"/><circle cx="268" cy="146" r="6" fill="#8f7cf0"/>',
        rocket: '<path d="M272 106c22 8 26 28 14 48-20 2-38-8-46-28 10-12 20-18 32-20z" fill="#8ebdff"/><circle cx="278" cy="126" r="7" fill="#fff"/><path d="M250 154l16-6-2 18z" fill="#ff8a65"/><path d="M292 108l10-18-2 22z" fill="#ffd76a"/>',
        magnifier: '<circle cx="272" cy="128" r="18" fill="#fff" stroke="#8ebdff" stroke-width="6"/><path d="M286 142l16 16" stroke="#5f70a4" stroke-width="8" stroke-linecap="round"/><circle cx="272" cy="128" r="6" fill="#ffd76a"/>',
        flag: '<path d="M250 104v70" stroke="#5f70a4" stroke-width="6" stroke-linecap="round"/><path d="M254 106h34l-8 16 8 16h-34z" fill="#ff8a65"/>',
        megaphone: '<path d="M244 128l26-14 18 8v16l-18 8z" fill="#ffd76a"/><rect x="238" y="124" width="10" height="20" rx="5" fill="#5f70a4"/><path d="M290 118l10-8M292 128h12M290 138l10 8" stroke="#ff8a65" stroke-width="4" stroke-linecap="round"/>',
        spark: '<path d="M274 108l9 18 20 3-15 13 4 20-18-10-18 10 4-20-15-13 20-3z" fill="#ffd76a"/>',
        bulb: '<path d="M274 108c18 0 28 10 28 24 0 10-6 16-12 22h-32c-6-6-12-12-12-22 0-14 10-24 28-24z" fill="#ffe7a5"/><rect x="262" y="154" width="24" height="14" rx="6" fill="#8ebdff"/><path d="M268 122h12" stroke="#ff8a65" stroke-width="4" stroke-linecap="round"/>',
        medal: '<circle cx="276" cy="126" r="18" fill="#ffd76a"/><path d="M264 144l-8 18 14-6 12 8-2-20" fill="#8f7cf0"/><circle cx="276" cy="126" r="7" fill="#fff5c3"/>',
        ribbon: '<path d="M254 108h44v28c0 12-10 22-22 22s-22-10-22-22z" fill="#ffb286"/><path d="M264 158l-8 18 16-8 8 8-2-18" fill="#8f7cf0"/>',
        pointer: '<path d="M248 154l34-34 8 8-34 34z" fill="#8ebdff"/><circle cx="290" cy="120" r="10" fill="#ffd76a"/>',
        crown: '<path d="M246 134l10-28 18 16 16-16 12 28v16h-56z" fill="#ffd76a"/><circle cx="256" cy="106" r="5" fill="#ff8a65"/><circle cx="274" cy="116" r="5" fill="#8ebdff"/><circle cx="290" cy="106" r="5" fill="#8bd8c5"/>',
        book: '<path d="M244 118h58v42c0 8-6 14-14 14h-44z" fill="#ffffff" stroke="#8ebdff" stroke-width="4"/>',
        pointerAlt: ''
      };
      const poseMap = {
        think: { arm: '<path d="M138 148c12 6 20 4 28-4" stroke="#ffe1c7" stroke-width="12" stroke-linecap="round"/>', propX: 230 },
        action: { arm: '<path d="M138 146c18 4 36-4 52-18" stroke="#ffe1c7" stroke-width="12" stroke-linecap="round"/>', propX: 236 },
        jump: { arm: '<path d="M136 140c14-10 24-18 42-18" stroke="#ffe1c7" stroke-width="12" stroke-linecap="round"/><path d="M216 138c16-8 24-14 34-26" stroke="#ffe1c7" stroke-width="12" stroke-linecap="round"/>', propX: 246 },
        book: { arm: '<path d="M146 154h68" stroke="#ffe1c7" stroke-width="12" stroke-linecap="round"/>', propX: 238 }
      };
      const pose = poseMap[role.pose] || poseMap.book;
      const propSvg = propMap[role.prop] || propMap.book;
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stop-color="${colors[0]}"/>
              <stop offset="50%" stop-color="${colors[1]}"/>
              <stop offset="100%" stop-color="${colors[2]}"/>
            </linearGradient>
            <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#fff3cf"/>
            </linearGradient>
          </defs>
          <rect width="360" height="240" rx="30" fill="#fffef5"/>
          <circle cx="78" cy="62" r="26" fill="${colors[3]}"/>
          <circle cx="298" cy="56" r="20" fill="${colors[1]}"/>
          <rect x="34" y="38" width="292" height="162" rx="30" fill="url(#g1)" opacity="0.2"/>
          <rect x="54" y="56" width="252" height="128" rx="26" fill="url(#g2)"/>
          <ellipse cx="182" cy="190" rx="94" ry="16" fill="rgba(73,94,143,0.1)"/>
          <rect x="104" y="166" width="156" height="12" rx="6" fill="#d8b07a"/>
          <rect x="112" y="126" width="64" height="40" rx="16" fill="${role.shirt}"/>
          <path d="M128 162l-8 26M160 162l8 26" stroke="#5f70a4" stroke-width="8" stroke-linecap="round"/>
          <circle cx="146" cy="98" r="28" fill="#ffe1c7"/>
          <path d="M118 102c0-20 12-34 30-34 18 0 30 14 30 34v10h-60z" fill="${role.hair}"/>
          <circle cx="136" cy="100" r="4.5" fill="#31405f"/>
          <circle cx="157" cy="100" r="4.5" fill="#31405f"/>
          <path d="M138 118c6 6 15 6 21 0" fill="none" stroke="#31405f" stroke-width="4" stroke-linecap="round"/>
          ${pose.arm}
          <rect x="190" y="116" width="48" height="44" rx="14" fill="${colors[2]}"/>
          <circle cx="238" cy="86" r="20" fill="#ffe1c7"/>
          <path d="M218 90c0-16 8-28 22-28 14 0 22 12 22 28v8h-44z" fill="${colors[0]}"/>
          <circle cx="230" cy="88" r="4" fill="#31405f"/>
          <circle cx="246" cy="88" r="4" fill="#31405f"/>
          <path d="M231 104c4 4 10 4 14 0" fill="none" stroke="#31405f" stroke-width="3.5" stroke-linecap="round"/>
          <g transform="translate(${pose.propX},0)">${propSvg}</g>
          <rect x="78" y="186" width="204" height="26" rx="13" fill="${colors[2]}"/>
          <text x="180" y="194" text-anchor="middle" fill="#31405f" font-size="14" font-family="Trebuchet MS, Microsoft YaHei, sans-serif" font-weight="700">${code} · ${title}</text>
          <rect x="102" y="22" width="156" height="24" rx="12" fill="#ffffff" opacity="0.94"/>
          <text x="180" y="29" text-anchor="middle" fill="#5e6989" font-size="12" font-family="Trebuchet MS, Microsoft YaHei, sans-serif" font-weight="700">${role.badge}</text>
        </svg>
      `;
    }

    async function loadHtml2canvas() {
      if (typeof html2canvas !== "undefined") return;
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
        script.onload = resolve;
        script.onerror = () => reject(new Error("html2canvas CDN 加载失败，请检查网络"));
        document.head.appendChild(script);
      });
    }

    async function exportReportImage() {
      if (!state.result) { showToast("先完成测试，报告才能打包成图片。"); return; }
      statusText.textContent = "正在截取报告页面，请稍等一下下...";

      const { code, profile } = state.result;
      const adapted = adaptProfile(profile);
      const resultArtEl = document.getElementById("resultArt");

      const originalSrc = resultArtEl ? resultArtEl.src : "";
      const fallbackSrc = getResultArtFallback(code, adapted.title);

      try {
        await loadHtml2canvas();

        const resultScreen = document.getElementById("resultScreen");
        if (!resultScreen) throw new Error("resultScreen-not-found");

        const captureEl = resultScreen.cloneNode(true);
        captureEl.style.position = "fixed";
        captureEl.style.left = "-100000px";
        captureEl.style.top = "0";
        captureEl.style.width = resultScreen.offsetWidth + "px";
        captureEl.style.zIndex = "-1";
        captureEl.classList.add("active");

        const clonedActions = captureEl.querySelector(".result-actions");
        if (clonedActions) clonedActions.style.display = "none";
        const clonedStatus = captureEl.querySelector("#statusText");
        if (clonedStatus) clonedStatus.style.display = "none";
        const clonedSaveNote = captureEl.querySelector(".save-note");
        if (clonedSaveNote) clonedSaveNote.style.display = "none";

        const clonedArt = captureEl.querySelector("#resultArt");
        if (clonedArt) {
          const shouldUsePng = location.protocol !== "file:" && originalSrc && !originalSrc.startsWith("data:");
          clonedArt.src = shouldUsePng ? originalSrc : fallbackSrc;
          await new Promise((resolve) => {
            if (clonedArt.complete) { resolve(); return; }
            const done = () => {
              clonedArt.onload = null;
              clonedArt.onerror = null;
              resolve();
            };
            clonedArt.onload = done;
            clonedArt.onerror = done;
            setTimeout(done, 2000);
          });
        }

        const cleanStyle = document.createElement("style");
        cleanStyle.textContent = "*{animation:none !important;transition:none !important;}";
        captureEl.appendChild(cleanStyle);
        document.body.appendChild(captureEl);

        if (document.fonts && document.fonts.ready) {
          await Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, 1200))]);
        }

        const captureWidth = Math.ceil(captureEl.scrollWidth);
        const captureHeight = Math.ceil(captureEl.scrollHeight);

        const canvas = await html2canvas(captureEl, {
          scale: 2,
          backgroundColor: "#faf7f0",
          useCORS: true,
          allowTaint: false,
          logging: false,
          width: captureWidth,
          height: captureHeight,
          windowWidth: captureWidth,
          windowHeight: captureHeight,
          scrollX: -window.scrollX,
          scrollY: -window.scrollY,
          imageTimeout: 15000,
        });

        document.body.removeChild(captureEl);

        const dataUrl = canvas.toDataURL("image/png");
        previewImage.src = dataUrl;
        downloadLink.href = dataUrl;
        downloadLink.download = state.studentName + "-学习风格MBTI小学版-长图.png";
        previewModal.classList.add("show");
        statusText.textContent = "页面长图已生成，可直接下载或长按预览图保存。";
      } catch (error) {
        console.error("图片导出失败：", error);
        statusText.textContent = "图片生成时出了点小状况，请再点一次试试。\u00A0(使用了页面截取方式，可查看控制台了解详情)";
      } finally {
        if (resultArtEl && resultArtEl.src === fallbackSrc && originalSrc) resultArtEl.src = originalSrc;
      }
    }

    function closePreview() {
      previewModal.classList.remove("show");
    }

    heroArt.src = svgToDataUri(introSvg);
    startBtn.addEventListener("click", startTest);
    studentNameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        startTest();
      }
    });
    restartBtn.addEventListener("click", restartTest);
    downloadBtn.addEventListener("click", exportReportImage);
    closePreviewBtn.addEventListener("click", closePreview);
    previewModal.addEventListener("click", (event) => {
      if (event.target === previewModal) {
        closePreview();
      }
    });
