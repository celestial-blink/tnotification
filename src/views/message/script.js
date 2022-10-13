import './style.pcss';

import template from './index.html?raw';

import replaceContent from '@helpers/replaceContent';

const createMessage = ({ title = "", content = "", type = "", animateIn = "", animateOut = "", timeout = 8000, removeEmpty = false, style = "" }) => {

    const icons = {
        error: "fa-times",
        warning: "fa-exclamation",
        success: "fa-check",
        info: "fa-info"
    };

    const themes = {
        error: `tmessage--error ${animateIn}`,
        warning: `tmessage--warning ${animateIn}`,
        success: `tmessage--success ${animateIn}`,
        info: `tmessage--info ${animateIn}`
    }

    const prepareContent = replaceContent({
        data: {
            "{{data-custom-style}}": !!style && `style="${style}"` || "",
            "{{data-tittle-content}}": title,
            "{{data-text-content}}": content,
            "{{data-icon}}": icons[type?.toLowerCase()] ?? "fa-info",
            "{{data-theme}}": themes[type?.toLowerCase()] ?? ""
        },
        template
    });
    const parser = new DOMParser();
    const wrapper = parser.parseFromString(prepareContent, "text/html").body.firstChild;

    //create event for first render
    const eventBegin = new Event("beginBuild");

    //change animation out 
    const addClassAnimation = element => {
        element.classList.replace(animateIn, animateOut);
    }

    //remove wrapper if is empty
    const removeWrapper = element => {
        setTimeout(_ => {
            if (element?.textContent?.trim() === "" && removeEmpty) {
                element.remove();
            }
        }, 100, element);
    }

    const handleCloseAuto = (event) => {
        setTimeout(_ => {
            event.target.querySelector("button")?.removeEventListener("click", handleCloseClick);
            addClassAnimation(event.target);
            setTimeout(_ => {
                removeWrapper(event.target.closest(".twrapper-message"));
                event.target.remove();
            }, 390, event);
        }, timeout, event);
    }

    const handleCloseClick = event => {
        addClassAnimation(event.target.parentElement);
        setTimeout(_ => {
            removeWrapper(event.target.closest(".twrapper-message"));
            event.target.parentElement.remove();
        }, 390, event);
    }

    wrapper.addEventListener("beginBuild", handleCloseAuto, { once: true });

    // started to render and dispatch event, the event removed when dipaching event
    wrapper.querySelector("button")?.addEventListener("click", handleCloseClick, { once: true });
    wrapper.dispatchEvent(eventBegin);
    return wrapper;
}

export default createMessage;