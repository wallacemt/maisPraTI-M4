const conteudo = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem",
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering",
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)",
    ],
];

const btnWhyReact = document.getElementById("btn-react");
const btnCoreFeature = document.getElementById("btn-features");
const btnResources = document.getElementById("btn-resources");
const tabconteudo = document.getElementById("tab-content");

function displayconteudo(items) {
    let listconteudo = "";
    for (const item of items) {
        listconteudo += `<li>${item}</li>`;
    }
    const list = document.createElement("ul");
    tabconteudo.innerHTML = ""; 
    list.innerHTML = listconteudo; 
    tabconteudo.append(list);
}

function highlightButton(btn) {
    btnWhyReact.className = "";
    btnCoreFeature.className = "";
    btnResources.className = "";
    btn.className = "active"; 
}

function handleClick(event) {
    const btnId = event.target.id;
    highlightButton(event.target);
    if (btnId === "btn-react") {
        displayconteudo(conteudo[0]);
    } else if (btnId === "btn-features") {
        displayconteudo(conteudo[1]);
    } else {
        displayconteudo(conteudo[2]);
    }
}

displayconteudo(conteudo[0]); 

btnWhyReact.addEventListener("click", handleClick);
btnCoreFeature.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);
