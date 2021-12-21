export var info = {
    "name": "최영범",
    "position": "ML Developer",
    "email": "helloybz@gmail.com",
    "github": "github.com/helloybz",
    "career": {
        "title": "직무 경력",
        "items":
            [
                {
                    "name": "수퍼브",
                    "department": "데이터/AI팀",
                    "position": "ML Engineer",
                    "from": "2020.07.06.",
                    "to": "2021.08.31.",
                    "forInMonth": "13",
                },
                {
                    "name": "아주대학교 의료원",
                    "department": "생리학교실",
                    "position": "ML Researcher, 서버관리자",
                    "from": "2019.11.01.",
                    "to": "2020.06.30.",
                    "forInMonth": "8",

                }
            ]
    },
    "education": {
        "title": "학위",
        "items": [
            {
                "name": "아주대학교 대학원",
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
    "project": {
        "title": "프로젝트",
        "items": [
            {
                "name": "Note Pattern Generator",
                "at": "수퍼브",
                "description": `
                Superb에서 진행한 프로젝트로, 주어진 음악에 맞는 리듬게임용 노트 패턴을 생성하는 프로젝트입니다.\

                Superb는 HYBE 아티스트 IP 기반의 리듬게임 RhythmHive를 서비스하고 있습니다. \
                BTS, TXT, ENHYPEN의 음악에 맞는 리듬게임용 노트패턴을 수작업으로 제작해왔습니다. \
                사업이 확장됨에 따라 신규 음악이 많아질 것으로 예상되었고, 수작업만으로 컨텐츠를 제작하기에는 그 작업량을 감당하기 어렵다고 판단했습니다.\

                78개의 음원에 대해 수작업으로 만든 노트패턴을 학습하여, 차후 새로 추가되는 음악에 대해서 알맞은 노트패턴을 생성하는 모델을 만드는 프로젝트입니다.\
                `
            },
            {
                "name": "Batch Integration with Adversarial AutoEncoder",
                "at": "아주대학교 의료원",
                "description": `
                Bioinformatics 분야에서 고질적인 문제인 Batch Effect를 Adversarial AutoEncoder를 활용해 해결하는 방법에 관한 연구 입니다.
                Bioinformatics 분야에서는 유전체 데이터를 비교 분석하여 유의미한 생물학적 차이를 발견합니다. 환자에게서 떼어낸 조직을 유전체 데이터로 변환하는 과정에서 실험자, 온도, 습도 등의 외부 요인으로 인한 Noise가 필연적으로 생깁니다. 비교하고자 하는 두 유전체 데이터에 서로 다른 성격의 Noise가 생겨 원활한 비교 분석이 어렵습니다. 이러한 문제를 Batch Effect라고 하며, Batch Effect를 완화하는 작업을 Batch Integration이라고 합니다. 
                이 연구는 다양한 유전체 데이터 중에서도 Single-cell RNA sequencing 데이터에 대해 효과적인 Batch Integration을 적용하는 방법에 관한 연구입니다.
                 `,
            },
            {
                "name": "Content- and Link-Aware Node Embedding",
                "at": "아주대학교 대학원",
                "description": `
                석사 학위 논문으로, 주어진 네트워크 내 존재하는 노드들의 연결관계뿐만 아니라 노드의 내적 정보까지도 함께 반영한 임베딩을 구하는 방법을 제안합니다.\
                
                노드의 내적 정보에, 유사도에 비례하게 취합한 이웃 노드의 정보를 더해가면서 노드의 정보를 전파합니다.\
                반복적인 전파과정 끝에 노드 임베딩이 특정 조건하에 반드시 수렴함을 증명하였습니다.\
                학습 파라미터없이도 임베딩을 계산해낼 수 있을뿐만 아니라, 내적 정보 임베딩이 주어지지 않거나 그 품질이 낮아도 유의미한 임베딩을 계산해냅니다.\

                Karate Club 데이터셋에 대한 분류 실험에서, 무작위로 생성한 내적 정보 임베딩으로도 약 20%의 정확도 상승을 보였습니다.\
                그리고 Cora 데이터셋에 대한 분류 실험에서는 주어진 내적정보 임베딩을 활용하여 임베딩 전보다 약 10%의 정확도 상승을 보였습니다.\
                `,
            },
            {
                "name": "Visual Analysis System for Clustering Dementia Patients Based on Similarity of Dementia Phase Changing Pattern",
                "at": "아주대학교",
                "description": `
                치매 환자의 진단 데이터와 치매의 진행 양상을 효과적으로 시각화하여, 치매 진료 시 의사결정에 도움을 주는 시각화 방법에 관한 연구입니다.\
                학부 재학 중 학부생 연구 프로그램에 참여해 데이터시각화 연구실에서 진행한 프로젝트입니다.\
                이 연구는 IEEE VIS 2016에서 열린 BioVis workshop 포스터 부분에 채택되었습니다.\

                환자들의 치매 진행 양상에 따라 Hierarchical Clustering을 적용하여 환자군을 분류하고,\
                각 환자의 치매 진단용 설문 응답결과를 다른 축에 표기하여, \
                치매 진행 양상에 따른 환자군별 설문 응답의 패턴을 한눈에 판단하도록 했습니다.\
                `,
            },
            {
                "name": "Snapme Korea 웹서비스 제작 외주",
                "at": "SnapmeKorea",
                "description": `
                사진작가와 관광객을 매칭시켜주는 O2O 서비스인 스냅미코리아의 홈페이지를 제작을 의뢰받았습니다.\
                학부 재학 중 웹개발을 익히면서 친구와 같이 맡은 프로젝트이며 저는 백엔드 개발을 맡았습니다.\
                nginx + gunicorn + Django + PostgreSQL을 사용했으며, cafe24에서 호스팅하였습니다.\
                `,
            }
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