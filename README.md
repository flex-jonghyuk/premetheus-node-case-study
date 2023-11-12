# nodejs 서버 모니터링 케이스 스터디

특정 서버 로직 유형에 따라 nodejs의 모니터링 매트릭이 어떻게 변하는지 관찰합니다.

## 실행하기 전에

- [prometheus를 설치해주세요.](https://prometheus.io/docs/prometheus/latest/installation/)
- [grafana를 설치해주세요.](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)

## 기본 설정

- 기본은 express 서버입니다.
- [prom-client]()로 기본 매트릭을 추출하고,

## 로직 유형

### 1. Memory Usage의 증가(Memory Intensive Job)

엔드포인트: `/memory`

### 2. CPU Usage의 증가(CPU Intensive Job)

엔드포인트: `/cpu`

### 3. Event Loop Lag의 증가

엔드포인트: `/event-loop`

### 4. Active Resource의 증가

엔드포인트: `/active-resource`

#### 4-1) 소켓 연결 증가

### 5. 서버 프레임워크별 차이

서버 프레임워크별 비교: `express` vs `fastify` vs `hono`
