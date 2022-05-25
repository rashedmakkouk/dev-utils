# Changelogname

## 0.13.0 (2022-05-25)

### Documentation

- docs: Update `README.md` file
  - Update Methods parameters
  - Apply content enhancements for clarity
  - Fix typos

### Features

- feat: Bump package version from `0.13.1` to `0.13.2`
- feat: Upgrade package dependencies

## 0.13.0 (2022-05-24)

### Documentation

- docs: Update `Methods` parameters in `README.md` file

### Features

- feat: Bump package version from `0.13.0` to `0.13.1`
- feat: Refactor `toNumeric` helper
  - Update `options` parameter to optional in `toNumeric`
  - Use Math.trunc in place of regular expression for `decimal`
  - If `math` type is supplied, apply to value
- feat: Update `options` parameter to optional in `toArray`

## 0.12.0 (2022-05-23)

### Changes

- chore: Move publish `access` configuration to `package.json`

### Documentation

- docs: Update `README.md` file
  - Add list of available helper methods, description and parameters
  - Add package information
  - Add package installation instructions

### Features

- feat: Bump package version from `0.12.0` to `0.13.0`
- feat: Apply code enhancements and commenting
  - Update `autolinks` helper
  - Update `delay` helper
  - Update `escape` helper
  - Update `extractValues` helper
  - Update `initials` helper
  - Update `isBase64` helper
  - Update `isValid` helper
  - Update `joinPath` helper
  - Update `keyExtractor` helper
  - Update `letterCase` helper
  - Update `ms` helper
  - Update `normalize` helper
  - Update `parseUrl` helper
  - Update `random` helper
  - Update `sanitize` helper
  - Update `singular` helper
  - Update `splitArray` helper
  - Update `timestamp` helper
  - Update `toArray` helper
  - Update `toNumeric` helper
  - Update `toRGBa` helper
  - Update `trimWhitespace` helper

## 0.11.0 (2022-05-17)

### Features

- feat: Bump package version from `0.11.1` to `0.12.0`
  - Upgrade package dependencies --latest
  - Update publish package configuration files
  - Update package `LICENSE` to `MIT`
  - Update package visibility to `public`
  - Add GitHub action configuration file
  - Refactor `build` script
  - Rename package

## 0.11.0 (2022-05-08)

### Features

- feat: Bump package version from `0.11.0` to `0.11.1`
  - Update package changelog
  - Upgrade package dependencies --latest
  - Upgrade Yarn package manager

## 0.10.0 (2022-05-07)

### Features

- chore: Update package.json `engines` versions
- chore: Upgrade Yarn package manager
- feat: Bump package version from `0.10.3` to `0.11.0`
  - Update package changelog
- feat: Rename package from `utils` to `dev-utils`

## 0.10.0 (2022-04-16)

### Features

- feat: Bump package version from `0.10.2` to `0.10.3`
  - Upgrade package dependencies --latest
  - Upgrade Yarn package manager

## 0.10.0 (2022-01-23)

### Features

- feat: Bump package version from `0.10.1` to `0.10.2`
  - Upgrade package dependencies --latest

## 0.10.0 (2021-09-26)

### Bug Fixes

- fix: Refactor text RegExp to correctly handle hyphen `-` in `initials`

## 0.10.0 (2021-09-18)

### Features

- feat: Bump package version from `0.10.0` to `0.10.1`
  - Upgrade package dependencies --latest

## 0.9.0 (2021-08-31)

### Features

- feat: Bump package version from `0.9.2` to `0.10.0`
- feat: Refactor `random` helper fn for performance & consistency

## 0.9.0 (2021-08-30)

### Features

- feat: Bump package version from `0.9.1` to `0.9.2`
  - Upgrade package dependencies --latest

## 0.9.0 (2021-08-22)

### Features

- feat: Bump package version from `0.9.0` to `0.9.1`
- chore: Upgrade package dependencies --latest

## 0.8.0 (2021-08-15)

### Features

- feat: Bump package version from `0.8.0` to `0.9.0`
- chore: Upgrade package dependencies --latest

## 0.8.0 (2021-07-20)

### Bug Fixes

- fix: Use last element in the array as family name in `initials`

## 0.8.0 (2021-07-17)

### Features

- chore: Upgrade package dependencies --latest

## 0.7.0 (2021-07-14)

### Features

- feat: Bump package version from `0.7.0` to `0.8.0`
- feat: Add `splitArray` helper fn

## 0.7.0 (2021-06-27)

### Features

- feat: Add `format` support in `timestamp` helper fn

## 0.6.0 (2021-06-27)

### Features

- feat: Bump package version from `0.6.0` to `0.7.0`
- feat: Apply code enhancements
  - Deprecate `maxLength` option in `letterCase`
  - Add text length validation in `initials`
- chore: Upgrade package dependencies --latest
  - Upgrade Yarn package manager

## 0.6.0 (2021-05-21)

### Bug Fixes

- fix: Trim leading and trailing dashes when using `kebab` case in `letterCase`

## 0.6.0 (2021-05-11)

### Bug Fixes

- fix: Handle text input regex invalid parts output

## 0.6.0 (2021-04-29)

### Features

- chore: Upgrade package dependencies --latest

## 0.5.0 (2021-04-19)

### Features

- feat: Bump package version from `v0.5.0` to `v0.6.0`
- feat: Add `isBase64` helper fn

## 0.5.0 (2021-03-16)

### Features

- chore: Upgrade package dependencies --latest

## 0.5.0 (2021-02-22)

### Bug Fixes

- fix: Return null or undefined values instead of throwing exception

### Changes

- chroe: Migrate `versions` to `CHANGELOG`

### Deprecated

- chore: Remove `docs` directory in favor of `README` file

### Features

- feat: Bump package version from `v0.4.0` to `v0.5.0`
- chore: Upgrade package dependencies --latest

## 0.5.0 (2021-02-04)

### Bug Fixes

- fix: Replace Lodash `startCase` implemenation; remove special chars

## 0.5.0 (2021-02-02)

### Changes

- chore: Update `changelogs` file structure

### Features

- feat: Add `symbols` support in `letterCase`

## 0.5.0 (2021-01-30)

### Features

- chore: Update type definitions root file
- chore: Migrate build script to standalone `scripts`
- chore: Upgrade Yarn from `v1` to `v2`
- chore: Update package config files

## 0.5.0 (2021-01-12)

### Features

- feat: Add `initials` helper fn

## 0.4.0 (2020-12-20)

### Features

- feat: Bump package version from `v0.3.0` to `v0.4.0`
- feat: Upgrade package dependencies --latest

## 0.4.0 (2020-12-15)

### Changes

- chroe: `letterCase` for performance & follow naming convention

## 0.3.0 (2020-11-14)

### Bug Fixes

- fix: Implement span `isNaN` validation in `ms` method

## 0.3.0 (2020-11-10)

### Deprecated

- chore: Remove `slug` helper fn in favor of `letterCase`

## 0.3.0 (2020-11-03)

### Changes

- chore: Rename `parseTimestamp` to `timestamp`
- chore: Rename `sanitizeString` to `sanitize`
- chore: Rename `parseTextLinks` to `autolinks`

### Features

- feat: Add `ms` helper fn

## 0.2.0 (2020-10-06)

### Features

- feat: Upgrade package dependencies --latest

## 0.2.0 (2020-10-04)

### Changes

- chroe: Update package configuration files
- chroe: Update local build scripts

### Features

- chore: Add `repository` property to `package.json`
- feat: Add `number` validation to `trimWhiteSpace`
- feat: Add `resolve` option to `joinPath`

## 0.1.0 (2020-09-30)

### Features

- feat: Separate between `compile` & `build` workflows
- feat: Package will live inside `build/dist` directory

## 0.1.0 (2020-09-29)

### Deprecated

- chroe: Remove changelogs `index.md` file

### Features

- feat: Add `parseUrl` helper fn
- feat: Package dependencies --latest

## 0.1.0 (2020-09-24)

### Changes

- chroe: Modules folder structure, move to `common`
- update: Pakcage configuration files & external import references
- chore: Code cleanup

## 0.1.0 (2020-09-20)

### Changes

- chore: Extend config files from `*.base.*`
- chroe: `docs/versions` folder structure

## 0.1.0 (2020-09-18)

### Features

- feat: Install `eslint-config` package, update configuration files
- feat: Upgrade package dependencies & references, configuration file, docs
