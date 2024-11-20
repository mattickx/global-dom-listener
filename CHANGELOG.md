# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.4] - 2024-11-20

- fix: make blur,error,focus,load,resize,scroll possible to capture
- docs: improve the working HTML example

## [0.0.3] - 2024-11-19

- fix: stop leaking isBrowser variable externally
- feat!: create a real typescript singleton type that can not be constructed more then once
- docs: added some more examples in README
- docs: remove .min from cdn url since dist files are minified already
- ci: implement and fix to publish on npm through CI
- fix: pre-commit hook no test as they are not implemented yet

## [0.0.2] - 2024-11-19

- perf: fail-fast if statement in handleEvent
- chore: added husky and commit linting
- chore: added a changelog
- chore: added github workflow

## [0.0.1] - 2024-11-19

- feat: initial project implementation and release
