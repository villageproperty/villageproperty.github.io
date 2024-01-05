//name, owner, desc, price
const properties = [
    ["Large Brick Building","Harrison","Large, unfurnished brick building overlooking the village on highland. Built on the outskirts of the village, away from all the noise and action, with plenty of room inside.","4.5"],
    ["Calcite House","Harrison","Semi-furnished wooden/calcite home with a much larger interior than its exterior implies and a large loft area. Spacious horse parking also included.","4"],
    ["Wooden Farmhut","Harrison","Unfurnished, small wooden farmhut overlooking the village. Decorative wheat farm and sheltered horse parking included alongside cosy interior space.","4"],
    ["Middle Eastern Shelter","Harrison","Two-floor, unfurnished sandstone build with Middle Eastern inspired architecture and design.","3.5"],
    ["Oak Log Home", "Harrison", "Two-floor, unfurnished large wooden home with wooden beam exterior and spacious staircased balcony with upper floor entrance. Built in the centre of the Village, on historical previous clinic site, with horse parking nextdoor.","5"],
]

for (property of properties) {
    create(property[0], property[1], property[2], property[3]);
}

function create(name, owner, desc, price) {
    let propertyContainer = document.createElement("div");
    propertyContainer.classList.add("property-container");

    //image
    let imageStr = `images/${name.replace(/\s/g, '').toLowerCase()}.png`;
    console.log(imageStr);
    let image = document.createElement("img");
    image.src = imageStr;
    image.classList.add("property-image");
    propertyContainer.appendChild(image);


    let detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    //name
    let nameElement = document.createElement("div");
    nameElement.classList.add("small-detail");
    let nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
    nameElement.appendChild(nameHeading)
    detailsContainer.appendChild(nameElement);

    //owner
    let ownerElement = document.createElement("div");
    ownerElement.classList.add("small-detail");
    let ownerHeading = document.createElement("h3");
    ownerHeading.textContent = `Owner: ${owner}`;
    ownerElement.appendChild(ownerHeading);
    detailsContainer.appendChild(ownerElement);

    //desc
    let descElement = document.createElement("div");
    descElement.classList.add("big-detail");
    let descPara = document.createElement("p");
    descPara.textContent = desc;
    descElement.appendChild(descPara)
    detailsContainer.appendChild(descElement);

    //price
    let priceElement = document.createElement("div");
    priceElement.classList.add("small-detail");
    let emerald = document.createElement("img");
    emerald.src = "images/emerald.webp";
    emerald.classList.add("emerald");
    priceElement.appendChild(emerald);
    pricePara = document.createElement("p");
    pricePara.innerHTML = `64 x ${price.bold()}`;
    priceElement.appendChild(pricePara);
    detailsContainer.appendChild(priceElement);

    propertyContainer.appendChild(detailsContainer);
    document.body.appendChild(propertyContainer);
}