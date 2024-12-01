
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Othercontext } from "./Otherprovider";

const Search = () => {
    const {searchos}=useContext(Othercontext)
    const [searcho,setsearcho]=searchos
    const [search, setSearch] = useState(""); // Corrected to camelCase
    const [datas, setDatas] = useState([]);

    const fetchdata = async () => {
        try {
            const res = await axios.get("http://www.omdbapi.com/", {
                params: {
                    s: search,
                    apikey: "84a91855",
                },
            });

            if (res.data.Response === "True") {
                setDatas(res.data.Search);
            } else {
                setDatas([]); // Clear the list if no results are found
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (search.trim()) fetchdata(); // Prevent empty or whitespace search
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [search]);

    return (
        <div className={`searchmain ${searcho&&"searchopen"}`}>
            <div className="searchbody">
                <div className="searchin">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="searchlist">
                    {datas.length > 0 ? (
                        datas.map((val, i) => (
                            <span className="movies" key={i}>
                                <div className="mded">
                                    <p>{val?.Title || "No Title Available"}</p>
                                    <p>{val?.Year || "N/A"}</p>
                                </div>
                                <img
                                className="searchi"
                                    src={val?.Poster !== "N/A" ? val.Poster : "placeholder.jpg"}
                                    alt="Movie Poster"
                                />
                            </span>
                        ))
                    ) : (
                        search && <p style={{marginLeft:"15px"}}>No results found</p> // Show message if search is not empty
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
