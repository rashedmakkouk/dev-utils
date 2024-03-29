# Changelog

## 0.15.0 (2023-01-26)

### Changes

- chore: Update `Year` and contact handle in `LICENSE`

### Documentation

- docs: Add supported platform usage information in `README.md`

### Features

- feat: Bump package version from `0.15.1` to `0.15.2`
  - Update release `CHANGELOG.md`
- feat: Bump package version from `0.15.0` to `0.15.1`
  - Update release `CHANGELOG.md`
- feat: Upgrade package dependencies --latest

## 0.14.0 (2023-01-23)

### Changes

- chore: Refactor `toRGBa` helper implementation
  - Handle invalid `color` value
  - Update `color` type assignment
  - Apply supplied `alpha` for fallback color on invalid value
  - Update function, params and return description

### Documentation

- docs: Update package `CHANGELOG.md`
- docs: Update package `README.md`
  - Add `keyExtractor` helper section
  - Update `random` helper section
  - Update `isValid` helper section
  - Update `timestamp` helper section
  - Update `toArray` helper section
  - Update `toNumeric` helper section
  - Update `toRGBa` helper section
  - Update helpers parameters and usage description
  - General updates and enhancements

### Features

- feat: Refactor `toArray` helper implementation
  - Rename `toNumber` option to `parseNumber` (Breaking change)
  - Update `Return` type definition
  - Migrate to `trimWhitespace` helper instead of inline RegExp when value is a string
- feat: Refactor `toNumeric` helper implementation
  - Add support for `abs` to `math` option
  - Add `precision` option support
- feat: Refactor `random` helper implementation
  - Add `decimal` and `precision` options support to `number` type
  - Use Math `trunc` instead of `floor` on `decimal === false`
  - Add `prefix` and `suffix` options support to `temp` type
  - Refactor generated random `number` Math formula
  - Add explicit `options` type definitions based on selected random `type`
  - Add explicit return type assignment based on supplied random `type`
- feat: Code updates and enhancements
  - Add `string` validation to `text` in `autolinks`
  - Update `string` validation for `text` in `initials`
  - Add `nullish` validations to `string` value in `isValid`
  - Minor refactoring in `joinPath`
  - Add helper function description in `keyExtractor`
  - Add `timeSpan` value validation in `ms` (will be migrated to vercel/ms in later release)
  - Fix helper and return description typos in `ms`
  - Refactor `date` argument to accept empty value in `timestamp`, fallback to `Now`
  - Minor refactoring in `timestamp`
  - Rename `FieldValue` type definition to `FieldValues`
  - Refactor helpers to comply with new linting rules
  - Update function description in all helpers
  - Add `@returns` tag and description to all helpers
- feat: Bump package version from `0.14.9` to `0.15.0`
  - Install missing peer dependency `@types/node`
  - Add `v0.15.0` release changes section in `README.md`

## 0.14.0 (2023-01-18)

### Features

- feat: Update package configuration files
  - Upgrade package dependencies --latest
  - Upgrade Yarn to `3.3.1`
  - Update TypeScript compiler ECMAScript target version to `2022`
  - Add `tsconfig.eslint.json` configuration file
  - Add `peerDependencies` in `package.json`
  - Remove `devDependencies` installed as part of `@rashedmakkouk/eslint-config`
  - Update ignored words in `cspell.json`
  - Update extended path in `.markdownlint.json`

## 0.14.0 (2023-01-11)

### Changes

- chore: Minor code updates and fixes
  - Add `Issue` numbers to pending work
  - Update `words` in `cspell.json` config file
  - Fix typos

### Features

- feat: Bump package version from `0.14.8` to `0.14.9`
  - Update package changelog

## 0.14.0 (2023-01-09)

### Changes

- chore: Extract `LetterCaseTypes` type definition from `LetterCaseOptions`

## 0.14.0 (2022-11-06)

### Changes

- chore: Fix typos and spelling errors

### Features

- feat: Bump package version from `0.14.7` to `0.14.8`
  - Upgrade package dependencies --latest
  - Update package CHANGELOG.md
  - Add `Code Spell Checker` extension configuration

## 0.14.0 (2022-10-28)

### Documentation

- docs: Add `random` method installation and usage instructions

## 0.14.0 (2022-10-23)

### Changes

- chore: Upgrade package dependencies --latest
- chore: Upgrade Yarn from `3.2.0` to `3.2.4`

### Features

- feat: Bump package version from `0.14.6` to `0.14.7`
  - Update package CHANGELOG.md
  - Update package README.md

## 0.14.0 (2022-06-11)

### Documentation

- docs: Update methods `Example` content

### Features

- feat: Bump package version from `0.14.5` to `0.14.6`

## 0.14.0 (2022-06-08)

### Changes

- chore: Update package license to `BSD 3-Clause License`

### Features

- feat: Bump package version from `0.14.4` to `0.14.5`
- feat: Bump package version from `0.14.3` to `0.14.4`
- feat: Bump package version from `0.14.2` to `0.14.3`
- feat: Bump package version from `0.14.1` to `0.14.2`

## 0.14.0 (2022-06-05)

### Documentation

- docs: Add method Parameters `Type`

### Features

- feat: Bump package version from `0.14.0` to `0.14.1`

## 0.13.0 (2022-05-27)

### Changes

- chore: Apply code enhancements and formatting
  - Update `escape` helper
  - Update `joinPath` helper
  - Update `keyExtractor` helper
  - Update `parseUrl` helper
  - Update `random` helper
  - Update `splitArray` helper
  - Update `timestamp` helper
  - Update `toRGBa` helper

### Documentation

- docs: Update `README.md` file content
  - Update Methods `Parameters`
  - Update Methods `Description`
  - Add Method `Returns` output type and description
  - Add Method usage and output `Example`

### Features

- feat: Bump package version from `0.13.2` to `0.14.0`
- feat: Update RegExp patterns
  - Update `initials` helper
  - Update `letterCase` helper
- feat: Add support to replace string ending with `ies` with `y` in `singular` helper
- feat: Handle invalid payload in `toArray` helper
  - Trim leading, trailing and multiple white spaces on string value
  - Remove empty array items after string value split
  - Return `NaN` when mapping values to Number
- feat: Add `options.allowEmpty` argument support in `isValid` helper

### Bug Fixes

- fix: Check if `mime` exists and validate on `allowMime` in `isBase64` helper

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

- chore: Migrate `versions` to `CHANGELOG`

### Removed

- chore: Remove `docs` directory in favor of `README` file

### Features

- feat: Bump package version from `v0.4.0` to `v0.5.0`
- chore: Upgrade package dependencies --latest

## 0.5.0 (2021-02-04)

### Bug Fixes

- fix: Replace Lodash `startCase` implementation; remove special chars

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

- chore: `letterCase` for performance & follow naming convention

## 0.3.0 (2020-11-14)

### Bug Fixes

- fix: Implement span `isNaN` validation in `ms` method

## 0.3.0 (2020-11-10)

### Removed

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

- chore: Update package configuration files
- chore: Update local build scripts

### Features

- chore: Add `repository` property to `package.json`
- feat: Add `number` validation to `trimWhiteSpace`
- feat: Add `resolve` option to `joinPath`

## 0.1.0 (2020-09-30)

### Features

- feat: Separate between `compile` & `build` workflows
- feat: Package will live inside `build/dist` directory

## 0.1.0 (2020-09-29)

### Removed

- chore: Remove changelogs `index.md` file

### Features

- feat: Add `parseUrl` helper fn
- feat: Package dependencies --latest

## 0.1.0 (2020-09-24)

### Changes

- chore: Modules folder structure, move to `common`
- chore: Update package configuration files & external import references
- chore: Code cleanup

## 0.1.0 (2020-09-20)

### Changes

- chore: Extend config files from `*.base.*`
- chore: `docs/versions` folder structure

## 0.1.0 (2020-09-18)

### Features

- feat: Install `eslint-config` package, update configuration files
- feat: Upgrade package dependencies & references, configuration file, docs
