import {url} from "../utils/constants.js";

export async function getVideo() {
    const rest = await fetch(url);
    const data = await rest.json();

    return data.items
}
