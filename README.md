# 🚀 Zenefit

Zenefit web-client 소스코드입니다!

## 👨‍💻 프로젝트 담당 인력

| 💻 FE-Developer | 💻 FE-Developer |
| :-------------: | :-------------: | 
| <a href='https://github.com/tlshoon'><img width="150" height="150" src="https://avatars.githubusercontent.com/u/103591752?v=4"></a>  |    <a href='https://github.com/dhdh2040'><img width="150" height="150" src="https://avatars.githubusercontent.com/u/87574833?v=4"></a>    | 
|    @kongnayeon    |      @tlshoon         |    


## 🗂 사용 기술 스택

- package manage

  - yarn (v1)

- deploy

  - 미정

- client

  - styling: Styled-components
  - Typescript
  - state-management

    client: zustand

    server: react-query (v4)

## 👨‍⚖️ Conventions

### 🪵 Branch

```txt
* feat-*
|
| * feat-*
|/
* develop
|
* main
```

### ✍️ Commit

feat : 기능 추가
chore : gradle 수정, package.json 같이 프로젝트 환경에 있어서의 변경점
fix : 버그 픽스
docs : 문서 관련 변경점
release : release 버전 merge 완료 시

> ⛔️ 커밋을 세분화하는 것을 습관화 합시다.

---

Branch 단위

- master(main) : 최종 단위 브랜치. Release 완료 시 master에 최종적으로 병합해주세요.
- develop : 개발 브랜치. feature 관련 브랜치에서 작업이 완료되면 해당 브랜치로 병합 부탁드립니다.
- feat: 기능 추가 및 구현을 위한 브랜치. develop 브랜치로부터 분기되는 브랜치입니다.
- hotfix: 배포한 버전에 긴급한 수정을 진행해야 하는 경우, master 브랜치에서 분기하는 브랜치입니다.
  문제가 되는 부분의 수정이 완료되면, master 브랜치에 다시 병합하여 배포를 진행해주세요.
  해당 브랜치에서의 변경 사항은 꼭 dev 브랜치에도 병합 부탁드립니다.

> 이 프로젝트에는 쓰이지 않지만 브랜치 컨벤션

- release : 추가된 기능 병합 및 테스트를 위한 브랜치.
  dev 브랜치에서 배포 할 수 있는 수준의 기능이 모이면, 또는 정해진 배포 일정이 되면 Release 브랜치로 분기해 주시기 바랍니다.
  배포 사이클의 시작이 되는 브랜치이기 때문에, 배포 버전명을 꼭 명시해 주세요.

Branch 형식은 다음으로 맞춰주세요.

[Branch 종류]-[Branch 이름]
ex: feat-main, release-0314, hotfix-0314-QA

### 📝 Code Convention

1. 함수 네이밍과 변수명은 camelCase(카멜케이스)를 원칙으로 합니다.
2. 폴더구조는 기존 보일러플레이트를 따릅니다.
3. style 코드는 \*.style.ts 로 파일 네이밍을 해서 분리합니다.
4. 관심사의 분리와 추상화를 항상 고려합니다.
5. 필요하다고 생각되는 곳에는 주석을 꼭 작성합니다.
6. CDD를 원칙으로 개발하는 것을 습관화해봅시다!

### Known ISSUE

### 인수인계 및 공유 내용