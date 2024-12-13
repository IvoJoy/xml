function createXMLDocument() {
    const documentImplementation = document.implementation;
    const doc = documentImplementation.createDocument(null, "Автомобили");

    // Коренен елемент с атрибути
    const root = doc.documentElement;
    root.setAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
    root.setAttribute("xsi:noNamespaceSchemaLocation", "AutomobiliSchema.xsd");

    // Създаване на елемента "Автомобил"
    const car = doc.createElement("Автомобил");
    car.setAttribute("ID", "A123");
    car.setAttribute("Stock", "10");

    const model = doc.createElement("Модел");
    model.textContent = "Лада Нива";
    car.appendChild(model);

    const brand = doc.createElement("Марка");
    brand.textContent = "ВАЗ";
    car.appendChild(brand);

    const year = doc.createElement("Година");
    year.textContent = "2020";
    car.appendChild(year);

    const price = doc.createElement("Цена");
    price.textContent = "15000.00";
    car.appendChild(price);

    const color = doc.createElement("Цвят");
    color.textContent = "Бял";
    car.appendChild(color);

    const engineType = doc.createElement("ТипДвигател");
    engineType.textContent = "Бензинов";
    car.appendChild(engineType);

    root.appendChild(car);

    // Създаване на елемента "Завод"
    const factory = doc.createElement("Завод");
    factory.setAttribute("FactoryCode", "Z001");

    const factoryName = doc.createElement("Име");
    factoryName.textContent = "Завод Волга";
    factory.appendChild(factoryName);

    const location = doc.createElement("Локация");
    location.textContent = "Нижний Новгород, Русия";
    factory.appendChild(location);

    const capacity = doc.createElement("Капацитет");
    capacity.textContent = "300000";
    factory.appendChild(capacity);

    const workers = doc.createElement("Работници");
    workers.textContent = "5000";
    factory.appendChild(workers);

    root.appendChild(factory);

    // Създаване на елемента "Транспорт"
    const transport = doc.createElement("Транспорт");
    transport.setAttribute("Type", "Road");

    const method = doc.createElement("Метод");
    method.textContent = "Камион";
    transport.appendChild(method);

    const cost = doc.createElement("Разход");
    cost.textContent = "2000.00";
    transport.appendChild(cost);

    const duration = doc.createElement("Продължителност");
    duration.textContent = "5 дни";
    transport.appendChild(duration);

    const company = doc.createElement("Компания");
    company.textContent = "Автотранспорт ООД";
    transport.appendChild(company);

    root.appendChild(transport);

    // Създаване на елемента "Дилър"
    const dealer = doc.createElement("Дилър");

    const dealerName = doc.createElement("Име");
    dealerName.textContent = "Автотрейд";
    dealer.appendChild(dealerName);

    const dealerLocation = doc.createElement("Локация");
    dealerLocation.textContent = "Варна";
    dealer.appendChild(dealerLocation);

    const contacts = doc.createElement("Контакти");
    contacts.textContent = "+359 888 987 654";
    dealer.appendChild(contacts);

    const email = doc.createElement("Email");
    email.textContent = "sales@autotrade.bg";
    dealer.appendChild(email);

    const workingHours = doc.createElement("РаботноВреме");
    workingHours.textContent = "08:00-17:00";
    dealer.appendChild(workingHours);

    root.appendChild(dealer);

    return doc;
}
