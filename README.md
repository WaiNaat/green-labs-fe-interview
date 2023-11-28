# 그린랩스 FE 기술 면접 과제

## 설정

1. 다운로드

```
git clone https://github.com/WaiNaat/green-labs-fe-interview.git
```
2. env 설정    
  2.1. Github 우상단 프로필 사진 클릭 후 Settings에 접속해서 맨 아래쪽 Developer Settings로 들어갑니다.     
  2.2. Personal access tokens (classic) 을 발급받습니다.      
  2.3. **Repository star 기능을 사용하므로 scope에서 repo 부분은 무조건 체크해야 해요!!**     
  2.4. 프로젝트 루트 디렉토리에 `.env.loacl` 파일을 만들고 발급받은 키를 넣습니다.
  ```
  VITE_GITHUB_AUTH_TOKEN={발급받은_토큰}
  ```

## 실행

1. 의존성 설치

```
pnpm i
```

2. Relay

```shell
pnpm relay,
```

3. 번들러 실행

```shell
pnpm run dev
```
