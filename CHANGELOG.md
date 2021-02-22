# Changelog

## 0.5.0 (2021-02-22)

### Changed

- upgrade: Bump package version from `0.4.0` to `0.5.0`
- deprecated: Remove `docs` directory in favor of `README` file
- refactor: Migrate `versions` to `CHANGELOG`
- bug: Return null or undefined values instead of throwing exception
- upgrade: Package dependencies --latest

## 0.5.0 (2021-02-04)

### Fixed

- bug: Replaced Lodash `startCase` implemenation; removes special chars

## 0.5.0 (2021-02-02)

### Changed

- chore: Update `changelogs` file structure
- enhancement: Add `symbols` support in 'letterCase'

## 0.5.0 (2021-01-30)

### Changed

- chore: Update type definitions root file
- chore: Migrate build script to standalone 'scripts'
- upgrade: Yarn to v2
- chore: Update package config files

## 0.5.0 (2021-01-12)

### Added

- feature: Add `initials` helper function

## 0.4.0 (2020-12-20)

### Changed

- upgrade: Bump package version to `0.4.0`
- upgrade: Package dependencies --latest

## 0.4.0 (2020-12-15)

- refactor: `letterCase` for performance & follow naming convention

## 0.3.0 (2020-11-14)

### Fixed

- bug: Fix regression checking span 'isNaN' in 'ms' method

## 0.3.0 (2020-11-10)

### Removed

- deprecated: `slug` helper function in favor of `letterCase`

## 0.3.0 (2020-11-03)

### Added

- feature: Add `ms` helper function

### Changed

- chore: Rename `parseTimestamp` to `timestamp`
- chore: Rename `sanitizeString` to `sanitize`
- chore: Rename `parseTextLinks` to `autolinks`

## 0.2.0 (2020-10-06)

### Changed

- upgrade: Package dependencies --latest

## 0.2.0 (2020-10-04)

### Added

- chore: Add `repository` property to `package.json`
- enhancement: Add `number` validation to `trimWhiteSpace`
- enhancement: Add `resolve` option to `joinPath`

### Changed

- refactor: Update package configuration files
- refactor: Update local build scripts

## 0.1.0 (2020-09-30)

### Changed

- update: Separate between `compile` & `build` workflows
- update: Package will live inside `build/dist` directory

## 0.1.0 (2020-09-29)

### Added

- feature: Add `parseUrl` helper function

### Changed

- upgrade: Package dependencies --latest

### Removed

- refactor: Remove changelogs `index.md` file

## 0.1.0 (2020-09-24)

### Changed

- refactor: Modules folder structure, move to `common`
- update: Pakcage configuration files & external import references
- chore: Code cleanup

## 0.1.0 (2020-09-20)

### Changed

- chore: Extend config files from `*.base.*`
- refactor: `docs/versions` folder structure

## 0.1.0 (2020-09-18)

### Changed

- Install `eslint-config` package, update configuration files
- update: Package dependencies & references, configuration file, docs
