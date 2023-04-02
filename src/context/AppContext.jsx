import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const nagivate = useNavigate();



    //data filling functions
    const baseUrl = 'https://codehelp-apis.vercel.app/api/get-blogs?page=';

    async function fetchBlogPosts(page = 1, tag = null, category = null) {

        let url = `${baseUrl}${page}`
        if (tag)
            url += `&tag=${tag}`;
        if (category)
            url += `&category=${category}`;


        setLoading(true);
        try {
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            console.log(url)
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
        }
        catch (err) {
            console.log(err);
            setPage(1);
            setPosts([]);
            setTotalPage(null);
        }

        setLoading(false);
    }


    function handlePageChange(page) {
        nagivate({ search: `?page=${page}` });
        setPage(page);
    }


    //required data
    const finalData = {
        loading, setLoading, posts, setPosts, page, setPage, totalPage, setTotalPage, fetchBlogPosts, handlePageChange, baseUrl
    };

    return <AppContext.Provider value={finalData} >
        {children}
    </AppContext.Provider>
}
