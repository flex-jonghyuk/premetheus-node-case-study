# nodejs 서버 모니터링 케이스 스터디

특정 서버 로직 유형에 따라 nodejs의 모니터링 매트릭이 어떻게 변하는지 관찰합니다.

## 실행하기 전에

- [prometheus를 설치해주세요.](https://prometheus.io/docs/prometheus/latest/installation/)
- [grafana를 설치해주세요.](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)

## 기본 설정

- 기본은 express 서버입니다.
- [prom-client](https://github.com/siimon/prom-client)로 기본 매트릭을 추출하고, ELU, Request와 관련된 매트릭은 만들어서 제공합니다.
- prometheus 매트릭을 사용해 grafana로 대시보드를 만듭니다.
- [k6](https://k6.io/)를 사용해 아래 엔드포인트별 시나리오에 따른 부하 테스트를 해봅니다.

## 로직 유형

### 1. Memory Usage의 증가(Memory Intensive Job)

엔드포인트: `/memory`

#### 1-1) 메모리 leak으로 인한 OOM

#### 1-2) 빈번한 GC 작업

### 2. CPU Usage의 증가(CPU Intensive Job)

엔드포인트: `/cpu`

#### 2-1) CPU Intensive JOB

### 3. Event Loop Lag의 증가

엔드포인트: `/event-loop`

#### 3-1) 무거운 동기 로직(동기 I/O 작업)

#### 3-2) 긴 타이머(setTimeout)

#### 3-3) 과도한 마이크로 태스크 큐 점유(Promise)

### 4. Active Resource의 증가

엔드포인트: `/active-resource`

#### 4-1) 소켓 연결 증가

#### 4-2) 파일 디스크립터 사용 후 닫지 않음(I/O)

### 5. 서버 프레임워크별 차이

서버 프레임워크별 비교: `express` vs `fastify` vs `hono`

## 배운 점

- 죽거나 타임아웃 나면 매트릭 끊김ㅜㅜ
- 힙메모리에 largeObject라는 것도 있다 - GC가 되나? 싶은것 들이 있어서.. OOM 내기 꼭 좋다
- 빡센 동기 작업도 이벤트 루프를 많이 막는다
