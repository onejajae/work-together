# Work Together! 웹 기반 음성-텍스트 라벨링 분산 작업 앱

[multi-speaker-tacotron-tensorflow](https://github.com/carpedm20/multi-speaker-tacotron-tensorflow)에 사용할 데이터의 라벨링 작업에서 사용하기 위해 만들었습니다. 

웹 기반으로 동작하기 때문에 언제 어디서나 누구든지 어떤 디바이스에서라도 접속하여 데이터 라벨링 작업을 할 수 있습니다. 여러 명이 여러 소스에 접근하여 라벨링 작업이 가능합니다.

~~이걸로 약 15000개 가량의 음성-텍스트 페어를 수작업으로 작성해 봤는데 솔직히 목록 선택해서 자동재생 되는건 좋은데 그래도 불편함 ㅎㅎ;; ㅈㅅ.. ㅋㅋ!! 이걸로 15000개 작업한 내가 더 레전드~~

## 1. 설치 과정
빌드한 파일들은 따로 제공하지 않으므로 직접 빌드하여 사용하여야 합니다. 
설치부터 빌드 후 실행까지 5분도 안걸립니다.

### 1-1. 사전 준비물
* node.js
* vue-cli

### 1-2. 모듈 설치
```
npm install
```

### 1-3. 웹 페이지 개발 전용 서버 실행(optional)
```
npm run serve
```
**이 경우 백엔드 서버가 동작하지 않음**


### 1-4. 웹 페이지 빌드
```
npm run build
```

## 2. 디렉토리 구성
웹 페이지를 빌드하게 되면 `dist` 디렉토리가 생성되고, 여기에 빌드 결과물이 들어갑니다.
```
    work-together/
        ├── audio/
        │   ├── source_001/
        │   └── source_002/
        │       ├── source_002_001.wav
        │       ├── source_002_002.wav
        │       ├── source_002_003.wav
        │       ├── ...
        │       └── recognition.json
        ├── dist/
        │   ├── ...
        │   └── index.html
        ├── ...
        └── server.js
```
**`audio` 디렉토리 안에 있는 각각의 디렉토리에는 적당하게 분리된 텍스트와 `recognition.json` 파일이 있어야 합니다.**

`recognition.json` 파일은 다음과 같이 구성됩니다.
```
{
    "./audio/source_001/source_001_001.wav": "샘",
    "./audio/source_001/source_001_002.wav": "플",
    "./audio/source_001/source_001_003.wav": "입",
    "./audio/source_001/source_001_004.wav": "니",
    "./audio/source_001/source_001_005.wav": "다",
    "./audio/source_001/source_001_006.wav": "이런식으로 만드세요",
}
```
사전에 입력한 텍스트가 존재하지 않는다면 아무것도 없는 String을 넣어서 준비하셔도 됩니다.

## 3. 앱 실행
```
node server.js
```

## 4. 사용방법
0. 우측 상단의 불러오기 버튼 클릭!
1. 맨 왼쪽 리스트는 각 source의 디렉토리입니다.
2. 선택하면 디렉토리 안의 음성 파일들이 두번째 리스트에 나옵니다.
3. 음성 파일을 선택하면 음성이 자동 재생되고 텍스트를 입력할 수 있습니다.
4. 오디오 플레이어 밑에 있는 텍스트를 클릭하면 자동 완성됩니다. 적용 버튼을 클릭하거나 엔터를 입력하면 적용됩니다.
5. 여러 보이스들의 텍스트를 입력, 교정한 뒤 다른 source로 넘어가기 전에 **꼭 저장합니다.**
6. 모종의 이유로 `recognition.json` 파일이 잘못되었을 경우 초기 저장 과정에 생성된 `recognition.backup.json`을 활용하세요.

## 5. 주의사항(중요)
1. **같은 source를 여러사람이 작업하고 저장하면 마지막에 저장한것만 반영됨.**
2. **저장을 하지 않고 다른 source를 선택하면 이전에 작업한게 날아감**
3. 한 source 내에 voice가 많을 경우 웹 퍼포먼스 하락이 예상됨.

## 6. LICENSE
MIT License

본 repository는 샘플 데이터를 위해 [Korean Single speaker Speech Dataset(KSS)](https://www.kaggle.com/bryanpark/korean-single-speaker-speech-dataset)의 일부를 포함하고 있습니다.
