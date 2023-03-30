import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);




    //data filling functions
    async function fetchBlogPosts(page = 1) {

        let url = 'https://codehelp-apis.vercel.app/api/get-blogs?page=' + page;

        setLoading(true);
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
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
        setPage(page);
        fetchBlogPosts(page);
    }

    //required data
    const finalData = {
        loading, setLoading, posts, setPosts, page, setPage, totalPage, setTotalPage, fetchBlogPosts, handlePageChange
    };

    return <AppContext.Provider value={finalData} >
        {children}
    </AppContext.Provider>
}
