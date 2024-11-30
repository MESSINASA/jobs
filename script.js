const suggestions = {
    'RIA': `<ul>
        <li>研发工程师
            <p>负责新产品和技术研发，需要扎实的技术功底和创新思维，适合具有动手能力和逻辑分析能力的人。</p>
        </li>
        <li>产品设计师
            <p>设计和优化产品功能与外观，需要工程技术知识和创意能力，适合具有实践经验和审美能力的人。</p>
        </li>
        <li>建筑师
            <p>设计和规划建筑项目，需要专业技术知识和艺术素养，适合具有空间想象力和创造力的人。</p>
        </li>
        <li>工业设计师
            <p>设计工业产品的功能和外观，需要工程知识和设计能力，适合具有技术思维和创新精神的人。</p>
        </li>
        <li>技术研究员
            <p>进行技术研究和创新，需要专业知识和实验能力，适合具有研究精神和实践能力的人。</p>
        </li>
    </ul>`,

    'SEC': `<ul>
        <li>人力资源经理
            <p>负责团队建设和人才发展，需要出色的沟通能力和管理技巧，适合善于理解和培养人才的人。</p>
        </li>
        <li>行政主管
            <p>统筹协调各部门工作，需要组织能力和执行力，适合具有条理性和领导才能的人。</p>
        </li>
        <li>培训经理
            <p>设计和实施培训计划，需要教学能力和课程开发能力，适合善于传授知识和激发潜能的人。</p>
        </li>
        <li>客户服务经理
            <p>管理客户关系和服务质量，需要沟通技巧和问题解决能力，适合善于处理人际关系的人。</p>
        </li>
        <li>组织发展顾问
            <p>协助企业进行组织优化，需要系统思维和变革管理能力，适合具有分析能力和沟通技巧的人。</p>
        </li>
    </ul>`,

    'ASE': `<ul>
        <li>创意总监
            <p>领导创意团队，把控创意方向，需要艺术素养和管理能力，适合具有创造力和领导才能的人。</p>
        </li>
        <li>艺术总监
            <p>负责艺术创作和团队管理，需要专业技能和审美能力，适合具有艺术天赋和组织能力的人。</p>
        </li>
        <li>文化传媒主管
            <p>策划和管理文化项目，需要文化素养和传播能力，适合具有艺术感知和社交才能的人。</p>
        </li>
        <li>广告创意总监
            <p>领导广告创意开发，需要创意思维和市场洞察力，适合具有艺术天赋和商业意识的人。</p>
        </li>
        <li>品牌策划总监
            <p>规划品牌发展战略，需要品牌管理经验和创新思维，适合具有艺术眼光和战略思维的人。</p>
        </li>
    </ul>`,

    'ISE': `<ul>
        <li>数据科学主管
            <p>领导数据分析团队，需要数据分析能力和管理才能，适合具有研究精神和领导能力的人。</p>
        </li>
        <li>市场研究总监
            <p>指导市场研究工作，需要研究方法和决策能力，适合具有分析思维和管理才能的人。</p>
        </li>
        <li>管理咨询顾问
            <p>提供管理咨询服务，需要分析能力和沟通技巧，适合具有研究精神和社交才能的人。</p>
        </li>
        <li>战略分析师
            <p>分析企业战略方向，需要战略思维和研究能力，适合具有分析能力和决策力的人。</p>
        </li>
        <li>研发项目总监
            <p>管理研发项目团队，需要研究背景和领导才能，适合具有专业知识和管理能力的人。</p>
        </li>
    </ul>`,

    'EAI': `<ul>
        <li>创新企业CEO
            <p>领导创新型企业发展，需要战略眼光和创新思维，适合具有领导才能和创造力的人。</p>
        </li>
        <li>产品创新总监
            <p>负责产品创新战略，需要产品视野和研发能力，适合具有管理才能和创新精神的人。</p>
        </li>
        <li>创意企业家
            <p>创办和经营创意企业，需要商业头脑和艺术素养，适合具有创业精神和创造力的人。</p>
        </li>
        <li>创新战略顾问
            <p>提供创新发展建议，需要战略思维和研究能力，适合具有分析能力和创新视野的人。</p>
        </li>
        <li>创意产业投资人
            <p>投资创意产业项目，需要投资眼光和艺术鉴赏力，适合具有商业意识和创新思维的人。</p>
        </li>
    </ul>`,

    'SIA': `<ul>
        <li>教育研究员
            <p>研究教育方法和理论，需要研究能力和教学技巧，适合具有分析思维和社交能力的人。</p>
        </li>
        <li>心理咨询师
            <p>提供心理辅导服务，需要专业知识和沟通能力，适合具有研究精神和同理心的人。</p>
        </li>
        <li>��术教育家
            <p>从事艺术教育工作，需要艺术素养和教学能力，适合具有创造力和表达能力的人。</p>
        </li>
        <li>职业规划师
            <p>提供职业发展建议，需要研究方法和咨询技巧，适合具有分析能力和服务意识的人。</p>
        </li>
        <li>教育顾问
            <p>提供教育发展建议，需要研究背景和沟通能力，适合具有专业知识和社交技巧的人。</p>
        </li>
    </ul>`,

    'SAR': `<ul>
        <li>职业培训师
            <p>培训专业技能，需要实践经验和教学能力，适合具有动手能力和表达能力的人。</p>
        </li>
        <li>康复治疗师
            <p>进行康复训练指导，需要专业技能和服务意识，适合具有实践能力和耐心的人。</p>
        </li>
        <li>艺术治疗师
            <p>通过艺术进行治疗，需要艺术素养和治疗技能，适合具有创造力和同理心的人。</p>
        </li>
        <li>特殊教育教师
            <p>教导特殊需求学生，需要专业知识和教学技巧，适合具有耐心和实践能力的人。</p>
        </li>
        <li>运动教练
            <p>指导体育运动，需要专业技能和教学能力，适合具有实践经验和领导才能的人。</p>
        </li>
    </ul>`,

    'ESI': `<ul>
        <li>管理咨询总监
            <p>领导咨询团队，需要研究能力和管理才能，适合具有分析思维和领导能力的人。</p>
        </li>
        <li>人才发展总监
            <p>规划人才发展战略，需要研究方法和管理能力，适合具有专业知识和领导才能的人。</p>
        </li>
        <li>组织发展顾问
            <p>提供组织优化建议，需要研究背景和沟通能力，适合具有分析能力和社交技巧的人。</p>
        </li>
        <li>培训发展经理
            <p>管理培训体系，需要教育研究和管理能力，适合具有专业知识和领导才能的人。</p>
        </li>
        <li>变革管理顾问
            <p>指导组织变革，需要研究方法和领导能力，适合具有分析思维和沟通技巧的人。</p>
        </li>
    </ul>`,

    'EAR': `<ul>
        <li>创意企业家
            <p>创办创意产业公司，需要艺术眼光和实践能力，适合具有创业精神和动手能力的人。</p>
        </li>
        <li>产品创新总监
            <p>领导产品创新，需要创意思维和技术知识，适合具有艺术感和实践能力的人。</p>
        </li>
        <li>设计工作室总监
            <p>管理设计团队，需要艺术素养和管理能力，适合具有创造力和领导才能的人。</p>
        </li>
        <li>创意技术总监
            <p>领导创意技术团队，需要艺术视野和技术背景，适合具有创新思维和实践经验的人。</p>
        </li>
        <li>艺术创业顾问
            <p>指导艺术创业，需要艺术经验和商业头脑，适合具有创意思维和管理能力的人。</p>
        </li>
    </ul>`,

    'CIS': `<ul>
        <li>数据分析师
            <p>分析和整理数据，需要研究方法和条理性，适合具有分析思维和沟通能力的人。</p>
        </li>
        <li>质量管理专员
            <p>管理质量体系，需要专业知识和执行力，适合具有条理性和团队协作能力的人。</p>
        </li>
        <li>系统分析师
            <p>分析系统需求，需要研究能力和逻辑思维，适合具有分析思维和沟通技巧的人。</p>
        </li>
        <li>合规审计师
            <p>进行合规审计，需要专业知识和分析能力，适合具有条理性和研究精神的人。</p>
        </li>
        <li>流程优化顾问
            <p>优化工作流程，需要系统思维和沟通能力，适合具有分析能力和服务意识的人。</p>
        </li>
    </ul>`
};

const questions = [
    // 现实型(R)相关题目
    {
        question: "你更喜欢以下哪种活动？",
        options: [
            { text: "修理机械设备", type: "R" },
            { text: "研究科学问题", type: "I" },
            { text: "设计海报", type: "A" }
        ]
    },
    {
        question: "周末你更愿意：",
        options: [
            { text: "在车库修理东西", type: "R" },
            { text: "参加社交活动", type: "S" },
            { text: "整理个人收藏", type: "C" }
        ]
    },
    {
        question: "如果要选择一份工作，你更倾向于：",
        options: [
            { text: "户外施工工作", type: "R" },
            { text: "实验室研究", type: "I" },
            { text: "带领团队", type: "E" }
        ]
    },
    // 研究型(I)相关题目
    {
        question: "遇到问题时，你通常会：",
        options: [
            { text: "仔细分析原因", type: "I" },
            { text: "寻求他人建议", type: "S" },
            { text: "按直觉行动", type: "A" }
        ]
    },
    {
        question: "你更感兴趣的是：",
        options: [
            { text: "探索未知领域", type: "I" },
            { text: "组织管理活动", type: "E" },
            { text: "按计划完成任务", type: "C" }
        ]
    },
    // 艺术型(A)相关题目
    {
        question: "空闲时间你更愿意：",
        options: [
            { text: "创作艺术作品", type: "A" },
            { text: "阅读专业书籍", type: "I" },
            { text: "参加志愿活动", type: "S" }
        ]
    },
    {
        question: "在工作环境中，你更看重：",
        options: [
            { text: "创意表达的自由", type: "A" },
            { text: "明确的规章制度", type: "C" },
            { text: "团队合作机会", type: "S" }
        ]
    },
    // 社会型(S)相关题目
    {
        question: "你认为最有意义的工作是：",
        options: [
            { text: "帮助他人成长", type: "S" },
            { text: "创新产品设计", type: "A" },
            { text: "优化工作流程", type: "C" }
        ]
    },
    {
        question: "在团队中，你更愿意：",
        options: [
            { text: "关心队友需求", type: "S" },
            { text: "制定行动计划", type: "E" },
            { text: "独立完成任务", type: "R" }
        ]
    },
    // 企业型(E)相关题目
    {
        question: "面对群体活动，你倾向于：",
        options: [
            { text: "主动带领大家", type: "E" },
            { text: "专注技术细节", type: "R" },
            { text: "协助他人工作", type: "S" }
        ]
    },
    {
        question: "你更向往的工作环境是：",
        options: [
            { text: "充满竞争机会", type: "E" },
            { text: "安静的独立空间", type: "I" },
            { text: "富有创意氛围", type: "A" }
        ]
    },
    // 常规型(C)相关题目
    {
        question: "处理工作时，你习惯：",
        options: [
            { text: "按步骤严格执行", type: "C" },
            { text: "寻找创新方法", type: "A" },
            { text: "与他人合作", type: "S" }
        ]
    },
    {
        question: "你更擅长：",
        options: [
            { text: "整理归类信息", type: "C" },
            { text: "解决技术问题", type: "R" },
            { text: "说服他人", type: "E" }
        ]
    },
    // 混合型题目
    {
        question: "理想的工作项目是：",
        options: [
            { text: "需要精确计算", type: "I" },
            { text: "可以发挥创意", type: "A" },
            { text: "��清晰的规范", type: "C" }
        ]
    },
    {
        question: "你更愿意参加的培训是：",
        options: [
            { text: "技能操作培训", type: "R" },
            { text: "领导力培训", type: "E" },
            { text: "艺术创作课程", type: "A" }
        ]
    },
    {
        question: "工作中遇到困难时，你会：",
        options: [
            { text: "寻找规律规则", type: "C" },
            { text: "创新解决方案", type: "I" },
            { text: "寻求团队帮助", type: "S" }
        ]
    },
    {
        question: "你期待的工作成果是：",
        options: [
            { text: "具有创新价值", type: "I" },
            { text: "令人印象深刻", type: "A" },
            { text: "完成预定目标", type: "E" }
        ]
    },
    {
        question: "你更喜欢的工作方式是：",
        options: [
            { text: "实践动手", type: "R" },
            { text: "思考钻研", type: "I" },
            { text: "规划执行", type: "C" }
        ]
    }
];

let currentQuestion = 0;
let answers = {
    R: 0, // Realistic
    I: 0, // Investigative
    A: 0, // Artistic
    S: 0, // Social
    E: 0, // Enterprising
    C: 0  // Conventional
};

// 在文件开头添加新的变量来存储用户选择历史
let userAnswers = new Array(questions.length).fill(null);

// 添加到文件开头的全局变量部分
let isAdminMode = false;

// 添加键盘事件监听器
document.addEventListener('keydown', function(e) {
    // 检测 Ctrl+Alt+S 组合键
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 's') {
        e.preventDefault(); // 阻止默认行为
        toggleAdminMode();
    }
});

// 切换管理员模式
function toggleAdminMode() {
    isAdminMode = !isAdminMode;
    if (isAdminMode) {
        showAdminPanel();
    } else {
        hideAdminPanel();
    }
}

// 添加事件监听器
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev-btn');
    prevBtn.addEventListener('click', handlePrev);
});

function handlePrev() {
    if (currentQuestion > 0) {
        // 回退时减去当前题目的分数
        const currentAnswer = userAnswers[currentQuestion];
        if (currentAnswer) {
            answers[currentAnswer]--;
        }
        
        currentQuestion--;
        displayQuestion();
        updateProgress();
        if (currentQuestion === 0) {
            document.getElementById('prev-btn').style.display = 'none';
        }
    }
}

// 添加一个函数来计算每个类型的最大可能得分
function getMaxPossibleScore(type) {
    return questions.reduce((count, question) => {
        return count + question.options.filter(option => option.type === type).length;
    }, 0);
}

// 修改 showResults 函数中的得分条显示部分
function showResults() {
    const testContainer = document.getElementById('test-container');
    const resultContainer = document.getElementById('result-container');
    
    // 获取前三个最高分的类型
    const sortedTypes = Object.entries(answers)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(item => item[0]);
    
    const personalityCode = sortedTypes.join('');
    
    const resultHTML = `
        <h2>测试结果</h2>
        <div class="result-summary">
            <div class="chart-container">
                <canvas id="radarChart"></canvas>
            </div>
            <div class="result-code">
                <h3>您的霍兰德代码：${personalityCode}</h3>
                <div class="code-explanation">
                    ${sortedTypes.map((type, index) => `
                        <div class="type-item">
                            <span class="type-rank">${index + 1}</span>
                            <span class="type-name">${getTypeName(type)}</span>
                            <span class="type-score">${(answers[type] / getMaxPossibleScore(type) * 100).toFixed(1)}%</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="interpretation">
                <h3>职业倾向解释：</h3>
                <p>${getPersonalityInterpretation(personalityCode)}</p>
            </div>
            <div class="career-suggestions">
                <h3>推荐职业：</h3>
                ${getCareerSuggestions(personalityCode)}
            </div>
        </div>
        <button onclick="restartTest()">重新测试</button>
    `;
    
    testContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.innerHTML = resultHTML;

    // 创建雷达图
    const ctx = document.getElementById('radarChart').getContext('2d');
    const maxScores = {
        R: getMaxPossibleScore('R'),
        I: getMaxPossibleScore('I'),
        A: getMaxPossibleScore('A'),
        S: getMaxPossibleScore('S'),
        E: getMaxPossibleScore('E'),
        C: getMaxPossibleScore('C')
    };

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['现实型(R)', '研究型(I)', '艺术型(A)', '社会型(S)', '企业型(E)', '常规型(C)'],
            datasets: [{
                label: '职业兴趣倾向',
                data: [
                    (answers.R / maxScores.R * 100).toFixed(1),
                    (answers.I / maxScores.I * 100).toFixed(1),
                    (answers.A / maxScores.A * 100).toFixed(1),
                    (answers.S / maxScores.S * 100).toFixed(1),
                    (answers.E / maxScores.E * 100).toFixed(1),
                    (answers.C / maxScores.C * 100).toFixed(1)
                ],
                backgroundColor: 'rgba(33, 150, 243, 0.2)',
                borderColor: '#2196F3',
                borderWidth: 2,
                pointBackgroundColor: '#2196F3',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2196F3'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                            family: "'Microsoft YaHei', sans-serif"
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // 保存测试结果
    saveTestResult(personalityCode, answers);
}

function getTypeName(type) {
    const typeNames = {
        'R': '现实型',
        'I': '研究型',
        'A': '艺术型',
        'S': '社型',
        'E': '企业型',
        'C': '常规型'
    };
    return typeNames[type];
}

function getMaxScore() {
    return Math.max(...Object.values(answers));
}

function getPersonalityInterpretation(code) {
    const interpretations = {
        'RIA': '您是一个善于实践且富有研究精神的人，同时具备创造力。您适合在需要动手能力、逻辑思维和创新的领域发展。',
        'RIE': '您具有实践能力和分析思维，同时具备领导才能。您适合在技术管理或项目管理领域发展。',
        'RSC': '您是一个务实稳重的人，善于与人合作，做事有条理。您适合在需要团队协作和规范执行的领域工作。',
        'IAS': '您具有研究精神和艺术天赋，同时富有同理心。您适合在创意研究或教育领域发展。',
        'IAE': '您善于思考和创新，具备领导能力。您适合在创新管理或研发管理领域发展。',
        'SEC': '您善于与人交往，具有领导才能，做事细心条理。您适合在人力资源或行政管理领域发展。',
        'SEA': '您具有较强的社交能力和艺术感知力，善于表达。您适合在公关、媒体或艺术教育领域发展。',
        'EIC': '您具有管理才能和分析能力，做事有条理。您适合在商业分析或项目管理领域发展。',
        'AIS': '您富有创造力和研究精神，同时具有较强的人际往能力。您适合在教育、艺术研究或创意咨询领域发展。',
        'ASE': '您具有艺术天赋和社交能力，善于领导。您适合在创意管理、艺术指导或文化传媒领域发展。',
        'CSE': '您做事细心、善于管理，具有良好的人际交往能力。您适合在行政管理、人力资源或质管理领域发展。',
        'CRI': '您严谨务实，具有分析能力和动手能力。您适合在数据分析、质量控制或技术支持领域发展。',
        'EAI': '您具有领导才能，富有创造力和分析思维。您适合在创新创业、产品管理或创意总监领域发展。',
        'ESC': '您善于管理和沟通，做事有条理。您适合在团队管理、客户服务或组织协调领域发展。',
        'IRS': '您具有研究能力和实践精神，善于与人合作。您适合在技术研发、实验研究或技术培训领域发展。',
        'ISE': '您具有分析能力和社交才能，善于领导。您适合在数据分析、市场究或咨询管理领域发展。'
    };
    return interpretations[code] || '您具有独特的个性特征，建议根据您最强的特质来选择职业发展方向。';
}

function getCareerSuggestions(code) {
    // 将代码标准化为大写
    const standardCode = code.toUpperCase();
    
    // 创建所有可能的代码组合
    const possibleCodes = [
        standardCode,
        standardCode.split('').reverse().join(''),
        standardCode[1] + standardCode[0] + standardCode[2],
        standardCode[2] + standardCode[1] + standardCode[0],
        standardCode[0] + standardCode[2] + standardCode[1],
        standardCode[2] + standardCode[0] + standardCode[1]
    ];

    // 定义所有可能的代码组合的职业建议
    const allSuggestions = {
        'RIA': `<ul>
            <li>研发工程师
                <p>负责新产品和技术研发，需要扎实的技术功底和创新思维，适合具有动手能力和逻辑分析能力的人。</p>
            </li>
            <li>产品设计师
                <p>设计和优化产品功能与外观，需要工程技术知识和创意能力，适合具有实践经验和审美能力的人。</p>
            </li>
            <li>建筑师
                <p>设计和规划建筑项目，需要专业技术知识和艺术素养，适合具有空间想象力和创造力的人。</p>
            </li>
            <li>工业设计师
                <p>设计工业产品的功能和外观，需要工程知识和设计能力，适合具有技术思维和创新精神的人。</p>
            </li>
            <li>技术研究员
                <p>进行技术研究和创新，需要专业知识和实验能力，适合具有研究精神和实践能力的人。</p>
            </li>
        </ul>`,
        // ... 其他代码组合的建议保持不变
    };

    // 尝试找到匹配的建议
    for (let code of possibleCodes) {
        if (allSuggestions[code]) {
            return allSuggestions[code];
        }
    }

    // 如果没有找到完全匹配，使用前两个字符的组合
    const partialCode = standardCode.slice(0, 2);
    for (let key in allSuggestions) {
        if (key.startsWith(partialCode)) {
            return allSuggestions[key];
        }
    }

    // 如果仍然没有找到匹配，返回基于最高分类型的通用建议
    const primaryType = standardCode[0];
    const generalSuggestions = {
        'R': `<ul>
            <li>技术工程师
                <p>从事技术开发和实践工作，需要专业技能和动手能力，适合具有实践精神的人。</p>
            </li>
            <li>机械工程师
                <p>设计和维护机械设备，需要专业知识和实践能力，适合具有技术思维的人。</p>
            </li>
            <li>电气工程师
                <p>负责电气系统设计和维护，需要专业技能和实践经验，适合具有动手能力的人。</p>
            </li>
        </ul>`,
        'I': `<ul>
            <li>研究员
                <p>从事专业领域研究，需要研究能力和分析思维，适合具有探索精神的人。</p>
            </li>
            <li>数据分析师
                <p>分析和解读数据，需要逻辑思维和研究能力，适合具有分析头脑的人。</p>
            </li>
            <li>实验室研究员
                <p>进行实验研究工作，需要研究方法和专业知识，适合具有科研精神的人。</p>
            </li>
        </ul>`,
        // ... 其他类型的通用建议
    };

    return generalSuggestions[primaryType] || `<ul>
        <li>个性化职业建议
            <p>根据您的测试结果，建议您：</p>
            <ul>
                <li>关注与您最强特质相关的领域，深入了解相关职业的具体要求和发展前景</li>
                <li>参加相关行业的实习或项目实践，积累实际工作经验</li>
                <li>寻求职业规划师的专业指导，制定个性化的职业发展计划</li>
                <li>持续学习和提升相关技能，为未来职业发展做好准备</li>
            </ul>
        </li>
    </ul>`;
}

function restartTest() {
    currentQuestion = 0;
    answers = {R: 0, I: 0, A: 0, S: 0, E: 0, C: 0};
    userAnswers = new Array(questions.length).fill(null); // 重置用户选择历史
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('prev-btn').style.display = 'none';
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestion];
    const previousAnswer = userAnswers[currentQuestion];
    
    let html = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <label>
                        <input type="radio" name="answer" value="${option.type}" 
                            ${previousAnswer === option.type ? 'checked' : ''}>
                        <span>${option.text}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    
    questionContainer.innerHTML = html;

    // 为新的单选按钮添加事件监听器
    const radioButtons = questionContainer.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', handleOptionSelect);
    });
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// 初始化测试
displayQuestion();

function startTest() {
    document.getElementById('welcome-container').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
    displayQuestion();
    updateProgress();
}

// 添加新的选项选择处理函数
function handleOptionSelect(event) {
    const selectedValue = event.target.value;
    
    // 保存当前选择
    userAnswers[currentQuestion] = selectedValue;
    answers[selectedValue]++;
    
    // 短暂延迟后进入下一题，给用户一个视觉反馈的时间
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
            updateProgress();
            document.getElementById('prev-btn').style.display = 'block';
        } else {
            showResults();
        }
    }, 300); // 300毫秒的延迟
}

// 保存测试结果
function saveTestResult(personalityCode, answers) {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const newResult = {
        id: Date.now(),
        date: new Date().toISOString(),
        personalityCode: personalityCode,
        answers: answers,
        scores: {
            R: (answers.R / getMaxPossibleScore('R') * 100).toFixed(1),
            I: (answers.I / getMaxPossibleScore('I') * 100).toFixed(1),
            A: (answers.A / getMaxPossibleScore('A') * 100).toFixed(1),
            S: (answers.S / getMaxPossibleScore('S') * 100).toFixed(1),
            E: (answers.E / getMaxPossibleScore('E') * 100).toFixed(1),
            C: (answers.C / getMaxPossibleScore('C') * 100).toFixed(1)
        }
    };
    testResults.push(newResult);
    localStorage.setItem('testResults', JSON.stringify(testResults));
}

// 显示管理员面板
function showAdminPanel() {
    const adminPanel = document.createElement('div');
    adminPanel.id = 'admin-panel';
    adminPanel.className = 'admin-panel';
    
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    
    // 计算平均分
    const averageScores = testResults.length > 0 ? {
        R: (testResults.reduce((sum, result) => sum + parseFloat(result.scores.R), 0) / testResults.length).toFixed(1),
        I: (testResults.reduce((sum, result) => sum + parseFloat(result.scores.I), 0) / testResults.length).toFixed(1),
        A: (testResults.reduce((sum, result) => sum + parseFloat(result.scores.A), 0) / testResults.length).toFixed(1),
        S: (testResults.reduce((sum, result) => sum + parseFloat(result.scores.S), 0) / testResults.length).toFixed(1),
        E: (testResults.reduce((sum, result) => sum + parseFloat(result.scores.E), 0) / testResults.length).toFixed(1),
        C: (testResults.reduce((sum, result) => sum + parseFloat(result.scores.C), 0) / testResults.length).toFixed(1)
    } : { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

    // 计算各类型最高分的人数
    const typeCount = {
        R: 0, I: 0, A: 0, S: 0, E: 0, C: 0
    };
    testResults.forEach(result => {
        const maxScore = Math.max(
            parseFloat(result.scores.R),
            parseFloat(result.scores.I),
            parseFloat(result.scores.A),
            parseFloat(result.scores.S),
            parseFloat(result.scores.E),
            parseFloat(result.scores.C)
        );
        Object.entries(result.scores).forEach(([type, score]) => {
            if (parseFloat(score) === maxScore) {
                typeCount[type]++;
            }
        });
    });
    
    let html = `
        <div class="admin-header">
            <h2>测试数据统计</h2>
            <div class="admin-controls">
                <button onclick="exportData()">导出数据</button>
                <button onclick="clearData()">清除数据</button>
                <button class="close-btn" onclick="hideAdminPanel()">关闭</button>
            </div>
        </div>
        <div class="results-summary">
            <div class="basic-stats">
                <div class="stat-item">
                    <h3>总测试次数</h3>
                    <p>${testResults.length}</p>
                </div>
                <div class="stat-item">
                    <h3>类型分布</h3>
                    <div class="type-distribution">
                        <p>现实型(R): ${typeCount.R}人</p>
                        <p>研究型(I): ${typeCount.I}人</p>
                        <p>艺术型(A): ${typeCount.A}人</p>
                        <p>社会型(S): ${typeCount.S}人</p>
                        <p>企业型(E): ${typeCount.E}人</p>
                        <p>常规型(C): ${typeCount.C}人</p>
                    </div>
                </div>
            </div>
            <div class="average-chart-container">
                <canvas id="averageRadarChart"></canvas>
            </div>
        </div>
        <div class="individual-results">
            <h3>个人测试记录</h3>
            ${testResults.map((result, index) => `
                <div class="result-card">
                    <div class="result-info">
                        <div class="result-header">
                            <h4>测试 #${index + 1}</h4>
                            <span class="result-date">${new Date(result.date).toLocaleString()}</span>
                        </div>
                        <div class="result-details">
                            <p>霍兰德代码: ${result.personalityCode}</p>
                            <div class="score-details">
                                <span>R: ${result.scores.R}%</span>
                                <span>I: ${result.scores.I}%</span>
                                <span>A: ${result.scores.A}%</span>
                                <span>S: ${result.scores.S}%</span>
                                <span>E: ${result.scores.E}%</span>
                                <span>C: ${result.scores.C}%</span>
                            </div>
                        </div>
                    </div>
                    <div class="individual-chart-container">
                        <canvas id="radarChart${index}"></canvas>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    adminPanel.innerHTML = html;
    document.body.appendChild(adminPanel);

    // 创建平均分雷达图
    createRadarChart('averageRadarChart', averageScores, '总体平均分布');

    // 为每个测试结果创建雷达图
    testResults.forEach((result, index) => {
        createRadarChart(`radarChart${index}`, result.scores, '个人分布');
    });
}

// 隐藏管理员面板
function hideAdminPanel() {
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel) {
        adminPanel.remove();
    }
}

// 导出数据
function exportData() {
    const testResults = JSON.parse(localStorage.getItem('testResults') || '[]');
    const csvContent = "data:text/csv;charset=utf-8," 
        + "日期,霍兰德代码,R%,I%,A%,S%,E%,C%\n"
        + testResults.map(result => {
            return `${new Date(result.date).toLocaleString()},${result.personalityCode},`
                + `${result.scores.R},${result.scores.I},${result.scores.A},`
                + `${result.scores.S},${result.scores.E},${result.scores.C}`;
        }).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "test_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 清除数据
function clearData() {
    if (confirm('确定要清除所有测试数据吗？')) {
        localStorage.removeItem('testResults');
        hideAdminPanel();
        showAdminPanel();
    }
}

// 添加辅助函数：创建雷达图
function createRadarChart(canvasId, scores, label) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['现实型(R)', '研究型(I)', '艺术型(A)', '社会型(S)', '企业型(E)', '常规型(C)'],
            datasets: [{
                label: label,
                data: [
                    scores.R,
                    scores.I,
                    scores.A,
                    scores.S,
                    scores.E,
                    scores.C
                ],
                backgroundColor: 'rgba(33, 150, 243, 0.2)',
                borderColor: '#2196F3',
                borderWidth: 2,
                pointBackgroundColor: '#2196F3',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2196F3'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        display: false
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            family: "'Microsoft YaHei', sans-serif"
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: label,
                    font: {
                        size: 14,
                        family: "'Microsoft YaHei', sans-serif"
                    },
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.2
                }
            },
            responsive: true,
            maintainAspectRatio: true
        }
    });
}
  