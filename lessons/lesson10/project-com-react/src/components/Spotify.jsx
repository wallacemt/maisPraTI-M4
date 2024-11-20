import React from "react";

export const Spotify = () => {
    return (
        <div className="flex flex-col pt-8 md:p-12 items-center justify-center m-auto bg-verde2 text-branco w-5/6 md:w-4/5 rounded-2xl h-fit xl:min-w-[1050px] 2xl:w-2/5">

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-0 sm:mb-8">

                <img
                    className="w-fit"
                    src="./cruz-03.svg"
                    alt="Cruz"
                />

                <h1 className="text-4xl font-bold sm:text-5xl">
                    Entre no Mood
                </h1>

                <img
                    className="md:w-fit w-0"
                    src="./cruz-03.svg"
                    alt="Cruz"
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 xl:flex-row m-auto pb-3">

                <iframe
                    className="rounded-2xl w-[300px] h-[352px]"
                    src="https://open.spotify.com/embed/playlist/1rIllGWmBAdBDtMbsom9wU?utm_source=generator"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                >
                </iframe>

                <iframe
                    className="rounded-2xl w-[300px] h-[352px]"
                    src="https://open.spotify.com/embed/playlist/3RXP1GHeziPq7uXIJU1iRr?utm_source=generator"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                >
                </iframe>

                <iframe
                    className="rounded-2xl w-[300px] h-[352px]"
                    src="https://open.spotify.com/embed/playlist/5ZyTCVn4qWo0U8hSAEEGUB?utm_source=generator"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                >
                </iframe>
            </div>
        </div>
    );
};
