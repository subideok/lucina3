# 루시나 홈페이지 B안

아임웹 코드 위젯용 섹션 스크립트 모음. 각 `lucina-*.js` 가 자기 위치에 섹션을 그립니다.

## 파일
| 파일 | 섹션 |
|---|---|
| lucina-core.js | 공통 스타일 · 메뉴 · 후기 탭/슬라이드 · 사진 확대 · 문의 폼 (가장 먼저) |
| lucina-nav.js | 00-nav |
| lucina-hero.js | 01-hero |
| lucina-intro.js | 01b-intro |
| lucina-learn.js | 04-empathy |
| lucina-reviews.js | 03-reviews |
| lucina-director.js | 02-director |
| lucina-why.js | 05-diff |
| lucina-class.js | 06-class |
| lucina-courses.js | 08-courses |
| lucina-faq.js | 09-faq |
| lucina-contact.js | 10-cta |
| lucina-visit.js | 12-visit |
| lucina-footer.js | 13-footer |
| imweb-code-widget.txt | 아임웹 코드 위젯 붙여넣기용 |
| index.html | 로컬/GitHub Pages 미리보기 |
| assets/images/ | 이미지 |

## 아임웹 적용
1. 이 폴더 전체를 `subideok/lucina3` 리포 **main 브랜치 루트**에 업로드
2. `imweb-code-widget.txt` 내용을 아임웹 **코드 위젯 1개**에 붙여넣기
3. 섹션 순서를 바꾸려면 widget 안의 `<script>` 줄 순서만 바꾸면 됩니다. 섹션을 빼려면 그 줄을 지우면 됩니다.
4. 수정 후 반영이 늦으면 jsDelivr 캐시 → https://purge.jsdelivr.net/gh/subideok/lucina3@main/파일명 접속

## 자주 고치는 곳
- 수강료 · 모집 상태 → lucina-courses.js
- 후기 → lucina-reviews.js
- 재방문 · 방문 지역 → lucina-why.js
- 네이버 톡톡 → 카카오톡 채널: lucina-core.js 의 `TALK_URL`
