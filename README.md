# Description
A **Fully Responsive** Single Page Application (**SPA**) that displays houses, people and quotes from the series Game
of Thrones (GOT).

Please check the PR
https://github.com/barrydilan/vueGot/pull/1

# Live App 
https://barrydilan.github.io/vueGot/

# Screenshots

<img width="1440" alt="Снимок экрана 2024-01-18 в 15 00 02" src="https://github.com/barrydilan/vueGot/assets/90588253/f8204f7b-4716-4624-bcd5-b6bea7b5faee">

# Checklist:
- [x] In the navigation area, the items "Houses", " Persons", "Quotes" should be present
- [x] A searchable list of all houses from GOT should be displayed under "Houses". If you click on the
name of a house, the members of that house are displayed on a subpage.
- [x] A searchable list of all persons from GOT, including the associated house, should be displayed
under "Persons". If you click on the name of a person, details about this person are displayed on
a subpage (name, house, quotations).
- [x] Furthermore, there should be a button that replaces the list of quotations of this person with
other quotations.
- [x] In the "Quotes" section, there is a list of five quotes by default. The user can use a button to
replace this list with five other random quotes.
- [x] As there are references in the API to the other entities for all houses, persons and quotations,
links to the respective entity should be included in the individual lists.
- [x] Some effort to a nice look and feel :)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
