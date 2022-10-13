import './style.pcss';
import template from './index.html?raw';

import createMessage from '@views/message/script';

import replaceContent from '@helpers/replaceContent';

/*
    * @param {position} position to render
*/

function prepareWrapper(position) {

    // animation by position
    const positions = {
        bottomleft: "twrapper-message--bottom-left",
        bottomcenter: "twrapper-message--bottom-center",
        bottomright: "twrapper-message--bottom-right",
        topleft: "twrapper-message--top-left",
        topcenter: "twrapper-message--top-center",
        topright: "twrapper-message--top-right"
    };

    const selectId = positions[position?.toLowerCase()] ?? "twrapper-message--bottom-left";
    let elementWrapperMessage = document.getElementById(selectId);
    if (!elementWrapperMessage) {
        const parser = new DOMParser();
        const prepareTemplate = replaceContent({
            data: {
                "{{data-position}}": selectId
            },
            template
        });

        const wrapper = parser.parseFromString(prepareTemplate, "text/html").body.firstChild;
        document.body.insertAdjacentElement("beforeend", wrapper);
        elementWrapperMessage = wrapper;
    }
    return elementWrapperMessage;
}

/*
    * @param {data} data for message
    * @param {string} data.title - title for message
    * @param {string} data.type - type of message
    * @param {string} data.content - text content for message
    * @param {string} postion - position to render
    * @param {Integer} data.timeout - duration time
    * @param {boolean} data.removeEmpty - remove empty wrapper
*/

const defaultValues = {
    data: {
        title: "",
        content: "",
        timeout: 8000,
        type: "info",
        removeEmpty: true
    },
    position: "bottomleft"
}

const addMessage = (payload = defaultValues) => {
    const { data, position } = Object.assign({}, defaultValues, payload)
    const animationIn = {
        get left() { return "animate--in-left" },
        get right() { return "animate--in-right" },
        get bottomleft() { return this.left },
        get bottomright() { return this.right },
        bottomcenter: "animate--in-bottom-center",
        topcenter: "animate--in-top-center",
        get topleft() { return this.left },
        get topright() { return this.right },
    };

    const animationOut = {
        get left() { return "animate--out-left" },
        get right() { return "animate--out-right" },
        get bottomleft() { return this.left },
        get bottomright() { return this.right },
        bottomcenter: "animate--out-bottom-center",
        topcenter: "animate--out-top-center",
        get topleft() { return this.left },
        get topright() { return this.right },
    };

    const animateIn = animationIn[position?.toLowerCase()];

    const animateOut = animationOut[position?.toLowerCase()];

    const prepareData = { ...data, ...(animateIn && { animateIn }), ...(animateOut && { animateOut }) };

    const wrapper = prepareWrapper(position);
    if (position?.toLocaleLowerCase() === "topcenter") {
        wrapper.prepend(createMessage(prepareData));
    } else {
        wrapper.appendChild(createMessage(prepareData));
    }
}

export { addMessage };
