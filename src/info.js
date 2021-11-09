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
                사내 보유한 리듬게임용 노트 패턴을 학습해서 새로운 음악이 주어졌을 때 그에 맞는 노트 패턴을 생성하는 모델을 확보하는 프로젝트입니다. 연구가 아닌 프로덕트가 주 목적인 프로젝트여서 지난 프로젝트와는 새로운 경험을 많이 했습니다. 
                주어진 음원으로부터 1) 노트가 등장할 타이밍을 특정한 후 2) 해당 노트가 등장하는 줄의 위치, 해당 노트의 길이 등 노트의 특성을 부여하는 Task를 수행하는 모델을 목표로 합니다. 노트가 등장하는 타이밍은 조금만 어색해도 사용자가 어색함을 느끼는 반면, 노트가 등장하는 위치나 길이 등은 정답이 없습니다. 따라서 노트가 등장하는 타이밍은 Discriminative 문제로, 노트의 특성을 부여하는 것은 Generative 문제로 정의했습니다.
                
                가장 먼저 주어진 데이터를 학습 가능한 형태로 가공하는 작업부터 시작했습니다. 
                
                
                
                초기에는 HYBE 소속 아티스트들의 노래 약 70곡과 각 곡의 노트패턴 수작업물을 보유하고 있었습니다.
                Audio와 노트 패턴의 구조를 정제해야했음.
                Convolution
                GAN 구조를 적용하기도 함.
                
                학습데이터에 여성보컬곡이 없어서, 여성 보컬 곡에 대해서는 performance가 낮았음.
                근본적인 해결방법은 아니지만, 학습데이터 음원의 pitch를 조절하여 음역대가 높은 데이터를 augmentation함.
                그 전보다 여성 보컬곡에 대한 performance가 나아짐을 확인.

                데이터 크기에 비해 모델의 커서 overfitting이 일어남.
                모델의 크기를 줄이니 performance가 떨어짐.
                End-to-End 구조를 버리고, 해결하려는 문제를 쪼개 파이프라인 구조로 변경
                

                
                End-to-End 모델을 학습시키기에는 데이터 양이 부족해, 파이프라인 모델로 구성했습니다.
                음악으로부터 노트 패턴이 그려질 타이밍을 특정 하는 단계, 왼손과 오른손을 구분하여 패턴을 생성하는 단계, 원하는 개수의 Lane으로 확장하는 단계로 이루어져 있습니다.`,
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
                석사 학위 논문으로, Markov Chain을 활용하여 주어진 노드 임베딩의 품질을 개선하는 방법을 제안하고, 두 노드의 연결 방향을 고려한 새 유사도 척도를 제안한 연구입니다.
                어떤 네트워크를 구성하는 노드의 임베딩을 노드의 고유한 내적정보의 임베딩과, 이웃 노드들의 정보의 임베딩의 합으로 정의하였습니다. 매 iteration마다 노드의 정보를 이웃 노드에 전달하는 동시에, 이웃 노드로부터 정보를 전달받아 자신의 임베딩에 반영하여 업데이트합니다. iteration을 게속 반복하면 특수한 조건하에 모든 노드의 임베딩이 수렴합니다. 이 수렴성은 Markov Chain의 수렴성을 활용해 증명할 수 있습니다.
                이웃노드로부터 전달받은 임베딩은 그 노드와의 유사도에 비례하여 반영됩니다. 노드 임베딩간 유사도를 측정할 때 주로 코사인 유사도를 사용하지만, 코사인 유사도의 대칭성 때문에 링크의 방향성은 반영할 수 없는 한계가 있습니다. 두 노드의 임베딩을 서로 다른 매핑 함수를 이용해 변환한 후 코사인 유사도를 계산하면 링크의 방향성에 따라 서로 다른 유사도를 계산할 수 있습니다. 이 두 매핑 함수를 Neural Network로 구성하여 주어진 네트워크에 맞게 학습하여 적절한 매핑 함수를 얻을 수 있습니다. 
                방향성을 반영할 수 있는 새 유사도 척도 덕분에 Directed Graph의 노드 임베딩에서 이점을 볼 수 있었지만, 매핑 함수들을 학습할 때, cost function의 gradient의 time complexity가 매우 큰 문제가 있었습니다. Gradient 식이 Poisson Binomial Distribution의 평균인 점에 착안하여, gradient를 직접 계산하지 않고 근사하여 계산하는 방법을 제안함으로써 이 문제를 해결했습니다.
                `,
            },
            {
                "name": "Visual Analysis System for Clustering Dementia Patients Based on Similarity of Dementia Phase Changing Pattern",
                "at": "아주대학교",
                "description": `
                치매 환자의 진단 데이터와 치매의 진행 양상을 효과적으로 시각화하여, 치매 진료 시 의사결정에 도움을 주는 시각화 방법에 관한 연구입니다.학부 재학 중, 데이터 시각화 연구실을 통해 참여한 학부생 연구 프로그램에서 진행한 프로젝트입니다.이 연구는 IEEE VIS 2016에서 열린 BioVis workshop 포스터 부분에 채택되었습니다.
                치매는 경미한 인지장애부터 시작하지만, 모든 치매 환자가 중증 단계인 알츠하미어 단계까지 앓는 것은 아닙니다.어떤 환자는 알츠하이머까지 앓지 않고 경미한 인지장애를 유지하거나 과도기적 단계에서 증상이 완화되는 경우도 있습니다.
                환자들의 치매 진행 양상에 따라 Hierarchical Clustering을 적용하여 환자군을 분류했습니다.그 후, 각 환자의 설문 응답결과를 다른 축에 표기하여, 치매 진행 양상에 따른 환자군별 설문 응답의 패턴을 한눈에 판단하도록 했습니다.
                `,
            },
            {
                "name": "Snapme Korea 웹서비스 제작 외주",
                "at": "SnapmeKorea",
                "description": `
                사진작가와 관광객을 매칭시켜주는 O2O 서비스인 스냅미코리아의 홈페이지를 제작을 의뢰받았습니다.

                학부 재학중 웹개발을 익히면서, 친구와 같이 맡은 프로젝트로 저는 백엔드 개발을 맡았습니다.
                    Django + PostgreSQL을 사용했으며, cafe24에서 호스팅하였습니다.
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