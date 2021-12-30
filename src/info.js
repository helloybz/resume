export var info = {
    "name": "최영범",
    "position": "머신러닝 연구원",
    "email": "helloybz@gmail.com",
    "github": "https://github.com/helloybz",
    "blog": "https://helloybz.github.io",
    "cellPhone": "010-4499-8320",
    "introduce": {
        "title": "",
        "items": [{
            "description": `\
            Node의 Content에 기반한 효율적인 Node Representation 연구로 석사학위를 취득했고, 이를 Large-scale 추천시스템에 적용하고 싶습니다.
            그외 NLP, Vision 등 다른 분야에도 관심이 많으며, 생명정보학, 음악 등 낯선 분야에서도 머신러닝 프로젝트 아이디어를 제안하고 주도적으로 진행한 경험이 있습니다.
            나와 그룹의 목표와 성취가 같아지는 '경지'를 위해 팀워크와 몰입을 가장 중요시하며 일합니다.\
            `
        }],
    },
    "career": {
        "title": "직무 경력",
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
                    논문 구현: ProgressiveGAN (Vision, GAN), Demucs (MIR)
                    GitHub을 활용한 CI, 이슈관리, 배포 연습
                    Google Cloud Platform 활용 연습\
                    `
                },
                {
                    "name": "수퍼브",
                    "department": "데이터/AI팀",
                    "position": "ML Engineer",
                    "from": "2020.07.06.",
                    "to": "2021.08.31.",
                    "forInMonth": "13",
                    "reasonResign": "경영상 인원감축",
                    "description": `\
                    오디오 번역 머신러닝 모델 개발  (2020. 7. ~ 2021. 7.)
                    모델 개발 및 실험을 담당하였으며, 공개된 모델을 빠르게 구현하여 PoC
                    PyTorch로 모델을 구현하고, AWS로 데이터 관리 및 모델 학습
                    경영상 인원감축으로 인한 퇴사\
                    `
                },
                {
                    "name": "아주대학교 의료원",
                    "department": "생리학교실",
                    "position": "ML Researcher, 서버관리자",
                    "from": "2019.11.01.",
                    "to": "2020.06.30.",
                    "forInMonth": "8",
                    "reasonResign": "수퍼브로 이직",
                    "description": `\
                    딥러닝 활용 유전체데이터 노이즈 제거 기법 연구 (2020.04. ~ 2020.06.)
                    PyTorch로 모델을 구현하고, On-Premise 서버에서 학습
                    수퍼브로 이직을 위해 퇴사\
                    `
                }
            ]
    },
    "education": {
        "title": "학위",
        "items": [
            {
                "name": "아주대학교 대학원 LAMDA Lab.",
                "major": "컴퓨터공학",
                "degree": "석사",
                "from": "2017.03.",
                "to": "2019.08."
            },
            {
                "name": "아주대학교 정보통신대학",
                "major": "미디어학",
                "degree": "학사",
                "from": "2011.03.",
                "to": "2017.08."
            }
        ]
    },
    "skillset": {
        "title": "스킬셋",
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