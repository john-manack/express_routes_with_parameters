'use strict';

const express = require('express');
const router = express.Router();

const characterArray = require('../db');

router.get('/', (req, res) => {
    let htmlData = `<ul>`;
    characterArray.map((character) => {
        htmlData += `<li><a href="./greet/${character.name}">${character.name}</a></li>`
    })
    htmlData += `</ul>`;
    res.send(htmlData);
});

router.get('/:identifier', (req, res) => {
    const { identifier } = req.params;
    const character = characterArray.find((character) => {
        if (character.name === identifier) {
            return character;
        }
    });
    if (character) {
        res.send(`<h1>Hello, ${character.name}!</h1>`)
    } else {
        res.send(`There is no character with the name ${identifier} :(`)
    }
})

module.exports = router;