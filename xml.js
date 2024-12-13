function createXMLDocument() {
    
    const parser = new DOMParser();
    const serializer = new XMLSerializer();

    // Създаваме документ
    const xmlDoc = document.implementation.createDocument(null, "Автомобили", null);
    const root = xmlDoc.documentElement;

    // Добавяме елементи за автомобил
    const car = xmlDoc.createElement("Автомобил");
    car.setAttribute("ID", "C789");
    car.setAttribute("Stock", "8");

    const model = xmlDoc.createElement("Модел");
    model.textContent = "Траби 601";
    const brand = xmlDoc.createElement("Марка");
    brand.textContent = "Trabant";
    const year = xmlDoc.createElement("Година");
    year.textContent = "1989";
    const price = xmlDoc.createElement("Цена");
    price.textContent = "1200.00";
    const color = xmlDoc.createElement("Цвят");
    color.textContent = "Син";
    const engine = xmlDoc.createElement("ТипДвигател");
    engine.textContent = "Двутактов";

    car.appendChild(model);
    car.appendChild(brand);
    car.appendChild(year);
    car.appendChild(price);
    car.appendChild(color);
    car.appendChild(engine);
    root.appendChild(car);

    // Добавяме елементи за завод
    const factory = xmlDoc.createElement("Завод");
    factory.setAttribute("FactoryCode", "F003");

    const name = xmlDoc.createElement("Име");
    name.textContent = "Завод Балканкар";
    const location = xmlDoc.createElement("Локация");
    location.textContent = "Пловдив, България";
    const capacity = xmlDoc.createElement("Капацитет");
    capacity.textContent = "150000";
    const workers = xmlDoc.createElement("Работници");
    workers.textContent = "2000";

    factory.appendChild(name);
    factory.appendChild(location);
    factory.appendChild(capacity);
    factory.appendChild(workers);
    root.appendChild(factory);

    // Добавяме елементи за транспорт
    const transport = xmlDoc.createElement("Транспорт");
    transport.setAttribute("Type", "Rail");

    const method = xmlDoc.createElement("Метод");
    method.textContent = "Влак";
    const cost = xmlDoc.createElement("Разход");
    cost.textContent = "500.00";
    const duration = xmlDoc.createElement("Продължителност");
    duration.textContent = "2 дни";
    const company = xmlDoc.createElement("Компания");
    company.textContent = "БДЖ Карго";

    transport.appendChild(method);
    transport.appendChild(cost);
    transport.appendChild(duration);
    transport.appendChild(company);
    root.appendChild(transport);

    // Показване на резултата
    const output = serializer.serializeToString(xmlDoc);
    document.getElementById("generateXML").textContent = output;

    return xmlDoc;

}
