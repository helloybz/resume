export var info = {
    "name": "최영범",
    "position": "ML 연구원",
    "hooks": "문제를 해결하는",
    "email": "helloybz@gmail.com",
    "github": "https://github.com/helloybz",
    "blog": "https://helloybz.github.io",
    "cellPhone": "010-4499-8320",
    "introduce": {
        "title": "",
        "items": [{
            "description": `\
            나와 조직의 목표와 성취가 같아지는 '경지'에 이르기 위해 팀워크와 몰입을 가장 중요시하며 일합니다.
            분야를 가리지 않고, ML이 필요한 곳에서 ML 연구원으로서 주도적으로 기여를 해왔습니다.
            지금은 효율적인 GCN 기법을 연구한 경험을 살려, 대규모 추천시스템 프로젝트에 참여하고 싶습니다.
            `
        }],
    },
    "career": {
        "title": "Experience.",
        "items":
            [
                {
                    "name": "퇴사 후",
                    "department": "",
                    "position": "",
                    "from": "2020.09.01.",
                    "to": "현재",
                    "forInMonth": "4",
                    "reasonResign": "",
                    "description": `\
                    논문 구현\
                    \tProgressiveGAN (Vision), Demucs (MIR), Deepwalk(Graph, rework)
                    추천 시스템 분야 조사\
                    \tGraphSAGE, PinSAGE, STAR-GCN, SR-GNN
                    기타\
                    \tGitHub Flow 학습, Google Cloud Platform 활용 연습\
                    `
                },
                {
                    "name": "수퍼브",
                    "department": "데이터/AI팀",
                    "position": "ML Engineer",
                    "from": "2020.07.",
                    "to": "2021.08.",
                    "forInMonth": "14",
                    "reasonResign": ", 경영상 인원감축으로 퇴사",
                    "description": `\
                    Note Pattern Generator  (2020.07. ~ 2021.07., 13개월)\
                    \t- HYBE 아티스트 IP기반 리듬게임의 노트패턴 컨텐츠 생성 모델을 확보하는 프로젝트\
                    \t&h- 콘텐츠 제작 인력 부족 문제 해결을 위해 직접 프로젝트 제안\
                    \t- 문제 정의, 데이터 정제, 사전연구 조사, 모델 개발, 실험을 수행\
                    \t- HiFiGAN을 변형한 모델로 305분 분량의 음원과 3가지 난이도 노트패턴을 학습\
                    \t&h- 노트패턴 제작팀 체감 제작 소요시간 30% 감소\
                    \t- Transformer활용 능력, 심도있는 Convolution Layer활용 능력 획득\
                    \t- AWS 활용 경험, 오디오 Feature Engineering 경험 획득\
                    \t- PyTorch기반 구현\
                    `
                },
                {
                    "name": "아주대학교 의료원",
                    "department": "생리학교실",
                    "position": "ML Researcher",
                    "from": "2019.11.",
                    "to": "2020.06.",
                    "forInMonth": "8",
                    "reasonResign": ", 수퍼브로 이직을 위해 퇴사",
                    "description": `\
                    Batch Integration with Adversarial AutoEncoder (2020.04. ~ 2020.06., 3개월)\
                    \t- 생물정보학 분야의 고질적인 문제인 Batch Effect*를 해결하는 기법 연구\
                    \t- 딥러닝 기반 유전체 데이터 연구의 사내 수요에 따라 연구 아이디어 제안\
                    \t&h- AutoEncoder 기반 모델을 도입해 보유 데이터의 Labeling 신뢰도가 낮은 문제 극복\
                    \t- Adversarial Learning을 도입해 naive한 feature 분포를 가정하는 사전 연구 한계 극복\
                    \t- 연구 제안, 데이터 정제, 모델 구현 역할을 맡음\
                    \t- 심도있는 GAN활용 능력 획득\
                    \t- PyTorch기반 구현\
                    \t*BatchEffect: 두 유전체 데이터셋에 노이즈(온도, 습도, 실험자 등 실험 외적환경)가 들어가 유의미한 생물학적차이를 흐리는 현상\

                    사내 분석 툴 라이브러리 개선\
                    \t&h- 유전체데이터 분석 시 검증의 위해 빈번하게 사용하는 NMF*연산이 오래 걸리는 문제 해결\
                    \t- NMF연산을 수행하는 API에 CUDA 기반 연산을 하는 wrapper를 만들어 반영하여 연산속도를 1분이상에서 10초이내로 개선\
                    \t* NMF: Nonnegative Matrix Factorization\
                    `
                },
                {
                    "name": "석사 과정",
                    "department": "(졸업) LAMDA Lab.",
                    "position": "석사 과정",
                    "from": "2017.09.",
                    "to": "2019.08.",
                    "forInMonth": "24",
                    "reasonResign": "",
                    "description": `\
                    Content- and Link-Aware Node Embedding in Graphs ('18.02. ~ '19.06., 17개월)\
                    \t- 필요하다면 학습파라미터 없이도 Graph Convolution을 수행하여 노드 임베딩을 구하는 기법 제안\
                    \t&h- 학습 파라미터를 두는 경우, Curriculum Training이 가능하토록 하는 Negative Sampling 기법 제안\
                    \t&h- Deepwalk, Node2Vec, LINE 대비 노드 분류 실험 정확도 5%~18% 퍼센트 향상\
                    \t- Graph Theory, Probability Theory, PyTorch 활용 능력 획득\
                    \t- PyTorch기반 구현\

                    Python 및 기계학습 실습 강사\
                    \t- 객체지향프로그래밍 Python 실습 @아주대학교 (2017.09. ~ 2019.06.)\
                    \t- 기계학습 Python 실습 @아주대학교 (2020.09. ~ 2018.10.)\
                    \t- 의생명정보학 기계학습 Python 실습 @서울대학교 (2020.12. ~ 2020.12.)\
                    `
                }
            ]
    },
    "education": {
        "title": "Education.",
        "items": [
            {
                "name": "아주대학교 대학원 LAMDA Lab.",
                "major": "컴퓨터공학",
                "degree": "석사",
                "from": "'17.09.",
                "to": "'19.08."
            },
            {
                "name": "아주대학교 정보통신대학",
                "major": "미디어학",
                "degree": "학사",
                "from": "'11.03.",
                "to": "'17.08."
            }
        ]
    },
    "skillset": {
        "title": "Skill.",
        "items": [
            {
                "category": "ML",
                "items": [
                    {
                        "name": "Python",
                        "score": "A+",
                    },
                    {
                        "name": "PyTorch",
                        "score": "A+",
                    },
                    {
                        "name": "scikit-learn",
                        "score": "A+",
                    },
                    {
                        "name": "NumPy",
                        "score": "A+",
                    },
                    {
                        "name": "Pandas",
                        "score": "A",
                    },
                    {
                        "name": "matplotlib",
                        "score": "A",
                    },
                ]
            },

            {
                "category": "DevOps",
                "items": [
                    {
                        "name": "Git",
                        "score": "A+",
                    },
                    {
                        "name": "Docker",
                        "score": "B+",
                    },


                ]
            },
            {
                "category": "Cloud Computing",
                "items": [
                    {
                        "name": "AWS",
                        "score": "B+",
                    },
                    {
                        "name": "GCP",
                        "score": "B+",
                    },
                ]
            },
        ]
    },
    "project": {
        "title": "프로젝트",
        "items": [
            {
                "name": "Note Pattern Generator",
                "at": "수퍼브",
                "duration": "2020.07. ~ 2021.07. (13개월)",
                "skillset": ["PyTorch", "AWS", "Git", "librosa", "torchaudio"],
                "description": `\
                주어진 음악에 맞는 리듬게임용 노트 패턴 생성 모델을 확보하는 프로젝트입니다.
                컨텐츠 생산효율을 높히고자, 직접 제안하고 채택되어 진행된 프로젝트입니다.
                노트의 타이밍을 특정하는데 성공해 노트 패턴 제작팀의 작업 시간을 약 30% 줄였습니다.
                아이디어 제안, 문제 정의, 데이터 정제, 사전연구 조사, 모델 개발, 실험을 수행했습니다.
                Transformer활용 능력, 심도있는 Convolution Layer활용 능력, AWS 활용능력, 오디오 Feature Engineering 능력을 얻었습니다.\
                `
            },
            {
                "name": "Batch Integration with Adversarial AutoEncoder",
                "at": "아주대학교 의료원",
                "duration": "2020.04. ~ 2020.06. (3개월)",
                "skillset": ["PyTorch", "Git"],
                "description": `\
                생물정보학 분야에서 고질적인 문제인 Batch Effect를 Adversarial AutoEncoder를 활용해 해결하는 연구입니다.
                딥러닝을 활용한 생물정보학 연구에 대한 교수님의 요구에 따라 아이디어를 제안하고 시작한 연구입니다.
                사전연구 조사, 모델 개발, 실험을 맡았습니다.
                ML프로젝트 자동화의 필요성, 심도있는 GAN활용 능력, 생명정보학 기초 배경지식을 얻었습니다.\
                `,
            },
            {
                "name": "Content- and Link-Aware Node Embedding",
                "at": "아주대학교 대학원",
                "duration": "2018.02. ~ 2019.06. (18개월)",
                "skillset": ["PyTorch", "NumPy", "Git"],
                "description": `\
                석사 학위 논문으로, 주어진 네트워크 내 존재하는 노드들의 연결관계뿐만 아니라 노드의 고유 특성까지도 함께 반영한 임베딩을 구하는 메소드를 제안하는 연구입니다.
                노드 분류 실험에서 메소드를 적용한 후 정확도가 약 10% ~ 20% 상승했습니다.
                알고리즘의 내용과 효과를 논리적으로 설명하고 입증하는 능력을 배웠습니다.
                Graph Theory, Probability Theory, PyTorch 활용 능력을 얻었습니다.\
                `,
            },
            {
                "name": "Dementia Matrix",
                "at": "아주대학교",
                "duration": "2016.02. ~ 2016.09. (8개월)",
                "skillset": ["numpy", "scikit-learn", "flask", "nginx"],
                "description": `\
                치매 환자의 진단 데이터와 환자의 치매 진행 양상을 효과적으로 시각화하여, 치매 진단 시 의사결정에 도움을 주는 시각화 방법에 관한 연구입니다.
                이 연구는 IEEE VIS 2016에서 열린 BioVis workshop 포스터 부분에 채택되었습니다.
                시각화 방법에 관한 키 아이디어를 제공했으며, 데모 페이지를 위한 서버 개발을 했습니다.
                BioVis workshop에 참석하여 직접 연구를 발표했습니다.\
                `,
            },
        ]
    },
    "experience": {
        "title": "기타 활동",
        "items": [
            {
                "category": "Teaching Assistance",
                "items": [
                    {
                        "what": "객체지향프로그래밍 Python 실습",
                        "at": "아주대학교",
                        "from": "2017.9.",
                        "to": "2019.6."
                    },
                    {
                        "what": "기계학습 Python 실습 (영어)",
                        "at": "아주대학교",
                        "from": "2018.9.",
                        "to": "2018.10."
                    },
                    {
                        "what": "의생명정보학 기계학습 Python 실습",
                        "at": "서울대학교",
                        "from": "2018.12.",
                        "to": "2018.12."
                    },

                ]
            },
            {
                "category": "학회",
                "items": [
                    {
                        "what": "학회 참가",
                        "at": "IEEE AAAI 2019",
                        "from": "2019.1.",
                        "to": "2019.2."
                    },
                    {
                        "what": "워크샵 Poster 발표",
                        "at": "BioVis 2016 @ IEEE VIS 2016",
                        "from": "2016.10.",
                        "to": "2016.10."
                    },
                ]
            }
        ]
    }
}