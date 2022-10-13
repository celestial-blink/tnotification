import './styles/_general.css';

import { addMessage } from '@layouts/script';

document.addEventListener('DOMContentLoaded', _ => {
    document.getElementById("test1").addEventListener("click", _ => {
        addMessage({
            data: {
                title: "Hola mundo Hola mundo Hola mundo Hola mundo Hola mundo Hola mundo Hola mundo Hola mundo",
                content: "Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input",
                type: "info",
                timeout: 100000
            },
            position: "bottomleft"
        });
    });
    document.getElementById("test2").addEventListener("click", _ => {
        addMessage({
            data: {
                title: "Hola mundo",
                content: "Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input",
                type: "info"
            },
            position: "bottomcenter"
        });
    });
    document.getElementById("test3").addEventListener("click", _ => {
        addMessage({
            data: {
                title: "Hola mundo",
                content: "Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input",
                type: "info"
            },
            position: "bottomright"
        });
    });
    document.getElementById("test4").addEventListener("click", _ => {
        addMessage({
            data: {
                title: "Hola mundo",
                content: "Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input",
                type: "info"
            },
            position: "topleft"
        });
    });
    document.getElementById("test5").addEventListener("click", _ => {
        addMessage({
            data: {
                title: "Hola mundo",
                content: "Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input",
                type: "info"
            },
            position: "topcenter"
        });
    });
    document.getElementById("test6").addEventListener("click", _ => {
        addMessage({
            data: {
                title: "Hola mundo",
                content: "Lorem input Lorem input Lorem input Lorem input Lorem input Lorem input",
                type: "info"
            },
            position: "topright"
        });
    });
});