import axios from "axios";

export const api = axios.create({
    baseURL: "http://api.themoviedb.org/3/",
});


export async function FetchData(link) {
    const { data } = await api.get(
        link,
        {
            headers: {
                Authorization: `Bearer ${process.env.API_TOKEN}`,
            },
        }
    );

    return data;
};
