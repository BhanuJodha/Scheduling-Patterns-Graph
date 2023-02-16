import data from "../utils/data";

export const fetchData = async () => {
    // try {
    //     const response = await fetch("https://www.jsonkeeper.com/b/P2VO");
    //     const json = await response.json();
    //     return json;

    // } catch (err) {
    //     console.error(err.message);
    // }

    // because there is no-cors origin allowed at server site
    return data;
}