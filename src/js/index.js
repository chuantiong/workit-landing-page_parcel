import { featuresData, socialIconsData } from "./data";
import founderImg from "../assets/images/image-founder.webp";

const getFeatureHtml = (item) => {
    const { id, title, description } = item;
    const featureHtml = `
        <div class="feature">
            <div class="feature__number">${id}</div>
            <h3 class="feature__title">${title}</h3>
            <p class="feature__description">
                ${description}
            </p>
        </div>
    `;
    return featureHtml;
};

const renderFeatures = () => {
    const featuresContainer = document.getElementById("features-container");
    let featureIndex = 0;

    const renderNextFeature = () => {
        if (featureIndex < featuresData.length) {
            const item = featuresData[featureIndex];
            const featureHtml = getFeatureHtml(item);
            const featureElement = document.createElement("div");
            featureElement.innerHTML = featureHtml; 
            featuresContainer.appendChild(featureElement);
            featureElement.classList.add("add-fade-in");
            featureIndex++;

            setTimeout(renderNextFeature, featureIndex * 150);
        }
    };

    renderNextFeature();
};
renderFeatures();

const getFounderHtml = () => {
    return `
        <img class="image" src=${founderImg} alt="" />
        <div class="founder__texts-container">
            <h2 class="founder-title">Be the first to test</h2>
            <p class="founder-description">
                Hi, I'm Louis Graham, the founder of the company. Book a demo call
                with me to become a beta tester for our app and kickstart your
                company. Apply for access below and I’ll be in touch to schedule a
                call.
            </p>
            <div class="btn primary-btn">
                <a href="">Apply for access</a>
            </div>
            <img
                class="founder-bg-image"
                src="./assets/images/bg-pattern-3.svg"
                alt=""
            />
        </div>
    `
};

const getSocialMediaHtml = () => {
    let socialMediaHtml = "";
    
    socialIconsData.forEach(item => {
        const { image, text } = item;
        
        socialMediaHtml += `
        <img
        class="social-media-icon"
        src="${image}"
        alt="${text}"
        />
        `;
    });
    
    return socialMediaHtml;
};

const renderSocialMedia = () => {
    const socialMediaContainer = document.getElementById("social-media");
    socialMediaContainer.innerHTML = getSocialMediaHtml();
};
renderSocialMedia();

const renderFounderHtml = () => {
    document.getElementById("founder").innerHTML = getFounderHtml();
};
renderFounderHtml();