# tsconfig 파일
```
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noEmit": false,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "react",
        "incremental": true,
        "declaration": true,
        "outDir": "./dist",
        "sourceMap": true
    },
    "include": ["**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
}
```

# package.json 파일
```
{
  "name": "yun-test-comp",
  "version": "0.0.8",
  "module": "dist/index.js",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "type": "module",
  "browser": "./browser/specific/main.js",
  "private": false,
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/styled-components": "^5.1.26",
    "react-scripts": "5.0.1",
    "styled-components": "^6.0.7",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "prepare": "rm -rf dist && tsc"
  },
  "babel": {
    "presets": ["@babel/preset-react"]
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/cli": "^7.22.10",
    "@babel/preset-react": "^7.22.5"
  }
}
```

- `npm publish` 명령어 실행 시, `scripts - prepare` 자동으로 실행

# 주의사항
- 빌드하고자 하는 폴더에 root 파일이 필요하다. (`index.tsx`)
- root 파일을 통하여 컴포넌트를 추출, 접근한다. (이때 경로 설정과 확장자 지원에 주의해야 한다.)
- root 파일을 통해 접근하지 않으면 sourcemap 파일이 생기지 않아, `module not found error` 를 받는다.
- 새로운 배포 시에는 반드시 `version` 을 변경해야 한다.