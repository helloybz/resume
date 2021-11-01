export var info = {
    "name": "최영범",
    "position": "ML Developer",
    "email": "helloybz@gmail.com",
    "github": "https://github.com/helloybz",
    "career": [
        {
            "name": "수퍼브",
            "department": "데이터/AI",
            "position": "ML Engineer",
            "from": "2020.07.06.",
            "to": "2021.08.31."
        },
        {
            "name": "아주대학교 의료원",
            "department": "생리학교실",
            "position": "ML Researcher",
            "from": "2019.11.01.",
            "to": "2020.06.30."
        }
    ],
    "education": [
        {
            "name": "아주대학교 대학원",
            "department": "컴퓨터공학과",
            "degree": "석사 졸업",
            "from": "2017.03.",
            "to": "2019.08."
        },
        {
            "name": "아주대학교 정보통신대학",
            "department": "미디어학과",
            "degree": "학사 졸업",
            "from": "2011.03.",
            "to": "2017.08."
        }
    ],
    "project": [
        {
            "name": "Note Pattern Generator",
            "at": "수퍼브",
            "description":
                `- 수작업으로 만든 리듬게임의 노트 패턴을 학습해, 새로운 음악이 주어졌을 때 그에 맞는 노트 패턴을 생성하는 모델을 확보하는 프로젝트입니다.
                - End-to-End 모델을 학습시키기에는 데이터 양이 부족해, 파이프라인 모델로 구성했습니다.
                - 음악으로부터 노트 패턴이 그려질 타이밍을 특정 하는 단계, 왼손과 오른손을 구분하여 패턴을 생성하는 단계, 원하는 개수의 Lane으로 확장하는 단계로 이루어져 있습니다.`,
        },
        {
            "name": "Batch Integration with Adversarial AutoEncoder",
            "at": "아주대학교 의료원",
            "description": `- Bioinformatics 분야에서 고질적인 문제인 Batch Effect를 Adversarial AutoEncoder를 활용해 해결하는 방법에 관한 연구 입니다.
            - Bioinformatics 분야에서는 유전체 데이터를 비교 분석하여 유의미한 생물학적 차이를 발견합니다. 
            - 환자에게서 떼어낸 조직을 유전체 데이터로 변환하는 과정에서 실험자, 온도, 습도 등의 외부 요인으로 인한 Noise가 필연적으로 생깁니다.
            - 비교하고자 하는 두 유전체 데이터에 서로 다른 성격의 Noise가 생겨 원활한 비교 분석이 어렵습니다. 
            - 이러한 문제를 Batch Effect라고 하며, Batch Effect를 완화하는 작업을 Batch Integration이라고 합니다. 
            - 이 연구는 다양한 유전체 데이터 중에서도 Single-cell RNA sequencing 데이터에 대해 효과적인 Batch Integration을 적용하는 방법에 관한 연구입니다. `,
        },
        {
            "name": "Content- and Link-Aware Node Embedding",
            "at": "아주대학교 대학원",
            "description": `- 어떤 노드 v의 Embedding을 자신의 내적 정보 Embedding과 이웃하는 노드들의 Embedding을 더한 값으로 정의합니다.
            - 이 때, 이웃하는 노드들의 Embedding은 노드 v와의 유사도에 비례하는 가중치를 곱하여 더한 Embedding으로 정의합니다.
            - 여러 Iteration에 걸쳐 모든 노드의 Embedding을 위 정의에 따라 업데이트 합니다.
            - 이웃하는 노드의 Embedding에 곱하는 가중치의 합이 1보다 작다면, Marcov Chain의 수렴성을 활용해 노드 Embedding이 수렴함을 증명할 수 있습니다.
            - Node embedding의 Stationary distribution를 최종 Embedding으로 정의하였고, Node classification, Link prediction 같은 Task에서 좋은 성능을 보였습니다.`,
        },
        {
            "name": "Visual Analysis System for Clustering Dementia Patients Based on Similarity of Dementia Phase Changing Pattern",
            "at": "아주대학교",
            "description": "",
        },
        {
            "name": "Snapme Korea 웹서비스 제작 외주",
            "at": "개인",
            "description": "",
        }
    ],
    "experience": [
        {
            "category": "Teaching Assistance",
            "items": [
                {
                    "what": "객체지향프로그래밍 파이썬 실습",
                    "at": "아주대학교",
                    "from": "2017.9.",
                    "to": "2019.6."
                },
                {
                    "what": "기계학습 파이썬 실습",
                    "at": "아주대학교",
                    "from": "2018.9.",
                    "to": "2018.10."
                },
                {
                    "what": "의생명정보학 기계학습 파이썬 실습",
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