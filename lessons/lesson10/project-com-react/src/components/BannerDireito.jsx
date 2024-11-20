import React from "react"

export const BannerDireito = () => {
    return (
        <div
        id="OndeComprar"
        className="flex flex-col items-center xl:flex-row m-auto bg-verde2 roundeed-xl text-branco text-center xl:text-left p-6 w-5/6 min-h-[450px] md:w-5/6 xl:w-4/6 2xl:w-3/6 2xl:mt-8"
        >
            <div>
                <img 
                src="./red_cross2.webp" 
                alt="Baner lateral" 
                className="max-h-[700px] p-0 xl:pr-10"/>
            </div>

            <div className="flex flex-col p-6 m-auto">
                <h1 className="text-3xl sm:text-5xl my-6">
                    Uma história que irá atravessar um século.
                </h1>
                <p className="text-xl mb-12">
                    Reserve sua cópia agora e faça parte dessa jornada
                </p>
                <div className="flex flex-col items-center xl:m-0 sm:flex-row m-auto gap-4">
                    <a href="https://www.amazon.com.br/Relatos-um-Vampiro-na-Guerra-ebook/dp/B0D1LC8STG/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3G5NNER48W4QE&dib=eyJ2IjoiMSJ9.O6NOoZJbXXRT2r5PnwTXdvzD-u0bQh4XZcjm-GrRXJEPW1PoItxUb5P2wmlY7dVNv5K_86IH2A1xXLXq7HKwm-eamNukd7CvGOSg1s4qIWQrgqGnth3KqW6wPR57U6PAYgbrxwfoqdjiX-K1oGNi_z7NKkrYr26cslvbP9MZF6ZVbcOtZjzJFkVArOEUxz0bC_1BwJZ9bvbKuEAZvQX94fw6HSlNuEwiRVxB76h71O4.3mZeE0Jeswmdkbd5fKP6dn0hC8vy40EIHgY0tgJCO9Q&dib_tag=se&keywords=Relatos+de+um+Vampiro+na+Guerra&qid=1714523437&s=books&sprefix=%2Cstripbooks%2C216&sr=1-1">
                            <button>
                                AMAZON - EBOOK
                            </button>
                        </a>

                        <a href="https://www.amazon.com.br/dp/6500988353?ref=myi_title_dp">
                            <button>
                                AMAZON - CAPA DURA
                            </button>
                        </a>

                    <a href="https://shopee.com.br/product/332636394/18499247830/">
                        <button>
                            SHOPPE
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};